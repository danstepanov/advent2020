"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemList = "4\n10\n17\n48\n18\n24\n14\n33\n6\n34\n47\n29\n2\n38\n45\n27\n40\n22\n43\n35\n49\n5\n1\n9\n3\n7\n15\n10\n4\n11\n8\n12\n75\n13\n6\n53\n14\n20\n23\n16\n52\n24\n27\n17\n18\n40\n57\n5\n19\n9\n21\n22\n33\n38\n45\n31\n35\n43\n25\n42\n26\n30\n53\n32\n48\n36\n39\n50\n71\n37\n14\n55\n54\n23\n40\n61\n44\n90\n94\n46\n45\n82\n58\n49\n56\n63\n68\n136\n87\n51\n127\n53\n59\n153\n77\n138\n79\n98\n74\n130\n114\n89\n91\n171\n209\n122\n121\n119\n100\n104\n152\n151\n110\n112\n125\n132\n127\n133\n156\n187\n153\n163\n165\n216\n241\n180\n191\n195\n204\n229\n226\n210\n212\n237\n360\n351\n328\n422\n239\n252\n580\n260\n289\n309\n316\n379\n423\n371\n403\n375\n390\n407\n399\n414\n436\n438\n449\n820\n476\n491\n785\n890\n684\n499\n794\n549\n569\n625\n680\n959\n1048\n746\n802\n866\n765\n789\n806\n813\n975\n1500\n1194\n998\n1278\n990\n1426\n1068\n1124\n1305\n1288\n1597\n1315\n1249\n1371\n1445\n1721\n2482\n1511\n1554\n1571\n1578\n1595\n1874\n3295\n2318\n2058\n2639\n1988\n2649\n2114\n3092\n3445\n2373\n2537\n3711\n4220\n4910\n3082\n3173\n2956\n3065\n3106\n4376\n3125\n3932\n7665\n3469\n3862\n7458\n6265\n4046\n5070\n4102\n4487\n4651\n6231\n5329\n6399\n6642\n6793\n6987\n8034\n6021\n6062\n14299\n10641\n7593\n9002\n6594\n7331\n7571\n7515\n12327\n8148\n8533\n8589\n12057\n10164\n15479\n9980\n14235\n11391\n12615\n16185\n12083\n12656\n13352\n13393\n21814\n16126\n20231\n23516\n13925\n14109\n14846\n16737\n17679\n18128\n25626\n22458\n27502\n24215\n21371\n22063\n22636\n24006\n23474\n44239\n28198\n25435\n34865\n26745\n31604\n28771\n30662\n50834\n32237\n28034\n31788\n31583\n40137\n35807\n39499\n43434\n43829\n44007\n45377\n44699\n45537\n62450\n76039\n54136\n70984\n57407\n53469\n54779\n90586\n58696\n68171\n59617\n59822\n60271\n63371\n67390\n75412\n75306\n88811\n134002\n90914\n87836\n88706\n120843\n142947\n115050\n107605\n108248\n108915\n120859\n110876\n112165\n114396\n122988\n118313\n196271\n120093\n127212\n127661\n130761\n142696\n150718\n163142\n199687\n273457\n205310\n230783\n221080\n215853\n216520\n217163\n336071\n219124\n261594\n358444\n223041\n293903\n232709\n238406\n245525\n247305\n346614\n254873\n258422\n438093\n293414\n368452\n386183\n428351\n421163\n438894\n807346\n434977\n555195\n435644\n480014\n442165\n680502\n591153\n468566\n679585\n1026199\n706972\n686773\n492830\n502178\n513295\n693767\n626874\n661866\n714577\n821827\n814534\n856140\n934995\n870621\n903543\n877142\n1421549\n993309\n972844\n1173332\n961396\n1497495\n970744\n1314657\n1015473\n1200068\n995008\n1487838\n1129052\n1529111\n1288740\n1341451\n1376443\n1536404\n1685155\n2616890\n1726761\n1747763\n1774164\n1838538\n1847886\n1965752\n2170812\n1943588\n2507148\n2309665\n2470503\n2010481\n2514725\n2144525\n2482846\n2124060\n4018698\n2976938\n3255872\n2630191\n2717894\n2912847\n3221559\n3474524\n3622050\n4565780\n4288889\n3944976\n3686424\n3791474\n3909340\n3954069\n4067648\n4640672\n4155006\n4268585\n4134541\n4606906\n4774716\n4754251\n7200848\n5348085\n6931007\n7567026\n9503091\n5630741\n6134406\n6696083\n7160948\n7308474\n8356537\n10237647\n7841430\n7477898\n7863409\n7976988\n8021717\n8909257\n8289547\n8403126\n8741447\n10102336\n10909122\n9528967\n10384992\n12509033\n15002378\n11765147\n15450495\n12326824\n14033867\n13612304\n14673071\n19817507\n15285462\n16130977\n15319328\n15341307\n15454886\n15840397\n19631303\n30626769\n17144573\n16692673\n24848295\n18270414\n19913959\n20438089\n31290892\n27794495\n24091971\n25377451\n28909720\n25939128\n29874264\n27646171\n28285375\n29958533\n30604790\n30660635\n30774214\n54752606\n39932368\n31295283\n32533070\n52642790\n40784644\n58568709\n68217743\n38184373\n38708503\n40352048\n44530060\n49469422\n50031099\n80717012\n54848848\n53585299\n54224503\n55931546\n57604704\n83134223\n69313293\n61265425\n73317714\n131886423\n109245661\n63828353\n79060551\n70717443\n76892876\n78536421\n99973928\n82714433\n83238563\n84882108\n70639851\n93999482\n99500521\n103616398\n107809802\n134545796\n124941946\n117196971\n130578718\n118870129\n125093778\n131905276\n131982868\n161250854\n146542786\n159607309\n140721229\n239792670\n147532727\n149176272\n153354284\n228558344\n153878414\n202622719\n178881590\n164639333\n285337152\n203116919\n211426200\n225006773\n236067100\n272626505\n375101130\n243963907\n285861282\n256999054\n279438003\n272704097\n287264015\n311182119\n302530556\n288253956\n296708999\n351798991\n428614275\n365304614\n318517747\n332760004\n611168230\n447080826\n367756252\n428123692\n583973014\n436432973\n461073873\n749611382\n500962961\n516668004\n773667058\n589794571\n529703151\n552142100\n559968112\n575517971\n584962955\n717103605\n683822361\n615226746\n1076480932\n746641439\n698064618\n651277751\n916733018\n1036591844\n1301753482\n864556665\n889197565\n1026227544\n897506846\n990777024\n1017630965\n1030666112\n1076636116\n1081845251\n1626386415\n1112110212\n1798948856\n1135486083\n1160480926\n1200189701\n1266504497\n1381886979\n1313291364\n1349342369\n1397919190\n1568010769\n1515834416\n1753754230\n1762063511\n1855333689\n1786704411\n2126263107\n1888283870\n1915137811\n2072622275\n2461452581\n2107302228\n2158481367\n2217331334\n2247596295\n3314783272\n4450269355\n2295967009\n2360670627\n2513481065\n2579795861\n6667600689\n2662633733\n2747261559\n3159982701\n3894006639\n5473264639\n3548767922\n4004035745\n8740222964\n3674988281\n4373859402\n3803421681\n3987760086\n4179924503\n4265783595\n7765052627\n6162517112\n4464927629\n4543563304\n4874151692\n4656637636\n4875762870\n7389243935\n7621413251\n5242429594\n5409895292\n7425766296\n8159790234\n6708750623\n8437569943\n8013695551\n10342441615\n7478409962\n11064232216\n10819154748\n11801337754\n8460059317\n8167684589\n8445708098\n8730711224\n19224022450\n9008490933\n9121565265\n15938469279\n15146320566\n12278050887\n10118192464\n15549034169\n11951180217\n13256125145\n12118645915\n14876435212\n14187160585\n14722446174\n16897629260\n15646094551\n15924118060\n29833255136\n16613392687\n16627743906\n31620075434\n16898395813\n33946468624\n17176419322\n19239757729\n18130056198\n19126683397\n21072745482\n22069372681\n27000497061\n22236838379\n35867501635\n24069826132\n25207305362\n32382808542\n32544490364\n32259487238\n66490958988\n30646564234\n49750131632\n31570212611\n32537510747\n33241136593\n33511788500\n38249164804\n34074815135\n36138153542\n36303102719\n51499244967\n64920319289\n37256739595\n40199428879\n43142118163\n73124241230\n124623486197\n46306664511\n49277131494\n54716390366\n56777517973\n62906051472\n62216776845\n63184074981\n63887700827\n64107723358\n64811349204\n65082001111\n115606968325\n66752925093\n67586603635\n105010778083\n70212968677\n72441256261\n79445220882\n77456168474\n80398857758\n89448782674\n126793752299\n92419249657\n95583796005\n101023054877\n103084182484\n116030056587\n127717400676\n119961592954\n125122828317\n145042772109\n127071775808\n127995424185\n128919072562\n129893350315\n131834926204\n134339528728\n136965893770\n147031824517\n239451074174\n142654224938\n166904951148\n156901389356\n169847640432\n172818107415\n181868032331\n198667978489\n223579220190\n196606850882\n204107237361\n219114239071\n243101832395\n330946379610\n245084421271\n252194604125\n343710750598\n270649649123\n376416967944\n260753998766\n438119052663\n271305422498\n276993753666\n279620118708\n289686049455\n380480609546\n299555614294\n353508240238\n326749029788\n434062636456\n516528858013\n378474883213\n610566498318\n400714088243\n522078174937\n578943633913\n550060618681\n488186253666\n670459780386\n547643402789\n589241663749\n531403647889\n537747752432\n532059421264\n765180007332\n548299176164\n918228361978\n579175733002\n569306168163\n616435079243\n680257270026\n957650616215\n1129004252594\n858808451052\n812537519669\n932117736132\n779188971456\n888900341909\n1158119366915\n1577717527001\n1158547831912\n1019589901555\n1020245674930\n1228556446190\n1063463069153\n2641180596154\n1127474909166\n1069807173696\n1080358597428\n1117605344327\n1706418543079\n1148481901165\n1185741247406\n1296692349269\n1395624050699\n2075881320725\n2074641589315\n1591726491125\n1671345970721\n2691591645651\n1995580805285\n1952363411062\n2275956810331\n2039835576485\n2083052970708\n2083708744083\n2523098959865\n2147720584096\n2266099844834\n4766233234966\n2187412518023\n2150165771124\n2303346591733\n2777467738531\n2266087245492\n2334223148571\n2445174250434\n2482433596675\n2692316399968\n2987350541824\n3937433216213\n3263072461846\n3544089902187\n4194444930586\n3947944216347\n4233218741832\n3992198987547\n4349152815542\n6124845734236\n6067188862052\n4231429328179\n4297886355220\n4335133102119\n5137516312948\n5321573690395\n4337578289147\n5111690887102\n4569433837225\n4600310394063\n4711261495926\n5708246712280\n6820011885822\n5745506058521\n5679666941792\n6250423003670\n7457517392432\n6807162364033\n7492034118534\n9656706792514\n7940143203894\n8223628315726\n11376596201258\n8672711391266\n9409577242322\n9475094602095\n10314939895746\n8633019457339\n10017245230939\n9921884084458\n18947959353085\n8907012126372\n13070434889492\n10308557106343\n14615258838652\n10390928437718\n14380958103546\n11425173000313\n11930089945462\n12486829305825\n19293991669858\n14264679756465\n16847155330266\n15715662434260\n21033302993772\n22321018383180\n18147805993361\n27140835434573\n19939129315397\n17540031583711\n24655608194183\n18554903541797\n18650264688278\n18828896210830\n19215569232715\n19297940564090\n22795386412168\n37852844105887\n24689515209889\n21816101438031\n22877757743543\n23355262945775\n23912002306138\n26194769701927\n26751509062290\n41528022431821\n37479160899108\n35497420018544\n33255694017971\n36094935125508\n35687837577072\n39356133021742\n36190296271989\n36368927794541\n36755600816426\n41706653954373\n37205168230075\n37865833920993\n45967078295005\n43905084442604".split(/\n/g);
exports.default = itemList;
