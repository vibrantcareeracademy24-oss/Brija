/* =====================================================
   COOKY STUDY TIME
   STANDARD 3
   ENVIRONMENT WORKSHEET
   ===================================================== */

console.log("Cooky Study Time - script.js loaded successfully.");



/* =====================================================
   CORRECT ANSWERS
   ===================================================== */

const answers = {

    /* MCQ */

    q1: "B",
    q2: "C",
    q3: "A",
    q4: "D",
    q5: "C",
    q6: "D",
    q7: "D",
    q8: "D",
    q9: "C",
    q10: "B",
    q11: "D",
    q12: "C",
    q13: "A",
    q14: "A",


    /* FILL IN THE BLANKS */

    q15: [
        "પક્ષી",
        "પક્ષીઓને"
    ],

    q16: [
        "ઉંદર",
        "ઉંદરો"
    ],

    q17: [
        "સસલું",
        "સસલો"
    ],

    q18: [
        "વાંદરો"
    ],

    q19: [
        "કાંગારું",
        "કાંગારુ"
    ],

    q20: [
        "સૂંઢ",
        "સુંઢ"
    ],

    q21: [
        "કરોળિયો",
        "કરોળિયા"
    ],

    q22: [
        "ઉધઈનો રાફડો",
        "રાફડો"
    ],

    q23: [
        "ઊંટ",
        "ઉંટ"
    ],

    q24: [
        "બગલો"
    ],


    /* TRUE / FALSE */

    q25: "true",
    q26: "false",
    q27: "false",
    q28: "true",
    q29: "true",
    q30: "false",
    q31: "false",
    q32: "false",
    q33: "true"

};



/* =====================================================
   OPEN ENVIRONMENT WORKSHEET
   ===================================================== */

function openEnvironment() {

    const worksheet =
        document.getElementById("environmentWorksheet");

    if (!worksheet) {

        alert(
            "Worksheet section મળ્યો નથી.\n\n" +
            "કૃપા કરીને index.html તપાસો."
        );

        return;
    }


    worksheet.style.display = "block";


    worksheet.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}



/* =====================================================
   OTHER SUBJECTS
   ===================================================== */

function comingSoon() {

    alert(
        "આ વિષયની Worksheet ટૂંક સમયમાં ઉપલબ્ધ થશે. 😊"
    );

}



/* =====================================================
   CLEAN ANSWER
   ===================================================== */

function cleanAnswer(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}



/* =====================================================
   CHECK ANSWER
   ===================================================== */

function isCorrectAnswer(
    questionName,
    userAnswer
) {

    const correctAnswers =
        answers[questionName];


    if (
        correctAnswers === undefined
    ) {

        return false;

    }


    const user =
        cleanAnswer(userAnswer);


    if (user === "") {

        return false;

    }


    /* Multiple acceptable answers */

    if (
        Array.isArray(correctAnswers)
    ) {

        return correctAnswers.some(
            function(answer) {

                return (
                    cleanAnswer(answer) === user
                );

            }
        );

    }


    /* Single answer */

    return (
        cleanAnswer(correctAnswers) === user
    );

}



/* =====================================================
   GET RADIO ANSWER
   ===================================================== */

function getRadioAnswer(questionName) {

    const selected =
        document.querySelector(
            'input[name="' +
            questionName +
            '"]:checked'
        );


    if (!selected) {

        return "";

    }


    return selected.value;

}



/* =====================================================
   GET TEXT ANSWER
   ===================================================== */

function getTextAnswer(questionName) {

    const input =
        document.querySelector(
            'input[name="' +
            questionName +
            '"]'
        );


    if (!input) {

        return "";

    }


    return input.value;

}



/* =====================================================
   MAIN WORKSHEET FUNCTION
   ===================================================== */

