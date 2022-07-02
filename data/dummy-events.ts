import { EventItem } from '@/typings/event'
import Mock from 'mockjs'

// eslint-disable-next-line no-unused-vars
const arrayGen = <Fn extends (...args: any[]) => any>(
  template: Fn,
  count: number = 1,
): ReturnType<Fn>[] => {
  const res: ReturnType<Fn>[] = Array(count)
  for (let i = 0; i < count; i++) res[i] = template()

  return res
}

const { Random } = Mock

export const dummyEvents: EventItem[] = [
  {
    id: 'bd523b46-7eD3-d143-fdfb-37D415AD5224',
    date: '2022-10-21',
    description:
      '形处们电华两适信她该流过油维六南验。也时海消料老单力我属权意者院向。而战意术线广三务往土龙头区在想。火林什济导界间七装家究局了进越达思层。派各许就变认必是记料四拉具。为真再务拉较业从市教什系容接交政。需查平干电转代世克号往料电可般。关劳每切四不改须品半住将林走效维较。相查位率市十二单强们各老精。心头具满议等代往周行成活非统步调声。它容况备八治极出决期叫或日。活清务与权空合见龙己线各何构没。心真结目至研类群车声表示老际些命少。派有表格据见太二步发期三量管群。府世天思百分特后快把具照元路总记土。世金快把酸现好说并别连七形日们。步应保细与却那为族共千算全社取书往。持何名工识电科做果共教精么。感外权反术装素议即技油干须色是商里。太无与林五组运参少能置亲事也出象。列厂深议建光必改基越部主。些车度专局文石图基值利今口红明最来。东压社上片专说业影七最红那四制。你干文见术具做不候只千水人组老两作。结治们具外具选县解清色生办划。公二团其切备民江制万式传应易生。',
    image: 'http://dummyimage.com/200x100/79f2b9/f29679&text=Mock.js',
    location: '安庆市',
    title: '断必对习',
  },
  {
    id: '888Ea420-2b6A-deE9-B4BC-C5AbEeaabb66',
    date: '2022-11-21',
    description:
      '度感劳没族身目界这克成院没正响资。适走公我信状按毛满西装那调明百。土如队生规位她学圆第理以切该。山员须所代织基三消做何风火。原存条细克电目青响白称气团法全列。素拉能东般头知响委严什条下要证状总严。认历车加两品当转石论布新基铁感出。为低无走那斯程度育情育导越般。回加术权满效教小空高几然点交养。多度指空院路效做连织头管说根。法统照律但联酸层看改战通所支。研安报主验间革验明十会复新。际头置建始族江步话消装存世型照保式率。电离农始人金产划维儿内八本我东特。参信酸十中观决容产快好区候构中自。条型领活两工选争且南布布。联快适即别日政实该型地精区置须白计设。军算重基动据约做精再效别代。至定使细物院复入受省性该气值文记人圆。即拉光和装此或四平照设关。据色传者持国认这严型增气又层。确空完王满备四同军连者平一我劳压始。始各制所式六车认你党给向运元转最。',
    image: 'http://dummyimage.com/200x100/797ef2/a2f279&text=Mock.js',
    location: '临汾市',
    title: '原县验较',
  },
  {
    id: '617182a2-D4a2-7ccb-49FE-2FE1DbDeBDAA',
    date: '2022-02-21',
    description:
      '值最利具再几然每较电值部机集。只线身市清条要住身九除变别示。日便式民联条大马情而外写水解说江。开化人音南义山精提国果经影边非。她重音院联术况难被如类放细青。者需光约置再该法单思称低路。品自现合打听文照线照或省矿东集地公法。力装做高接道许革便月查专志把再再件。然年思金持不直华最需劳部。近先后属们划革是接于级复不位。手争合验成易务定主她列验日。圆总能被力叫青政适什出六农率做少。能果设存需则经除应者存积约去这样。用历员点候观三技必开车原快热养价。复水道们物要水起上属年红。出示合总你保立被等求解还引手花记。要已看写实般合开许当一养体很。见却义参拉事七后布规明事格。金装少广己提所速有直月此员之完。圆党里张斯价空解造不果更极人革后完。无求过量传常思出向量离传第没。精解年二由阶节论代如带第因成只。术中东月们月料半期应加式单则者能管题。就江其领转各角需酸划适然期价克经。求计点议作叫特养前切调空克利青风更。人压并在据办知论用年正青除。四保层专本广铁专步就这海布类写。当千研科反把形我活共技识更口。百会且集于海包资压建期织即以习量日。米联中水空查电几说任社这天组。来除合转点原商命例便果器议据江总在。化没还类构千称难老十义天研小强东候。存交社就公在信机组资统内位先信写对。正以例林况五而动现到关内片。质办写们量红效强再局对内先些农情。发料集际直际山书传最回能总。分品省却层说是她最到计石断红集元。成备据正回规计才热飞们样队想律。且革平例手每即政场治老法置非则越。音求府养须院根思切别始在习状参统。候交起该称求只红保素据周转立下达。历动圆去养则候会再然机查身般世增。声拉基证平花关天需天问及油声。不业反多需它心则安九感线体。按美高北江被圆必如些边府来。结验林复际飞利运划从家主。完共些到改我花治风济展拉改质江好心。劳县精界采斗月县委点这劳。',
    image: 'http://dummyimage.com/200x100/f279c5/79e9f2&text=Mock.js',
    location: '铜仁市',
    title: '争达切家',
  },
  {
    id: '3F8fACb4-bC5C-B7e0-4FfC-6c5fcc7b6495',
    date: '2022-08-21',
    description:
      '听步同且验个问得精公县算广。气起统术那家原员求同认多住。教很立级料易命联布力资问区太或。开反状集相建马必约民年统任院际自。生相电局感题政说争象县类积今律消。象三话置体内此支基使红至元部。知太越史来七格放划证六与直水。府十时标后二如对查上专离世技团华。书次头况使技能道品处明四去院。与六部相心也斗装压己化数它。明管可严小近四包车体器还却三变收。调南片料断数划文他团何市素儿。空细按育办温受亲可今国小。意书而须龙出产该也方严但技。气行十定海品且事己经把照任备。名合他量出次日石精作化族型什系领观。较保工段影么者须美公意月同步分论线。应称于太劳极南由种分件据。交从型那除平大院火南照公记率。则商必且强按中目研了率准们县革。值领却参组何第到离国新几标平口或题。第土东三养始为思局全正有接放并运。华产观价只料千离边能加义总命率。划花达运适部增土约持步济原我值入个。车那律养认龙提就里光放研的际往每情规。很决单形美须族世消相利光认般。圆律比点过包温没铁机进治火记运无号。空色科条派重水件他院所的前工。',
    image: 'http://dummyimage.com/200x100/f2d879/b479f2&text=Mock.js',
    location: '阳泉市',
    title: '对会传与',
  },
  {
    id: '2F22d4D4-E5ef-3Fc2-AC36-1F77d57bf1Bd',
    date: '2022-04-22',
    description:
      '决着要期放只出般处也得解整算。选品影联则料毛一北品速非受法感维结也。将生那达细那公低东能上深体。资志真手引者建步通划群一带毛准。机快布子选过什次备给片后真。万从制圆么克七求料标内导便能斯合越率。火干些样意有取须路主资政专离。色火力然原要体务边九争装性。平组体农至上深速联采后示都共装话。比什即百例记做然面重油织常知还。即问对商生候时具军住儿府色情导。非对理写须委系身你去积山。接军但权代步人是九着因县月类么满需。门流厂省种生准二教平线变作记构工成。音道你么收新共织热空代确国即儿。济实型听布认去于现必代经合广水。意根关山那值收近持带是色话建。本新争较造装先知府教建最五问却。目满压由半我片果下开活记同儿办政历。格太单美斗保层变到群院积收。样信叫打该族造界情过便点发合压整交走。要空片复需们但必受回进科过决及量价空。技指各象书资科别国区据十厂我。集程求始二关动了说定定转例东身。法段社权日往矿眼理切品经研金线队由。写年组使表对有这来平周见面价真志。近知非群产本铁号研就权积。了从问目家历位油白非完别角各斯。京把同己标放界亲细历平理北是张张。形干但历第这接两接人即示严。便长积体话组月光长广共必。量建改会合白可类学美研受但响运细法。具据较布名根商式子商如太联量。又风色相取式每线代已里选器情。百过六这片易般属物美使再美知展示系片。斯正布压象志导入子张战格领说需。养状最引酸适价状新看结水不比中。好出们又素照计段要求响通员身作改素重。速角济半发产斗天解知回头值列能约也。三布将入较证长走但说老万育。利华温红构十头身类地劳明们其所通速。北包地中保件劳然委断却省叫集红电。月且知我解压加理去世是员计看制亲。规族动并信收按意半界见感作。度料毛合几入队人克半置院认整战。济专界报四属者命处国技时展了。参阶例圆内类快原数格接时机被别及院型。世层场群过进然大各形明区点却取。列总住育基市向目直战亲军说。',
    image: 'http://dummyimage.com/200x100/79f291/f27984&text=Mock.js',
    location: '济南市',
    title: '千市花江',
  },
  {
    id: 'deA458E7-C322-e8e4-49Bf-DFf037e22a61',
    date: '2021-06-22',
    description:
      '较报老铁七条专拉起公与改众。研名他行精易快科压精须却家断术使导。利方共品四大书阶存离化千道么统。它火变铁石叫活写即省具场后人白部联。律离重口亲明又位而院速联解力。本术五对种真结总具百给基意带。了于断过约但数选拉先子国。会目传等切始己一有平最片场律物报等。比日圆去光热何还记等直两号片。见求专拉提习直料除点素住常和改。便书真正带包共识通需细下住根员厂程。品计建应须六育业带的学府油进。西件而低通及子以眼元间当者。他关者色青无数育年做建团型。界她众信交机而开引三济南高全处清。军及因商问指出道万边一命级处族二例。就况示按教门么基被况及场活变如。质写住处来办理种地指这育被有就。七长在说效条它件界安系形叫事调方东。走温群来成正最地书常些手严质应各。运族造斗写手线共听上量先美。型导日研进究件或条代色角关先并眼群。其接但那约克因太都场起品器与内总子。化红般必可往面老用家据身点指。根电做常京构需研连局花易越。事里走种必问比委他日起她济做便去很。没分年适果气目回西认那没子府行。',
    image: 'http://dummyimage.com/200x100/79a7f2/caf279&text=Mock.js',
    location: '海西蒙古族藏族自治州',
    title: '运八土科',
  },
  {
    id: 'A1aEeCaB-4bcE-46fb-6B27-F4eBbe7eFbf6',
    date: '2021-02-24',
    description:
      '理价金局达被命听类主声少位。开好于速反将长安识内毛选向出会。派约包务了增是都压接报道容适毛。治北角府青前风格次处斯况你样。节党查除响地采厂志张了具。专究理团物变白离全一家条可。容那连单然水号什便利最争主体至政者厂。低低没合矿千置马还道得即选林。或华种管想情事了农部所级最共。况往际近见加决七油世清说多。前合头热物市由教该共方影六没候满速完。改到真华不米年发认名求石路毛。毛南族题所维七深任再结断学委想民。造影反子关三研收商三品省。受理号住出己能成王传空过件置。组近信构命生队权用做步划时写者任。规加难信层阶先力统江织为效它间。主率际听际目身林正文精外。维带手后认记给头养斯儿细查结规电。往一过起际风年员格米东资十合。保做群地便把场界片极清才情结先。率石无格区两军化外几其关每就采存。着传达值问层月面使将中列斗她除书。红温式该设相过备们进心议系实儿转分。现者百农劳想因具美务济才名当各治青。志八样响值风党政外求亲增美素名。本月除连是政着权育有就飞压王进三自。进里习除保数车农思民实任问。',
    image: 'http://dummyimage.com/200x100/f279ee/79f2d2&text=Mock.js',
    location: '沧州市',
    title: '法前种门',
  },
  {
    id: '50E7772C-b6eE-fFAe-fC4C-3d5BCDbcC3FB',
    date: '2021-04-24',
    description:
      '布合理极北得识车具志素毛快果与又市。制或长十多变料世要人度率于。实是列须格比己取情些严极。世如位那它正利及发命音信一约复重。海九基能七国第基选许选发包是理结。正特些队先情须除出查位响去除。厂约思然压处四下离属务商消家。适率济且指本日元空需思三易我。维更众活原除说果油种八表备满队。也基传合且色识过区验文程用做北。型这革制子满心石史写入命特照在还。九议治军没布转第适所好接志基变音。技产调名维克大格品技种外况圆。深情人们位圆办美红压代党起江在由农。称图联离前质什月支且亲体决反。准会金始节成美常何及有每直感。织你可在或级反只用天向受厂里张还象。证被区看论人步间大听温带运此。心眼照况结上由被等山天变以断压住团。石三边动根再求比领行内据产。影科具这面最研党也权与界干近看相管。府型体属己场期局专装成通。格历走完受委决量必解直民少上给合如。石好万十参是认议说生着构义号同。养于容始证着效做决石县用信。须感压风形各形达石报运原因工列群近。表且经便效研而表许走备性要众断往米因。样题建标标她至电权马见住想青精。热安关做存万史长装同近全文。严极真运这空却专话求目周再影率。起受断极一图算先音按义精前比金世集不。少规新满则节构周民务现心地元分去。制身五准响之行及共持度术办边业价。有常各治今发般行历出其至数义条己听从。按离江从问切各民老科响称市规列作真运。期局然义从工声质备交号给规意。叫社安装已育号中半六江百十众。需观次查比机快所究几长需工示值。',
    image: 'http://dummyimage.com/200x100/f2af79/8c79f2&text=Mock.js',
    location: '钦州市',
    title: '社上相无',
  },
  {
    id: 'Bb4eEFB2-62a2-27f4-D7bC-e7b95b0bA26c',
    date: '2021-09-24',
    description:
      '报点体果消较算队究因将设。点省声数起平整叫级二路报华当并集省。张信属转成并反往几美被数拉号干火。业半代受争史周解证公圆里断因。常基适素原说地十第常九劳起。四约定派研什眼广例容平交。养法专着研热层看眼边北约边军除将儿。公称军住接元精给支从过强争五。音能法化千要共三人活太风住。该步金但据治开往了织产维。九带道大得回任不那单质已持照行元此成。便基放增有统行道价门于类共引。由府金却以规便论革在接拉维之工。外始法成记几美即就今快方切。更许果列县开声查性它马律儿才。不前题改业济时这或果深风十手派写今。论如从率必十支油层看众新志。学育江同叫需合果决民选农除海。研易争个合再料色品院度写史议。角认器广根温任科志样器周联才。他油式示习选报质设步来民以很保阶确。党类此农全易建办义常近道格技识头素。步几厂四标而通作农消说须车确集。同精难我问决书部议质则阶志法。油总阶眼市用选和图出题过值变写住。过统什往新属完场上志造产己最。集个划之七对是构术平真着最作不片。并元级酸进区志业验适制新计今周。省劳空子教多无只已团接拉书。',
    image: 'http://dummyimage.com/200x100/89f279/f279ac&text=Mock.js',
    location: '中山市',
    title: '总眼列回',
  },
  {
    id: '1C2AD94d-CAa7-83aF-7Bd5-dFE47839EEcB',
    date: '2021-11-24',
    description:
      '业已样去查集市技时标广头量平。增价本电才色员包织导干江便常毛。力传样九管家样压周支月法片得。发社下提内流南规关低就马系市。日几习量民运价省育状着算子运。干争口面声称处太些用看江体离律导。况外电律平整治而土之级毛技。火消记运改石办接般么证何科史电合。据人参将的相需矿十油府料酸文样被压。消观先节明会体写好近发方极设。现便向压分放主着交七状过并。心公断老类公温式步看回装。美料些线气条质极百由天龙切拉。花社军型复主商省加其做存。此来性海会数造离除路么主议。高低比识率叫据很放西华位被件持导。约通内米收单采立向起入习为。起再着权选正造情往又就议出。千断群深到完声商会温战装向制。太美路节少改本包听去律响风太格根金节。认究象知四连指极度流圆回。了书即龙阶三九治把有手采结参外节安毛。格林报起是效作较具产表争革领么万些。先线酸务上表件两属家次品以改。义变理算想安即青元率水么力变持。个产起量复受即名一应京们江无务话类。认圆场条位由管存它后京门太步照式。更报信动养海江先决感油报想度管区。结再加感场我压立导走间法象又号细东压。联后形至出则完放许且九细型际边表。清心技族最命始火不路是受系。代线便改起料第力织为方段现加集七速力。状习化对后事华真打却米教非感引习来。正天合列存大务就生想队质为品使。',
    image: 'http://dummyimage.com/200x100/79cff2/f2f179&text=Mock.js',
    location: '蚌埠市',
    title: '求极半相',
  },
]

export function findEventById(id: string) {
  return dummyEvents.find(item => item.id === id)
}
