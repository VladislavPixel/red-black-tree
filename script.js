const redBlackTree = new RedBlackTree();

// ПОСЛЕ ВСТАВКИ =======================================================================
// СЕТ ДЛЯ ВНЕШНЕГО ВНУКА С ПРАВЫМ ПОВОРОТОМ
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 12);
// redBlackTree.insert("poplol", 6);

// СЕТ ДЛЯ ВНЕШНЕГО ВНУКА С ЛЕВЫМ ПОВОРОТОМ
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 30);
// redBlackTree.insert("poplol", 31);

// СЕТ ДЛЯ ВНУТРЕННЕГО ВНУКА С ЛЕВЫМ + ПРАВЫМ ПОВОРОТАМИ
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 12);
// redBlackTree.insert("poplol", 18);

// СЕТ ДЛЯ ВНУТРЕННЕГО ВНУКА С ПРАВЫМ + ЛЕВЫМ ПОВОРОТАМИ
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 40);
// redBlackTree.insert("poplol", 30);

// ПРИ СПУСКЕ ===========================================================================
// СЕТ ДЛЯ ВНЕШНЕГО НАРУШИТЕЛЯ ОДИН ПРАВЫЙ ПОВОРОТ
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 12);
// redBlackTree.insert("poplol", 37);
// redBlackTree.insert("car", 6);
// redBlackTree.insert("suf", 18);
// redBlackTree.insert("fix", 3);

// СЕТ ДЛЯ ВНЕШНЕГО НАРУШИТЕЛЯ ОДИН ЛЕВЫЙ ПОВОРОТ
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 60);
// redBlackTree.insert("poplol", 95);
// redBlackTree.insert("car", 80);
// redBlackTree.insert("suf", 120);
// redBlackTree.insert("fix", 200);

// СЕТ ДЛЯ ВНУТРЕННЕГО НАРУШИТЕЛЯ ДВА ПОВОРОТА: ВЛЕВО + ВПРАВО
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 12);
// redBlackTree.insert("poplol", 37);
// redBlackTree.insert("car", 31);
// redBlackTree.insert("suf", 43);
// redBlackTree.insert("fix", 28);

// СЕТ ДЛЯ ВНУТРЕННЕГО НАРУШИТЕЛЯ ДВА ПОВОРОТА: ВПРАВО + ВЛЕВО
// redBlackTree.insert("color", 50);
// redBlackTree.insert("home", 25);
// redBlackTree.insert("damp", 75);
// redBlackTree.insert("cerializer", 60);
// redBlackTree.insert("poplol", 200);
// redBlackTree.insert("car", 55);
// redBlackTree.insert("suf", 65);
// redBlackTree.insert("fix", 52);

// СЛОЖНЫЙ ПРИМЕР С БОЛЬШИМ КОЛИЧЕСТВОМ ПОВОРОТОВ
redBlackTree.insert("color", 100);
redBlackTree.insert("home", 25);
redBlackTree.insert("damp", 175);
redBlackTree.insert("cerializer", 12);
redBlackTree.insert("poplol", 37);
redBlackTree.insert("car", 6);
redBlackTree.insert("suf", 18);
redBlackTree.insert("fix", 28);
redBlackTree.insert("color", 70);
redBlackTree.insert("home", 80);
redBlackTree.insert("damp", 50);
redBlackTree.insert("cerializer", 45);
redBlackTree.insert("poplol", 48);
redBlackTree.insert("car", 500);
redBlackTree.insert("suf", 700);
redBlackTree.insert("fix", 1000);
redBlackTree.insert("color", 2500);
redBlackTree.insert("home", 600);
redBlackTree.insert("damp", 800);
redBlackTree.insert("cerializer", 750);
redBlackTree.insert("poplol", 690);
redBlackTree.insert("car", 550);
redBlackTree.insert("suf", 520);
redBlackTree.insert("fix", 530);
redBlackTree.insert("fix", 525);
redBlackTree.insert("fix", 522);
redBlackTree.insert("fix", 515);
redBlackTree.insert("fix", 505);
redBlackTree.insert("fix", 501);

console.log(redBlackTree);