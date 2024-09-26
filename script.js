function Enter() {
    var result = document.querySelector('#Result');
    result.innerHTML = null;
    var flatNumber = document.querySelector('#LookingFor').value;

    if (flatNumber >= 1 && flatNumber <= 22) {
        result.innerHTML = ("CORE: " + 3);
    } else if (flatNumber >= 23 && flatNumber <= 81) {
        result.innerHTML = ("CORE: " + 1);
    } else if (flatNumber >= 82 && flatNumber <= 137) {
        result.innerHTML = ("CORE: " + 2);
    } else if (flatNumber >= 138 && flatNumber <= 164) {
        result.innerHTML = ("CORE: " + 5);
    } else if (flatNumber >= 165 && flatNumber <= 186) {
        result.innerHTML = ("CORE: " + 4);
    } else if (flatNumber >= 187 && flatNumber <= 223) {
        result.innerHTML = ("CORE: " + 11);
    } else if (flatNumber >= 224 && flatNumber <= 259) {
        result.innerHTML = ("CORE: " + 8);
    } else if (flatNumber >= 260 && flatNumber <= 267) {
        result.innerHTML = ("BH - COURTYARD LIVE & WORK ACCESS CORE 6 OR 9");
    } else if (flatNumber >= 268 && flatNumber <= 285) {
        result.innerHTML = ("CORE: " + 10);
    } else if (flatNumber >= 260 && flatNumber <= 267) {
        result.innerHTML = ("BH - COURTYARD LIVE & WORK ACCESS CORE 6 OR 9");
    } else if (flatNumber >= 294 && flatNumber <= 311) {
        result.innerHTML = ("CORE: " + 7);
    } else if (flatNumber >= 312 && flatNumber <= 339) {
        result.innerHTML = ("CORE: " + 14);
    } else if (flatNumber >= 340 && flatNumber <= 350) {
        result.innerHTML = ("CORE: " + 16);
    } else if (flatNumber >= 351 && flatNumber <= 372) {
        result.innerHTML = ("CORE: " + 13);
    } else if (flatNumber >= 373 && flatNumber <= 399) {
        result.innerHTML = ("CORE: " + 12);
    } else if (flatNumber >= 400 && flatNumber <= 410) {
        result.innerHTML = ("CORE: " + 15);
    } else if (flatNumber >= 411 && flatNumber <= 454) {
        result.innerHTML = ("CORE: " + 6);
    } else if (flatNumber >= 455 && flatNumber <= 491) {
        result.innerHTML = ("CORE: " + 9);
    } else if (flatNumber >= 492 && flatNumber <= 497) {
        result.innerHTML = ("CORE: " + 17);
    } else if (flatNumber >= 542 && flatNumber <= 569) {
        result.innerHTML = ("CORE: " + 15);
    } else if (flatNumber >= 570 && flatNumber <= 595) {
        result.innerHTML = ("CORE: " + 16);
    } else if (flatNumber >= 596 && flatNumber <= 614) {
        result.innerHTML = ("CORE: " + 17);
    } else if (flatNumber < 1 || flatNumber > 350) {
        result.innerHTML = ("Número de flat inválido.");
    }


}