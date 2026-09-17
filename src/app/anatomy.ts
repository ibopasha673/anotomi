export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'İskelet',color:'#e2d9ba',description:'Kemikler vücudun taşıyıcı iskeletini oluşturur, organları korur ve kaslara tutunma noktaları sağlar. İç dokuları ayrıca mineral depolar ve kan hücreleri üretir.'},
 {id:'muscular',name:'Kaslar',color:'#a85b50',description:'İskelet kasları, tutundukları noktaları çekerek hareket üretir. Kirişlerle birlikte eklemleri hareket ettirir, duruşu dengede tutar ve ısı üretir.'},
 {id:'cardiac',name:'Kalp',color:'#b96760',description:'Kalp, dört odacıklı kaslı bir pompadır. Kapakları, kanı pulmoner ve sistemik dolaşım boyunca ileri yönde yönlendirir.'},
 {id:'sensory',name:'Duyu Organları',color:'#b0c8ce',description:'Bu yapılar görme, işitme ve denge gibi özel duyulara katkıda bulunur. Özelleşmiş dokuları uyaranları algılar ve bilgiyi iletmek için sinir sistemiyle birlikte çalışır.'},
 {id:'arterial',name:'Atardamarlar',color:'#c05245',description:'Kalp, kanı dolaşım boyunca pompalar. Atardamarlar kanı kalpten dokulara, ya da pulmoner dolaşımda akciğerlere taşır.'},
 {id:'venous',name:'Toplardamarlar',color:'#527c9f',description:'Toplardamarlar kanı kalbe geri taşır. Yüzeysel ve derin ağlar dokulardan kan toplar; pulmoner venler akciğerlerden oksijenli kanı geri getirir.'},
 {id:'nervous',name:'Sinir Sistemi',color:'#d8b565',description:'Beyin, omurilik ve çevresel sinirler sinyalleri taşır ve işler. Duyum, hareket, koordinasyon ve vücut işlevlerinin otomatik düzenlenmesini destekler.'},
 {id:'respiratory',name:'Solunum',color:'#b98991',description:'Hava yolları havayı akciğerlere taşır; burada oksijen ve karbondioksit hava ile kan arasında yer değiştirir. Nefes alma, solunum kaslarının oluşturduğu basınç değişimlerine bağlıdır.'},
 {id:'digestive',name:'Sindirim',color:'#b8916b',description:'Sindirim sistemi besinleri parçalar, besin maddelerini ve suyu emer, atığı ileri taşır. Yardımcı organlar safra ve sindirim enzimleri sağlar.'},
 {id:'urinary',name:'Boşaltım',color:'#b47961',description:'Böbrekler kanı süzer, sıvı, elektrolit ve asit-baz dengesini düzenler. İdrar, üreterler yoluyla mesaneye ulaşır ve üretradan dışarı atılır.'},
 {id:'lymphatic',name:'Lenfatik',color:'#879f7c',description:'Lenf damarları fazla doku sıvısını dolaşıma geri döndürür. Lenf düğümleri ve diğer lenfoid organlar bağışıklık gözetimini ve yanıtlarını destekler.'},
 {id:'endocrine',name:'Endokrin',color:'#c5a09a',description:'Endokrin organlar, metabolizma, büyüme, stres yanıtları ve üreme gibi süreçleri koordine etmek için kana hormon salgılar.'},
 {id:'reproductive',name:'Üreme',color:'#bda098',description:'Burada gösterilen erkek üreme yapıları, sperm üretimi, olgunlaşması, taşınması ve cinsiyet hormonlarının üretimine katkıda bulunur.'},
 {id:'integumentary',name:'Vücut Yüzeyi',color:'#ba9b7d',description:'Vücut yüzeyi dışa dönük bir anatomik referans sağlar. Örtü sistemi koruyucu bir bariyer oluşturur, duyum ve sıcaklık düzenlemesine katkıda bulunur.'},
 {id:'connective',name:'Bağ Doku',color:'#aec3bb',description:'Kıkırdak, bağlar ve diğer bağ dokuları yapıları destekler, birbirine bağlar ve ayırır. Eklemleri sabitlemek ve mekanik yükleri dağıtmak bu dokuların görevleri arasındadır.'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export type CrossAxis = 'none'|'top'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number;cross:CrossAxis;crossAmount:number;crossInvert:boolean;highlightColor:string|null}
