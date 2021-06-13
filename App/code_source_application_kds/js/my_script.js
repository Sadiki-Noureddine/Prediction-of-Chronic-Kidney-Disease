
$(document).ready(function(){
    apiUrl = "https://projectdataminingbiomscsapp.herokuapp.com/api/kidney_disease";

    quiz_responce={
        "age":"",
        "blood_pressure":"",
        "sugar":"",
        "red_blood_cells":"",
        "pus_cell":"",
        "pus_cell_clumps":"",
        "bacteria":"",
        "blood_glucose_random":"",
        "blood_urea":"",
        "serum_creatinine":"",
        "sodium":"",
        "potassium":"",
        "white_blood_cell_count":"",
        "red_blood_cell_count":"",
        "hypertension":"",
        "diabetes_mellitus":"",
        "coronary_artery_disease":"",
        "appetite":"",
        "pedal_edema":"",
        "anemia":"",
        "specific_gravity":"",
        "albumin":"",
    };
    loading = $("#loading");

    user_responce = $("#user_responce");
    categoriel='<div class="ans ml-2"><label class="radio"> <input type="radio" name="quiz" value="Indonesia"> <span>Oui</span></label></div>';
    descret='<div class="ans ml-2"><input type="text" class="form-control" id="userInput" placeholder="user"></div>';


    var currentQuestion=$("#currentQuestion");
    var totalQuestion=$("#totalQuestion");
    var varName = $("#varName"); 
    var varDesc = $("#varDesc");
    var var_illustation = $("#var_illustation");

    question=[];
        fetch("./questions/quiz.json")
        .then((response) => response.json())
        .then((json) => {question =json.questions;totalQuestion.text(question.length);
            loading[0].style.setProperty("display","none");
            if(question.length>0){
                changeQuestion(0);
            }
        })
        .catch((error) => console.error(error));


    
    
    var questionContant = $("#questionContant");

    var currentQst=0;
    
    $("#previous").click(function(){
        $("#next").html('Next<i class="fa fa-angle-right ml-2">');
        if(currentQst>0){
            currentQst-=1;
        }
        else{
            handelPreviousStep();
        }
        // if(currentQst==0){
        //     $(this).html('<i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button>');
        // }
        // else{
        //     $(this).html('<i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button>');
        // }
        changeQuestion(currentQst);
    });
    $("#next").click(function(){
        if ($("form")[0].checkValidity())
        //if(true)
        {
            rep=$("input[name='quiz_qr']");
            var val =rep.attr('type')=='number'?rep.val():$("input:checked").val();
            // quiz_responce[currentQst+1]=val;
            current_feature=question[currentQst].feature;
            quiz_responce[current_feature]=val
            if(currentQst<question.length-1){
                $(this).html('Next<i class="fa fa-angle-right ml-2">');
                $("#previous").html('<i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button>');
                currentQst+=1;
                if(currentQst==question.length-1){
                    $(this).html('Résultat<i class="fa fa-angle-right ml-2">');
                }
                
            }
            else{
                    handelNextStep();
                    sendAndPredict();
                }
            
            changeQuestion(currentQst);
        }
        else{
            $(".invalid-feedback")[0].style.setProperty("display",'inline');
        }
    });

    const changeQuestion = (id)=>{
        
        currentQuestion.text(id+1);
        questionContant.text(question[id].question_content);
        varName.text(question[id].desc.var_name);
        varDesc.text(question[id].desc.var_info);
        var_illustation.attr("src",question[id].desc.var_illustration); 

        if(question[id].question_type=="discrete")
        {
            // descret=`<div class="ans ml-2"><div class="input-group"><input name="quiz_qr" type="number" min='${question[id].desc.min}' max='${question[id].desc.max}' class="form-control" id="userInput" placeholder="${question[id].desc.var_name}"><div class="input-group-append"><span class="input-group-text" id="basic-addon2">${question[id].modalite[0]}</span></div></div></div>`;
            descret = `<div class="ans ml-2"><form class='validation' novalidate><div class="input-group"><input name="quiz_qr" type="number"  min='${question[id].desc.min}' max='${question[id].desc.max}' step='0.01' class="form-control" id="userInput" placeholder="${question[id].desc.var_name}" required><div class="input-group-append"><span class="input-group-text" id="basic-addon2">${question[id].modalite[0]}</span></div></div></form><div class="invalid-feedback">Merci de resaisir une valeur valide</div></div>`;
            user_responce.html(descret);
            $("input[name='quiz_qr']").eq(0).focus();
        }
        else if (question[id].question_type=="categoriale"){

            modalites=question[id].modalite;
            modalitesHTML='<form class="validation" novalidate>';
            for(i=0;i<modalites.length;i++)
            {
                // modalitesHTML+=`<div class="ans ml-2"><label class="radio"> <input  type="radio" name="quiz_qr" value="${i}"> <span>${modalites[i]}</span></label></div>`;
                modalitesHTML+=`<div class="ans ml-2"><label class="radio"> <input  type="radio" name="quiz_qr" value="${i}" required> <span>${modalites[i]}</span></label></div>`;
            }
            modalitesHTML += '</form><div class="invalid-feedback">Merci de selectionner une valeur.</div>';
            user_responce.html(modalitesHTML);
        }


    }

    $("li.step").click(function(){
        currentStp=$("li.active");
        currentStp.removeClass("active");
        $(this).addClass("active");

        current_id=currentStp.attr("data-target");
        next_id=$(this).attr("data-target");

        $(current_id).removeClass("current")
        $(next_id).addClass("current")
        
    });
    $("#go").click(function(){
        handelNextStep();
    });


    handelNextStep=function(){
        $(document).scrollTop(0);
        currentStp=$("li.active");
        currentStp.removeClass("active");
        nextStp=currentStp.next("li.step");
        nextStp.addClass("active");
        current_id=currentStp.attr("data-target");
        next_id=nextStp.attr("data-target");
        $(current_id).removeClass("current");
        $(next_id).addClass("current");
    }
    handelPreviousStep=function(){
        $(document).scrollTop(0);
        currentStp=$("li.active");
        currentStp.removeClass("active");
        prvStp=currentStp.prev("li.step")
        prvStp.addClass("active");
        current_id=currentStp.attr("data-target");
        prv_id=prvStp.attr("data-target");
        $(current_id).removeClass("current");
        $(prv_id).addClass("current");
    }
    sendAndPredict=function(){
        $("#resultLoading").parent()[0].style.setProperty("display","inline");
        $("#onResponceReady")[0].style.setProperty("display","none");

        fetch(apiUrl,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(quiz_responce)
          })
        .then((response) => response.json())
        .then((json) => {
            $("#resultLoading").parent()[0].style.setProperty("display","none");
            $("#onResponceReady")[0].style.setProperty("display","inline");
            
            responce =json;
            decision = responce.result==1?
            "Votre situation peut relever d’une infection rénale chronique . Vos symptômes indiquent qu'un avis médical est nécessaire.":
            "Votre état ne semble pas préoccupant ou ne relève probablement pas une insuffisance rénale chronique .";
            decision_type = responce.result==1?'alert-danger':'alert-success'
            console.log(decision);
            result_html=`<div class="alert ${decision_type}" role="alert"><h4 class="alert-heading">Décision</h4><p class="text-muted h6 variableInfo_desc">${decision}</p></div>`
            $("#decision").html(result_html);
            console.log(responce);
        })
        .catch((error) => console.error(error));
    }


    $('body').on('keypress',"input[name='quiz_qr']",function(event) {
        if(event.key=="Enter"){
            $("#next").click();
        }
      });
    
      $("body").on("keyup","form",function(){
        $(".invalid-feedback")[0].style.setProperty("display",'none');
      })
});