function checkWorksheet() {

    console.log(
        "checkWorksheet() started..."
    );


    try {

        let score = 0;

        let attempted = 0;

        const total = 33;



        /* =============================================
           QUESTIONS 1 TO 14
           MCQ
        ============================================= */

        for (
            let i = 1;
            i <= 14;
            i++
        ) {

            const questionName =
                "q" + i;


            const userAnswer =
                getRadioAnswer(
                    questionName
                );


            if (
                userAnswer !== ""
            ) {

                attempted++;


                if (
                    isCorrectAnswer(
                        questionName,
                        userAnswer
                    )
                ) {

                    score++;

                }

            }

        }



        /* =============================================
           QUESTIONS 15 TO 24
           TEXT
        ============================================= */

        for (
            let i = 15;
            i <= 24;
            i++
        ) {

            const questionName =
                "q" + i;


            const userAnswer =
                getTextAnswer(
                    questionName
                );


            if (
                cleanAnswer(userAnswer) !== ""
            ) {

                attempted++;


                if (
                    isCorrectAnswer(
                        questionName,
                        userAnswer
                    )
                ) {

                    score++;

                }

            }

        }



        /* =============================================
           QUESTIONS 25 TO 33
           TRUE / FALSE
        ============================================= */

        for (
            let i = 25;
            i <= 33;
            i++
        ) {

            const questionName =
                "q" + i;


            const userAnswer =
                getRadioAnswer(
                    questionName
                );


            if (
                userAnswer !== ""
            ) {

                attempted++;


                if (
                    isCorrectAnswer(
                        questionName,
                        userAnswer
                    )
                ) {

                    score++;

                }

            }

        }



        /* =============================================
           PERCENTAGE
        ============================================= */

        const percentage =
            Math.round(
                (score / total) * 100
            );



        /* =============================================
           MESSAGE
        ============================================= */

        let message = "";


        if (
            percentage >= 80
        ) {

            message =
                "🌟 ખૂબ સરસ! તમારો અભ્યાસ ખૂબ સારો છે.";

        }

        else if (
            percentage >= 50
        ) {

            message =
                "👏 સરસ પ્રયત્ન! થોડો વધુ અભ્યાસ કરો.";

        }

        else {

            message =
                "💪 ફરી પ્રયત્ન કરો. તમે ચોક્કસ સારું કરી શકશો.";

        }



        /* =============================================
           RESULT BOX
        ============================================= */

        const result =
            document.getElementById(
                "result"
            );


        if (!result) {

            alert(
                'Result box મળ્યો નથી.\n\n' +
                'index.html માં id="result" તપાસો.'
            );

            return;

        }



        /* =============================================
           SHOW RESULT
        ============================================= */

        result.innerHTML = `

            <div class="result-box">

                <h2>
                    🎉 Worksheet પૂર્ણ!
                </h2>


                <p class="score">

                    તમારો સ્કોર:

                    <strong>
                        ${score} / ${total}
                    </strong>

                </p>


                <p>

                    Percentage:

                    <strong>
                        ${percentage}%
                    </strong>

                </p>


                <p>

                    તમે

                    <strong>
                        ${attempted}
                    </strong>

                    પ્રશ્નોના જવાબ આપ્યા.

                </p>


                <h3>
                    ${message}
                </h3>


                <button
                    type="button"
                    onclick="location.reload()">

                    🔄 ફરીથી પ્રયાસ કરો

                </button>

            </div>

        `;



        /* =============================================
           SCROLL TO RESULT
        ============================================= */

        result.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });


        console.log(
            "Worksheet completed successfully."
        );

        console.log(
            "Score:",
            score,
            "/",
            total
        );



    }

    catch (error) {

        console.error(
            "Worksheet Error:",
            error
        );


        alert(
            "Worksheet Submit કરતી વખતે સમસ્યા આવી છે.\n\n" +
            "કૃપા કરીને ફરી પ્રયાસ કરો."
        );

    }

}



/* =====================================================
   PAGE LOAD TEST
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Cooky Study Time page is ready."
        );

    }
);
