var demoApp = angular.module('demoApp', ['ngAnimate', 'angular-steps']);

demoApp.controller('DemoCtrl', ['$scope', 'StepsService', function($scope, StepsService) {
        $scope.students = [];
        $scope.countDown = 60;
        $scope.countDown1 = 60;
        $scope.countDown2 = 30;
        $scope.countDown3 = 30;
        $scope.countDown4 = 30;
        $scope.countDown5 = 60;
        $scope.countDown6 = 60;
        $scope.countDown7 = 30;
        $scope.countDown8 = 30;
        $scope.countDown9 = 60;
        $scope.countDown10 = 60; 
        $scope.countDown11 = 30;
        $scope.countDown12 = 30;
        $scope.countDown13 = 30;
        $scope.countDown14 = 30;
        $scope.countDown15 = 30;

        var formData = new FormData();

        //$scope.tell1="hi";
        //console.log($scope.tell1)
        $scope.gogo = function(to) {
            //alert("in here")
            StepsService.steps().goTo(to);
            console.log(to);
            console.log(StepsService.steps())
        };
        $scope.gotoLast = function() {
            $scope.stepName = 'last';
        };
        $scope.finished = function() {
            //alert('Aaaand we are done!');
            swal("Good job!", "You completed the test! You can now close the browser", "success").then(function() {
                window.close();
            });;

        };
       

        $scope.fullpage = function() {
            var timer = setInterval(function() {
               
                $scope.countDown--;
                $scope.$apply();
                if ($scope.countDown == 0) {
                    document.getElementById('count_1').style.display = 'none';
                    document.getElementById('tell').disabled = true;
                }
                //console.log($scope.countDown);
            }, 1000);

            console.log("timer" + timer)

            var elem = document.documentElement;
            var name = document.getElementById('your_name').value;
            var email = document.getElementById('your_email').value;
            $scope.info = { "name": name, "email": email };
            formData.append("name", name);
            formData.append("email", email);
            $scope.students.push($scope.info);
            /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();

            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {

                    document.onkeydown = $scope.goFullscreen();
                    elem.webkitRequestFullscreen();
                    //setTimeout(fullscreen,1000);

                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            $scope.goFullscreen = function() {
                /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            }

        }
        $scope.fetch = function() {
            var timer1 = setInterval(function() {
                $scope.countDown1--;
                $scope.$apply();
                if ($scope.countDown1 === 0) {
                    //alert("here")
                    document.getElementById('count_2').style.display = 'none';
                    document.getElementById('cook').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            
            var tell = document.getElementById('tell').value;
            var about = document.getElementById('about').textContent;
            $scope.tell = tell;
            $scope.about = about ;
           
            //console.log($scope.tell)
            //console.log( $scope.tell1)
            $scope.concat();
        }
        $scope.concat = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q1 = {[$scope.about]:$scope.tell};
            // formData.append( $scope.tell);
            $scope.students.push($scope.q1);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
            console.log("formdata=" + formData);
        }
        $scope.fetch1 = function() {
            var timer2 = setInterval(function() {
                $
                $scope.countDown2--;
                $scope.$apply();
                if ($scope.countDown2 === 0) {
                    //alert("here")
                    document.getElementById('count_3').style.display = 'none';
                    document.getElementById('asynch').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }

            console.log($scope.cook)

            var cookie = document.getElementById('cook').value;
            var ques1 =  document.getElementById('ques1').textContent;


            $scope.cook = cookie;
            $scope.ques1 =ques1;
            //console.log( $scope.cook)

            $scope.concat1();
        }
        $scope.concat1 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q2 = {[$scope.ques1]:$scope.cook};
            $scope.students.push($scope.q2);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch2 = function() {
            var timer3 = setInterval(function() {
                $
                $scope.countDown3--;
                $scope.$apply();
                if ($scope.countDown3 === 0) {
                    //alert("here")
                    document.getElementById('count_4').style.display = 'none';
                    document.getElementById('push').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var cookie = document.getElementById('asynch').value;
            var ques2 = document.getElementById('ques2').textContent;

            $scope.asynch = cookie;
            $scope.ques2 = ques2;
            //console.log( $scope.cook)

            $scope.concat2();
        }
        $scope.concat2 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q3 = {[$scope.ques2]: $scope.asynch };
            $scope.students.push($scope.q3);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch4 = function() {
            var timer4 = setInterval(function() {
                $
                $scope.countDown4--;
                $scope.$apply();
                if ($scope.countDown4 === 0) {
                    //alert("here")
                    document.getElementById('count_5').style.display = 'none';
                    document.getElementById('typeof').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var push = document.getElementById('push').value;
            var ques3 = document.getElementById('ques3').textContent;

            $scope.push = push;
            $scope.ques3=ques3;
            //console.log( $scope.cook)

            $scope.concat4();
        }
        $scope.concat4 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q4 = {[$scope.ques3]: $scope.push };
            $scope.students.push($scope.q4);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch5 = function() {
            var timer5 = setInterval(function() {
                $
                $scope.countDown5--;
                $scope.$apply();
                if ($scope.countDown5=== 0) {
                    //alert("here")
                    document.getElementById('count_6').style.display = 'none';
                    document.getElementById('binding').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var type = document.getElementById('typeof').value;
            var ques4 = document.getElementById('ques4').textContent;

            $scope.type = type;
            $scope.ques4=ques4;

            //console.log( $scope.cook)

            $scope.concat5();
        }
        $scope.concat5 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q5 = {[$scope.ques4]: $scope.type };
            $scope.students.push($scope.q5);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch6 = function() {
            var timer6 = setInterval(function() {
                $
                $scope.countDown6--;
                $scope.$apply();
                if ($scope.countDown6 === 0) {
                    //alert("here")
                    document.getElementById('count_7').style.display = 'none';
                    document.getElementById('hscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var binding = document.getElementById('binding').value;
            var ques5 = document.getElementById('ques5').textContent;

            $scope.binding = binding;
            $scope.ques5= ques5;
            //console.log( $scope.cook)

            $scope.concat6();
        }
        $scope.concat6 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q6 = { [$scope.ques5]: $scope.binding };
            $scope.students.push($scope.q6);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch3 = function() {
            var timer7 = setInterval(function() {
                $
                $scope.countDown7--;
                $scope.$apply();
                if ($scope.countDown7 === 0) {
                    //alert("here")
                    document.getElementById('count_8').style.display = 'none';
                    document.getElementById('iscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var hscope = document.getElementById('hscope').value;
            var ques6 = document.getElementById('ques6').textContent;

            $scope.hscope = hscope;
            $scope.ques6 = ques6;
            //console.log( $scope.cook)

            $scope.concat7();
        }
        $scope.concat7 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q12 = { [$scope.ques6]: $scope.hscope };
            $scope.students.push($scope.q12);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch7 = function() {
            var timer8 = setInterval(function() {
                $
                $scope.countDown8--;
                $scope.$apply();
                if ($scope.countDown8 === 0) {
                    //alert("here")
                    document.getElementById('count_9').style.display = 'none';
                    document.getElementById('jscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var iscope = document.getElementById('iscope').value;
            var ques7 = document.getElementById('ques7').textContent;

            $scope.iscope = iscope;
            $scope.ques7 = ques7;
            //console.log( $scope.cook)

            $scope.concat8();
        }
        $scope.concat8 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q13 = {[$scope.ques7]: $scope.iscope };
            $scope.students.push($scope.q13);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch8 = function() {
            var timer9 = setInterval(function() {
                $
                $scope.countDown9--;
                $scope.$apply();
                if ($scope.countDown9 === 0) {
                    //alert("here")
                    document.getElementById('count_10').style.display = 'none';
                    document.getElementById('kscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var jscope = document.getElementById('jscope').value;
            var ques8 = document.getElementById('ques8').textContent;

            $scope.jscope = jscope;
            $scope.ques8 = ques8;
            //console.log( $scope.cook)

            $scope.concat9();
        }
        $scope.concat9 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q14 = {[$scope.ques8]: $scope.jscope };
            $scope.students.push($scope.q14);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch9 = function() {
            var timer10 = setInterval(function() {
                $
                $scope.countDown10--;
                $scope.$apply();
                if ($scope.countDown10 === 0) {
                    //alert("here")
                    document.getElementById('count_11').style.display = 'none';
                    document.getElementById('lscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var kscope = document.getElementById('kscope').value;
            var ques9 = document.getElementById('ques9').textContent;

            $scope.kscope = kscope;
            $scope.ques9 = ques9;
            //console.log( $scope.cook)

            $scope.concat10();
        }
        $scope.concat10 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q15 = {[$scope.ques9]: $scope.kscope };
            $scope.students.push($scope.q15);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch10 = function() {
            var timer11= setInterval(function() {
                $
                $scope.countDown11--;
                $scope.$apply();
                if ($scope.countDown11 === 0) {
                    //alert("here")
                    document.getElementById('count_12').style.display = 'none';
                    document.getElementById('mscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var lscope = document.getElementById('lscope').value;
            var ques10 = document.getElementById('ques10').textContent;

            $scope.lscope = lscope;
            $scope.ques10 = ques10;
            //console.log( $scope.cook)

            $scope.concat11();
        }
        $scope.concat11 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q16 = {[$scope.ques10]: $scope.lscope };
            $scope.students.push($scope.q16);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch11 = function() {
            var timer12 = setInterval(function() {
                $
                $scope.countDown12--;
                $scope.$apply();
                if ($scope.countDown12 === 0) {
                    //alert("here")
                    document.getElementById('count_13').style.display = 'none';
                    document.getElementById('nscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var mscope = document.getElementById('mscope').value;
            var ques11 = document.getElementById('ques11').textContent;

            $scope.mscope = mscope;
            $scope.ques11 = ques11;
            //console.log( $scope.cook)

            $scope.concat12();
        }
        $scope.concat12 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q17 = {[$scope.ques11]: $scope.mscope };
            $scope.students.push($scope.q17);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch12 = function() {
            var timer13 = setInterval(function() {
                $
                $scope.countDown13--;
                $scope.$apply();
                if ($scope.countDown13 === 0) {
                    //alert("here")
                    document.getElementById('count_14').style.display = 'none';
                    document.getElementById('oscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var nscope = document.getElementById('nscope').value;
            var ques12 = document.getElementById('ques12').textContent;

            $scope.nscope = nscope;
            $scope.ques12 = ques12;
            //console.log( $scope.cook)

            $scope.concat13();
        }
        $scope.concat13 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q18 = {[$scope.ques12]: $scope.nscope };
            $scope.students.push($scope.q18);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch13 = function() {
            var timer14 = setInterval(function() {
                $
                $scope.countDown14--;
                $scope.$apply();
                if ($scope.countDown14 === 0) {
                    //alert("here")
                    document.getElementById('count_15').style.display = 'none';
                    document.getElementById('pscope').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var oscope = document.getElementById('oscope').value;
            var ques13 = document.getElementById('ques13').textContent;

            $scope.oscope = oscope;
            $scope.ques13 = ques13;
            //console.log( $scope.cook)

            $scope.concat14();
        }
        $scope.concat14 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q19 = { [$scope.ques13]: $scope.oscope };
            $scope.students.push($scope.q19);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch14 = function() {
            var timer15 = setInterval(function() {
                
                $scope.countDown15--;
                $scope.$apply();
                if ($scope.countDown15 === 0) {
                    //alert("here")
                    document.getElementById('count_17').style.display = 'none';
                    document.getElementById('callback').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var pscope = document.getElementById('pscope').value;
            var ques14 = document.getElementById('ques14').textContent;

            $scope.pscope = pscope;
            $scope.ques14 = ques14;
            //console.log( $scope.cook)

            $scope.concat15();
        }
        $scope.concat15 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q20 = { [$scope.ques14]: $scope.pscope };
            $scope.students.push($scope.q20);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch15 = function() {

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var cookie = document.getElementById('callback').value;
            var ques15 = document.getElementById('ques15').textContent;

            $scope.callback = cookie;
            $scope.ques15 = ques15;
            //console.log( $scope.cook)

            $scope.concat3();
        }
        $scope.concat3 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q7 = { [$scope.ques15]: $scope.callback };
            $scope.students.push($scope.q7);

            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
            var json = JSON.stringify(stored);
            [json].map((a, i) => {

                if ([json].indexOf(a) === i) {
                    console.log(a)
                }
            })
            aftersubmit();
        }

        function aftersubmit() {
            var formdata = document.getElementById('test_form');
            console.log(formdata);
            var json = JSON.stringify($scope.students);

            formdata = json;

            //var json = JSON.stringify($scope.students);
            var json1 = JSON.parse(JSON.stringify($scope.students[0]));
            console.log(json1)
                //console.log(json)

            //Convert JSON string to BLOB.
            //send();
            event.preventDefault(); // prevent reload

            // formData.append('service_id', 'mohitsri9@gmail.com');
            formData.append('template_id', 'template_6c45wkf');
            formData.append('user_id', 'user_g6wheXudV4emIs9n9wTPb');

            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function() {
                alert('Your mail is sent!');
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
            });

            json = [json];
            var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });

            //Check the Browser.
            var isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob1, "Customers.txt");
            } else {
                var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob1);
                var a = document.createElement("a");
                a.download = "Customers.txt";
                a.href = link;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            lastscreen();
        }

        function lastscreen() {
            var last_div = document.createElement('div');
            var h1 = document.createElement('h1');
            h1.textContent = "Thank You for completing the test";
            last_div.appendChild(h1);
        }
    }]

);