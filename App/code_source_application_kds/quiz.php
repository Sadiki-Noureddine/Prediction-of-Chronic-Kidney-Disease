<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
    
    <link rel="stylesheet" href="styles/theme.css">

    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>

    <script src="js/my_script.js"></script>
</head>
<body>
    <?php include "./component/nav.php" ?>
    <!-- <div class="container mt-5 appBody">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10 col-lg-10">
                <div class="border">
                    <div class="question bg-white p-3 border-bottom">
                        <ul class ="stepper">
                        <li class="step active" data-target="#step_1">
                            <span class="stepIndex rounded-circle">1</span> information
                        </li>
                        <li class="step" data-target="#step_2">
                            <span class="stepIndex rounded-circle">2</span> Questionnaire
                        </li>
                        <li class="step" data-target="#step_3">
                            <span class="stepIndex rounded-circle">3</span> Résultats
                        </li>
                        </ul>
                    </div>
                </div>  
            </div>
        </div>
    </div> -->
    <!-- ===================================== step1 -->
    <?php include "./steps/step1.php"?>
    <!-- ===================================== step2 -->
    <?php include "./steps/step2.php"?>
    <!-- ===================================== step3 -->
    <?php include "./steps/step3.php"?>
    <!-- ===================================== step3 -->
    <?php include "./footer/footer.php"?>

</body>
</html>

