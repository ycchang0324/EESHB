<?php

require 'db_connection.php';


// Create connection
$conn = connection();

$sql = "
CREATE TABLE `oldbook` (
  `id` int(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` varchar(30) NOT NULL,
  `price` int(5) NOT NULL,
  `picture` int(5) NOT NULL,
  `isSold` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
";

if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table bookorder created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table bookorder: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}


$sql = "
INSERT INTO `oldbook` (`id`, `name`, `category`, `price`, `picture`, `isSold`) VALUES
(1, 'Calculus Early Transcendentals(CH9-12)', '微積分', 10, 1, 0),
(2, 'University Calculus Early Transcendentals(3rd Edition)', '微積分', 50, 2, 0),
(3, '98工程數學歷屆考題精解', '工程數學', 20, 3, 0),
(4, '92年工程數學試題詳解(上)', '工程數學', 20, 4, 0),
(5, '應用線性代數', '線性代數', 50, 5, 0),
(6, '線性代數奪分寶典(下)', '線性代數', 50, 6, 0),
(7, '線性代數分類題庫', '線性代數', 50, 7, 1),
(8, 'Advanced Engineering Mathematics', '工程數學', 100, 8, 0),
(9, 'Advanced Engineering Mathematics', '工程數學', 100, 9, 0),
(10, 'Advanced Engineering Mathematics', '工程數學', 100, 10, 0),
(11, 'Advanced Engineering Mathematics', '工程數學', 100, 11, 0),
(12, '線性代數(第二版)', '線性代數', 20, 12, 0),
(13, 'INSTRUCTOR\'S MANUAL to accompany Elementary Linear Algebra: A Matrix Approach', '線性代數', 20, 13, 0),
(14, 'INSTRUCTOR\'S MANUAL to accompany Elementary Linear Algebra: A Matrix Approach', '線性代數', 20, 14, 0),
(15, 'Introduction to Linear Algebra and Differential Equations', '工程數學', 20, 15, 1),
(16, '離散數學上', '離散數學', 50, 16, 0),
(17, '工程數學奪分寶典(上)', '工程數學', 50, 17, 0),
(18, 'Calculus Early Transcendentals(7th Edition)', '微積分', 100, 18, 0),
(19, 'Calculus Late Transcendentals', '微積分', 100, 19, 0),
(20, 'Advanced Engineering Mathematics(2nd Edition)', '工程數學', 50, 20, 0),
(21, 'Differentail Equations with Boundary-Value Problems and Modeling Application', '微分方程', 20, 21, 0),
(22, '微分方程', '微分方程', 20, 22, 0),
(23, 'Advanced Engineering Mathematics(5th Edition)', '工程數學', 100, 23, 1),
(24, '工程數學上', '工程數學', 50, 24, 0),
(25, 'Signals and Systems', '信號與系統', 100, 25, 0),
(26, '計算機概論(10th Edition)', '計算機概論', 50, 26, 0),
(27, 'Integrated Circuit Design(4th Edition)', '系內選修', 100, 27, 1),
(28, 'C++程式設計藝術(5th Edition)', '計算機程式設計', 20, 28, 0),
(29, 'C++物件導向程式設計實例入門(2nd Edition)', '計算機程式設計', 20, 29, 0),
(30, 'C語言教學手冊', '計算機程式設計', 50, 30, 0),
(31, 'C++ How To Program(Pearson International Edition)', '計算機程式設計', 20, 31, 0),
(32, 'C++ How To Program (ANSI/ISO C++)', '計算機程式設計', 50, 32, 0),
(33, 'C++ How To Program (7th Edition)', '計算機程式設計', 10, 33, 1),
(34, 'Calculus Early Transcendentals (6th Edition)', '微積分', 100, 34, 0),
(35, 'C++程式設計藝術(5th Edition)', '計算機程式設計', 20, 35, 1),
(36, 'C++ 教學範本', '計算機程式設計', 50, 36, 0),
(37, 'C++ 物件導向程式設計', '計算機程式設計', 50, 37, 0),
(38, '計算機概論(預官考選)', '計算機概論', 10, 38, 0),
(39, '電腦概論', '計算機概論', 20, 39, 0),
(40, '計算機概論(9th Edition)', '計算機概論', 20, 40, 0),
(41, 'Computer Science(8th Edition)', '計算機概論', 20, 41, 0),
(42, 'Computer Science(9th Edition)(Pearson International Edition)', '計算機概論', 20, 42, 0),
(43, 'Computer Science(10th Edition)(Pearson International Edition)', '計算機概論', 20, 43, 0),
(44, 'Computer Science(11th Edition)', '計算機概論', 20, 44, 1),
(45, 'Computer Science(11th Edition)', '計算機概論', 20, 45, 0),
(46, 'Visual C++ 2005 Express 入門進階', '計算機程式設計', 50, 46, 0),
(47, '計算機概論(7th Edition)', '計算機概論', 50, 47, 0),
(48, 'C++ How To Program (5th Edition)', '計算機程式設計', 10, 48, 0),
(49, 'C++ How To Program (5th Edition)', '計算機程式設計', 10, 49, 0),
(50, 'Fundamentals of Data Structure in C++', '系內選修', 50, 50, 0),
(51, 'C++ How To Program (7th Edition)', '計算機程式設計', 20, 51, 1),
(52, 'C++ 物件導向程式設計', '計算機程式設計', 20, 52, 1),
(53, 'C++ How To Program (ANSI/ISO C++)', '計算機程式設計', 50, 53, 0),
(54, 'Chemical Priciple (3rd Edition)', '普通化學', 100, 54, 0),
(55, 'Chemical Priciple (3rd Edition)', '普通化學', 100, 55, 0),
(56, 'Chemical Priciple (5th Edition)', '普通化學', 100, 56, 0),
(57, 'Campbell biology (10th Edition)', '生物科學通論', 100, 57, 0),
(58, '生物學上 (6th Edition)', '生物科學通論', 50, 58, 0),
(59, '生物學上 (6th Edition)', '生物科學通論', 50, 59, 0),
(60, '生物學上 (6th Edition)', '生物科學通論', 50, 60, 0),
(61, 'Campbell biology (8th Edition)(to CH12)', '生物科學通論', 10, 61, 0),
(62, '物理下(7th Edition)', '普通物理', 50, 62, 0),
(63, '物理上(7th Edition)', '普通物理', 50, 63, 0),
(64, '物理上(7th Edition)', '普通物理', 50, 64, 0),
(65, 'Principle of Physics(10th Edition)(to CH15)', '普通物理', 10, 65, 0),
(66, 'Principle of Physics(5th Edition,volume1)', '普通物理', 50, 66, 0),
(67, 'Principle of Physics(5th Edition,volume2)', '普通物理', 50, 67, 0),
(68, '物理上(8th Edition)', '普通物理', 50, 68, 0),
(69, 'Principle of Physics(9th Edition)(Extended)', '普通物理', 50, 69, 0),
(70, 'Physics for Scientist and Engineering(6th Edition)', '普通物理', 100, 70, 0),
(71, '微電子電路習題詳解(上)(4th Edition)', '電子學', 10, 71, 0),
(72, '微電子電路習題詳解(下)(4th Edition)', '電子學', 10, 72, 0),
(73, '微電子電路習題詳解(上)(6th Edition)', '電子學', 10, 73, 0),
(74, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(5th Edition)(part)', '電子學', 10, 74, 0),
(75, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(5th Edition)(part)', '電子學', 10, 75, 0),
(76, '模似CMOS集成電路設計(答案)', '系內選修', 10, 76, 0),
(77, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(5th Edition)', '電子學', 50, 77, 0),
(78, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(5th Edition)(part)', '電子學', 10, 78, 0),
(79, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(6th Edition)', '電子學', 20, 79, 0),
(80, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(5th Edition)', '電子學', 20, 80, 0),
(81, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(5th Edition)', '電子學', 20, 81, 0),
(82, '微電子電路學精解7.1版(上)', '電子學', 20, 82, 0),
(83, '微電子電路學精解7.1版(下)', '電子學', 20, 83, 0),
(84, '線性與非線性電路學(下)', '電路學', 10, 84, 0),
(85, 'Digital Logic Circuit Analysis & Design', '交換電路與邏輯設計', 10, 85, 0),
(86, '電路學(7th Edition)', '電路學', 20, 86, 0),
(87, '微電子電路學習題詳解(上)(4th Edition)', '電子學', 10, 87, 0),
(88, 'INSTRUCTOR\'S MANUAL to accompany Microelectonic Circuits(4th Edition)', '電子學', 20, 88, 0),
(89, '電子學考前精選168題型', '電子學', 10, 89, 0),
(90, 'Linear & Non-Linear Circuits', '電路學', 50, 90, 0),
(91, '微電子電路(下)(4th Edition)', '電子學', 20, 91, 0),
(92, 'Circuits', '電路學', 20, 92, 0),
(93, '微電子電路學習題詳解(下)(4th Edition)', '電子學', 10, 93, 0),
(94, '微電子電路學習題詳解(下)(4th Edition)', '電子學', 10, 94, 0),
(95, 'Microelectronic Circuits (6th Edition)', '電子學', 10, 95, 0),
(96, 'Circuits', '電路學', 20, 96, 0),
(98, 'Circuits', '電路學', 20, 98, 0),
(99, 'Microelectronic Devices', '系內選修', 10, 99, 0),
(100, 'Microelectronic Circuits (6th Edition)(part1)', '電子學', 10, 100, 0),
(101, 'principles & applications of economics', '系外選修', 50, 101, 0),
(102, '經濟學原理《上》', '系外選修', 100, 102, 0),
(103, 'introduction to management science', '系外選修', 50, 103, 0),
(104, '來學日本語 初級1', '系外選修', 50, 104, 0),
(105, 'accounting', '系外選修', 100, 105, 0),
(106, 'intermediate microeconomics', '系外選修', 100, 106, 0),
(107, 'economics', '系外選修', 50, 107, 0),
(108, 'price theory & applications', '系外選修', 100, 108, 0),
(109, 'personality psychology', '系外選修', 100, 109, 0),
(110, 'essentials of investment analysis and portfolio management', '系外選修', 100, 110, 0),
(111, 'essentials of investments', '系外選修', 50, 111, 0),
(112, 'introducing psychology', '系外選修', 50, 112, 0),
(113, 'psychologicalscience', '系外選修', 50, 113, 0),
(114, 'psychology and life', '系外選修', 20, 114, 0),
(115, 'psychology and life', '系外選修', 50, 115, 0),
(116, '經濟學理論與實際《六版．上冊》', '系外選修', 20, 116, 0),
(117, '經濟學理論與實際《六版．上冊》', '系外選修', 50, 117, 0),
(118, '世界經濟導論', '系外選修', 50, 118, 0),
(119, 'macroeconomics', '系外選修', 100, 119, 0),
(120, 'introduction to biomedical engineering', '系外選修', 100, 120, 0),
(121, 'fluid mechanics', '系外選修', 100, 121, 0),
(122, 'dynamics engineering mechanics', '系外選修', 100, 122, 0),
(123, 'vector mechanics for engineers statics', '系外選修', 50, 123, 0),
(124, 'an introduction contemporary linguistic analysis', '系外選修', 50, 124, 0),
(125, 'economics', '系外選修', 50, 125, 0),
(126, '總體經濟學 古典新論(一)', '系外選修', 20, 126, 0),
(127, 'price theory & applications', '系外選修', 50, 127, 0),
(128, 'macroeconomics', '系外選修', 50, 128, 0),
(129, 'statistics for management and economics', '系外選修', 50, 129, 0),
(130, '社會科學的理路', '系外選修', 20, 130, 0),
(131, '社會科學的理路', '系外選修', 20, 131, 0),
(132, 'strategic management theory', '系外選修', 100, 132, 0),
(133, 'accounting principles', '系外選修', 100, 133, 0),
(134, 'accounting', '系外選修', 20, 134, 0),
(135, '會計學新論《下冊》', '系外選修', 10, 135, 0),
(136, 'financial accounting ifrs edition', '系外選修', 100, 136, 0),
(137, 'investments', '系外選修', 100, 137, 0),
(138, 'compiler design theory', '系外選修', 20, 138, 0),
(139, 'microbiology', '系外選修', 50, 139, 0),
(140, 'the immune system', '系外選修', 50, 140, 0),
(141, 'psychologicalscience', '系外選修', 20, 141, 0),
(142, 'beginning PHP4', '系外選修', 10, 142, 0),
(143, 'essentials of investments', '系外選修', 50, 143, 0),
(144, 'database', '系外選修', 50, 144, 0),
(145, '社會科學的理路', '系外選修', 50, 145, 0),
(151, '海洋環境學', '課外書', 20, 151, 0),
(152, '中國近代史(上冊)', '課外書', 50, 152, 0),
(153, '唐宋明家詞選', '課外書', 50, 153, 0),
(154, '探索複雜性', '課外書', 50, 154, 0),
(155, '紅樓夢校注(二)', '課外書', 50, 155, 0),
(156, '紅樓夢校注(三)', '課外書', 50, 156, 0),
(157, '紅樓夢校注(三)', '課外書', 50, 157, 0),
(158, '紅樓夢校注(二)', '課外書', 50, 158, 0),
(159, '紅樓夢校注(一)', '課外書', 50, 159, 0),
(160, '紅樓夢校注(一)', '課外書', 50, 160, 0),
(161, '與其替老闆賣命。不如為自己拼命', '課外書', 50, 161, 0),
(162, '陳維昭回憶錄-在轉捩點上', '課外書', 50, 162, 0),
(163, 'Aesthetics-Key Concepts in Philosophy', '課外書', 20, 163, 0),
(164, '胸懷社會，台大公益家', '課外書', 10, 164, 0),
(165, '爵士樂理入門(下)', '課外書', 20, 165, 0),
(166, 'X檔案之突變異種', '課外書', 10, 166, 0),
(167, '領導的理論與技術', '課外書', 20, 167, 0),
(168, 'XOOPS 2.3架設網站', '課外書', 10, 168, 0),
(169, 'Postgraduate and MBA', '課外書', 20, 169, 0),
(170, '朱敬一講社會科學-台灣社會的新世紀挑戰', '課外書', 10, 170, 0),
(171, '哲學與人生', '課外書', 10, 171, 0),
(172, '古墓奇兵光碟', '光碟', 10, 172, 0),
(173, '您喜愛的管絃集', '光碟', 10, 173, 0),
(174, '籃球完全稱霸', '課外書', 10, 174, 0),
(175, '宅配男與披頭四搖籃曲', '課外書', 20, 175, 0),
(176, '朱敬一講社會科學-台灣社會的新世紀挑戰', '課外書', 10, 176, 0),
(177, '日文完全掌握文法-問題對策三級', '課外書', 50, 177, 0),
(178, '政治學', '課外書', 50, 178, 0),
(179, '哈利波特-混血王子的背叛', '課外書', 100, 179, 0),
(180, '千古之謎-幾何、天文與物理兩千年', '課外書', 50, 180, 0),
(181, 'On Liberty', '課外書', 20, 181, 0),
(182, '英語寫作活用辭典', '課外書', 50, 182, 0),
(183, '藍海策略台灣版', '課外書', 50, 183, 0),
(184, '艱苦一時，立志一生', '課外書', 10, 184, 0),
(185, '艱苦一時，立志一生', '課外書', 10, 185, 0),
(186, '名偵探柯南-第25本', '課外書', 10, 186, 0),
(201, '從0到1', '課外書', 20, 201, 1),
(202, '請問侯文詠', '課外書', 20, 202, 0),
(203, '體檢合格不當兵', '課外書', 10, 203, 0),
(204, '有種請坐第一排', '課外書', 10, 204, 0),
(205, '用一半的時間做兩倍的事', '課外書', 20, 205, 0),
(206, 'Academic Writing for Graduate Students', '課外書', 20, 206, 0),
(207, 'English Dictionary', '課外書', 100, 207, 0),
(208, '複雜系統與複雜網路', '課外書', 20, 208, 0),
(209, '巨流河', '課外書', 100, 209, 0),
(210, 'Interactions 2', '課外書', 10, 210, 0),
(211, '色彩計畫實用色票集', '課外書', 10, 211, 0),
(212, 'ELE Actual A1', '課外書', 10, 212, 0),
(213, '彈指之間', '課外書', 50, 213, 0),
(214, 'Essentials of Investments', '系外選修', 50, 214, 0),
(215, '蘋果橘子經濟學', '課外書', 10, 215, 0),
(216, '實在的力量', '課外書', 10, 216, 0),
(217, 'GRE 句子填空', '課外書', 20, 217, 0),
(218, '獵命師傳奇 卷十四', '課外書', 10, 218, 0),
(219, '阿宅醒醒', '課外書', 10, 219, 0),
(220, '大腦的秘密檔案', '課外書', 20, 220, 0),
(221, '小氣財神', '課外書', 10, 221, 0),
(222, '精準的失控', '課外書', 20, 222, 0),
(223, '誰說人是理性的', '課外書', 20, 223, 0),
(224, '賈伯斯傳', '課外書', 100, 224, 0),
(225, '雨果的秘密', '課外書', 100, 225, 0),
(226, '駭客迷宮', '課外書', 50, 226, 0),
(227, '情囿三部曲:情歸之1996下', '課外書', 10, 227, 0),
(228, '西洋戲劇與戲劇家', '課外書', 10, 228, 0),
(229, '一個計量金融大師在華爾街', '課外書', 20, 229, 0),
(230, '乑創時代', '課外書', 50, 230, 0),
(231, '跨出論文寫作的第一步', '課外書', 20, 231, 0),
(232, '捷進學術英文寫作關鍵', '課外書', 20, 232, 0),
(233, '假說思考法', '課外書', 20, 233, 0),
(234, 'TOEFL-CBT', '課外書', 20, 234, 0),
(235, '完全命中雅思單字IELTS', '課外書', 20, 235, 0),
(236, '雅子妃 菊花王朝的囚徒', '課外書', 10, 236, 0),
(237, '會念書的狠角色才能生存', '課外書', 10, 237, 0),
(238, '數學思考', '課外書', 10, 238, 0),
(239, '數學思考', '課外書', 10, 239, 0),
(240, 'Cadence Verilog Language and Simulation v3.4', '課外書', 10, 240, 0),
(241, 'Cadence Verilog Language and Simulation v3.4', '課外書', 10, 241, 0),
(242, '勇往直前 我如何拯救星巴克', '課外書', 20, 242, 0),
(243, 'Cadence Verilog Language and Simulation v3.4', '課外書', 10, 243, 1),
(244, 'Cadence Verilog Language and Simulation v3.4', '課外書', 10, 244, 0),
(245, 'Multi-Directional Adaptor(patented)', '課外書', 50, 245, 0),
(246, '導演巴賽', '課外書', 20, 246, 0),
(247, '光檢測器', '課外書', 10, 247, 0),
(248, 'GRE', '課外書', 10, 248, 0),
(249, 'GRE 句子填空', '課外書', 10, 249, 0),
(250, '新譯古文觀止(上)', '課外書', 100, 250, 0),
(251, '新譯古文觀止(下)', '課外書', 100, 251, 0),
(252, 'Fundamental Molecular Biology', '系外選修', 100, 252, 0),
(253, '大法官，給個說法', '課外書', 20, 253, 0),
(254, '新世紀台灣憲政體制與政黨政治發展趨勢', '系外選修', 50, 254, 0),
(255, '大學生一定要做的100件事', '課外書', 10, 255, 1),
(256, '魔戒首部曲', '課外書', 50, 256, 0),
(257, 'The essential guide to education in the UK 2008', '課外書', 20, 257, 0),
(258, '莊子今註今譯', '課外書', 100, 258, 0),
(259, '完全真相 Plain Truth', '課外書', 20, 259, 0),
(260, '中國現代文學選集', '課外書', 20, 260, 0),
(261, '愛的成人式', '課外書', 10, 261, 0),
(262, '羊毛記', '課外書', 100, 262, 0),
(263, '全球頂級名人零距離', '課外書', 20, 263, 0),
(264, '與成功有約', '課外書', 10, 264, 0),
(265, '經濟殺手的告白-3', '課外書', 20, 265, 0),
(266, '油神皮肯斯', '課外書', 10, 266, 0),
(267, '遠東英文作文', '課外書', 20, 267, 0),
(268, 'The essential guide to education in the UK 2008 University college and school', '課外書', 20, 268, 0),
(269, '留美申請書信', '課外書', 20, 269, 0),
(270, '獵熊記', '課外書', 10, 270, 0),
(271, '續·冰點', '課外書', 10, 271, 0),
(272, '星火燎原', '課外書', 20, 272, 0),
(273, '聖經', '課外書', 10, 273, 0),
(274, '新約聖經', '課外書', 10, 274, 0),
(275, '蒼蠅王Lord Of The Flies', '課外書', 20, 275, 0),
(276, '臥龍小三的B2D Server快速入門', '課外書', 50, 276, 0),
(277, '實用邏輯', '課外書', 10, 277, 0),
(278, '鍛鍊你的策略腦', '課外書', 20, 278, 0),
(279, '鍛鍊你的策略腦', '課外書', 20, 279, 0),
(280, '鍛鍊你的策略腦', '課外書', 20, 280, 0),
(281, '論點思考', '課外書', 20, 281, 0),
(282, '論點思考', '課外書', 20, 282, 0),
(283, '論點思考', '課外書', 20, 283, 0),
(284, '假說思考法', '課外書', 10, 284, 0),
(285, '假說思考法', '課外書', 10, 285, 0),
(286, '假說思考法', '課外書', 10, 286, 0),
(287, '英文解題錦囊', '課外書', 20, 287, 0),
(288, '天光 太陽花學運攝影集', '課外書', 10, 288, 0),
(289, '天光 太陽花學運攝影集', '課外書', 20, 289, 0),
(290, '天光 太陽花學運攝影集', '課外書', 20, 290, 0),
(291, '天光 太陽花學運攝影集', '課外書', 20, 291, 0),
(292, '史岱爾莊謀殺案', '課外書', 20, 292, 0),
(293, '知識分子論', '課外書', 10, 293, 0),
(294, '大法官，給個說法2', '課外書', 20, 294, 0),
(295, '卡內基 溝通與人際關係', '課外書', 20, 295, 0),
(296, '正義的陰影', '課外書', 10, 296, 0),
(297, '一人單車環法賽', '課外書', 10, 297, 0),
(298, '科學大師發現的起點', '課外書', 10, 298, 0),
(299, '克魯曼 下一個榮景', '課外書', 20, 299, 0),
(300, '情囿三部曲:稚愛之1966', '課外書', 10, 300, 0),
(301, '小王子', '課外書', 10, 301, 0),
(302, '魔嬰(DVD)', '光碟', 10, 302, 0),
(303, '這樣思考，人生就不一樣', '課外書', 10, 303, 0),
(304, '京都', '課外書', 10, 304, 0),
(305, '臥底', '課外書', 20, 305, 0),
(306, '溼地 石化 島嶼想像', '課外書', 10, 306, 0),
(307, '減稅圖利了誰', '課外書', 10, 307, 0),
(308, '塵土記', '課外書', 100, 308, 0),
(309, '富爸爸，窮爸爸', '課外書', 10, 309, 0),
(310, '射鵰英雄傳', '課外書', 50, 310, 0),
(311, '字彙的力量', '課外書', 100, 311, 1),
(312, '字彙的力量', '課外書', 100, 312, 0),
(313, '袖珍德漢辭典', '課外書', 50, 313, 0),
(314, '數學運算大師Mathematica4', '課外書', 100, 314, 0),
(401, 'Probability and Statistics for Engineers and Scientists', '機率與統計', 100, 401, 0),
(402, 'Probability and Stochastics Processes Solution Manual', '機率與統計', 20, 402, 0),
(403, 'Probablitiy and Stochastics Processes Solution Manual', '機率與統計', 20, 403, 0),
(404, '工程機率講義(上)', '機率與統計', 50, 404, 0),
(405, '信號與系統(四)', '信號與系統', 10, 405, 0),
(406, '信號與系統(三)', '信號與系統', 10, 406, 0),
(407, '信號與系統(三)', '信號與系統', 10, 407, 0),
(408, '信號與系統(二)', '信號與系統', 10, 408, 0),
(409, '信號與系統(二)', '信號與系統', 10, 409, 0),
(410, '信號與系統(一)', '信號與系統', 10, 410, 0),
(411, 'Signals & Systems Solution Manual', '信號與系統', 20, 411, 0),
(412, 'Signals & Systems Solution Manual', '信號與系統', 20, 412, 0),
(413, 'Signals & Systems Solution Manual', '信號與系統', 20, 413, 0),
(414, 'Signals & Systems Solution Manual', '信號與系統', 20, 414, 0),
(415, 'Intorduction to Probability And Statistics for Engineers And Scientists', '機率與統計', 20, 415, 0),
(416, 'Intorduction to Probability And Statistics for Engineers And Scientists', '機率與統計', 20, 416, 0),
(417, 'Fundamentals of Probability Solutional Manual', '機率與統計', 20, 417, 0),
(418, 'Elementary Linear Algebra A Matrix Approach Solution Manual', '線性代數', 20, 418, 0),
(419, '工程電磁學基礎習題詳解', '電磁學', 50, 419, 1),
(420, 'Element of Engineering Electromagnetics Solution Manual (下)', '電磁學', 10, 420, 0),
(421, 'Element of Engineering Electromagnetics Solution Manual (下)', '電磁學', 10, 421, 0),
(422, 'Element of Engineering Electromagnetics Solution Manual (下)', '電磁學', 10, 422, 0),
(423, 'Element of Engineering Electromagnetics Solution Manual (下)', '電磁學', 10, 423, 0),
(424, 'Element of Engineering Electromagnetics Solution Manual (上)', '電磁學', 10, 424, 0),
(425, 'Element of Engineering Electromagnetics Solution Manual (上)', '電磁學', 10, 425, 0),
(426, 'Element of Engineering Electromagnetics Solution Manual (上)', '電磁學', 10, 426, 1),
(427, 'Element of Engineering Electromagnetics Solution Manual (上)', '電磁學', 10, 427, 0),
(428, 'Instructor\'s Manual for Fundamental Logic Design', '交換電路與邏輯設計', 10, 428, 0),
(429, '台大電機系大二下電磁學(上)two', '電磁學', 20, 429, 0),
(430, '電磁學與電磁波的理論及應用(上)', '電磁學', 10, 430, 0),
(431, 'Element of Engineering Electromagnetics Solution Manual (上)', '電磁學', 10, 431, 0),
(432, 'Element of Engineering Electromagnetics Solution Manual (上)', '電磁學', 10, 432, 0),
(433, 'Element of Engineering Electromagnetics Solution Manual (下)', '電磁學', 10, 433, 1),
(434, 'Element of Engineering Electromagnetics Solution Manual (下)', '電磁學', 10, 434, 0),
(435, 'Element of Engineering Electromagnetics Solution Manual (上)', '電磁學', 10, 435, 0),
(436, 'Element of Engineering Electromagnetics(上)', '電磁學', 20, 436, 0),
(451, 'Microelectronic Circuits (6th Edition)(part2)', '電子學', 10, 451, 0),
(452, 'Microelectronic Circuits (6th Edition)(part3)', '電子學', 10, 452, 0),
(453, '電子學(上)', '電子學', 20, 453, 0),
(454, '電子學(二)', '電子學', 10, 454, 0),
(455, '電子學(二)', '電子學', 10, 455, 0),
(456, 'Microelectronic Circuits (6th Edition)', '電子學', 50, 456, 0),
(457, '微電子電路學(上)(5th Edition)', '電子學', 20, 457, 0),
(458, '微電子電路學(中)(5th Edition)', '電子學', 20, 458, 0),
(459, 'INSTRUCTOR\'S MANUAL to accompany Circuits', '電路學', 10, 459, 0),
(460, 'INSTRUCTOR\'S MANUAL to accompany Circuits', '電路學', 10, 460, 0),
(461, '線性與非線性電路學精要', '電路學', 20, 461, 0),
(462, 'Microelectronic Circuits (5th Edition)', '電子學', 20, 462, 0),
(463, '微電子學上(7th Edition)', '電子學', 20, 463, 1),
(464, 'Digital Logic Circuit Analysis & Design', '交換電路與邏輯設計', 10, 464, 0),
(465, 'Fundamentals of Logic Design(5th Edition)', '交換電路與邏輯設計', 10, 465, 0),
(501, 'principles of CMOS VLSI DESIGN', '系上選修', 100, 501, 0),
(502, 'CPLD數位電路設計', '系上選修', 50, 502, 0),
(503, '電機機械實習', '系上選修', 50, 503, 0),
(504, 'Linear system theory and design', '系上選修', 50, 504, 0),
(505, '光電半導體元件', '系上選修', 50, 505, 0),
(506, 'Discrete Mathematics and Its Applications', '系上選修', 100, 506, 1),
(507, 'The Science and Engineering of Microelectornic Fabrication', '系上選修', 50, 507, 0),
(508, 'Computational Electrodynamics The Finite-Difference Time-Domain Method', '系上選修', 50, 508, 0),
(509, 'Antenna Theory and Design', '系上選修', 100, 509, 0),
(510, 'Post-Quantum Cryptography', '系上選修', 50, 510, 0),
(511, 'MPEG Video Compression Standard', '系上選修', 20, 511, 0),
(512, '邏輯電路設計實戰寶典', '系上選修', 100, 512, 0),
(513, 'VHDL與數位邏輯設計', '系上選修', 50, 513, 0),
(514, 'Principles of Color Technology', '系上選修', 100, 514, 0),
(515, '基於ARM Cortex-M4內河的物聯網/嵌入式系統開發教程', '系上選修', 50, 515, 0),
(516, 'Physical Review D Particles and Fields', '系上選修', 20, 516, 0),
(517, 'Review of Medical Physiology', '系外選修', 20, 517, 0),
(518, '微電腦控制專題製作', '系上選修', 50, 518, 0),
(519, '計算機組織與設計', '系上選修', 100, 519, 0),
(520, 'CMOS VLSI Design', '系上選修', 50, 520, 0),
(521, 'Fundamentals of Modern VLSI Devices', '系上選修', 20, 521, 0),
(522, 'Introduction to Systems Analysis & Design', '系上選修', 100, 522, 0),
(523, 'Renewable and EfficientElectric Power Systems', '系上選修', 100, 523, 0),
(524, '離散時間訊號處理', '系上選修', 100, 524, 0),
(525, 'CMOS VLSI Design', '系上選修', 50, 525, 0),
(526, 'Electrical Engineering Principles and Applications', '系上選修', 50, 526, 0),
(527, 'Verilog HDL Digital Designe and Modeling', '系上選修', 100, 527, 0),
(528, 'Optoelectronics and Photonics', '系上選修', 50, 528, 0),
(529, 'Optoelectronics and Photonics: Principles and Practices', '系上選修', 20, 529, 0),
(531, 'Principles of Microwave Technology', '系上選修', 50, 531, 0),
(532, 'Beiser\'s Concepts of Modern Physics Solution Manual', '系上選修', 10, 532, 0),
(533, 'Altera FPGA/CPLD 設計(高級篇)', '系上選修', 50, 533, 0),
(534, 'Principles of Thermodynamics', '系上選修', 20, 534, 0),
(535, 'Electromagnetic Waves and Antennas (下)', '系上選修', 20, 535, 0),
(536, 'Optoelectronics and Photonics: Principles and Practices', '系上選修', 20, 536, 0),
(537, 'Fundamentals of Database Systems', '系上選修', 50, 537, 0),
(538, '作業系統原理', '系上選修', 20, 538, 0),
(539, 'Silverlight3.0全面精通手冊', '系上選修', 50, 539, 0),
(540, 'Introduction to Digital Communication', '系上選修', 50, 540, 0),
(541, 'Communication Systems(上)', '系上選修', 10, 541, 0),
(542, 'Communication Systems(下)', '系上選修', 10, 542, 0),
(543, 'Communication Systems', '系上選修', 100, 543, 0),
(544, 'Communication Systems', '系上選修', 50, 544, 0),
(545, '電腦網際網路', '系上選修', 50, 545, 0),
(546, 'Digital Communications', '系上選修', 50, 546, 0),
(547, 'Computer Architecture Ch. 5-1: Designing a Single Cycle Datapath', '系上選修', 10, 547, 0),
(548, 'Modern Operating Systems', '系上選修', 50, 548, 0),
(549, 'Communication System', '系上選修', 50, 549, 0),
(550, 'Introduction to Semiconductor Manufacturing Technology', '系上選修', 100, 550, 0),
(551, '漫步華爾街', '課外書', 20, 551, 0),
(552, 'Fundamentals of Multimedia', '系上選修', 50, 552, 0),
(553, 'Signals & Systems(下)', '信號與系統', 10, 553, 0),
(554, 'Advanced Engineering Mathematics solution manual', '系上選修', 10, 554, 0),
(555, '4G LTE/LTE Advanced for Mobile BroadBand', '系上選修', 100, 555, 0),
(556, 'Digital Communications', '系上選修', 50, 556, 0),
(601, 'Semiconductor physics and Devices', '系上選修', 50, 601, 0),
(602, 'INSTRUCTOR\'S MANUAL to accompany Concept of Modern Physics(6th Edition)', '系上選修', 10, 602, 0),
(603, 'Database Management System(3rd Edition)', '系上選修', 100, 603, 0),
(604, 'Database Management System(3rd Edition)', '系上選修', 100, 604, 0),
(605, 'Mobile Communications(2nd Edition)', '系上選修', 50, 605, 0),
(606, '通訊系統百分百', '系上選修', 20, 606, 0),
(607, 'Fundamental of Semiconductor Devices', '系上選修', 10, 607, 0),
(608, 'Handbook on Semiconductors', '系上選修', 20, 608, 0),
(609, '通信原理(6th Edition)', '系上選修', 20, 609, 0),
(610, 'Optical Program Design(Ver.10)', '系上選修', 20, 610, 0),
(611, 'SOLUTION\'S MANUAL to accompany Semiconductor physics and Devices(2nd Edition)', '系上選修', 10, 611, 0),
(612, 'Feedback Control of Dynamic System(5th Edition)', '系上選修', 20, 612, 0),
(613, 'Magnetic Material:Fundamental of applications', '系上選修', 10, 613, 0),
(614, 'Monolithic Microwave Integrated Circuit(MMIC)', '系上選修', 10, 614, 0),
(615, '固態元件考古題', '系上選修', 10, 615, 0),
(616, 'Feedback Control of Dynamic System(5th Edition)', '系上選修', 20, 616, 0),
(617, 'Modern Control System (9th Edition)', '系上選修', 20, 617, 0),
(618, 'MicroWave and RF Wireless System', '系上選修', 20, 618, 0),
(619, 'Semiconductor physics and Devices(3rd Edition)', '系上選修', 20, 619, 0),
(620, 'CMOS VLSI Design(3rd Edition)', '系上選修', 20, 620, 0),
(621, 'Introduction to Power Engineering', '系上選修', 10, 621, 0),
(622, '近代物理導讀與精解', '系上選修', 20, 622, 0),
(623, 'Modern Physics (4th Edition)', '系上選修', 20, 623, 0),
(624, 'Modern Physics (5th Edition)', '系上選修', 20, 624, 0),
(625, 'Introduction to Algorithms (2nd Edition)', '系上選修', 50, 625, 0),
(651, 'Elements of Engineering Electromagnetics', '電磁學', 10, 651, 1),
(652, 'Power Systems Analysis', '系上選修', 100, 652, 1),
(653, 'Fundamentals of Semiconductor Pyhsics and Devices', '系上選修', 100, 653, 0),
(654, 'Semiconductor Pyhsics & Devices', '系上選修', 100, 654, 0),
(655, 'Modern Control System', '系上選修', 50, 655, 0),
(656, '深入淺出設計模式', '課外書', 100, 656, 0),
(657, 'Differential Equation', '微分方程', 50, 657, 1),
(658, 'MicroElectronic Circuit', '電子學', 50, 658, 0),
(659, 'Elementary Linear Algebra A Matrix Approach', '線性代數', 100, 659, 1),
(660, 'MicroElectronic Circuit(Ch4-6)', '電子學', 10, 660, 0),
(661, 'MicroElectronic Circuit(Ch7-9)', '電子學', 10, 661, 0),
(662, 'MicroElectronic Circuit(Ch10-12)', '電子學', 10, 662, 0),
(663, 'Linear Algebra A Matrix Approach', '電子學', 100, 663, 0),
(664, '微電子電路I', '電子學', 100, 664, 1),
(665, '電子學補充01-02', '電子學', 20, 665, 1),
(666, '微電子電路II', '電子學', 100, 666, 1),
(667, '電磁學與電磁波的理論及應用(上)', '電磁學', 100, 667, 0),
(668, '量子力學概論', '系上選修', 20, 668, 1),
(669, '微積分講義', '微積分', 20, 669, 0),
(670, '微積分精粹', '微積分', 100, 670, 0),
(671, '工程數學(上)', '工程數學', 100, 671, 0),
(672, 'Differential Equations', '微分方程', 100, 672, 0),
(673, '線性代數奪分寶典(上)', '線性代數', 100, 673, 0),
(674, '德雷莎修女傳', '課外書', 10, 674, 0),
(675, '長尾理論台灣版', '課外書', 10, 675, 0),
(676, '台大裸體藝術社', '課外書', 10, 676, 0),
(677, '青出於藍', '光碟', 10, 677, 0),
(678, '妻管員2美女巴士領航員', '光碟', 10, 678, 0),
(701, 'CASIO計算機-991ES PLUS', '計算機', 650, 701, 0),
(702, 'CASIO計算機-991ES PLUS', '計算機', 650, 702, 0),
(703, 'CASIO計算機-991ES PLUS', '計算機', 650, 703, 0),
(704, 'CASIO計算機-991ES PLUS', '計算機', 650, 704, 0),
(705, 'CASIO計算機-991ES PLUS', '計算機', 650, 705, 0),
(706, 'CASIO計算機-991ES PLUS', '計算機', 650, 706, 0),
(707, 'CASIO計算機-991ES PLUS', '計算機', 650, 707, 0),
(708, 'CASIO計算機-991ES PLUS', '計算機', 650, 708, 0),
(709, 'CASIO計算機-991ES PLUS', '計算機', 650, 709, 0),
(710, 'CASIO計算機-991ES PLUS', '計算機', 650, 710, 0),
(711, 'CASIO計算機-991ES PLUS', '計算機', 650, 711, 0),
(712, 'CASIO計算機-991ES PLUS', '計算機', 650, 712, 0),
(713, 'CASIO計算機-991EX', '計算機', 1000, 713, 0),
(751, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 751, 0),
(752, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 752, 0),
(753, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 753, 0),
(754, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 754, 0),
(755, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 755, 0),
(756, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 756, 0),
(757, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 757, 0),
(758, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 758, 0),
(759, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 759, 0),
(760, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 760, 0),
(761, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 761, 0),
(762, '微電子電路學精解7.0版1-8章上冊', '電子學', 20, 762, 0),
(763, '微電子電路學精解7.1版1-8章上冊', '電子學', 50, 763, 0),
(764, '微電子電路學精解7.1版1-8章上冊', '電子學', 50, 764, 0),
(765, '微電子電路學精解7.1版1-8章上冊', '電子學', 50, 765, 0),
(766, '微電子電路學精解7.1版1-8章上冊', '電子學', 50, 766, 1),
(767, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 767, 1),
(768, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 768, 0),
(769, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 769, 0),
(770, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 770, 0),
(771, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 771, 0),
(772, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 772, 0),
(773, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 773, 0),
(774, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 774, 0),
(775, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 775, 0),
(776, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 776, 0),
(777, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 777, 0),
(778, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 778, 0),
(779, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 779, 0),
(780, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 780, 0),
(781, '微電子電路學精解7.1版9-17章下冊', '電子學', 50, 781, 0);
COMMIT;
";
if ($conn->query($sql) === TRUE) {
  echo json_encode([
        "success"=>1,
        "msg"=>"Table bookorder created successfully"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
        );
} else {
    $errorMessage = "Error creating table bookorder: " . $conn->error;
    echo json_encode([
        "success"=>0,
        "msg"=>"$errorMessage"
        ],JSON_UNESCAPED_UNICODE,JSON_FORCE_OBJECT
    );
}

$conn->close();
