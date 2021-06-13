<div id="step_2" class="step_container">
        <div class="container mt-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10 col-lg-10">
                        <div class="border">
                            <div class="question bg-white p-3 border-bottom">
                                
                                <div class="d-flex flex-row justify-content-between align-items-center mcq">
                                    <h4 class ="title">Question <span id="currentQuestion">0</span> sur <span id="totalQuestion">0</span></h4><!-- <span>(5 of 20)</span> -->
                                    <div id="loading" class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                                </div>
                            </div>
                            <div class="question bg-white p-3 border-bottom">
                                <div class="d-flex flex-row align-items-center question-title">
                                    <h3 class="text-danger">Q.</h3>
                                    <h5 id ="questionContant" class="mt-1 ml-2">.....................</h5>
                                </div>
                                <div id="user_responce">
                                    <div class="ans ml-2">
                                        <label class="radio"> <input type="radio" name="quiz" value="Indonesia"> <span>Oui</span>
                                        </label>
                                    </div>
                                    <div class="ans ml-2">
                                        <label class="radio"> <input type="radio" name="quiz" value="Russia"> <span>Non</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white border-bottom">
                                <button id="previous" class="btn btn-primary d-flex align-items-center btn-danger" type="button">
                                    <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button>
                                <button id="next"  class="btn btn-primary border-success align-items-center btn-success" type="button">
                                    Next<i class="fa fa-angle-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="container mt-5 variableInfo">
            <div class="d-flex justify-content-center row">
                <div class="col-md-10 col-lg-10">
                    <div class="border">
                        <div class="question bg-white p-3 border-bottom ths">
                            
                            <!-- variable info -->
                            <div class="row">
                                <div class="col-md-4 col-lg-4">
                                    <div class="variableInfoIcon">
                                        <i class="fa fa-info"></i>
                                    </div>
                                    <img id="var_illustation" src="./images/anemia.png" alt="" class="img-thumbnail">
                                </div>
                                <div class="col-md-8 col-lg-8 variableInfodetaill">
                                    <h3 class="title" id="varName">.....</h3>
                                    <p id="varDesc" class="text-muted h6 variableInfo_desc">
                                        .......
                                    </p>
                                </div>
                            </div>


                        <!-- ================================= -->

                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>