export const HIGHLIGHT_COLORS:{id:string;label:string;hex:string}[] = [
 {id:'teal',label:'Turkuaz',hex:'#6bd9c7'},
 {id:'red',label:'Kırmızı',hex:'#e0483e'},
 {id:'orange',label:'Turuncu',hex:'#e0923e'},
 {id:'yellow',label:'Sarı',hex:'#e0c23e'},
 {id:'green',label:'Yeşil',hex:'#4caf6e'},
 {id:'blue',label:'Mavi',hex:'#4a90d9'},
 {id:'purple',label:'Mor',hex:'#9b6bd9'},
];
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
// Anahtarlar atlas verisindeki İngilizce/Latince yapı adlarıyla eşleşir (küçük harf) — bunlar değiştirilmez.
// Açıklama metinleri Türkçedir.
export const EXPLANATIONS:Record<string,string> = {
 'heart':'Göğüste bulunan kaslı bir pompa. Sağ tarafı kanı akciğerlere, sol tarafı ise kanı sistemik dolaşıma gönderir.',
 'liver':'Diyaframın sağ tarafının altında yer alan büyük bir organ. Emilen besinleri işler, safra üretir ve kanda taşınan birçok proteini sentezler.',
 'brain':'Sinir sisteminin merkezi organı. Birbirine bağlı bölgeleri algı, hareket, hafıza, dil ve vücut işlevlerinin düzenlenmesini destekler.',
 'stomach':'Yemek borusu ile ince bağırsak arasında yer alan kaslı bir odacık. Besinleri asit ve enzimlerle karıştırıp depolar, ardından onikiparmak bağırsağına gönderir.',
 'spleen':'Karnın sol üst kısmında yer alan lenfoid bir organ. Kanı süzer, yaşlanan kan hücrelerini temizler ve bağışıklık yanıtlarına katılır.',
 'pancreas':'Hem sindirim hem endokrin görevleri olan karın içi bir organ. İnce bağırsağa enzim sağlar, insülin ve glukagon gibi hormonlar salgılar.',
 'urinary bladder':'Böbreklerden üreterler yoluyla gelen idrarı depolayan, pelviste yer alan kaslı bir hazne.',
 'trachea':'Gırtlağı bronşlara bağlayan ana hava yolu. Kıkırdak halkaları, nefes alırken hava yolunun açık kalmasını sağlar.',
 'diaphragm':'Göğüs ile karın boşluğunu ayıran geniş bir kas. Kasıldığında göğüs hacmini artırarak akciğerlere hava çekilmesine yardımcı olur.',
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
// Yaygın aranan yapılar için Türkçe ad + gerçek Latince (Terminologia Anatomica) karşılığı.
// Anahtarlar atlas verisindeki İngilizce adla eşleşir (küçük harf). Sözlükte olmayan yapılar orijinal adıyla gösterilir.
export const STRUCTURE_NAMES:Record<string,{tr:string;latin?:string}> = {
 'heart':{tr:'Kalp',latin:'Cor'},
 'brain':{tr:'Beyin',latin:'Cerebrum'},
 'liver':{tr:'Karaciğer',latin:'Hepar'},
 'stomach':{tr:'Mide',latin:'Gaster'},
 'spleen':{tr:'Dalak',latin:'Lien'},
 'pancreas':{tr:'Pankreas',latin:'Pancreas'},
 'urinary bladder':{tr:'İdrar Kesesi',latin:'Vesica Urinaria'},
 'trachea':{tr:'Soluk Borusu',latin:'Trachea'},
 'diaphragm':{tr:'Diyafram',latin:'Diaphragma'},
 'kidney':{tr:'Böbrek',latin:'Ren'},
 'left kidney':{tr:'Sol Böbrek',latin:'Ren Sinister'},
 'right kidney':{tr:'Sağ Böbrek',latin:'Ren Dexter'},
 'lung':{tr:'Akciğer',latin:'Pulmo'},
 'left lung':{tr:'Sol Akciğer',latin:'Pulmo Sinister'},
 'right lung':{tr:'Sağ Akciğer',latin:'Pulmo Dexter'},
 'esophagus':{tr:'Yemek Borusu',latin:'Oesophagus'},
 'small intestine':{tr:'İnce Bağırsak',latin:'Intestinum Tenue'},
 'large intestine':{tr:'Kalın Bağırsak',latin:'Intestinum Crassum'},
 'colon':{tr:'Kolon',latin:'Colon'},
 'gallbladder':{tr:'Safra Kesesi',latin:'Vesica Biliaris'},
 'thyroid gland':{tr:'Tiroid Bezi',latin:'Glandula Thyroidea'},
 'femur':{tr:'Femur (Uyluk Kemiği)',latin:'Femur'},
 'tibia':{tr:'Tibia (Kaval Kemiği)',latin:'Tibia'},
 'fibula':{tr:'Fibula (Baldır Kemiği)',latin:'Fibula'},
 'humerus':{tr:'Humerus (Pazu Kemiği)',latin:'Humerus'},
 'radius':{tr:'Radius (Önkol Kemiği)',latin:'Radius'},
 'ulna':{tr:'Ulna (Dirsek Kemiği)',latin:'Ulna'},
 'skull':{tr:'Kafatası',latin:'Cranium'},
 'vertebra':{tr:'Omur',latin:'Vertebra'},
 'pelvis':{tr:'Pelvis (Leğen Kemiği)',latin:'Pelvis'},
 'scapula':{tr:'Kürek Kemiği',latin:'Scapula'},
 'clavicle':{tr:'Köprücük Kemiği',latin:'Clavicula'},
 'sternum':{tr:'Göğüs Kemiği',latin:'Sternum'},
 'rib':{tr:'Kaburga',latin:'Costa'},
 'aorta':{tr:'Aort',latin:'Aorta'},
 'larynx':{tr:'Gırtlak',latin:'Larynx'},
 'pharynx':{tr:'Yutak',latin:'Pharynx'},
 'tongue':{tr:'Dil',latin:'Lingua'},
 'eye':{tr:'Göz',latin:'Oculus'},
 'ear':{tr:'Kulak',latin:'Auris'},
 'testis':{tr:'Testis',latin:'Testis'},
 'ovary':{tr:'Yumurtalık',latin:'Ovarium'},
 'uterus':{tr:'Rahim',latin:'Uterus'},
 'prostate':{tr:'Prostat',latin:'Prostata'},
};
export function displayName(name:string):{primary:string;secondary?:string}{
 const t=STRUCTURE_NAMES[name.toLowerCase()];
 return t?{primary:t.tr,secondary:t.latin}:{primary:name};
}
