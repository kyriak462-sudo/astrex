import type { CourseSeed } from "./types";

export const COURSE_TR: CourseSeed = {
  slug: "put-treydera",
  title: "Trader Yolu",
  description:
    "Piyasanın temel kavramlarından sanal hesapta pratik yapmaya uzanan yapılandırılmış bir yol.",
  modules: [
    {
      title: "Trading'in Temelleri",
      lessons: [
        {
          slug: "chto-takoe-treyding",
          title: "Trading nedir",
          summary: "Yatırım ile trading arasındaki fark, piyasanın temel katılımcıları.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Trading, fiyat değişiminden kazanç elde etmek amacıyla finansal varlıkların (kripto paralar, hisse senetleri, dövizler) alınıp satılmasıdır. Bir varlığın yıllarca değer kazanması beklentisiyle elde tutulduğu klasik yatırımın aksine, trader fiyatın kendisinden — hem yükselişten hem de düşüşten — kazanç sağlar.",
            },
            {
              type: "paragraph",
              text: "Piyasada aynı anda farklı katılımcılar hareket eder: perakende traderlar (bireysel yatırımcılar), kurumsal yatırımcılar (fonlar, bankalar), market-maker'lar (likidite sağlayıcılar) ve algoritmik sistemler. Kimin, ne amaçla işlem yaptığını anlamak, fiyatın neden böyle hareket ettiğini açıklamaya yardımcı olur.",
            },
            {
              type: "list",
              items: [
                "Yatırımcı genellikle varlığı uzun süre elde tutar ve temel değere odaklanır",
                "Trader işlemleri daha sık açıp kapatır — dakikalardan haftalara kadar",
                "Trader, kısa (short) pozisyonlar aracılığıyla fiyat düşüşünden de kazanç sağlayabilir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Trading, uzun vadeli yatırımdan temelde nasıl farklıdır?",
              options: [
                "Trading yalnızca bankalara açıktır",
                "Trading, kısa vadeli ve sık işlemler içerir",
                "Trading risk içermez",
              ],
              correctAnswer: "Trading, kısa vadeli ve sık işlemler içerir",
            },
            {
              prompt: "Klasik yatırımcının aksine, kim bir varlığın fiyat düşüşünden de kazanç sağlayabilir?",
              options: ["Yalnızca market-maker'lar", "Kısa (short) pozisyon açan trader", "Yalnızca bankalar"],
              correctAnswer: "Kısa (short) pozisyon açan trader",
            },
            {
              prompt: "Market-maker'lar piyasada neyi sağlar?",
              options: ["Sabit varlık kuru", "Devlet düzenlemesi", "Diğer katılımcıların işlemleri için likidite"],
              correctAnswer: "Diğer katılımcıların işlemleri için likidite",
            },
          ],
        },
        {
          slug: "vidy-rynkov",
          title: "Piyasa türleri",
          summary: "Kripto, forex, hisse senedi ve emtia piyasaları — aralarındaki fark nedir.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Kripto piyasası hafta sonu dahil kesintisiz 7/24 işlem görür ve merkeziyetsizdir — fiyatı belirleyen tek bir borsa yoktur. Forex, devasa likiditeye sahip dünyanın en büyük döviz çifti piyasasıdır, ancak hafta sonları işlem saatleri kısıtlıdır. Hisse senedi piyasası, belirli borsaların takvimine göre çalışır ve sıkı bir şekilde düzenlenir. Emtia piyasaları (petrol, altın) ham madde arz ve talebinin gerçek dengesini yansıtır.",
            },
            {
              type: "list",
              items: [
                "Kripto: 7/24, yüksek volatilite, düşük giriş eşiği",
                "Forex: devasa likidite, haftada 5 gün işlem görür",
                "Hisse senetleri: şirketin işine bağlıdır, borsanın işlem saatleriyle sınırlıdır",
                "Emtialar (commodities): gerçek arz/talebe ve jeopolitiğe bağlıdır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Kripto piyasası hisse senedi piyasasından nasıl farklıdır?",
              options: ["Tamamen devlet tarafından düzenlenir", "Yalnızca hafta içi gündüz işlem görür", "Hafta sonu dahil 7/24 çalışır"],
              correctAnswer: "Hafta sonu dahil 7/24 çalışır",
            },
            {
              prompt: "Forex piyasasında ne işlem görür?",
              options: ["Şirket hisseleri", "Emtialar", "Döviz çiftleri"],
              correctAnswer: "Döviz çiftleri",
            },
            {
              prompt: "Sayılan piyasalardan hangisi genellikle en yüksek volatiliteye sahiptir?",
              options: ["Devlet tahvili piyasası", "Kripto para piyasası", "G7 döviz çiftleri"],
              correctAnswer: "Kripto para piyasası",
            },
          ],
        },
        {
          slug: "kak-chitat-grafik",
          title: "Grafik nasıl okunur",
          summary: "Eksenler, zaman dilimleri, açılış/kapanış fiyatı.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Fiyat grafiğinde dikey eksende varlığın fiyatı, yatay eksende ise zaman gösterilir. Her veri noktası (mum veya bar), seçilen dönem için açılış fiyatını, kapanış fiyatını, en yüksek ve en düşük değeri içerir — buna zaman dilimi (timeframe) denir.",
            },
            {
              type: "paragraph",
              text: "Zaman dilimi, grafikteki tek bir öğenin temsil ettiği zaman aralığıdır: dakika, saat, gün, hafta. Zaman dilimi seçimi trading tarzına bağlıdır: scalper'lar dakikalık grafiklere, swing trader'lar ise saatlik ve günlük grafiklere bakar.",
            },
            {
              type: "list",
              items: [
                "Çizgi grafik — en basit türdür, yalnızca kapanış fiyatını gösterir",
                "Mum grafiği — open/high/low/close değerlerini gösterir, traderlar arasında en popüler olanıdır",
                "Bar chart — mum grafiğine benzer ama görsel olarak daha az açıktır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Fiyat grafiğinin dikey ekseninde ne gösterilir?",
              options: ["Varlığın fiyatı", "Trader sayısı", "İşlem hacmi"],
              correctAnswer: "Varlığın fiyatı",
            },
            {
              prompt: "Zaman dilimi (timeframe) nedir?",
              options: [
                "Bir borsanın adı",
                "Grafikteki tek bir öğenin temsil ettiği zaman aralığı",
                "Bir emir türü",
              ],
              correctAnswer: "Grafikteki tek bir öğenin temsil ettiği zaman aralığı",
            },
            {
              prompt: "Traderlar neden aynı anda birden fazla zaman dilimini analiz eder?",
              options: [
                "Hem trendin genel resmini hem de doğru giriş noktasını aynı anda görmek için",
                "Borsa komisyonlarından kaçınmak için",
                "Bunun pratik bir anlamı yoktur",
              ],
              correctAnswer: "Hem trendin genel resmini hem de doğru giriş noktasını aynı anda görmek için",
            },
          ],
        },
        {
          slug: "svechnoy-analiz",
          title: "Mum analizi",
          summary: "Japon mumunun anatomisi ve temel mum formasyonları.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Japon mumu, traderların fiyatı görselleştirmek için kullandığı temel araçtır. Gövde (açılış ve kapanış fiyatı arasındaki aralık) ile üst ve alt gölgelerden/fitillerden (dönem içindeki en yüksek ve en düşük fiyat) oluşur. Yeşil (boğa) mum, kapanışın açılıştan yüksek olduğunu; kırmızı (ayı) mum ise tam tersini gösterir.",
            },
            {
              type: "paragraph",
              text: "Tek bir mum bile alıcılarla satıcılar arasındaki mücadelenin hikayesini anlatır: uzun bir gövde kararlı bir hareketi işaret ederken, uzun gölgeler fiyatın karşı yöne doğru aktif biçimde \"geri itildiğini\" gösterir.",
            },
          ],
          questions: [
            {
              prompt: "Mumun gövdesi neyi gösterir?",
              options: [
                "Piyasa katılımcısı sayısı",
                "Açılış ve kapanış fiyatı arasındaki aralık",
                "Maksimum işlem hacmi",
              ],
              correctAnswer: "Açılış ve kapanış fiyatı arasındaki aralık",
            },
            {
              prompt: "Mumun gölgeleri (fitilleri) neyi gösterir?",
              options: [
                "Gün içindeki işlem sayısını",
                "Gövdenin dışındaki fiyat aralığını — dönem içindeki en yüksek ve en düşük değeri",
                "Ortalama işlem hacmini",
              ],
              correctAnswer: "Gövdenin dışındaki fiyat aralığını — dönem içindeki en yüksek ve en düşük değeri",
            },
            {
              prompt: "Fiyat düşüşünden sonra oluşan uzun bir alt gölge neyin işareti olabilir?",
              options: [
                "İşlem hacmi sıfırdı",
                "Alıcılar fiyatı aşağıdan aktif biçimde satın aldı — bir dönüş mümkün",
                "Piyasa kesinlikle düşmeye devam edecek",
              ],
              correctAnswer: "Alıcılar fiyatı aşağıdan aktif biçimde satın aldı — bir dönüş mümkün",
            },
          ],
        },
        {
          slug: "podderzhka-i-soprotivlenie",
          title: "Destek ve direnç",
          summary: "Grafikteki kilit seviyeler nasıl bulunur.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Destek seviyesi, geçmişte alıcıların düşüşü defalarca durdurduğu fiyat seviyesidir. Direnç seviyesi ise tam tersine, satıcıların yükselişi durdurduğu fiyat seviyesidir. Bu seviyeler piyasanın \"hafızasını\" oluşturur: fiyat genellikle bunlara tekrar tekrar tepki verir.",
            },
            {
              type: "paragraph",
              text: "Önemli bir ilke: bir seviye kırıldıktan sonra genellikle rolünü değiştirir — eski direnç desteğe dönüşür ve tam tersi de geçerlidir. Güvenilir seviyeler tek bir noktaya değil, fiyatın birden çok temasına dayanılarak çizilir.",
            },
          ],
          questions: [
            {
              prompt: "Destek seviyesi nedir?",
              options: [
                "İşlem komisyonu",
                "Alıcıların tarihsel olarak düşüşü durdurduğu fiyat",
                "Borsanın açılış fiyatı",
              ],
              correctAnswer: "Alıcıların tarihsel olarak düşüşü durdurduğu fiyat",
            },
            {
              prompt: "Bir direnç seviyesi yukarı kırıldıktan sonra genellikle ne olur?",
              options: [
                "Fiyatın anında geri dönmesi gerekir",
                "Ortadan kaybolur ve fiyatı bir daha etkilemez",
                "Genellikle yeni bir destek haline gelir",
              ],
              correctAnswer: "Genellikle yeni bir destek haline gelir",
            },
            {
              prompt: "Grafikte güvenilir seviyeler nasıl doğru çizilir?",
              options: [
                "Tek bir noktaya değil, fiyatın birden çok temasına göre",
                "Yalnızca dakikalık zaman diliminde",
                "Kesinlikle grafiğin tam ortasına göre",
              ],
              correctAnswer: "Tek bir noktaya değil, fiyatın birden çok temasına göre",
            },
          ],
        },
        {
          slug: "trend-i-ego-struktura",
          title: "Trend ve yapısı",
          summary: "Yükselen, düşen ve yatay trend, high/low yapısı.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Yükselen trend, birbirini izleyen daha yüksek zirvelerden (Higher High) ve daha yüksek diplerden (Higher Low) oluşur. Düşen trend bunun aynası gibidir: Lower High ve Lower Low. Fiyat belirgin bir yön olmadan bir aralıkta hareket ettiğinde buna yatay trend veya flat denir.",
            },
            {
              type: "paragraph",
              text: "Trend yönünde işlem yapmak, ona karşı bir dönüş yakalamaya çalışmaktan istatistiksel olarak daha fazla başarı şansı sunar — bilinen \"trend senin dostundur\" kuralı buradan gelir.",
            },
          ],
          questions: [
            {
              prompt: "Yükselen trend neden oluşur?",
              options: [
                "Yalnızca art arda gelen yeşil mumlardan",
                "Birbirini izleyen daha yüksek zirveler ve diplerden",
                "Yüksekliği aynı olan mumlardan",
              ],
              correctAnswer: "Birbirini izleyen daha yüksek zirveler ve diplerden",
            },
            {
              prompt: "Yatay trend (flat) nedir?",
              options: [
                "Fiyatın keskin bir şekilde düşmesi",
                "Fiyatın belirgin bir yön olmadan bir aralıkta hareket etmesi",
                "Borsada işlemlerin durdurulduğu bir dönem",
              ],
              correctAnswer: "Fiyatın belirgin bir yön olmadan bir aralıkta hareket etmesi",
            },
            {
              prompt: "Neden \"trend senin dostundur\" denir?",
              options: [
                "Bu, pratik bir anlamı olmayan sadece bir söz öbeğidir",
                "Trend asla yön değiştirmez",
                "Trend yönünde işlem yapmak istatistiksel olarak daha fazla başarı şansı verir",
              ],
              correctAnswer: "Trend yönünde işlem yapmak istatistiksel olarak daha fazla başarı şansı verir",
            },
          ],
        },
        {
          slug: "obyom-i-likvidnost",
          title: "Hacim ve likidite",
          summary: "Hacmi neden takip etmeli ve piyasa likiditesi nedir.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "İşlem hacmi, bir dönem içinde ne kadar varlığın alınıp satıldığını gösterir. Yüksek hacimle desteklenen güçlü fiyat hareketleri, düşük hacimdeki aynı hareketlere kıyasla daha güvenilir kabul edilir.",
            },
            {
              type: "paragraph",
              text: "Likidite, bir varlığı fiyatını fazla etkilemeden hızlıca alıp satabilme yeteneğidir. Düşük likiditeli varlıklarda küçük bir işlem bile fiyatı ciddi şekilde hareket ettirebilir ve slippage'e — bir emrin beklenenden daha kötü bir fiyattan gerçekleşmesine — yol açabilir.",
            },
          ],
          questions: [
            {
              prompt: "Düşük işlem hacminde gerçekleşen bir fiyat yükselişi neyin işaretidir?",
              options: [
                "Bu, giriş için en güvenilir sinyaldir",
                "Varlığın likiditesi maksimum düzeydedir",
                "Hareket zayıftır ve doğrulanmamış olabilir",
              ],
              correctAnswer: "Hareket zayıftır ve doğrulanmamış olabilir",
            },
            {
              prompt: "Piyasa likiditesi nedir?",
              options: [
                "Bir varlığı fiyatını fazla etkilemeden kolayca alıp satabilme",
                "Borsanın işlem komisyonu",
                "Dolaşımdaki toplam coin miktarı",
              ],
              correctAnswer: "Bir varlığı fiyatını fazla etkilemeden kolayca alıp satabilme",
            },
            {
              prompt: "Düşük likiditeli bir varlıkla çalışan trader için tehlike nedir?",
              options: [
                "Garanti kâr",
                "İşlem gerçekleşirken büyük bir slippage yaşanması",
                "Komisyonların tamamen ortadan kalkması",
              ],
              correctAnswer: "İşlem gerçekleşirken büyük bir slippage yaşanması",
            },
          ],
        },
        {
          slug: "risk-menedzhment-osnovy",
          title: "Risk yönetimi: temeller",
          summary: "Pozisyon büyüklüğü, stop-loss, risk/kazanç oranı.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Risk yönetimi, profesyonel bir traderı bir kumarhane oyuncusundan ayıran şeydir. Stop-loss, piyasa beklentinin aksine hareket ettiğinde işlemin sınırlı bir zararla kapatıldığı, önceden belirlenmiş bir seviyedir.",
            },
            {
              type: "paragraph",
              text: "Deneyimli traderların çoğu tek bir işlemde depozitonun %1-2'sinden fazlasını riske atmaz — bu, tüm sermayeyi kaybetmeden bir dizi zararlı işlemi atlatmayı sağlar. Risk/kazanç (risk/reward) oranı, potansiyel kârın riski kaç kat aştığını gösterir: örneğin 1:3, kârın olası zarardan üç kat daha büyük olduğu anlamına gelir.",
            },
            {
              type: "list",
              items: [
                "Stop-loss, işleme girmeden önce belirlenir, sonra değil",
                "Pozisyon büyüklüğü, para cinsinden riskten yola çıkılarak hesaplanır, tersi değil",
                "Risk kontrolü olmadan kârlı bir strateji bile iflasa yol açabilir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Stop-loss neden gereklidir?",
              options: [
                "Kârı garanti etmek için",
                "Pozisyon büyüklüğünü artırmak için",
                "İşlemdeki zararı önceden sınırlamak için",
              ],
              correctAnswer: "İşlemdeki zararı önceden sınırlamak için",
            },
            {
              prompt: "Tek bir işlemde depozitonun genellikle yüzde kaçının riske atılması önerilir?",
              options: ["%25-30", "Depozitonun tamamı", "%1-2"],
              correctAnswer: "%1-2",
            },
            {
              prompt: "1:3 risk/kazanç oranı ne anlama gelir?",
              options: [
                "İşlem 3 saat sonra kapanacaktır",
                "Risk, kârdan 3 kat daha büyüktür",
                "Potansiyel kâr, riskten 3 kat daha büyüktür",
              ],
              correctAnswer: "Potansiyel kâr, riskten 3 kat daha büyüktür",
            },
          ],
        },
      ],
    },
    {
      title: "Teknik Analiz",
      lessons: [
        {
          slug: "skolzyashchie-srednie",
          title: "Göstergeler: hareketli ortalamalar",
          summary: "SMA ve EMA — trendi belirlemek için nasıl kullanılır.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Hareketli ortalama (Moving Average), seçilen dönem içindeki fiyatı yumuşatarak tek tek mumların \"gürültüsü\" olmadan genel trend yönünü görmeye yardımcı olur. SMA (basit hareketli ortalama) dönemdeki tüm fiyatlara eşit ağırlık verirken, EMA (üstel hareketli ortalama) son fiyatlara daha güçlü tepki verir.",
            },
            {
              type: "paragraph",
              text: "Fiyat hareketli ortalamanın üzerindeyken trend genellikle yükselen, altındayken düşen kabul edilir. Kısa ve uzun hareketli ortalamaların kesişmesi (örneğin MA50'nin MA200'ü aşağıdan yukarıya kesmesi) \"altın kesişim\" (golden cross) olarak bilinen popüler bir sinyaldir.",
            },
          ],
          questions: [
            {
              prompt: "SMA ile EMA arasındaki fark nedir?",
              options: [
                "Aralarında fark yoktur, ikisi aynı şeydir",
                "EMA, son fiyatlara daha fazla ağırlık verir",
                "SMA yalnızca dakikalık grafikte çalışır",
              ],
              correctAnswer: "EMA, son fiyatlara daha fazla ağırlık verir",
            },
            {
              prompt: "Fiyatın hareketli ortalamanın üzerinde olması neyin işaretidir?",
              options: ["Trend muhtemelen yükseliş yönündedir", "İşlem hacmi sıfırdır", "Varlık kesinlikle aşırı değerlenmiştir"],
              correctAnswer: "Trend muhtemelen yükseliş yönündedir",
            },
            {
              prompt: "\"Altın kesişim\" (golden cross) nedir?",
              options: [
                "Yeni bir coin'in listelendiği an",
                "Fiyatın sıfır çizgisini kesmesi",
                "Kısa MA'nın uzun MA'yı yukarı kesmesi — boğa sinyali",
              ],
              correctAnswer: "Kısa MA'nın uzun MA'yı yukarı kesmesi — boğa sinyali",
            },
          ],
        },
        {
          slug: "rsi-i-oscillyatory",
          title: "RSI ve osilatörler",
          summary: "Aşırı alım, aşırı satım, uyumsuzluklar (divergence).",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "RSI (Relative Strength Index), fiyat değişiminin hızını ve gücünü 0 ile 100 arasında bir aralıkta ölçen bir osilatördür. 70'in üzerindeki değerler genellikle aşırı alım bölgesi, 30'un altındaki değerler ise aşırı satım bölgesi olarak kabul edilir.",
            },
            {
              type: "paragraph",
              text: "Uyumsuzluk (divergence), fiyat ile RSI farklı yönlerde hareket ettiğinde ortaya çıkar: örneğin fiyat yeni bir zirve yaparken RSI yapmaz. Bu genellikle trendin zayıfladığına ve olası bir dönüşe dair erken bir uyarı olarak değerlendirilir.",
            },
            { type: "diagram", diagram: "rsi", caption: "Fiyat yeni bir zirve yaparken RSI yapmıyor — klasik bir düşüş diverjansı" },
          ],
          questions: [
            {
              prompt: "RSI göstergesi hangi aralıkta çalışır?",
              options: ["-1 ile 1 arasında", "0 ile 100 arasında", "0 ile 10000 arasında"],
              correctAnswer: "0 ile 100 arasında",
            },
            {
              prompt: "70'in üzerindeki bir RSI genellikle ne anlama gelir?",
              options: ["İşlem hacmi sıfıra düşmüştür", "Varlık satılamaz durumdadır", "Varlık aşırı alım bölgesindedir"],
              correctAnswer: "Varlık aşırı alım bölgesindedir",
            },
            {
              prompt: "RSI uyumsuzluğu (divergence) nedir?",
              options: [
                "Göstergenin teknik arızası",
                "Fiyat ve göstergenin farklı yönlerde hareket etmesi — olası bir dönüş sinyali",
                "Fiyat ve gösterge hareketinin tam olarak örtüşmesi",
              ],
              correctAnswer: "Fiyat ve göstergenin farklı yönlerde hareket etmesi — olası bir dönüş sinyali",
            },
          ],
        },
        {
          slug: "urovni-fibonachchi",
          title: "Fibonacci seviyeleri",
          summary: "Grafik analizinde Fibonacci düzeltmeleri ve uzantıları.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Fibonacci düzeltme seviyeleri (%23.6, %38.2, %50, %61.8, %78.6), bir dürtü hareketinin başlangıcı ile sonu arasında çizilir ve fiyatın trend devam etmeden önce geri çekilmeyi nerede durdurabileceğini tahmin etmeye yardımcı olur. Birçok trader %61.8 seviyesini kilit seviye olarak kabul eder.",
            },
            {
              type: "paragraph",
              text: "Fibonacci uzantıları, düzeltmelerin aksine, fiyatın ilk dürtünün ötesindeki hareket hedeflerini — yani fiyatın daha sonra nereye gidebileceğini — tahmin etmek için kullanılır.",
            },
          ],
          questions: [
            {
              prompt: "Birçok trader düzeltme için hangi Fibonacci seviyesini kilit olarak kabul eder?",
              options: ["%61.8", "%100", "%10"],
              correctAnswer: "%61.8",
            },
            {
              prompt: "Fibonacci düzeltmeleri ne için kullanılır?",
              options: [
                "Trend içindeki geri çekilmede giriş noktaları aramak için",
                "Haberlerin yayınlanacağı kesin zamanı belirlemek için",
                "Borsa komisyonunu hesaplamak için",
              ],
              correctAnswer: "Trend içindeki geri çekilmede giriş noktaları aramak için",
            },
            {
              prompt: "Fibonacci uzantıları ne için gereklidir?",
              options: [
                "İşlem hacmini göstermek için",
                "Stop-loss büyüklüğünü yüzde olarak belirlemek için",
                "Fiyatın dürtünün ötesindeki hareket hedeflerini belirlemek için",
              ],
              correctAnswer: "Fiyatın dürtünün ötesindeki hareket hedeflerini belirlemek için",
            },
          ],
        },
        {
          slug: "patterny-razvorota",
          title: "Dönüş formasyonları",
          summary: "Omuz baş omuz, çift tepe/dip.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "\"Omuz baş omuz\" (head and shoulders) formasyonu, yükselen bir trendin dönüşüne dair en bilinen sinyallerden biridir: fiyat, ortadaki (baş) diğer ikisinden (omuzlar) daha yüksek olan üç zirve oluşturur. Çift tepe/dip ise anlam bakımından benzer bir formasyondur ve birbirine yakın iki zirve veya çukurdan oluşur.",
            },
            {
              type: "paragraph",
              text: "Formasyon yalnızca \"boyun çizgisinin\" (neckline) — zirveler arasındaki yerel dipleri birleştiren seviyenin — kırılmasından sonra doğrulanmış sayılır. Hacimsiz bir kırılma çoğu zaman sahte çıkar.",
            },
          ],
          questions: [
            {
              prompt: "\"Omuz baş omuz\" formasyonu neyin sinyalini verir?",
              options: [
                "Yükselen trendin olası dönüşü",
                "Borsada işlemlerin durdurulması",
                "Yükselişin garanti devamı",
              ],
              correctAnswer: "Yükselen trendin olası dönüşü",
            },
            {
              prompt: "\"Çift tepe\" formasyonunun gerçekleştiğini ne doğrular?",
              options: ["Üçüncü bir zirvenin oluşması", "Boyun çizgisinin aşağı yönlü kırılması", "Hacmin tam zirvede artması"],
              correctAnswer: "Boyun çizgisinin aşağı yönlü kırılması",
            },
            {
              prompt: "Bir formasyonun kırılmasını doğrularken hacim neden önemlidir?",
              options: [
                "Hacim yalnızca günlük zaman diliminde gereklidir",
                "Hacim olmadan kırılma daha sık sahte çıkar",
                "Hacmin formasyonlar üzerinde hiçbir etkisi yoktur",
              ],
              correctAnswer: "Hacim olmadan kırılma daha sık sahte çıkar",
            },
          ],
        },
        {
          slug: "patterny-prodolzheniya",
          title: "Devam formasyonları",
          summary: "Bayraklar, üçgenler, dikdörtgenler.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Devam formasyonları — bayraklar, üçgenler, dikdörtgenler — mevcut bir trend içindeki bir duraklama veya konsolidasyonu temsil eder. Dönüş formasyonlarının aksine, çoğunlukla önceki hareket yönünde sonuçlanır.",
            },
            {
              type: "paragraph",
              text: "Fiyatın böyle bir konsolidasyondan çıkışı genellikle hacimde bir artışla birlikte görülür; bu da gerçek kırılımı sahte olandan ayırt etmeye yardımcı olur.",
            },
          ],
          questions: [
            {
              prompt: "\"Bayrak\" (flag) formasyonu en çok hangi yönde sonuçlanır?",
              options: ["Her zaman kesinlikle aşağı yönde", "Önceki trend yönünde", "Rastgele bir yönde"],
              correctAnswer: "Önceki trend yönünde",
            },
            {
              prompt: "Üçgenlerin, bayrakların ve dikdörtgenlerin ortak noktası nedir?",
              options: [
                "Her zaman dönüş sinyalidirler",
                "Yalnızca forex'te görülürler",
                "Trend içindeki duraklama/konsolidasyonlardır",
              ],
              correctAnswer: "Trend içindeki duraklama/konsolidasyonlardır",
            },
            {
              prompt: "Bir üçgenden gerçek bir çıkışa genellikle ne eşlik eder?",
              options: ["Hacimde bir artış", "İşlemlerin durdurulması", "Hacmin tamamen yok olması"],
              correctAnswer: "Hacimde bir artış",
            },
          ],
        },
        {
          slug: "multitaymfreym-analiz",
          title: "Zaman dilimleri ve çoklu zaman dilimi analizi",
          summary: "Farklı zaman dilimlerindeki sinyaller nasıl uyumlu hale getirilir.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Çoklu zaman dilimi analizi \"yukarıdan aşağıya\" bir yaklaşımdır: önce büyük zaman diliminde (örneğin günlük) genel trend belirlenir, ardından daha küçük zaman diliminde (örneğin saatlik veya 15 dakikalık) giriş noktası aranır.",
            },
            {
              type: "paragraph",
              text: "Büyük zaman dilimini görmezden gelmek, yeni başlayanların sık yaptığı bir hatadır: bir işlem 5 dakikalık grafikte mükemmel görünebilir, ama baskın günlük trende karşı gidiyor olabilir, bu da başarı şansını ciddi ölçüde azaltır.",
            },
          ],
          questions: [
            {
              prompt: "\"Yukarıdan aşağıya\" yönteminde analize genellikle hangi zaman diliminden başlanır?",
              options: ["Rastgele herhangi birinden", "Büyük zaman diliminden (örneğin günlük)", "Dakikalık zaman diliminden"],
              correctAnswer: "Büyük zaman diliminden (örneğin günlük)",
            },
            {
              prompt: "Çoklu zaman dilimi analizinde küçük zaman dilimi neden gereklidir?",
              options: ["İşleme doğru bir şekilde girmek için", "Borsa komisyonunu hesaplamak için", "Büyük zaman diliminin yerini tamamen almak için"],
              correctAnswer: "İşleme doğru bir şekilde girmek için",
            },
            {
              prompt: "Büyük zaman dilimi göz ardı edilirse ne olabilir?",
              options: [
                "Kârın otomatik olarak artması",
                "Hiçbir şey, bunun önemi yoktur",
                "Ana trende karşı işlem yapmak",
              ],
              correctAnswer: "Ana trende karşı işlem yapmak",
            },
          ],
        },
        {
          slug: "psikhologiya-treydera",
          title: "Trader psikolojisi",
          summary: "Duygu kontrolü, disiplin, işlem günlüğü.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Korku ve açgözlülük, trading stratejilerini en sık bozan iki duygudur. Korku, kârlı işlemleri çok erken kapatmaya veya piyasaya hiç girmemeye yol açar; açgözlülük ise bir pozisyonu plandan daha uzun tutmaya veya bir dizi başarılı işlemin ardından riski artırmaya iter.",
            },
            {
              type: "paragraph",
              text: "\"Revenge trading\", zararı analiz yapmadan bir dizi duygusal işlemle hemen telafi etmeye çalışmaktır ve depozitoyu eritmenin en hızlı yollarından biridir. İşlem günlüğü tutmak, hataları incelemeye ve zamanla disiplin kazanmaya yardımcı olur.",
            },
          ],
          questions: [
            {
              prompt: "\"Revenge trading\" nedir?",
              options: [
                "Borsanın komisyonu iade etmesi",
                "Zararı duygusal işlemlerle hemen telafi etme girişimi",
                "Hedge fonların resmi stratejisi",
              ],
              correctAnswer: "Zararı duygusal işlemlerle hemen telafi etme girişimi",
            },
            {
              prompt: "Trader neden bir işlem günlüğü tutmalıdır?",
              options: [
                "Hataları analiz etmek ve stratejiyi geliştirmek için",
                "Vergileri azaltmak için",
                "Bu, borsanın bir gerekliliğidir",
              ],
              correctAnswer: "Hataları analiz etmek ve stratejiyi geliştirmek için",
            },
            {
              prompt: "Zararlı bir pozisyonu çok uzun süre tutmaya en çok hangi duygu yol açar?",
              options: ["Sıkılma", "Borsanın haklı olduğuna dair güven", "Dönüş umudu ve zararı kesinleştirme korkusu"],
              correctAnswer: "Dönüş umudu ve zararı kesinleştirme korkusu",
            },
          ],
        },
        {
          slug: "pervaya-virtualnaya-sdelka",
          title: "İlk sanal işlem",
          summary: "Öğrenilen her şeyi sanal bakiyede uyguluyoruz.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Teoriyi bir araya getirme zamanı geldi: bir işlem açmadan önce, Long veya Short düğmesine basmadan önce, giriş noktasını (seviyeler ve trend yapısına dayanarak), stop-loss'u (izin verilen maksimum zarar) ve kâr hedefini önceden belirleyin.",
            },
            {
              type: "paragraph",
              text: "ASTREX'in \"Sanal Piyasa\" bölümü, gerçek para riski olmadan tüm süreci simüle edilmiş verilerle uygulama imkanı sunar — bu, gerçek sermayeyle işlem yapmaya geçmeden önce disiplin kazanmanın en iyi yoludur.",
            },
          ],
          questions: [
            {
              prompt: "Bir işlem açmadan önce ne belirlenmelidir?",
              options: [
                "Yalnızca giriş noktası",
                "Giriş noktası, stop-loss ve kâr hedefi",
                "Önceden hiçbir şey belirlemeye gerek yoktur",
              ],
              correctAnswer: "Giriş noktası, stop-loss ve kâr hedefi",
            },
            {
              prompt: "Neden önce sanal bakiyede pratik yapılmalıdır?",
              options: [
                "Sanal bakiye daha fazla kâr sağlar",
                "Bu, yasal bir zorunluluktur",
                "Stratejiyi gerçek para riski olmadan uygulamak için",
              ],
              correctAnswer: "Stratejiyi gerçek para riski olmadan uygulamak için",
            },
            {
              prompt: "Bir işlem kapatıldıktan hemen sonra ne yapmak önemlidir?",
              options: [
                "İşlemi analiz etmek ve sonucu günlüğe kaydetmek",
                "İşlem geçmişini silmek",
                "Hemen zıt yönde bir işlem açmak",
              ],
              correctAnswer: "İşlemi analiz etmek ve sonucu günlüğe kaydetmek",
            },
          ],
        },
      ],
    },
    {
      title: "Makroekonomi ve Kripto Piyasası",
      lessons: [
        {
          slug: "frs-i-protsentnye-stavki",
          title: "FED ve faiz oranları",
          summary: "ABD FED'inin faiz kararlarının kripto dahil tüm piyasayı nasıl hareket ettirdiği.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "FED (ABD Merkez Bankası), tüm dünya ekonomisinde paranın maliyetini belirleyen politika faiz oranını belirler. Faiz artırıldığında krediler pahalılaşır, yatırımcılar riskli varlıklardan — hisse senetleri ve kripto paralardan — tahvillere ve mevduatlara kayar.",
            },
            {
              type: "paragraph",
              text: "FED faizi düşürdüğünde veya politikada gevşemeye işaret ettiğinde, riskli varlıklar genellikle yükselir: para ucuzlar, yatırımcılar getiri için tekrar risk almaya hazır hale gelir.",
            },
            {
              type: "list",
              items: [
                "FOMC toplantıları yılda 8 kez yapılır — bunlar piyasa için kilit tarihlerdir",
                "Piyasa yalnızca kararın kendisine değil, retoriğe (\"şahin\" veya \"güvercin\") de tepki verir",
                "Kripto piyasası, yüksek oranda spekülatif sermaye barındırdığı için faize özellikle duyarlıdır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Piyasa, FED'in faiz artırımına genellikle nasıl tepki verir?",
              options: [
                "Bitcoin faiz artışında her zaman yükselir",
                "Kripto piyasası faize hiç tepki vermez",
                "Riskli varlıklar (kripto dahil) çoğunlukla düşer",
              ],
              correctAnswer: "Riskli varlıklar (kripto dahil) çoğunlukla düşer",
            },
            {
              prompt: "FOMC nedir?",
              options: [
                "ABD'nin en büyük kripto borsası",
                "FED'in faiz oranı kararlarını alan komitesi",
                "Piyasa volatilite endeksi",
              ],
              correctAnswer: "FED'in faiz oranı kararlarını alan komitesi",
            },
            {
              prompt: "Para politikasındaki gevşemeye piyasa jargonunda ne denir?",
              options: ["\"Nötr\" emisyon", "\"Şahin\" (hawkish) politika", "\"Güvercin\" (dovish) politika"],
              correctAnswer: "\"Güvercin\" (dovish) politika",
            },
          ],
        },
        {
          slug: "inflyatsiya-i-cpi",
          title: "Enflasyon ve CPI endeksi",
          summary: "Enflasyon verileri piyasayı neden çoğu haberden daha güçlü hareket ettirir.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "CPI (tüketici fiyat endeksi), ABD'deki başlıca enflasyon göstergesidir ve aylık olarak yayınlanır. Enflasyon beklentilerin üzerinde çıkarsa piyasa daha sıkı bir FED politikasını fiyatlar — riskli varlıklar düşer. Enflasyon yavaşlarsa piyasa sevinir ve yükselir.",
            },
            {
              type: "list",
              items: [
                "CPI açıklaması, kripto piyasasında ayın en volatil anlarından biridir",
                "Önemli olan verinin kendisi değil, analistlerin tahmininden farkıdır",
                "CPI'nin yanı sıra, FED'in tercih ettiği enflasyon göstergesi olan PCE de vardır",
              ],
            },
          ],
          questions: [
            {
              prompt: "CPI endeksi neyi ölçer?",
              options: [
                "Borsadaki işlem hacmini",
                "Tüketici mal ve hizmet sepetindeki fiyat değişimini",
                "Bitcoin'in dolar karşısındaki kurunu",
              ],
              correctAnswer: "Tüketici mal ve hizmet sepetindeki fiyat değişimini",
            },
            {
              prompt: "Piyasa, beklentinin üzerinde açıklanan bir CPI verisine genellikle nasıl tepki verir?",
              options: [
                "Kripto piyasası işlemleri otomatik olarak durdurur",
                "Piyasa CPI'ye asla tepki vermez",
                "Riskli varlıklar daha çok düşer",
              ],
              correctAnswer: "Riskli varlıklar daha çok düşer",
            },
            {
              prompt: "FED'in kendisinin tercih ettiği enflasyon göstergesi hangisidir?",
              options: ["RSI", "PCE", "DXY"],
              correctAnswer: "PCE",
            },
          ],
        },
        {
          slug: "indeks-dollara-dxy",
          title: "Dolar endeksi (DXY)",
          summary: "Dolar ile kripto paralar arasındaki ters korelasyon.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "DXY, ABD dolarının diğer para birimlerinden oluşan bir sepete karşı gücünü ölçer. Tarihsel olarak DXY ve Bitcoin genellikle zıt yönlerde hareket eder: güçlü bir dolar kripto ve diğer riskli varlıklar üzerinde baskı yaratırken, zayıf bir dolar onların yükselişini destekler.",
            },
            {
              type: "paragraph",
              text: "Deneyimli traderlar, DXY grafiğini BTC ile birlikte ayrı bir panelde takip eder — dolar endeksindeki keskin bir yükseliş, bu durum Bitcoin'in kendi grafiğinde henüz görünmeden önce kripto piyasasındaki bir düzeltmeye dair uyarı verebilir.",
            },
          ],
          questions: [
            {
              prompt: "DXY endeksi neyi ölçer?",
              options: [
                "ABD dolarının diğer para birimlerinden oluşan bir sepete karşı gücünü",
                "Kripto piyasasının toplam piyasa değerini",
                "Bitcoin'in volatilitesini",
              ],
              correctAnswer: "ABD dolarının diğer para birimlerinden oluşan bir sepete karşı gücünü",
            },
            {
              prompt: "DXY ve Bitcoin hareketleri genellikle nasıl ilişkilidir?",
              options: [
                "Çoğunlukla zıt yönlerde hareket ederler",
                "Aralarında hiçbir ilişki yoktur",
                "Her zaman tamamen eşzamanlı hareket ederler",
              ],
              correctAnswer: "Çoğunlukla zıt yönlerde hareket ederler",
            },
            {
              prompt: "DXY endeksindeki keskin bir yükseliş neyin habercisi olabilir?",
              options: [
                "Bitcoin'in garanti yükselişinin",
                "Kripto piyasasındaki olası bir düzeltmenin",
                "Borsanın teknik arızasının",
              ],
              correctAnswer: "Kripto piyasasındaki olası bir düzeltmenin",
            },
          ],
        },
        {
          slug: "korrelyatsiya-s-fondovym-rynkom",
          title: "Hisse senedi piyasasıyla korelasyon",
          summary: "Bitcoin'in Nasdaq endeksi ve risk iştahıyla ilişkisi.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Son yıllarda Bitcoin, \"dijital altın\" olmaktan çok yüksek teknoloji riskli bir varlık gibi davranmaya başladı — fiyatı sıklıkla Nasdaq endeksiyle korelasyon gösteriyor. Yatırımcılar teknoloji şirketi hisselerini istekle satın aldığında kripto piyasası da genellikle yükselir ve tam tersi de geçerlidir.",
            },
            {
              type: "paragraph",
              text: "Bu korelasyon sabit değildir: kripto'ya özgü olaylar sırasında (borsa hack'i, düzenleyici haberler, büyük bir listeleme) kripto piyasası hisse senetlerinden bağımsız hareket edebilir.",
            },
          ],
          questions: [
            {
              prompt: "Son yıllarda Bitcoin en çok hangi varlık sınıfıyla korelasyon gösteriyor?",
              options: [
                "Devlet tahvilleriyle",
                "Yüksek teknoloji hisseleriyle (Nasdaq)",
                "Hiçbir şeyle korelasyon göstermiyor",
              ],
              correctAnswer: "Yüksek teknoloji hisseleriyle (Nasdaq)",
            },
            {
              prompt: "BTC ile Nasdaq arasındaki yüksek korelasyon ne anlama gelir?",
              options: [
                "BTC, Nasdaq endeksinin yerini tamamen alır",
                "Zıt yönlerde hareket etmek zorundadırlar",
                "Genellikle aynı yönde hareket ederler",
              ],
              correctAnswer: "Genellikle aynı yönde hareket ederler",
            },
            {
              prompt: "BTC'nin hisse senedi piyasasıyla olan korelasyonunu geçici olarak ne zayıflatabilir?",
              options: [
                "Saat diliminin değişmesi",
                "Kripto'ya özgü olaylar (borsa hack'i, düzenleyici haberler)",
                "Borsada bir tatil günü",
              ],
              correctAnswer: "Kripto'ya özgü olaylar (borsa hack'i, düzenleyici haberler)",
            },
          ],
        },
        {
          slug: "ekonomicheskiy-kalendar",
          title: "Ekonomik takvim ve haberler",
          summary: "İşlem yapmadan önce mutlaka takip edilmesi gereken olaylar.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Ekonomik takvim, önemli makroekonomik verilerin — FED toplantıları, enflasyon raporları (CPI), istihdam piyasası verileri (NFP) ve volatiliteyi keskin biçimde artırabilecek diğer göstergelerin — yayınlanma programıdır.",
            },
            {
              type: "paragraph",
              text: "Takvimdeki olaylar genellikle etki düzeyine göre işaretlenir (yüksek/orta/düşük). Yüksek önemdeki verilerin açıklanmasından önce deneyimli traderlar genellikle riski azaltır, pozisyonlarını küçültür veya yeni işlemlerden tamamen kaçınır — bu anlardaki volatilite öngörülemez olabilir.",
            },
          ],
          questions: [
            {
              prompt: "Trader için ekonomik takvim ne işe yarar?",
              options: [
                "Kişisel tatil planlamak için",
                "Piyasayı etkileyen önemli haberlerin tarihlerini takip etmek için",
                "Teknik analizin yerini tamamen almak için",
              ],
              correctAnswer: "Piyasayı etkileyen önemli haberlerin tarihlerini takip etmek için",
            },
            {
              prompt: "NFP nedir?",
              options: [
                "Korku ve açgözlülük endeksi",
                "Yeni bir kriptografik protokol",
                "ABD'nin tarım dışı istihdam raporu",
              ],
              correctAnswer: "ABD'nin tarım dışı istihdam raporu",
            },
            {
              prompt: "Yüksek önemdeki bir haber açıklanmadan önce yapılması akıllıca olan nedir?",
              options: [
                "Pozisyon büyüklüğünü maksimuma çıkarmak",
                "Riski azaltmak veya yeni işlemlerden kaçınmak",
                "Stop-loss'ları kapatmak",
              ],
              correctAnswer: "Riski azaltmak veya yeni işlemlerden kaçınmak",
            },
          ],
        },
        {
          slug: "etf",
          title: "ETF",
          summary: "Borsa yatırım fonu nedir ve kripto ETF onayları piyasayı neden hareket ettirir.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "ETF (Exchange-Traded Fund, borsa yatırım fonu), borsada sıradan bir hisse senedi gibi işlem gören, ancak bir dayanak varlığın veya varlık sepetinin değerini takip eden bir finansal araçtır. Spot kripto ETF, yatırımcıların bitcoin gibi bir varlığı doğrudan satın almadan veya saklamadan o varlığın fiyat hareketine maruz kalmasını sağlar — fonun yönetim şirketi dayanak varlığı bizzat elinde bulundurur.",
            },
            {
              type: "paragraph",
              text: "Düzenleyicilerin (örneğin ABD'de SEC) spot bitcoin veya ethereum ETF'lerini onaylaması piyasa için önemli bir olay olarak kabul edilir: kripto parayı doğrudan tutmanın uygun olmadığı veya yasak olduğu kurumsal ve bireysel yatırımcılara varlığa erişim imkanı açar. Trader'lar bu tür ETF'lere günlük giren ve çıkan fon miktarlarını kurumsal talebin bir göstergesi olarak kullanır.",
            },
            {
              type: "list",
              items: [
                "Bir ETF, bir dayanak varlığın değerini takip eder ancak geleneksel bir borsada sıradan bir hisse senedi gibi işlem görür",
                "Spot ETF, yönetim şirketinin dayanak varlığı gerçekten elinde bulundurduğu anlamına gelir",
                "Kripto ETF'lere günlük giren ve çıkan fonlar kurumsal talebin göstergesi olarak kullanılır",
              ],
            },
          ],
          questions: [
            {
              prompt: "ETF nedir?",
              options: [
                "Bir tür kripto para cüzdanı",
                "Bir blok zinciri uzlaşı protokolü",
                "Hisse senedi gibi işlem gören ve bir dayanak varlığın değerini takip eden bir finansal araç",
              ],
              correctAnswer: "Hisse senedi gibi işlem gören ve bir dayanak varlığın değerini takip eden bir finansal araç",
            },
            {
              prompt: "Spot kripto ETF bir yatırımcıya ne sağlar?",
              options: [
                "Bir varlığı kendisi satın almadan ve saklamadan o varlığın fiyat hareketine maruz kalma",
                "Garantili sabit bir getiri",
                "Bir blok zincirinin yönetiminde oy hakkı",
              ],
              correctAnswer: "Bir varlığı kendisi satın almadan ve saklamadan o varlığın fiyat hareketine maruz kalma",
            },
            {
              prompt: "Trader'lar kripto ETF giriş/çıkış verilerini nasıl kullanır?",
              options: [
                "Varlığa yönelik kurumsal talebin göstergesi olarak",
                "Hacim ve volatilite analizinin yerine",
                "Ertesi günün fiyatı için kesin bir tahmin olarak",
              ],
              correctAnswer: "Varlığa yönelik kurumsal talebin göstergesi olarak",
            },
          ],
        },
      ],
    },
    {
      title: "Smart Money Konseptleri",
      lessons: [
        {
          slug: "imbalans-i-fvg",
          title: "Imbalance ve Fair Value Gap (FVG)",
          summary: "Fiyat verimsizlik bölgeleri ve grafikte nasıl bulunur.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Imbalance, fiyatın bir yönde çok hızlı hareket ederek her iki tarafın da (alıcılar ve satıcılar) tam anlamıyla işlem yapmasına imkan vermediği grafikteki bir bölgedir. Piyasa bu tür bölgelere daha sonra genellikle geri dönüp \"kapatmaya\" çalışır.",
            },
            {
              type: "paragraph",
              text: "Fair Value Gap (FVG), üç mumdan oluşan özel bir imbalance türüdür: birinci mumun kuyruğu ile üçüncü mumun kuyruğu arasında görünür bir boşluk kalır. Bu, Smart Money Concepts içinde en popüler ilgi bölgelerinden biridir.",
            },
            { type: "diagram", diagram: "fvg", caption: "Üç mumda klasik boğa FVG'si" },
            { type: "diagram", diagram: "imbalance", caption: "Tek bir dürtü mumunda daha geniş bir imbalance bölgesi" },
          ],
          questions: [
            {
              prompt: "Fair Value Gap (FVG) nedir?",
              options: [
                "Keskin bir dürtü nedeniyle 1. ve 3. mumun kuyrukları arasında oluşan boşluk",
                "Bir hacim göstergesi",
                "Bir stop-loss seviyesi",
              ],
              correctAnswer: "Keskin bir dürtü nedeniyle 1. ve 3. mumun kuyrukları arasında oluşan boşluk",
            },
            {
              prompt: "Piyasa daha sonra imbalance bölgesiyle genellikle ne yapar?",
              options: [
                "Geri döner ve onu kısmen veya tamamen \"kapatır\"",
                "Onu grafikten otomatik olarak siler",
                "Ona bir daha asla değmez",
              ],
              correctAnswer: "Geri döner ve onu kısmen veya tamamen \"kapatır\"",
            },
            {
              prompt: "Klasik FVG formasyonu kaç mumdan oluşur?",
              options: ["Bir mumdan", "Yedi mumdan", "Üç mumdan"],
              correctAnswer: "Üç mumdan",
            },
          ],
        },
        {
          slug: "likvidnost-na-rynke",
          title: "Likidite ve türleri",
          summary: "Büyük oyuncuların bekleyen emirleri grafikte nerede birikir.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Likidite, belirli fiyat seviyelerinde biriken bekleyen emirlerin (stop-loss'lar ve limit emirleri) toplamıdır. Çoğunlukla eşit zirveler/dipler ile herkesin gördüğü belirgin destek/direnç seviyelerinin arkasında birikir.",
            },
            {
              type: "list",
              items: [
                "Buy-side likidite — yerel zirvelerin üzerindeki short pozisyoncuların stop'ları",
                "Sell-side likidite — yerel diplerin altındaki long pozisyoncuların stop'ları",
                "Büyük oyuncuların, güçlü bir slippage olmadan pozisyon açmak veya kapatmak için likiditeye ihtiyacı vardır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Grafikte likidite en çok nerede birikir?",
              options: [
                "Yalnızca haber mumlarında",
                "Eşit zirveler/dipler ve belirgin destek/direnç seviyelerinin yakınında",
                "Nedensiz olarak tam olarak aralığın ortasında",
              ],
              correctAnswer: "Eşit zirveler/dipler ve belirgin destek/direnç seviyelerinin yakınında",
            },
            {
              prompt: "Buy-side likidite nedir?",
              options: [
                "Borsanın alım komisyonu",
                "Yerel diplerin altındaki long pozisyoncuların stop'ları",
                "Yerel zirvelerin üzerinde bulunan short pozisyoncuların stop'ları",
              ],
              correctAnswer: "Yerel zirvelerin üzerinde bulunan short pozisyoncuların stop'ları",
            },
            {
              prompt: "Büyük oyuncuların piyasada likiditeye neden ihtiyacı vardır?",
              options: [
                "Büyük bir pozisyonu güçlü bir slippage olmadan açmak veya kapatmak için",
                "Bunun büyük oyuncularla bir ilgisi yoktur",
                "İşlemleri tamamen durdurmak için",
              ],
              correctAnswer: "Büyük bir pozisyonu güçlü bir slippage olmadan açmak veya kapatmak için",
            },
          ],
        },
        {
          slug: "snyatie-likvidnosti",
          title: "Likidite avı (Liquidity Sweep)",
          summary: "Fiyat önce neden stop'ları temizler, sonra döner.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Liquidity Sweep, fiyatın likidite barındıran bir seviyeyi (örneğin eşit zirveleri) kasıtlı olarak deldiği, bekleyen emirleri topladığı ve ardından büyük hareketin aslında gitmesi planlanan yöne — yani karşı yöne — keskin bir şekilde döndüğü durumdur.",
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "Eşit zirvelerin delinmesi ve aşağı yönlü keskin dönüş" },
            {
              type: "paragraph",
              text: "Sweep'i anlamak tuzağa düşmemeye yardımcı olur: bir seviyenin kırılması, hareketin o yönde devam edeceğini tek başına garanti etmez — çoğu zaman bu yalnızca bir likidite avıdır.",
            },
          ],
          questions: [
            {
              prompt: "Liquidity sweep'in hemen ardından fiyata genellikle ne olur?",
              options: [
                "Delinme yönünün tersine keskin bir dönüş",
                "Hiçbir şey, hacim sıfıra düşer",
                "Fiyat her zaman delinme yönünde hareketine devam eder",
              ],
              correctAnswer: "Delinme yönünün tersine keskin bir dönüş",
            },
            {
              prompt: "Liquidity sweep'in hedefi en çok hangi bölge olur?",
              options: [
                "Sıfır likiditeye sahip bir bölge",
                "Seviyesiz rastgele bir aralığın ortası",
                "Bekleyen emirlerin bulunduğu bölge — örneğin eşit zirveler/dipler",
              ],
              correctAnswer: "Bekleyen emirlerin bulunduğu bölge — örneğin eşit zirveler/dipler",
            },
            {
              prompt: "Yeni başlayanların bir sweep gördüklerinde yaptığı tipik hata nedir?",
              options: [
                "İşleme girmeden önce stop-loss belirlemek",
                "Olası bir dönüşü hesaba katmadan kırılma yönünde işleme girmek",
                "Kârlı bir pozisyonu çok erken kapatmak",
              ],
              correctAnswer: "Olası bir dönüşü hesaba katmadan kırılma yönünde işleme girmek",
            },
          ],
        },
        {
          slug: "struktura-trenda-bos-choch",
          title: "Trend yapısı: BOS ve CHoCH",
          summary: "Zirve ve diplere bakarak trendin hâlâ geçerli mi yoksa kırılmış mı olduğu nasıl anlaşılır.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Yükselen trend, birbirini izleyen Higher High (HH) ve Higher Low (HL) dizisinden oluşur. Bu yapı korundukça trend geçerli sayılır.",
            },
            {
              type: "paragraph",
              text: "Break of Structure (BOS), önceki zirvenin kırılmasıdır ve trendin devam ettiğini doğrular. Change of Character (CHoCH) ise ters yöndeki bir kırılmadır ve trendin olası bir dönüşüne dair ilk sinyaldir.",
            },
            { type: "diagram", diagram: "trend-structure", caption: "Yükselen trendin HH/HL yapısı ve BOS" },
          ],
          questions: [
            {
              prompt: "Change of Character (CHoCH) neyin sinyalini verir?",
              options: [
                "Trendin hızlanarak devam etmesi",
                "Piyasada likidite bulunmaması",
                "Mevcut trendin olası dönüşü",
              ],
              correctAnswer: "Mevcut trendin olası dönüşü",
            },
            {
              prompt: "Break of Structure (BOS) neyi doğrular?",
              options: [
                "İşlemlerin otomatik olarak durmasını",
                "Önceki tüm seviyelerin geçersiz olmasını",
                "Mevcut trendin devamını",
              ],
              correctAnswer: "Mevcut trendin devamını",
            },
            {
              prompt: "Yükselen trendin yapısı neden oluşur?",
              options: [
                "Yüksekliği aynı olan mumlardan",
                "Lower High ve Lower Low'dan",
                "Higher High ve Higher Low'dan",
              ],
              correctAnswer: "Higher High ve Higher Low'dan",
            },
          ],
        },
        {
          slug: "order-bloki",
          title: "Order block'lar",
          summary: "Büyük oyuncuların güçlü fiyat hareketini başlattığı bölgeler.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Order block, güçlü bir dürtü hareketinden önceki son ters yönlü mumdur. Örneğin, keskin bir yükselişten önceki son kırmızı mum boğa order block'u olarak kabul edilir: büyük oyuncuların pozisyonu tam da orada topladığı varsayılır.",
            },
            {
              type: "paragraph",
              text: "Traderlar order block'ları potansiyel giriş bölgeleri olarak kullanır: fiyat gelecekte bu bölgeye geri dönerse, bir tepki — yani ilk yönde hareketin devamı — beklenir.",
            },
            { type: "diagram", diagram: "order-block", caption: "Boğa order block'u ve fiyatın bölgeye dönüşteki tepkisi" },
          ],
          questions: [
            {
              prompt: "Order block nedir?",
              options: [
                "Bir işlem hacmi göstergesi",
                "Gecikmeli gerçekleşen bir borsa emri türü",
                "Güçlü bir dürtü hareketinden önceki son ters yönlü mum",
              ],
              correctAnswer: "Güçlü bir dürtü hareketinden önceki son ters yönlü mum",
            },
            {
              prompt: "Traderlar order block'ları genellikle nasıl kullanır?",
              options: [
                "Borsa komisyonunu hesaplamak için",
                "Fiyat geri döndüğünde potansiyel giriş bölgeleri olarak",
                "Bir enflasyon göstergesi olarak",
              ],
              correctAnswer: "Fiyat geri döndüğünde potansiyel giriş bölgeleri olarak",
            },
            {
              prompt: "Boğa order block'u ayı order block'undan nasıl farklıdır?",
              options: [
                "Yalnızca günlük zaman diliminde ortaya çıkar",
                "Aşağı yönlü değil, yukarı yönlü bir dürtüden önce oluşur",
                "Her zaman boyut olarak daha büyüktür",
              ],
              correctAnswer: "Aşağı yönlü değil, yukarı yönlü bir dürtüden önce oluşur",
            },
          ],
        },
      ],
    },
    {
      title: "Risk Yönetimi",
      lessons: [
        {
          slug: "risk-reward",
          title: "Risk/Reward",
          summary: "Risk/ödül oranı ve neden kazanan işlem yüzdesinden daha önemli olduğu.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Risk/Reward (R/R), bir işlemdeki potansiyel kaybın potansiyel kâra oranıdır. 100$ riske edip 300$ kazanmayı hedefliyorsanız, R/R'niz 1:3'tür. Bu, bir ticaret sisteminin uzun vadede kârlı olup olmayacağını belirleyen en önemli metriklerden biridir.",
            },
            {
              type: "paragraph",
              text: "Kazanan işlem yüzdesi düşük olan bir sistem bile, ortalama R/R yeterince yüksekse kârlı olabilir. Örneğin, 1:3 R/R ile kâra geçmek için işlemlerin yalnızca %30'unda haklı olmak yeterlidir. Deneyimli traderların tahmin yüzdesine değil, işlemin matematiksel beklentisine odaklanmasının nedeni tam olarak budur.",
            },
            {
              type: "list",
              items: [
                "R/R işleme girmeden önce hesaplanır, sonra değil",
                "R/R ne kadar yüksekse, gereken kazanma oranı o kadar düşük olabilir",
                "İyi bir R/R, uygulamada disiplin olmadan kâr garanti etmez",
              ],
            },
          ],
          questions: [
            {
              prompt: "1:3 Risk/Reward oranı ne anlama gelir?",
              options: [
                "Art arda 3 işlem açılması gerekir",
                "Potansiyel kâr, potansiyel riskin 3 katıdır",
                "İşlem 3 saat sonra kapanır",
              ],
              correctAnswer: "Potansiyel kâr, potansiyel riskin 3 katıdır",
            },
            {
              prompt: "1:3 R/R oranına sahip bir sistem neden %40 kazanma oranıyla bile kârlı olabilir?",
              options: [
                "Kazanan işlemlerdeki kâr, kaybeden işlemlerdeki zararı karşılar",
                "Çünkü borsa komisyonları düşer",
                "Çünkü %40 her zaman %33'ten yüksektir",
              ],
              correctAnswer: "Kazanan işlemlerdeki kâr, kaybeden işlemlerdeki zararı karşılar",
            },
            {
              prompt: "Trader işlemin Risk/Reward oranını ne zaman hesaplamalıdır?",
              options: [
                "İşleme girmeden önce",
                "R/R hesaplamak zorunlu değildir",
                "Yalnızca işlem kapandıktan sonra",
              ],
              correctAnswer: "İşleme girmeden önce",
            },
          ],
        },
        {
          slug: "razmer-pozitsii",
          title: "Pozisyon Büyüklüğü",
          summary: "İşlem hacmi, istenen kâra göre değil, depozitodaki riske göre nasıl hesaplanır.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Pozisyon büyüklüğü (position sizing), belirli bir işleme yatırdığınız sermaye miktarıdır. İstenen kâra göre değil, kabul edilebilir riske göre belirlenmelidir: traderlar genellikle setup ne kadar güvenilir görünürse görünsün, bir işlemde depozitonun %1-2'sinden fazlasını riske etmez.",
            },
            {
              type: "paragraph",
              text: "Formül basittir: pozisyon büyüklüğü = (depozito × risk yüzdesi) / stop-loss'a olan mesafenin yüzdesi. Bu yaklaşım varlığın volatilitesini ve stopun uzaklığını otomatik olarak hesaba katar — stop ne kadar genişse, aynı dolar riskinde pozisyon hacmi o kadar küçük olur.",
            },
            {
              type: "list",
              items: [
                "Sabit risk yüzdesi, depozitoyu bir dizi zarar eden işlemden korur",
                "Stop-loss uzakta konumlandırılmışsa pozisyon hacmi azalmalıdır",
                "Kaldıraç kullanımı hacmi artırır ama risk hesaplamasını ortadan kaldırmaz",
              ],
            },
          ],
          questions: [
            {
              prompt: "Pozisyon büyüklüğü öncelikle neye bağlı olmalıdır?",
              options: [
                "Kartta ne kadar para olduğuna",
                "Traderın o anki ruh haline",
                "Depozitonun yüzdesi cinsinden kabul edilebilir riske",
              ],
              correctAnswer: "Depozitonun yüzdesi cinsinden kabul edilebilir riske",
            },
            {
              prompt: "Stop-loss giriş fiyatından daha uzağa konursa pozisyon büyüklüğüne ne olur?",
              options: [
                "Aynı dolar riskinde pozisyon hacmi azalmalıdır",
                "Pozisyon hacmi stopa olan mesafeyle ilişkili değildir",
                "Pozisyon hacmi artmalıdır",
              ],
              correctAnswer: "Aynı dolar riskinde pozisyon hacmi azalmalıdır",
            },
            {
              prompt: "Bir işlemde depozitonun genellikle ne kadarının riske edilmesi önerilir?",
              options: [
                "%50",
                "%25-30",
                "%1-2",
              ],
              correctAnswer: "%1-2",
            },
          ],
        },
        {
          slug: "stop-loss",
          title: "Stop-Loss",
          summary: "Stop-loss neden gereklidir, doğru nereye konur ve en sık yapılan hatalar nelerdir.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Stop-loss, ulaşıldığında işlemin otomatik olarak zararla kapandığı önceden belirlenmiş bir fiyat seviyesidir. Sermayeyi korumanın en önemli aracıdır: zararın kontrolsüzce büyümesine izin vermek yerine, kaybı önceden bilinen bir tutarla sınırlar.",
            },
            {
              type: "paragraph",
              text: "Stop-loss, traderın kaybetmeye razı olduğu tutara göre değil, piyasa yapısına göre — en yakın destek, direnç seviyesinin veya mumun ekstremumunun arkasına — konmalıdır. Çok dar bir stop, olağan piyasa gürültüsünde işlemden atar; çok geniş bir stop ise pozisyon başına riski artırır.",
            },
            {
              type: "list",
              items: [
                "Stop-loss, düşüş anındaki duygusal kararlara karşı korur",
                "Stop seviyesi, istenen zarar tutarına değil grafik yapısına dayanmalıdır",
                "Düşüş sırasında stopu fiyattan uzaklaştırmak, yeni başlayanların en sık yaptığı hatalardan biridir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Stop-loss'un temel işlevi nedir?",
              options: [
                "Pozisyonu otomatik olarak iki katına çıkarmak",
                "İşlemin kârını artırmak",
                "Zararı önceden bilinen bir tutarla sınırlamak",
              ],
              correctAnswer: "Zararı önceden bilinen bir tutarla sınırlamak",
            },
            {
              prompt: "Stop-loss seviyesini belirlemenin en doğru yolu nedir?",
              options: [
                "Rastgele bir sayıya dayanarak",
                "İstenen kâr tutarına dayanarak",
                "Piyasa yapısına (destek/direnç seviyelerine) dayanarak",
              ],
              correctAnswer: "Piyasa yapısına (destek/direnç seviyelerine) dayanarak",
            },
            {
              prompt: "İşlemde düşüş yaşanırken yeni başlayanlar için tipik hata nedir?",
              options: [
                "\"İşleme daha fazla şans vermek\" için stop-loss'u fiyattan uzaklaştırmak",
                "Girişten önce riski hesaplamak",
                "İşlemi tam olarak stopta kapatmak",
              ],
              correctAnswer: "\"İşleme daha fazla şans vermek\" için stop-loss'u fiyattan uzaklaştırmak",
            },
          ],
        },
        {
          slug: "take-profit",
          title: "Take Profit",
          summary: "Kâr hedefleri nasıl belirlenir ve pozisyonun kısmi kapatılması ne zaman kullanılmalıdır.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Take Profit (TP), işlemin otomatik olarak kârla kapandığı önceden belirlenmiş bir seviyedir. Stop-loss gibi, TP de piyasa mantığına göre belirlenmelidir: belirli bir tutar kazanma isteğine değil, en yakın direnç, destek seviyesine veya likidite bölgesine göre.",
            },
            {
              type: "paragraph",
              text: "Birçok trader kısmi kapatma kullanır: pozisyonun bir kısmını ilk hedefte sabitler, kalanını ise stopu başabaşa taşıyarak hareket etmeye bırakır. Bu, hareket devam ederse işlemden çok erken çıkmadan aynı anda kâr sabitlemeyi sağlar.",
            },
            {
              type: "list",
              items: [
                "TP de tıpkı stop gibi grafik yapısına dayanarak belirlenmelidir",
                "Kısmi kapatma, işlemdeki psikolojik baskıyı azaltır",
                "İlk hedeften sonra stopu başabaşa taşımak, elde edilen kârı korur",
              ],
            },
          ],
          questions: [
            {
              prompt: "Take Profit seviyesi neye dayanmalıdır?",
              options: [
                "İşlemde geçirilen saat sayısına",
                "Grafik yapısına: direnç, destek veya likidite seviyelerine",
                "Traderın hoşuna giden rastgele bir sayıya",
              ],
              correctAnswer: "Grafik yapısına: direnç, destek veya likidite seviyelerine",
            },
            {
              prompt: "Traderlar neden pozisyonun kısmi kapatılmasını kullanır?",
              options: [
                "İşlemi mutlaka zararla kapatmak için",
                "Borsa komisyonunu artırmak için",
                "Kârın bir kısmını sabitleyip kalanının hareket etmeye devam etmesine izin vermek için",
              ],
              correctAnswer: "Kârın bir kısmını sabitleyip kalanının hareket etmeye devam etmesine izin vermek için",
            },
            {
              prompt: "İlk kâr hedefine ulaşıldıktan sonra stop-loss'a genellikle ne yapılır?",
              options: [
                "Tamamen kaldırılır",
                "Fiyattan daha da uzaklaştırılır",
                "Elde edilen kârı korumak için başabaşa taşınır",
              ],
              correctAnswer: "Elde edilen kârı korumak için başabaşa taşınır",
            },
          ],
        },
        {
          slug: "psihologiya-ubytkov",
          title: "Zararların Psikolojisi",
          summary: "Zarar eden işlemler traderın kararlarını nasıl etkiler ve kayıpları sakin karşılamak neden önemlidir.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Zararlar trading'in kaçınılmaz bir parçasıdır: kârlı bir sistem bile tek tek işlemlerde düzenli olarak para kaybeder. Sorun zararın kendisinde değil, ona verilen tepkidedir — artırılmış hacimle hemen \"telafi etme\" girişiminde veya bir dönüş umuduyla işlemi stopta kapatmayı reddetmede.",
            },
            {
              type: "paragraph",
              text: "Her zararı kişisel bir başarısızlık değil, sistemin beklenen istatistiksel maliyeti olarak algılayan trader, daha rasyonel kararlar verir. İşlem günlüğü tutmak ve işlem başına önceden belirlenmiş risk, duyguları süreçten ayırmaya yardımcı olur.",
            },
            {
              type: "list",
              items: [
                "Bir dizi zarar, kârlı bir ticaret sisteminin bile normal bir parçasıdır",
                "Zarardan sonra \"telafi etme\" girişimi genellikle kârı değil riski artırır",
                "İşlem başına önceden belirlenen risk, zarar anındaki duygusal baskıyı azaltır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Trading'de tek bir zararı algılamanın en doğru yolu nedir?",
              options: [
                "İşlem günlüğü tutmayı bırakmak için bir neden olarak",
                "Ticaret sisteminin beklenen istatistiksel maliyeti olarak",
                "Bir sonraki işlemin hacmini hemen iki katına çıkarmak gerektiğinin işareti olarak",
              ],
              correctAnswer: "Ticaret sisteminin beklenen istatistiksel maliyeti olarak",
            },
            {
              prompt: "Zarardan hemen sonra \"telafi etme\" girişimi genellikle neye yol açar?",
              options: [
                "Önceki işlemin otomatik olarak iptaline",
                "Artan riske ve yeni zararlara",
                "Garantili kâra",
              ],
              correctAnswer: "Artan riske ve yeni zararlara",
            },
            {
              prompt: "Traderın duyguları ticaret kararlarından ayırmasına ne yardımcı olur?",
              options: [
                "Her zarardan sonra kaldıracı artırmak",
                "İşlem analizinden tamamen vazgeçmek",
                "İşlem başına önceden belirlenen risk ve günlük tutma",
              ],
              correctAnswer: "İşlem başına önceden belirlenen risk ve günlük tutma",
            },
          ],
        },
      ],
    },
    {
      title: "Trader Psikolojisi",
      lessons: [
        {
          slug: "fomo",
          title: "FOMO",
          summary: "Bir hareketi kaçırma korkusu ve neden en kötü anda işleme girmeye zorladığı.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "FOMO (Fear Of Missing Out), kârlı bir fiyat hareketini kaçırma korkusudur. Bir varlık hızla yükseldiğinde ve trader başkalarının \"kazandığını\" görüp kendisinin görmediğinde ortaya çıkar. FOMO etkisiyle işlemler genellikle plansız, hareketin zirvesinde ve risk hesaba katılmadan açılır.",
            },
            {
              type: "paragraph",
              text: "FOMO'nun sorunu, girişin tam olarak hareketin büyük ölçüde gerçekleştiği ve dönüş riskinin maksimum olduğu anda gerçekleşmesidir. Disiplinli bir trader, önceden belirlenmiş giriş koşullarına bağlı kalır ve strateji ile uyuşmayan bir hareketi es geçer.",
            },
            {
              type: "list",
              items: [
                "FOMO çoğunlukla fiyatta zaten güçlü bir hareket gerçekleştikten sonra girişe iter",
                "FOMO ile alınan kararlar genellikle stop-loss'suz ve risk hesabı yapılmadan alınır",
                "Önceden yazılmış bir işlem planı FOMO'nun etkisini azaltır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Trading'de FOMO nedir?",
              options: [
                "Teknik bir hacim göstergesi",
                "Kârlı bir fiyat hareketini kaçırma korkusu",
                "Bir borsa emri türü",
              ],
              correctAnswer: "Kârlı bir fiyat hareketini kaçırma korkusu",
            },
            {
              prompt: "Trader FOMO etkisiyle fiyat hareketinin hangi aşamasında işleme girer?",
              options: [
                "Hareketin en başında",
                "Dönüş riskinin zaten yüksek olduğu, hareketin sonuna yakın bir noktada",
                "Hareket henüz başlamadan önce",
              ],
              correctAnswer: "Dönüş riskinin zaten yüksek olduğu, hareketin sonuna yakın bir noktada",
            },
            {
              prompt: "FOMO'nun trader kararları üzerindeki etkisini azaltmaya ne yardımcı olur?",
              options: [
                "Başkalarının kârlı işlemlerini sürekli takip etmek",
                "Ani bir yükseliş anında kaldıracı artırmak",
                "Önceden belirlenmiş bir plan ve giriş koşulları",
              ],
              correctAnswer: "Önceden belirlenmiş bir plan ve giriş koşulları",
            },
          ],
        },
        {
          slug: "zhadnost",
          title: "Açgözlülük",
          summary: "Açgözlülük kârlı bir işlemi plandan daha uzun tutmaya ve kârı zarara dönüştürmeye nasıl neden olur.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Trading'de açgözlülük, bir işlemden ilk planın öngördüğünden daha fazla kâr sıkma isteği olarak kendini gösterir: pozisyonu belirlenen hedefte kapatmamak, bir dizi başarılı işlemden sonra hacmi artırmak veya önceden konmuş Take Profit'i iptal etmek.",
            },
            {
              type: "paragraph",
              text: "Açgözlülük çoğunlukla kârlı bir işlemin dönüp stopta veya sıfırda kapanmasına yol açar, oysa iyi bir sonuçla sabitlenebilirdi. Önceden belirlenmiş plana uyma disiplini, açgözlülüğe karşı en önemli araçtır.",
            },
            {
              type: "list",
              items: [
                "Açgözlülük genellikle önceden konmuş Take Profit'in iptal edilmesi olarak kendini gösterir",
                "Bir dizi kazançtan sonra risk yönetimini değiştirmeden hacmi artırmak da açgözlülüğün bir tezahürüdür",
                "Önceden hazırlanmış işlem planına uymak açgözlülüğün etkisini azaltır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Açgözlülük açık bir işlemin yönetiminde en çok nasıl kendini gösterir?",
              options: [
                "Trader işlemi tam olarak plana göre kapatır",
                "Trader pozisyon hacmini azaltır",
                "Trader daha fazla kâr umarak önceden konmuş Take Profit'i iptal eder",
              ],
              correctAnswer: "Trader daha fazla kâr umarak önceden konmuş Take Profit'i iptal eder",
            },
            {
              prompt: "Açgözlülük kârlı bir işlemde en çok hangi sonuca yol açar?",
              options: [
                "Borsa komisyonu düşer",
                "Kâr garantili olarak artar",
                "İşlem döner ve stopta veya sıfırda kapanır",
              ],
              correctAnswer: "İşlem döner ve stopta veya sıfırda kapanır",
            },
            {
              prompt: "Trading'de açgözlülüğe karşı en önemli araç nedir?",
              options: [
                "Her kârlı işlemden sonra kaldıracı artırmak",
                "Take Profit koymaktan tamamen vazgeçmek",
                "Önceden hazırlanmış işlem planına uymak",
              ],
              correctAnswer: "Önceden hazırlanmış işlem planına uymak",
            },
          ],
        },
        {
          slug: "strah",
          title: "Korku",
          summary: "Zarar korkusu stratejiye uymayı nasıl engeller ve işlemlerin erken kapanmasına nasıl yol açar.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Trading'de korku çoğunlukla para kaybetme korkusu olarak kendini gösterir: trader en küçük bir düşüşte kârlı bir işlemi çok erken kapatır, onaylanmış bir sinyalle işleme girmekten korkar veya bir dizi zarardan sonra ticareti tamamen bırakır.",
            },
            {
              type: "paragraph",
              text: "Açgözlülüğün aksine korku, çok temkinli davranmaya ve stratejiyle tamamen uyumlu fırsatları kaçırmaya zorlar. İşlem başına riskin psikolojik olarak rahat olduğu bir hacimle işlem yapmak korkunun etkisini azaltmaya yardımcı olur.",
            },
            {
              type: "list",
              items: [
                "Korku genellikle kârlı bir işlemin vaktinden önce kapatılması olarak kendini gösterir",
                "Çok büyük pozisyon hacmi korkuyu güçlendirir ve plana uymayı engeller",
                "İşlem başına rahat bir risk büyüklüğü korkunun duygusal baskısını azaltır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Korku kârlı bir işlemin yönetimini en çok nasıl etkiler?",
              options: [
                "Trader en küçük bir düşüşte işlemi çok erken kapatır",
                "Trader pozisyon hacmini artırır",
                "Trader işlemi plandan çok daha uzun tutar",
              ],
              correctAnswer: "Trader en küçük bir düşüşte işlemi çok erken kapatır",
            },
            {
              prompt: "Açık bir pozisyonun yönetiminde korkuyu ne güçlendirir?",
              options: [
                "İşlem günlüğü tutmak",
                "Depozitoya göre çok büyük pozisyon hacmi",
                "Depozitonun %1-2'si kadar önceden belirlenmiş risk",
              ],
              correctAnswer: "Depozitoya göre çok büyük pozisyon hacmi",
            },
            {
              prompt: "Trading'de korku açgözlülükten temel olarak nasıl farklıdır?",
              options: [
                "Korku pozisyon hacmini açgözlülükten daha güçlü artırır",
                "Korku ve açgözlülük tamamen aynı kararlara yol açar",
                "Korku çok temkinli davranmaya ve stratejiye uygun işlemleri kaçırmaya zorlar",
              ],
              correctAnswer: "Korku çok temkinli davranmaya ve stratejiye uygun işlemleri kaçırmaya zorlar",
            },
          ],
        },
        {
          slug: "distsiplina",
          title: "Disiplin",
          summary: "Kendi kurallarına uymak neden tek bir işlemden daha önemlidir.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Trading'de disiplin, o anda başka türlü davranmak istense bile önceden belirlenmiş giriş, çıkış ve risk yönetimi kurallarına tutarlı bir şekilde uyabilme yeteneğidir. Bir sistemi olan traderı duygularla işlem yapan kişiden ayıran tam olarak disiplindir.",
            },
            {
              type: "paragraph",
              text: "İşlem plana göre gitmediği her seferinde kurallar ihlal edilirse, mükemmel bir ticaret stratejisi bile sonuç vermez. Disiplin, basit, açıkça formüle edilmiş kurallar ve bunlara uyulup uyulmadığının düzenli analizi üzerine kuruludur.",
            },
            {
              type: "list",
              items: [
                "Disiplin, tek bir işlemin sonucundan daha önemlidir",
                "Kendi kurallarını ihlal etmek iyi bir stratejiyi bile değersizleştirir",
                "Kurallara uyumun düzenli analizi disiplini güçlendirmeye yardımcı olur",
              ],
            },
          ],
          questions: [
            {
              prompt: "Trading bağlamında disiplin nedir?",
              options: [
                "Maksimum kaldıraç kullanımı",
                "Önceden belirlenmiş kurallara tutarlı bir şekilde uymak",
                "Fiyat yönünü tahmin edebilme yeteneği",
              ],
              correctAnswer: "Önceden belirlenmiş kurallara tutarlı bir şekilde uymak",
            },
            {
              prompt: "İyi bir strateji bile disiplin olmadan neden işe yaramaz?",
              options: [
                "Çünkü disiplinin sonuç üzerinde etkisi yoktur",
                "Çünkü stratejiler her zaman aynı derecede iyi çalışır",
                "Çünkü işlem plana göre gitmediğinde kurallar ihlal edilir",
              ],
              correctAnswer: "Çünkü işlem plana göre gitmediğinde kurallar ihlal edilir",
            },
            {
              prompt: "Zamanla disiplini güçlendirmeye ne yardımcı olur?",
              options: [
                "İşlem analizinden tamamen vazgeçmek",
                "Kendi kurallarına uyulup uyulmadığının düzenli analizi",
                "Her işlemden sonra kuralları sürekli değiştirmek",
              ],
              correctAnswer: "Kendi kurallarına uyulup uyulmadığının düzenli analizi",
            },
          ],
        },
        {
          slug: "emotsionalny-kontrol",
          title: "Duygusal Kontrol",
          summary: "Kararları duygulara değil plana dayanarak vermeye yardımcı olan pratik teknikler.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Duygusal kontrol, duygusal durumu (heyecan, korku, bir zarardan sonraki sinirlilik) tanıyabilme ve bunun ticaret kararlarını doğrudan etkilemesine izin vermeme yeteneğidir. Bu, duyguların yokluğu değil, onlara rağmen plana göre hareket edebilme becerisidir.",
            },
            {
              type: "paragraph",
              text: "Duygusal kontrolün pratik araçları arasında işleme girmeden önce durup düşünmek, günde alınacak işlem veya zarar sayısına bir sınır koymak ve yalnızca sonucu değil, işlem anındaki duygusal durumu da kaydeden bir günlük tutmak yer alır.",
            },
            {
              type: "list",
              items: [
                "Duygusal kontrol, duyguların yokluğu değil onlara verilen tepkinin yönetilmesidir",
                "Günlük işlem veya zarar sınırı, tilt etkisini azaltır",
                "Günlükte duygusal durumu kaydetmek, tekrarlayan hataları tespit etmeye yardımcı olur",
              ],
            },
          ],
          questions: [
            {
              prompt: "Trading'de duygusal kontrol ile ne kastedilir?",
              options: [
                "İşlem sırasında herhangi bir duygunun tamamen yokluğu",
                "Diğer traderların duygularını tahmin edebilme yeteneği",
                "Duygulara rağmen plana göre hareket edebilme becerisi, tam yokluğu değil",
              ],
              correctAnswer: "Duygulara rağmen plana göre hareket edebilme becerisi, tam yokluğu değil",
            },
            {
              prompt: "Günlük işlem sayısı sınırı tradera nasıl yardımcı olur?",
              options: [
                "Stop-loss ihtiyacını tamamen ortadan kaldırır",
                "Gün sonunda kârı garanti eder",
                "Art arda gelen duygusal kararlar (tilt) riskini azaltır",
              ],
              correctAnswer: "Art arda gelen duygusal kararlar (tilt) riskini azaltır",
            },
            {
              prompt: "İşlem günlüğünde işlem sırasındaki duygusal durum neden kaydedilir?",
              options: [
                "Bu, işleme girmek için borsanın bir gerekliliğidir",
                "Bu, ticaret analizine hiçbir şekilde yardımcı olmaz",
                "Gelecekte tekrarlayan duygusal hataları tespit etmek için",
              ],
              correctAnswer: "Gelecekte tekrarlayan duygusal hataları tespit etmek için",
            },
          ],
        },
      ],
    },
    {
      title: "Göstergeler",
      lessons: [
        {
          slug: "rsi",
          title: "RSI",
          summary: "Göreceli güç endeksi: bir varlığın aşırı alım ve aşırı satımı nasıl ölçülür.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "RSI (Relative Strength Index), son fiyat değişimlerinin hızını ve büyüklüğünü 0 ile 100 arasında bir ölçekte ölçen bir osilatördür. 70'in üzerindeki değerler geleneksel olarak aşırı alım bölgesi, 30'un altındaki değerler aşırı satım bölgesi olarak kabul edilir, ancak güçlü bir trendde RSI bu bölgelerde uzun süre kalabilir.",
            },
            {
              type: "paragraph",
              text: "Aşırı alım/aşırı satım bölgelerinin yanı sıra traderlar RSI diverjanslarını da kullanır: fiyat yeni bir zirve yaparken RSI yapmıyorsa, bu ivmenin zayıfladığının sinyali olabilir. RSI nadiren tek başına kullanılır ve genellikle piyasa yapısı analiziyle birleştirilir.",
            },
            {
              type: "list",
              items: [
                "70'in üzerindeki RSI potansiyel aşırı alımı, 30'un altındaki ise aşırı satımı gösterir",
                "Güçlü bir trendde RSI, dönüş yaşanmadan ekstrem bölgede uzun süre kalabilir",
                "Fiyat ile RSI arasındaki diverjans trendin zayıfladığına işaret edebilir",
              ],
            },
            { type: "diagram", diagram: "rsi", caption: "Fiyat yeni bir zirve yaparken RSI yapmıyor — klasik bir düşüş diverjansı" },
          ],
          questions: [
            {
              prompt: "RSI hangi değer aralığında ölçülür?",
              options: [
                "-1'den 1'e",
                "0'dan 10.000'e",
                "0'dan 100'e",
              ],
              correctAnswer: "0'dan 100'e",
            },
            {
              prompt: "70'in üzerindeki bir RSI değeri geleneksel olarak ne anlama gelir?",
              options: [
                "Potansiyel bir aşırı alım bölgesi",
                "İşlem hacminin yokluğu",
                "Fiyatın kesinlikle aşağı döneceği garantisi",
              ],
              correctAnswer: "Potansiyel bir aşırı alım bölgesi",
            },
            {
              prompt: "Fiyat ile RSI arasındaki diverjans neyin sinyali olabilir?",
              options: [
                "Göstergenin teknik bir hatası",
                "Varlığın işlem gördüğü borsanın değişmesi",
                "Mevcut hareket ivmesinin zayıflaması",
              ],
              correctAnswer: "Mevcut hareket ivmesinin zayıflaması",
            },
          ],
        },
        {
          slug: "macd",
          title: "MACD",
          summary: "Hareketli ortalamaların yakınsama-ıraksama göstergesi ve kesişim, diverjans sinyalleri.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "MACD (Moving Average Convergence Divergence), iki üstel hareketli ortalama (genellikle 12 ve 26 periyot) ile bir sinyal çizgisi (MACD'nin kendisinin 9 periyotluk EMA'sı) arasındaki farka dayanır. Histogram, MACD ile sinyal çizgisi arasındaki farkı gösterir.",
            },
            {
              type: "paragraph",
              text: "MACD'nin başlıca sinyalleri, MACD çizgisi ile sinyal çizgisinin kesişimi (potansiyel ivme değişimi) ve sıfır çizgisinin kesilmesidir (trend yönünün değişimi). RSI gibi MACD de fiyatla diverjans gösterebilir, bu da genellikle ek bir doğrulama olarak kullanılır.",
            },
            {
              type: "list",
              items: [
                "MACD, iki EMA ve bir sinyal çizgisi arasındaki farka dayanır",
                "MACD ve sinyal çizgisinin kesişimi başlıca ticaret sinyallerinden biridir",
                "Sıfır çizgisinin kesilmesi genellikle trend yönünün değişimiyle ilişkilendirilir",
              ],
            },
          ],
          questions: [
            {
              prompt: "MACD göstergesi neye dayanır?",
              options: [
                "Açık pozisyon hacmine",
                "İki üstel hareketli ortalama arasındaki farka",
                "Ağdaki aktif cüzdan sayısına",
              ],
              correctAnswer: "İki üstel hareketli ortalama arasındaki farka",
            },
            {
              prompt: "MACD histogramı neyi gösterir?",
              options: [
                "MACD çizgisi ile sinyal çizgisi arasındaki farkı",
                "Borsadaki açık pozisyon sayısını",
                "Günlük toplam işlem hacmini",
              ],
              correctAnswer: "MACD çizgisi ile sinyal çizgisi arasındaki farkı",
            },
            {
              prompt: "MACD çizgisinin sıfır seviyesini kesmesi neyle ilişkilendirilir?",
              options: [
                "Trend yönünün değişimiyle",
                "Borsa komisyonundaki değişiklikle",
                "Yeni bir token listelemesiyle",
              ],
              correctAnswer: "Trend yönünün değişimiyle",
            },
          ],
        },
        {
          slug: "ema",
          title: "EMA",
          summary: "Üstel hareketli ortalama ve neden basit ortalamadan daha hızlı tepki verdiği.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "EMA (Exponential Moving Average), son fiyatlara daha fazla ağırlık veren bir hareketli ortalamadır, bu sayede basit hareketli ortalamaya (SMA) kıyasla fiyat değişimlerine daha hızlı tepki verir. Bu, EMA'yı daha duyarlı ama yatay piyasada yanlış sinyallere de daha açık hale getirir.",
            },
            {
              type: "paragraph",
              text: "Traderlar trend yönünü ve dinamik destek/direnç bölgelerini belirlemek için genellikle farklı periyotlara sahip birden fazla EMA'yı aynı anda kullanır (örneğin 20 ve 50). Hızlı ve yavaş EMA'nın kesişimi popüler ama gecikmeli bir sinyaldir.",
            },
            {
              type: "list",
              items: [
                "EMA, SMA'ya kıyasla son fiyatlara daha fazla ağırlık verir",
                "Farklı periyotlardaki birden fazla EMA, trend yönünü değerlendirmeye yardımcı olur",
                "Hızlı ve yavaş EMA'nın kesişimi gecikmeli ama popüler bir sinyaldir",
              ],
            },
          ],
          questions: [
            {
              prompt: "EMA, basit hareketli ortalamadan (SMA) nasıl farklıdır?",
              options: [
                "EMA fiyatı hiç hesaba katmaz",
                "EMA son fiyatlara daha fazla ağırlık verir ve değişimlere daha hızlı tepki verir",
                "EMA her zaman yalnızca hacme göre hesaplanır",
              ],
              correctAnswer: "EMA son fiyatlara daha fazla ağırlık verir ve değişimlere daha hızlı tepki verir",
            },
            {
              prompt: "Traderlar neden aynı anda farklı periyotlarda birden fazla EMA kullanır?",
              options: [
                "Bu hiçbir faydalı bilgi sağlamaz",
                "Trend yönünü ve dinamik destek/direnç bölgelerini değerlendirmek için",
                "Borsa komisyonunu azaltmak için",
              ],
              correctAnswer: "Trend yönünü ve dinamik destek/direnç bölgelerini değerlendirmek için",
            },
            {
              prompt: "Hızlı ve yavaş EMA'nın kesişiminin bir sinyal olarak dezavantajı nedir?",
              options: [
                "Sinyal grafikte görülemez",
                "Sinyal hareket başlamadan önce ortaya çıkar",
                "Sinyal, mevcut fiyat hareketine göre gecikmelidir",
              ],
              correctAnswer: "Sinyal, mevcut fiyat hareketine göre gecikmelidir",
            },
          ],
        },
        {
          slug: "sma",
          title: "SMA",
          summary: "Genel trend yönünü belirlemek için temel oluşturan basit hareketli ortalama.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "SMA (Simple Moving Average), N periyot boyunca kapanış fiyatının aritmetik ortalaması olarak hesaplanan basit bir hareketli ortalamadır. EMA'nın aksine, SMA'daki tüm periyotlar eşit ağırlığa sahiptir, bu yüzden fiyat değişimlerine daha yavaş tepki verir ve gürültüyü daha güçlü şekilde yumuşatır.",
            },
            {
              type: "paragraph",
              text: "SMA genellikle daha genel, daha uzun vadeli trend yönünü belirlemek için kullanılır — örneğin, günlük zaman diliminde fiyatın SMA 200'e göre konumu, genel olarak boğa veya ayı piyasasının bir göstergesi olarak yaygın şekilde kullanılır.",
            },
            {
              type: "list",
              items: [
                "SMA, belirli sayıda periyot boyunca fiyatın aritmetik ortalamasıdır",
                "SMA, EMA'dan daha güçlü gürültü yumuşatır ama daha yavaş tepki verir",
                "Günlük grafikteki SMA 200, genellikle küresel trendin bir göstergesi olarak kullanılır",
              ],
            },
          ],
          questions: [
            {
              prompt: "SMA nasıl hesaplanır?",
              options: [
                "Belirli sayıda periyot boyunca kapanış fiyatının aritmetik ortalaması olarak",
                "Günün en yüksek ve en düşük değeri arasındaki fark olarak",
                "Bir aylık tüm işlem hacimlerinin toplamı olarak",
              ],
              correctAnswer: "Belirli sayıda periyot boyunca kapanış fiyatının aritmetik ortalaması olarak",
            },
            {
              prompt: "SMA, fiyata tepki verme hızı açısından EMA'dan nasıl farklıdır?",
              options: [
                "Tepki hızında bir fark yoktur",
                "SMA her zaman EMA'dan daha hızlı tepki verir",
                "SMA daha yavaş tepki verir, çünkü tüm periyotlar eşit ağırlığa sahiptir",
              ],
              correctAnswer: "SMA daha yavaş tepki verir, çünkü tüm periyotlar eşit ağırlığa sahiptir",
            },
            {
              prompt: "Günlük zaman diliminde SMA 200 genellikle ne için kullanılır?",
              options: [
                "Borsa komisyonunu hesaplamak için",
                "Bir tokenin listelenme zamanını tam olarak belirlemek için",
                "Genel boğa veya ayı piyasasının bir göstergesi olarak",
              ],
              correctAnswer: "Genel boğa veya ayı piyasasının bir göstergesi olarak",
            },
          ],
        },
        {
          slug: "vwap",
          title: "VWAP",
          summary: "Hacim ağırlıklı ortalama fiyat ve günün \"adil\" fiyatının göstergesi olarak rolü.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "VWAP (Volume Weighted Average Price), bir varlığın belirli bir dönemdeki, her fiyat seviyesindeki işlem hacmine göre ağırlıklandırılmış ortalama fiyatıdır. Basit hareketli ortalamanın aksine VWAP, ana işlem hacminin gerçekte hangi fiyattan geçtiğini gösterir.",
            },
            {
              type: "paragraph",
              text: "Kurumsal traderlar VWAP'ı sıklıkla günün \"adil\" fiyatının göstergesi olarak kullanır: VWAP'ın üzerindeki fiyat görece pahalı, altındaki fiyat görece ucuz kabul edilir. VWAP ayrıca işlem seansı içinde dinamik bir destek/direnç seviyesi olarak da kullanılır.",
            },
            {
              type: "list",
              items: [
                "VWAP yalnızca fiyatı değil, her seviyedeki hacmi de dikkate alır",
                "VWAP'ın üzerindeki fiyat görece pahalı, altındaki fiyat görece ucuz olarak yorumlanır",
                "VWAP genellikle her işlem seansının başlangıcında yeniden hesaplanır",
              ],
            },
          ],
          questions: [
            {
              prompt: "VWAP, basit hareketli ortalamanın aksine neyi dikkate alır?",
              options: [
                "Yalnızca günün en yüksek fiyatını",
                "Yalnızca önceki günün kapanış fiyatını",
                "Her fiyat seviyesindeki işlem hacmini",
              ],
              correctAnswer: "Her fiyat seviyesindeki işlem hacmini",
            },
            {
              prompt: "VWAP'ın üzerinde bulunan bir fiyat nasıl yorumlanır?",
              options: [
                "Garantili bir alım sinyali olarak",
                "İşlemlerin durduğunun bir işareti olarak",
                "Ortalama hacimli seviyeye kıyasla görece pahalı olarak",
              ],
              correctAnswer: "Ortalama hacimli seviyeye kıyasla görece pahalı olarak",
            },
            {
              prompt: "Büyük emirleri gerçekleştirirken en çok kimler VWAP'a göre hareket eder?",
              options: [
                "Yalnızca yeni başlayan traderlar",
                "Yalnızca proje pazarlamacıları",
                "Kurumsal traderlar",
              ],
              correctAnswer: "Kurumsal traderlar",
            },
          ],
        },
        {
          slug: "atr",
          title: "ATR",
          summary: "Stop belirlemek için bir volatilite ölçüm aracı olarak ortalama gerçek aralık.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "ATR (Average True Range), mumlar arasındaki gap'leri de dikkate alarak bir varlığın belirli bir dönemdeki ortalama volatilitesini ölçer. Bu bir yön göstergesi değil, hareketin genliğinin göstergesidir — yüksek ATR fiyatın büyük dalgalanmalar yaptığını, düşük ATR ise piyasanın görece sakin olduğunu gösterir.",
            },
            {
              type: "paragraph",
              text: "ATR, mevcut volatiliteye uyarlanmış stop-loss büyüklüğünü hesaplamak için sıklıkla kullanılır: sabit bir yüzde yerine trader, ATR'nin bir katı kadar bir mesafede stop koyar, bu da olağan piyasa gürültüsünde vaktinden önce işlemden atılma olasılığını azaltır.",
            },
            {
              type: "list",
              items: [
                "ATR, fiyat hareketinin yönünü değil genliğini ölçer",
                "Yüksek ATR, varlığın artmış volatilitesi anlamına gelir",
                "ATR üzerinden hesaplanan bir stop-loss, mevcut piyasa volatilitesine uyarlanır",
              ],
            },
          ],
          questions: [
            {
              prompt: "ATR göstergesi neyi ölçer?",
              options: [
                "Ağdaki aktif adres sayısını",
                "Trend yönünü",
                "Bir varlığın ortalama volatilitesini (hareket genliğini)",
              ],
              correctAnswer: "Bir varlığın ortalama volatilitesini (hareket genliğini)",
            },
            {
              prompt: "Yüksek bir ATR değeri neyi gösterir?",
              options: [
                "Varlığın yakında listeden kaldırılacağını",
                "Borsanın düşük likiditesini",
                "Artmış volatilite ve büyük fiyat dalgalanmalarını",
              ],
              correctAnswer: "Artmış volatilite ve büyük fiyat dalgalanmalarını",
            },
            {
              prompt: "Traderlar pratikte ATR'yi en çok ne için kullanır?",
              options: [
                "Bir tokenin tam listelenme fiyatını belirlemek için",
                "Ağ komisyonunu hesaplamak için",
                "Mevcut volatiliteyi dikkate alarak stop-loss büyüklüğünü hesaplamak için",
              ],
              correctAnswer: "Mevcut volatiliteyi dikkate alarak stop-loss büyüklüğünü hesaplamak için",
            },
          ],
        },
        {
          slug: "bollinger-bands",
          title: "Bollinger Bands",
          summary: "Volatilite ve fiyatın göreceli pahalılığının bir göstergesi olarak Bollinger Bantları.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Bollinger Bands, bir hareketli ortalamadan (genellikle SMA 20) ve ondan fiyatın standart sapmasının belirli bir katı kadar uzaklıkta bulunan iki bantdan oluşur. Bantların genişliği volatiliteyle birlikte dinamik olarak değişir: güçlü hareket dönemlerinde genişler, durgunluk dönemlerinde daralır.",
            },
            {
              type: "paragraph",
              text: "Bantların daralması (\"sıkışma\") genellikle her iki yönde de güçlü bir fiyat hareketinden önce gelir, fiyatın üst veya alt banda değmesi ise tek başına bir dönüş sinyali değildir — güçlü bir trendde fiyat, bant boyunca uzun süre hareket edebilir.",
            },
            {
              type: "list",
              items: [
                "Bantlar, standart sapmaya dayanarak bir hareketli ortalama etrafında oluşturulur",
                "Bantların daralması genellikle güçlü bir fiyat hareketinden önce gelir",
                "Banda değmek, özellikle güçlü bir trendde, dönüşü garanti etmez",
              ],
            },
          ],
          questions: [
            {
              prompt: "Bollinger Bands neden oluşur?",
              options: [
                "Üç bağımsız hacim çizgisinden",
                "Bir hareketli ortalama ve standart sapmaya dayanan iki bantdan",
                "Tek bir kapanış fiyatı çizgisinden",
              ],
              correctAnswer: "Bir hareketli ortalama ve standart sapmaya dayanan iki bantdan",
            },
            {
              prompt: "Bollinger Bands'e göre güçlü bir fiyat hareketinden önce genellikle ne olur?",
              options: [
                "Bantların daralması (sıkışması)",
                "Bantların grafikten tamamen kaybolması",
                "Bantların maksimuma kadar genişlemesi",
              ],
              correctAnswer: "Bantların daralması (sıkışması)",
            },
            {
              prompt: "Fiyatın Bollinger üst bandına değmesi kesin bir aşağı dönüş anlamına gelir mi?",
              options: [
                "Evet, ama yalnızca haftalık zaman diliminde",
                "Hayır, güçlü bir trendde fiyat bant boyunca uzun süre hareket edebilir",
                "Evet, bu her zaman yüzde yüz kesin bir dönüş sinyalidir",
              ],
              correctAnswer: "Hayır, güçlü bir trendde fiyat bant boyunca uzun süre hareket edebilir",
            },
          ],
        },
      ],
    },
    {
      title: "Hacim Analizi",
      lessons: [
        {
          slug: "volume",
          title: "Volume",
          summary: "Fiyat hareketinin gücünün bir teyidi olarak işlem hacmi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Volume (hacim), bir dönemde işlem gören varlık miktarını gösterir. Hacim, fiyattan türetilmeyen, piyasa katılımcılarının gerçek aktivitesini yansıtan az sayıdaki göstergeden biridir, bu yüzden genellikle hareketin bağımsız bir teyidi olarak kullanılır.",
            },
            {
              type: "paragraph",
              text: "Yüksek hacimde gerçekleşen bir fiyat hareketi, düşük hacimdeki aynı harekete göre daha güvenilir kabul edilir: hacim artışı olmadan gerçekleşen bir seviye kırılımı daha sık yanlış çıkar. Ani hacim artışları da genellikle piyasanın kilit dönüş noktalarıyla örtüşür.",
            },
            {
              type: "list",
              items: [
                "Hacim, fiyatın bir türevi değil katılımcıların gerçek aktivitesini yansıtır",
                "Düşük hacimde bir seviye kırılımı daha sık yanlış çıkar",
                "Ani hacim artışları genellikle dönüş noktalarıyla örtüşür",
              ],
            },
          ],
          questions: [
            {
              prompt: "Hacim neden fiyat hareketinin bağımsız bir teyidi olarak kabul edilir?",
              options: [
                "Çünkü hacim her zaman fiyatla birlikte artar",
                "Fiyatın kendisinden türetilmeyip katılımcıların gerçek aktivitesini yansıttığı için",
                "Çünkü hacim piyasa değerinin yüzdesi olarak ölçülür",
              ],
              correctAnswer: "Fiyatın kendisinden türetilmeyip katılımcıların gerçek aktivitesini yansıttığı için",
            },
            {
              prompt: "Hangi seviye kırılımı daha az güvenilir kabul edilir?",
              options: [
                "Kırılımın güvenilirliği hacme bağlı değildir",
                "Düşük hacimde gerçekleşen kırılım",
                "Yüksek hacimde gerçekleşen kırılım",
              ],
              correctAnswer: "Düşük hacimde gerçekleşen kırılım",
            },
            {
              prompt: "Ani hacim artışları genellikle neyle örtüşür?",
              options: [
                "Tokenin isim değişikliğiyle",
                "Piyasanın kilit dönüş noktalarıyla",
                "Yalnızca borsanın teknik arızalarıyla",
              ],
              correctAnswer: "Piyasanın kilit dönüş noktalarıyla",
            },
          ],
        },
        {
          slug: "delta",
          title: "Delta",
          summary: "Fiyat üzerindeki baskının göstergesi olarak alım ve satım hacmi arasındaki fark.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Delta, bir dönemde agresif alımların (piyasa alım emirleriyle) hacmi ile agresif satımların hacmi arasındaki farktır. Pozitif delta, fiyatın sonunda nereye hareket ettiğinden bağımsız olarak alıcıların baskın olduğunu; negatif delta ise satıcıların baskın olduğunu gösterir.",
            },
            {
              type: "paragraph",
              text: "Delta ile fiyat hareketi arasındaki uyumsuzluk — örneğin fiyat yükselirken delta negatifse — yükselişin piyasa alımlarıyla değil kısa pozisyonların kapatılmasıyla sağlandığına işaret edebilir ve böyle bir yükseliş daha az sürdürülebilirdir.",
            },
            {
              type: "list",
              items: [
                "Pozitif delta, agresif alımların satımlara üstün geldiğini gösterir",
                "Delta, nihai fiyat değişimini değil katılımcı baskısını ölçer",
                "Fiyat ile delta arasındaki uyumsuzluk hareketin istikrarsızlığına işaret edebilir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Pozitif delta ne gösterir?",
              options: [
                "Gelecekte fiyatın kesin olarak yükseleceğini",
                "İşlem aktivitesinin yokluğunu",
                "Agresif alımların satımlara üstün geldiğini",
              ],
              correctAnswer: "Agresif alımların satımlara üstün geldiğini",
            },
            {
              prompt: "Negatif delta ile birlikte gerçekleşen bir fiyat yükselişi ne hakkında bilgi verebilir?",
              options: [
                "Deltanın yanlış hesaplandığı hakkında",
                "Borsada teknik bir hata olduğu hakkında",
                "Yükseliş yeni alımlarla değil kısa pozisyonların kapatılmasıyla sağlanıyor olabilir",
              ],
              correctAnswer: "Yükseliş yeni alımlarla değil kısa pozisyonların kapatılmasıyla sağlanıyor olabilir",
            },
            {
              prompt: "Hacim deltası tam olarak neyi ölçer?",
              options: [
                "Tokenin sahip sayısını",
                "Varlığın toplam piyasa değerini",
                "Agresif emirler üzerinden alıcı ve satıcı baskısını",
              ],
              correctAnswer: "Agresif emirler üzerinden alıcı ve satıcı baskısını",
            },
          ],
        },
        {
          slug: "open-interest",
          title: "Open Interest",
          summary: "Türev piyasasındaki aktif pozisyon sayısının göstergesi olarak açık pozisyon.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Open Interest (açık pozisyon, OI), türev piyasasında (vadeli işlemler, perpetual sözleşmeler) henüz kapatılmamış toplam açık sözleşme sayısıdır. Her dönemde sıfırlanan hacmin aksine OI, biriken aktif pozisyon miktarını gösterir.",
            },
            {
              type: "paragraph",
              text: "OI'nin fiyat yükselişiyle birlikte artması genellikle yeni sermaye girişini ve trendin güçlenmesini gösterir. Düşen OI ile birlikte fiyat yükselişi ise daha çok kısa pozisyonların kapatılmasını, yeni talebi değil, gösterir. OI'de ani bir düşüş genellikle kitlesel likidasyonlarla ilişkilidir.",
            },
            {
              type: "list",
              items: [
                "OI, henüz kapatılmamış açık sözleşme sayısını gösterir",
                "Fiyat ve OI'nin birlikte artması genellikle yeni sermaye girişine işaret eder",
                "OI'de ani bir düşüş genellikle kitlesel pozisyon likidasyonlarına eşlik eder",
              ],
            },
          ],
          questions: [
            {
              prompt: "Open Interest neyi gösterir?",
              options: [
                "Henüz kapatılmamış toplam açık sözleşme sayısını",
                "Borsanın kayıtlı kullanıcı sayısını",
                "Borsanın tüm tarihindeki toplam işlem hacmini",
              ],
              correctAnswer: "Henüz kapatılmamış toplam açık sözleşme sayısını",
            },
            {
              prompt: "Fiyat ve Open Interest'in aynı anda artması genellikle neyi gösterir?",
              options: [
                "Yeni sermaye girişini ve trendin güçlenmesini",
                "Volatilitenin sıfıra düşmesini",
                "Borsanın teknik bir arızasını",
              ],
              correctAnswer: "Yeni sermaye girişini ve trendin güçlenmesini",
            },
            {
              prompt: "Open Interest'teki ani bir düşüş genellikle neyle ilişkilidir?",
              options: [
                "Listeye yeni bir token eklenmesiyle",
                "Açık pozisyonların kitlesel likidasyonuyla",
                "Borsanın planlı güncellemesiyle",
              ],
              correctAnswer: "Açık pozisyonların kitlesel likidasyonuyla",
            },
          ],
        },
        {
          slug: "funding-rate",
          title: "Funding Rate",
          summary: "Perpetual vadeli işlemlerdeki fonlama oranı ve piyasa duyarlılığı hakkında ne söylediği.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Funding Rate, perpetual vadeli işlemlerde uzun ve kısa pozisyon sahipleri arasındaki periyodik ödemedir; sözleşme fiyatını spot piyasa fiyatına yakın tutan bir mekanizmadır. Pozitif fonlama, longların shortlara ödeme yaptığı; negatif fonlama ise tam tersi anlamına gelir.",
            },
            {
              type: "paragraph",
              text: "Sürekli olarak yüksek pozitif fonlama genellikle longların fazlalığıyla aşırı ısınmış bir piyasayı gösterir, bu da aşağı yönlü bir dönüşte kademeli likidasyon riskini artırır. Keskin negatif fonlama ise tam tersine aşırı kötümserliğe ve bir sıçrama potansiyeline işaret edebilir.",
            },
            {
              type: "list",
              items: [
                "Funding Rate, perpetual vadeli işlem fiyatını spot fiyata yakın tutar",
                "Sürekli yüksek pozitif fonlama, piyasanın longlarla aşırı ısındığını gösterir",
                "Keskin negatif fonlama, piyasanın aşırı kötümserliğine işaret edebilir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Funding Rate perpetual vadeli işlemlerde hangi işlevi görür?",
              options: [
                "Borsanın para çekme komisyonunu belirler",
                "Maksimum kaldıracı belirler",
                "Sözleşme fiyatını spot piyasa fiyatına yakın tutar",
              ],
              correctAnswer: "Sözleşme fiyatını spot piyasa fiyatına yakın tutar",
            },
            {
              prompt: "Sürekli olarak yüksek pozitif fonlama ne anlama gelir?",
              options: [
                "Piyasa, fazla long pozisyonla aşırı ısınmıştır",
                "Varlığın fiyatı kesinlikle daha da yükselecektir",
                "Piyasada hiç trader bulunmamaktadır",
              ],
              correctAnswer: "Piyasa, fazla long pozisyonla aşırı ısınmıştır",
            },
            {
              prompt: "Funding Rate pozitif olduğunda kim kime ödeme yapar?",
              options: [
                "Borsa tüm traderlara eşit şekilde öder",
                "Kısa pozisyon sahipleri uzun pozisyon sahiplerine öder",
                "Uzun pozisyon sahipleri kısa pozisyon sahiplerine öder",
              ],
              correctAnswer: "Uzun pozisyon sahipleri kısa pozisyon sahiplerine öder",
            },
          ],
        },
        {
          slug: "liquidations",
          title: "Liquidations",
          summary: "Kaldıraçlı pozisyonların zorla kapatılması ve likidasyonların fiyat hareketini neden güçlendirdiği.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Liquidations (likidasyonlar), bir pozisyondaki zarar, marjın onu tutmaya artık yetmediği bir seviyeye ulaştığında borsa tarafından pozisyonun zorla kapatılmasıdır. Likidasyonlar piyasa fiyatından gerçekleşir ve traderın isteğine bağlı değildir.",
            },
            {
              type: "paragraph",
              text: "Tek bir yönde gerçekleşen kitlesel likidasyonlar (kademeli likidasyonlar) fiyat hareketini kendi başına güçlendirir: long pozisyonların kapatılması ek satıcı baskısı, short pozisyonların kapatılması ise ek talep yaratır, bu da güçlü volatilite dönemlerinde ani, hızlı fiyat hareketlerini açıklar.",
            },
            {
              type: "list",
              items: [
                "Likidasyon, marj yetersizliği nedeniyle borsanın pozisyonu zorla kapatmasıdır",
                "Kademeli likidasyonlar, fiyat hareketini tek bir yönde güçlendirir ve hızlandırır",
                "Likidasyon haritaları, traderlar tarafından yüksek riskli bölgeleri değerlendirmek için kullanılır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Bir pozisyon likide edildiğinde ne olur?",
              options: [
                "Trader pozisyonu gönüllü olarak kârla kapatır",
                "Borsa, marj yetersizliği nedeniyle pozisyonu zorla kapatır",
                "Borsa pozisyon hacmini otomatik olarak iki katına çıkarır",
              ],
              correctAnswer: "Borsa, marj yetersizliği nedeniyle pozisyonu zorla kapatır",
            },
            {
              prompt: "Kademeli likidasyonlar fiyat hareketini neden güçlendirir?",
              options: [
                "Likidasyonlar fiyat hareketini her zaman tamamen durdurur",
                "Pozisyonların kapatılması hareket yönünde ek baskı yaratır",
                "Likidasyonların fiyat üzerinde hiçbir etkisi yoktur",
              ],
              correctAnswer: "Pozisyonların kapatılması hareket yönünde ek baskı yaratır",
            },
            {
              prompt: "Traderlar likidasyon haritalarını (heatmap) ne için kullanır?",
              options: [
                "Kârdan alınan vergiyi hesaplamak için",
                "Ani fiyat hareketi riskinin yüksek olduğu bölgeleri değerlendirmek için",
                "Bir sonraki halvingin tam tarihini öğrenmek için",
              ],
              correctAnswer: "Ani fiyat hareketi riskinin yüksek olduğu bölgeleri değerlendirmek için",
            },
          ],
        },
      ],
    },
    {
      title: "On-Chain Analiz",
      lessons: [
        {
          slug: "koshelki-kitov",
          title: "Balina Cüzdanları",
          summary: "Büyük cüzdanların takibi, büyük sahiplerin duyarlılığını değerlendirmeye nasıl yardımcı olur.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "\"Balinalar\", toplam arzın büyük bir bölümüne sahip adreslerdir. Blok zincirindeki tüm işlemler herkese açık olduğundan traderlar bu tür cüzdanların hareketlerini takip eder — örneğin borsalara yapılan büyük transferler (potansiyel satış hazırlığı) veya tam tersine borsalardan soğuk depolamaya transferler.",
            },
            {
              type: "paragraph",
              text: "Bağlamı dikkate almak önemlidir: borsadan bir transfer her zaman uzun vadeli tutma anlamına gelmez, borsaya bir transfer de her zaman anında satış anlamına gelmez — bu, aynı sahibin cüzdanları arasında bir yeniden dağıtım olabilir. Balina verileri, tek başına değil ek bir sinyal olarak kullanılmalıdır.",
            },
            {
              type: "list",
              items: [
                "Balina cüzdanları, blok zinciri işlemlerinin herkese açık olması sayesinde takip edilebilir",
                "Borsaya yapılan büyük bir transfer genellikle potansiyel bir satış hazırlığı olarak yorumlanır",
                "Balina hareket verileri, tek başına değil diğer analiz türleriyle birlikte kullanılmalıdır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Balina cüzdanlarının hareketlerini takip etmek neden mümkündür?",
              options: [
                "Bu yalnızca düzenleyiciler için mümkündür",
                "Blok zincirindeki tüm işlemler herkese açık olarak erişilebilirdir",
                "Borsalar müşterilerinin kişisel verilerini her gün yayınlar",
              ],
              correctAnswer: "Blok zincirindeki tüm işlemler herkese açık olarak erişilebilirdir",
            },
            {
              prompt: "Borsaya yapılan büyük bir token transferi genellikle nasıl yorumlanır?",
              options: [
                "Uzun vadeli tutmanın garantili bir sinyali olarak",
                "Ağın teknik bir hatası olarak",
                "Potansiyel bir satış hazırlığı olarak",
              ],
              correctAnswer: "Potansiyel bir satış hazırlığı olarak",
            },
            {
              prompt: "Balina hareket verilerini kullanmanın en doğru yolu nedir?",
              options: [
                "İşleme girmek için tek ve yeterli sinyal olarak",
                "Bu tür veriler işe yaramaz ve dikkate alınmamalıdır",
                "Diğer analiz türleriyle birlikte ek bir sinyal olarak",
              ],
              correctAnswer: "Diğer analiz türleriyle birlikte ek bir sinyal olarak",
            },
          ],
        },
        {
          slug: "birzhevye-pritoki-i-ottoki",
          title: "Borsa Giriş ve Çıkışları",
          summary: "Coinlerin borsalara ve borsalardan hareketi, fiyat üzerindeki potansiyel baskı açısından ne anlama gelir.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Borsa girişleri (exchange inflow), borsa cüzdanlarına transfer edilen coin miktarıdır; çıkışlar (exchange outflow) ise borsalardan çekilen coin miktarıdır. Girişlerdeki artış genellikle potansiyel satıcı baskısının artması, çıkışlardaki artış ise birikim ve mevcut arzın azalması olarak yorumlanır.",
            },
            {
              type: "paragraph",
              text: "Borsalardan uzun süre boyunca sürekli net çıkış genellikle bir birikim aşamasıyla ve satışa hazır likit arzın azalmasıyla ilişkilendirilir. Büyük bir tutarın ani, tek seferlik bir girişi ise genellikle yerel volatiliteden önce gelir.",
            },
            {
              type: "list",
              items: [
                "Borsalara giriş, genellikle potansiyel satış arzındaki artışla ilişkilendirilir",
                "Borsalardan sürekli çıkış genellikle bir birikim aşamasıyla ilişkilendirilir",
                "Büyük bir tutarın ani, tek seferlik girişi genellikle yerel volatiliteden önce gelir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Borsa girişi (exchange inflow) neye denir?",
              options: [
                "Borsa cüzdanlarına transfer edilen coin miktarı",
                "Borsanın yeni kullanıcı sayısı",
                "Bir günde madenciler tarafından çıkarılan coin miktarı",
              ],
              correctAnswer: "Borsa cüzdanlarına transfer edilen coin miktarı",
            },
            {
              prompt: "Borsalardan sürekli coin çıkışı genellikle hangi piyasa aşamasıyla ilişkilendirilir?",
              options: [
                "Yeni bir tokenin listelenmesiyle",
                "Birikim aşamasıyla",
                "Panik satış aşamasıyla",
              ],
              correctAnswer: "Birikim aşamasıyla",
            },
            {
              prompt: "Borsaya büyük bir tutarın ani, tek seferlik girişinden genellikle sonra ne gelir?",
              options: [
                "İşlemlerin tamamen durması",
                "Yerel fiyat volatilitesi",
                "Borsa komisyonlarının otomatik olarak düşmesi",
              ],
              correctAnswer: "Yerel fiyat volatilitesi",
            },
          ],
        },
        {
          slug: "tvl",
          title: "TVL",
          summary: "Bir DeFi protokolüne duyulan güvenin göstergesi olarak toplam kilitli değer.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "TVL (Total Value Locked), bir protokolün akıllı sözleşmelerinde kilitli varlıkların toplam değeridir: likidite havuzlarında, stakingte, kredi platformlarında. TVL, sıklıkla bir protokolün veya tüm blok zinciri ağının ölçeğinin ve kullanıcı güveninin bir göstergesi olarak kullanılır.",
            },
            {
              type: "paragraph",
              text: "TVL'deki artışın yalnızca yeni sermaye girişinden değil, zaten kilitli olan varlıkların fiyatındaki artıştan da kaynaklanabileceğini dikkate almak önemlidir. TVL'deki ani bir düşüş ise hem sermaye çıkışına hem de kilitli tokenlerin fiyatındaki düşüşe işaret edebilir.",
            },
            {
              type: "list",
              items: [
                "TVL, bir protokolün akıllı sözleşmelerinde kilitli varlıkların değerini ölçer",
                "TVL'deki artış hem yeni sermaye girişini hem de varlık fiyatındaki artışı yansıtabilir",
                "TVL'deki ani bir düşüş genellikle protokol için endişe verici bir sinyal olarak görülür",
              ],
            },
          ],
          questions: [
            {
              prompt: "TVL göstergesi neyi ölçer?",
              options: [
                "Projede çalışan geliştirici sayısını",
                "Ağın tüm zamanlardaki toplam işlem sayısını",
                "Bir protokolün akıllı sözleşmelerinde kilitli varlıkların toplam değerini",
              ],
              correctAnswer: "Bir protokolün akıllı sözleşmelerinde kilitli varlıkların toplam değerini",
            },
            {
              prompt: "Yeni sermaye girmese bile TVL neden artabilir?",
              options: [
                "TVL yeni sermaye girişi olmadan artamaz",
                "Zaten kilitli olan varlıkların fiyatındaki artış nedeniyle",
                "Toplam piyasa değerindeki düşüş nedeniyle",
              ],
              correctAnswer: "Zaten kilitli olan varlıkların fiyatındaki artış nedeniyle",
            },
            {
              prompt: "Traderlar bir protokolün TVL'sindeki ani bir düşüşü genellikle nasıl yorumlar?",
              options: [
                "TVL, protokolün durumuyla hiçbir şekilde ilişkili değildir",
                "Potansiyel olarak endişe verici bir sinyal olarak (sermaye çıkışı veya varlık fiyatındaki düşüş)",
                "Kesinlikle olumlu bir alım sinyali olarak",
              ],
              correctAnswer: "Potansiyel olarak endişe verici bir sinyal olarak (sermaye çıkışı veya varlık fiyatındaki düşüş)",
            },
          ],
        },
        {
          slug: "stablecoins",
          title: "Stabilcoinler",
          summary: "Stabilcoinlerin kripto piyasasındaki rolü ve borsalardaki rezervlerinin potansiyel talebin göstergesi olarak önemi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Stabilcoinler, kuru istikrarlı bir varlığa, çoğunlukla ABD dolarına (USDT, USDC) sabitlenmiş kripto paralardır. Kripto piyasasının temel \"hesap birimi\" işlevini görürler ve geleneksel bankacılık sistemine çıkış yapmadan varlıklar arasında geçiş yapmayı ve değeri sabitlemeyi sağlarlar.",
            },
            {
              type: "paragraph",
              text: "Borsa cüzdanlarındaki toplam stabilcoin miktarı sıklıkla \"kuru barut\" göstergesi — yani piyasanın potansiyel satın alma gücü — olarak değerlendirilir. Borsalardaki stabilcoin rezervlerinin artması, riskli varlıklara olan talebin artmasından önce gelebilir.",
            },
            {
              type: "list",
              items: [
                "Stabilcoinler istikrarlı bir varlığa, genellikle ABD dolarına sabitlenmiştir",
                "Kripto piyasası içinde hesap birimi ve değer saklama aracı işlevi görürler",
                "Borsalardaki stabilcoin rezervlerinin artması, potansiyel satın alma gücündeki artışla ilişkilendirilir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Stabilcoinleri çoğu diğer kripto paradan ayıran nedir?",
              options: [
                "Cüzdanlar arasında transfer edilememeleri",
                "Yalnızca blok zinciri dışında var olmaları",
                "Kurlarının istikrarlı bir varlığa, genellikle ABD dolarına sabitlenmiş olması",
              ],
              correctAnswer: "Kurlarının istikrarlı bir varlığa, genellikle ABD dolarına sabitlenmiş olması",
            },
            {
              prompt: "Stabilcoinler kripto piyasasında hangi işlevi görür?",
              options: [
                "Piyasa içinde hesap birimi ve değer saklama aracı işlevi",
                "Blok zinciri konsensüs mekanizmasının yerine geçme işlevi",
                "Tek madencilik yöntemi işlevi",
              ],
              correctAnswer: "Piyasa içinde hesap birimi ve değer saklama aracı işlevi",
            },
            {
              prompt: "Borsalardaki stabilcoin rezervlerindeki artış neye işaret edebilir?",
              options: [
                "Piyasanın potansiyel satın alma gücündeki artışa",
                "Borsadaki işlemlerin tamamen durmasına",
                "Stabilcoinde teknik bir arızaya",
              ],
              correctAnswer: "Piyasanın potansiyel satın alma gücündeki artışa",
            },
          ],
        },
        {
          slug: "onchain-metriki",
          title: "On-Chain Metrikler",
          summary: "Temel ağ metriklerine genel bakış: aktif adresler, ağ komisyonları ve analizdeki kullanımları.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "On-chain metrikler, doğrudan blok zincirinden elde edilebilen verilerdir: aktif adres sayısı, transfer hacmi, ağ komisyonları, yeni cüzdan sayısı. Piyasa verilerinin (fiyat, borsa hacmi) aksine bunlar gerçek ağ aktivitesini yansıtır.",
            },
            {
              type: "paragraph",
              text: "Görece sakin bir fiyat sırasında aktif adres sayısında ve transfer hacminde artış, ağın temel kullanımının arttığına işaret edebilir. Bu tür metrikler, girişin tam zamanlamasından çok orta ve uzun vadeli analiz için özellikle faydalıdır.",
            },
            {
              type: "list",
              items: [
                "On-chain metrikler yalnızca borsadaki fiyatı değil, ağın gerçek aktivitesini yansıtır",
                "Sakin bir fiyat sırasında aktif adreslerin artması, temel kullanımın arttığına işaret edebilir",
                "On-chain analiz, tam zamanlamadan çok orta ve uzun vadeli sonuçlar için daha uygundur",
              ],
            },
          ],
          questions: [
            {
              prompt: "On-chain metrikler, fiyat ve borsa hacmi gibi salt piyasa verilerinden nasıl farklıdır?",
              options: [
                "Doğrudan blok zincirinden elde edilir ve gerçek ağ aktivitesini yansıtır",
                "Yalnızca borsa sahiplerine açıktır",
                "Piyasa verileriyle tamamen aynıdır",
              ],
              correctAnswer: "Doğrudan blok zincirinden elde edilir ve gerçek ağ aktivitesini yansıtır",
            },
            {
              prompt: "Görece sakin bir fiyat sırasında ağın aktif adreslerindeki artış neye işaret edebilir?",
              options: [
                "Blok zincirinde teknik bir bozulmaya",
                "İşlemlerin tamamen durmasına",
                "Ağın temel kullanımının arttığına",
              ],
              correctAnswer: "Ağın temel kullanımının arttığına",
            },
            {
              prompt: "On-chain metrikler hangi analiz ufku için genellikle en uygunudur?",
              options: [
                "Orta ve uzun vadeli analiz için",
                "On-chain metrikler pratikte hiçbir yerde kullanılmaz",
                "Yalnızca dakika hassasiyetinde giriş zamanlaması için",
              ],
              correctAnswer: "Orta ve uzun vadeli analiz için",
            },
          ],
        },
      ],
    },
    {
      title: "Profesyonel Trading",
      lessons: [
        {
          slug: "torgovy-zhurnal",
          title: "İşlem Günlüğü",
          summary: "Her işlemi neden kaydetmeli ve günlük kaydına neler dahil edilmeli.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "İşlem günlüğü, her işlemin sistematik bir kaydıdır: giriş nedeni, pozisyon büyüklüğü, stop-loss ve take profit, nihai sonuç ve traderın duygusal durumu. Günlük olmadan trader, başarılı işlemleri seçici olarak hatırlayan ve başarısız olanları silen hafızasına güvenir.",
            },
            {
              type: "paragraph",
              text: "Günlüğün düzenli analizi, düzenlilikleri ortaya çıkarmaya olanak tanır: örneğin, zararların çoğunun net bir sinyal olmadan açılan işlemlerden kaynaklandığını veya günün belirli bir saatinin istikrarlı biçimde daha az kârlı olduğunu görmek gibi. Bu, sezgisel hisleri somut, doğrulanabilir verilere dönüştürür.",
            },
            {
              type: "list",
              items: [
                "Günlük, yalnızca işlemin sonucunu değil, giriş nedenini de kaydetmelidir",
                "Günlüğün düzenli analizi, tekrarlayan hataları tespit etmeye yardımcı olur",
                "Günlük verileri, traderın öznel hafızasından daha nesneldir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Trader neden işlem günlüğü tutmalıdır?",
              options: [
                "Günlük yalnızca vergi beyannamesi için gereklidir",
                "İşlem açmak için borsanın bir gerekliliğidir",
                "İşlemleri seçici hafıza yerine nesnel olarak kaydetmek için",
              ],
              correctAnswer: "İşlemleri seçici hafıza yerine nesnel olarak kaydetmek için",
            },
            {
              prompt: "İşlemin sonucu dışında günlük kaydında mutlaka neyin yer alması gerekir?",
              options: [
                "Kullanılan cihazın adı",
                "İşleme giriş nedeni",
                "Yalnızca dolar cinsinden nihai kâr",
              ],
              correctAnswer: "İşleme giriş nedeni",
            },
            {
              prompt: "İşlem günlüğünün düzenli analizi ne sağlar?",
              options: [
                "Depozito hacmini otomatik olarak artırır",
                "Gelecekte zarar eden işlem olmayacağını garanti eder",
                "Tekrarlayan düzenlilikleri ve hataları bulmayı sağlar",
              ],
              correctAnswer: "Tekrarlayan düzenlilikleri ve hataları bulmayı sağlar",
            },
          ],
        },
        {
          slug: "sozdanie-strategii",
          title: "Strateji Oluşturma",
          summary: "Eksiksiz bir ticaret stratejisi hangi zorunlu unsurlardan oluşur.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Ticaret stratejisi, açıkça tanımlanmış bir kurallar bütünüdür: hangi piyasada işlem yapılacağı, hangi koşullarda işleme girileceği, stop-loss ve take profit'in nereye konulacağı, depozitonun yüzde kaçının riske edileceği. Önceden belirlenmiş bu kurallar olmadan trading, rastgele kararlar yığınına dönüşür.",
            },
            {
              type: "paragraph",
              text: "İyi bir strateji, başka birine anlatılabilecek ve geçmiş verilerle test edilebilecek kadar somut olmalıdır. %100 başarı oranıyla çalışması gerekmez — önemli olan kuralların tekrarlanabilir olması ve matematiksel beklentinin pozitif olmasıdır.",
            },
            {
              type: "list",
              items: [
                "Strateji mutlaka giriş, çıkış koşullarını ve risk yönetimi kurallarını içerir",
                "Kurallar, geçmiş veriler üzerinde test edilebilecek kadar somut olmalıdır",
                "Stratejinin amacı %100 doğruluk değil, pozitif matematiksel beklentidir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Ticaret stratejisinin tanımına mutlaka neler dahil edilmelidir?",
              options: [
                "Traderın favori kripto paralarının listesi",
                "Giriş, çıkış koşulları ve risk yönetimi kuralları",
                "Yalnızca aylık istenen kâr tutarı",
              ],
              correctAnswer: "Giriş, çıkış koşulları ve risk yönetimi kuralları",
            },
            {
              prompt: "Strateji neden belirsiz değil, somut olmalıdır?",
              options: [
                "Diğer traderlardan gizlenebilmesi için",
                "Açıklanabilmesi ve geçmiş verilerle test edilebilmesi için",
                "Kuralların belirsizliğinin bir önemi yoktur",
              ],
              correctAnswer: "Açıklanabilmesi ve geçmiş verilerle test edilebilmesi için",
            },
            {
              prompt: "İyi bir strateji işlemlerin %100'ünde kârlı olmalı mıdır?",
              options: [
                "Evet, ama yalnızca günlük zaman diliminde",
                "Evet, aksi halde strateji işe yaramaz sayılır",
                "Hayır, önemli olan genel olarak pozitif matematiksel beklentidir",
              ],
              correctAnswer: "Hayır, önemli olan genel olarak pozitif matematiksel beklentidir",
            },
          ],
        },
        {
          slug: "backtest",
          title: "Backtest",
          summary: "Gerçek uygulamadan önce ticaret stratejisinin geçmiş verilerle test edilmesi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Backtest, bir ticaret stratejisinin geçmiş verilerle test edilmesidir: stratejinin kârlı olup olmayacağını değerlendirmek için kurallar geçmiş fiyat verilerine uygulanır. Bu, gerçek sermayeyi riske atmadan strateji hakkında istatistik elde etmenin bir yoludur.",
            },
            {
              type: "paragraph",
              text: "Backtest'in sınırlamaları vardır: geçmiş sonuçlar geleceği garanti etmez ve özensiz test, kuralların belirli bir tarihsel döneme aşırı uyarlanmasına (overfitting) yol açabilir. Yine de backtest, bir stratejiye gerçek para emanet etmeden önce atılması gereken gerekli bir ilk adımdır.",
            },
            {
              type: "list",
              items: [
                "Backtest, stratejiyi gerçek risk almadan geçmiş verilerle değerlendirmeyi sağlar",
                "Backtest'in geçmiş sonuçları gelecekte aynı sonucu garanti etmez",
                "Kuralların belirli bir tarihsel döneme aşırı uyarlanması, backtestin tipik bir hatasıdır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Bir ticaret stratejisinin backtesti nedir?",
              options: [
                "Diğer traderlara strateji hakkında anket yapma",
                "Minimum depozito ile gerçek işlem yapma",
                "Strateji kurallarının geçmiş fiyat verileriyle test edilmesi",
              ],
              correctAnswer: "Strateji kurallarının geçmiş fiyat verileriyle test edilmesi",
            },
            {
              prompt: "Başarılı bir backtest gelecekte aynı sonucu garanti eder mi?",
              options: [
                "Hayır, geçmiş sonuçlar geleceği garanti etmez",
                "Garanti eder, ama yalnızca hisse senetleri için",
                "Evet, backtest sonucu gerçek trading'de her zaman tekrarlanır",
              ],
              correctAnswer: "Hayır, geçmiş sonuçlar geleceği garanti etmez",
            },
            {
              prompt: "Backtesting bağlamında overfitting (aşırı uyarlama) nedir?",
              options: [
                "Stop-loss olmadan işlem yapmak",
                "Kuralların belirli bir tarihsel döneme aşırı derecede uyarlanması",
                "Çok az sayıda gösterge kullanılması",
              ],
              correctAnswer: "Kuralların belirli bir tarihsel döneme aşırı derecede uyarlanması",
            },
          ],
        },
        {
          slug: "forward-test",
          title: "Forward Test",
          summary: "Backtest'ten sonra stratejinin henüz kullanılmamış yeni verilerle test edilmesi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Forward test, stratejinin gerçek veya demo bir hesapta, kuralların geliştirilmesinde ve backtestinde kullanılmamış verilerle, zaman içinde ileriye doğru test edilmesidir. Bu, stratejinin gerçekten yeni verilerde işe yarayıp yaramadığını gösteren kritik bir adımdır.",
            },
            {
              type: "paragraph",
              text: "Forward test, backtestte fark edilmeden kalmış olabilecek overfitting'i ortaya çıkarmaya yardımcı olur: forward test sonuçları backtest sonuçlarından önemli ölçüde farklıysa, strateji büyük olasılıkla geçmiş verilere fazla hassas biçimde uyarlanmıştır.",
            },
            {
              type: "list",
              items: [
                "Forward test, stratejinin geliştirilmesinde kullanılmamış verilerle yapılır",
                "Normal backtestte fark edilmeyen overfitting'i ortaya çıkarmayı sağlar",
                "Backtest ve forward test sonuçları arasındaki büyük fark, endişe verici bir sinyaldir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Forward test'in backtestten temel farkı nedir?",
              options: [
                "Aralarında bir fark yoktur",
                "Forward test, stratejinin geliştirilmesinde kullanılmamış yeni verilerle yapılır",
                "Forward test her zaman yalnızca gerçek büyük bir depozito ile yapılır",
              ],
              correctAnswer: "Forward test, stratejinin geliştirilmesinde kullanılmamış yeni verilerle yapılır",
            },
            {
              prompt: "Forward test, backtestin aksine neyin tespit edilmesine yardımcı olur?",
              options: [
                "Borsanın para çekme komisyonunu",
                "Stratejinin geçmiş verilere aşırı uyarlanmasını",
                "Bir sonraki halving'in kesin tarihini",
              ],
              correctAnswer: "Stratejinin geçmiş verilere aşırı uyarlanmasını",
            },
            {
              prompt: "Backtest ve forward test sonuçları arasındaki büyük fark ne anlama gelir?",
              options: [
                "Stratejinin kesinlikle güvenilir olduğu anlamına gelir",
                "Strateji büyük olasılıkla geçmiş verilere fazla hassas biçimde uyarlanmıştır",
                "Stratejinin değerlendirilmesi için bir önemi yoktur",
              ],
              correctAnswer: "Strateji büyük olasılıkla geçmiş verilere fazla hassas biçimde uyarlanmıştır",
            },
          ],
        },
        {
          slug: "statistika-sdelok",
          title: "İşlem İstatistikleri",
          summary: "Kendi trading performansını nesnel olarak değerlendirmek için takip edilmesi gereken temel metrikler.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "İşlem istatistikleri, günlük verilerine dayanarak hesaplanan nesnel metrikler bütünüdür: winrate (kârlı işlemlerin oranı), ortalama R/R, işlem başına matematiksel beklenti, maksimum drawdown ve diğerleri. Bu rakamlar, öznel bir his değil, tradingin gerçek tablosunu gösterir.",
            },
            {
              type: "paragraph",
              text: "Hiçbir metrik diğerlerinden bağımsız olarak değerlendirilmemelidir: düşük ortalama R/R ile yüksek bir winrate, yüksek R/R ile düşük bir winrate ile aynı sonucu verebilir. Bir işlemin ortalama olarak getirdiği kazanç olan matematiksel beklenti, stratejinin kalitesi için nihai referans noktasıdır.",
            },
            {
              type: "list",
              items: [
                "Winrate ve ortalama R/R ayrı ayrı değil birlikte analiz edilmelidir",
                "İşlem başına matematiksel beklenti, strateji kalitesinin en önemli nihai metriğidir",
                "Maksimum drawdown, depozitonun en kötü dönemde ne kadar gerilediğini gösterir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Bir ticaret stratejisinin winrate'i neyi gösterir?",
              options: [
                "O anda açık olan işlem sayısını",
                "Tüm zamanların dolar cinsinden toplam kârını",
                "Toplam işlem sayısına göre kârlı işlemlerin oranını",
              ],
              correctAnswer: "Toplam işlem sayısına göre kârlı işlemlerin oranını",
            },
            {
              prompt: "Winrate neden ortalama R/R'den bağımsız değerlendirilemez?",
              options: [
                "Düşük R/R ile yüksek bir winrate, yüksek R/R ile düşük bir winrate ile aynı sonucu verebilir",
                "R/R nihai sonucu hiçbir şekilde etkilemez",
                "Winrate ve R/R her zaman birbirinin tamamen aynısıdır",
              ],
              correctAnswer: "Düşük R/R ile yüksek bir winrate, yüksek R/R ile düşük bir winrate ile aynı sonucu verebilir",
            },
            {
              prompt: "Maksimum drawdown metriği neyi gösterir?",
              options: [
                "Portföydeki varlık sayısını",
                "Stratejinin nihai yıllık getirisini",
                "Depozitonun trading'in en kötü döneminde ne kadar azaldığını",
              ],
              correctAnswer: "Depozitonun trading'in en kötü döneminde ne kadar azaldığını",
            },
          ],
        },
      ],
    },
    {
      title: "Altcoinler ve Tokenomics",
      lessons: [
        {
          slug: "tokenomics",
          title: "Tokenomics",
          summary: "Bir tokenin ekonomik modeli: arz, dağıtım ve sahiplerine yönelik teşvikler.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Tokenomics (token ekonomisi), bir tokenin ekonomik modelini tanımlar: toplam ve maksimum arz, ekip, yatırımcılar ve topluluk arasındaki dağıtım, emisyon ve yakma (burn) mekanizmaları ile sahipleri tokeni kullanmaya veya elde tutmaya teşvik eden unsurlar.",
            },
            {
              type: "paragraph",
              text: "Zayıf bir tokenomics — örneğin ekipte kısa kilitleme (lock) süresiyle büyük bir token payının bulunması — ürünün kalitesinden bağımsız olarak piyasa üzerinde sürekli bir satış baskısı yaratır. Tokenomics analizi, bir projeyi değerlendirmek için teknoloji analizi kadar önemlidir.",
            },
            {
              type: "list",
              items: [
                "Tokenomics, tokenin arzını, dağıtımını ve sahiplerine yönelik teşvikleri tanımlar",
                "Ekipte kısa vesting süresiyle büyük bir token payı, satış baskısı riski yaratır",
                "Tokenomics analizi, projenin teknoloji analizinden daha az önemli değildir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Bir projenin tokenomics'i neyi tanımlar?",
              options: [
                "Tokenin işlem gördüğü borsaların listesini",
                "Tokenin ekonomik modelini: arz, dağıtım ve sahiplere yönelik teşvikleri",
                "Yalnızca blok zincirinin teknik altyapısını",
              ],
              correctAnswer: "Tokenin ekonomik modelini: arz, dağıtım ve sahiplere yönelik teşvikleri",
            },
            {
              prompt: "Tokenomics'in hangi faktörü sürekli satış baskısı riski yaratır?",
              options: [
                "Ekipte hiç token bulunmaması",
                "Ekipte kısa kilitleme süresiyle büyük bir token payının bulunması",
                "Tokenin maksimum arzının sıfır olması",
              ],
              correctAnswer: "Ekipte kısa kilitleme süresiyle büyük bir token payının bulunması",
            },
            {
              prompt: "Tokenomics analizi, projenin teknoloji analizine kıyasla ne kadar önemlidir?",
              options: [
                "Tokenomics, bir projenin değerlendirilmesi için önemli değildir",
                "Yalnızca blok zinciri olmayan projeler için önemlidir",
                "Daha az önemli değildir ve teknolojiyle eşit derecede dikkate alınmalıdır",
              ],
              correctAnswer: "Daha az önemli değildir ve teknolojiyle eşit derecede dikkate alınmalıdır",
            },
          ],
        },
        {
          slug: "fdv",
          title: "FDV",
          summary: "Tam seyreltilmiş değerleme ve yeni tokenler için neden piyasa değerinden daha önemli olduğu.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "FDV (Fully Diluted Valuation), maksimum token arzının tamamının mevcut fiyattan zaten dolaşımda olduğu varsayılarak hesaplanan proje değerlemesidir. Yalnızca mevcut dolaşımdaki tokenleri hesaba katan piyasa değerinin aksine, FDV potansiyel gelecekteki değerlemeyi gösterir.",
            },
            {
              type: "paragraph",
              text: "Mevcut piyasa değeri ile FDV arasındaki büyük fark, arzın önemli bir kısmının henüz piyasaya sürülmediği ve zamanla piyasaya gireceği, unlock sırasında potansiyel satış baskısı yaratacağı anlamına gelir — bu, dolaşım oranı düşük yeni tokenler için özellikle dikkate alınması gereken bir husustur.",
            },
            {
              type: "list",
              items: [
                "FDV, tokenlerin mevcut arzına değil maksimum arzına göre hesaplanır",
                "Piyasa değeri ile FDV arasındaki büyük fark, önemli bir gelecekteki emisyona işaret eder",
                "Dolaşım oranı düşük ve FDV'si yüksek tokenler, unlock takvimine artan dikkat gerektirir",
              ],
            },
          ],
          questions: [
            {
              prompt: "FDV nasıl hesaplanır?",
              options: [
                "Yalnızca belirli bir borsada işlem gören tokenlere göre",
                "Son 24 saatteki işlem hacmine göre",
                "Tokenlerin maksimum arzına mevcut fiyattan göre",
              ],
              correctAnswer: "Tokenlerin maksimum arzına mevcut fiyattan göre",
            },
            {
              prompt: "Piyasa değeri ile FDV arasındaki büyük fark ne anlama gelir?",
              options: [
                "Arzın henüz dolaşıma sürülmemiş önemli bir kısmının bulunduğu anlamına gelir",
                "Fiyat hesaplamasında teknik bir hata olduğu anlamına gelir",
                "Tokenin zaten tamamen unlock edildiği anlamına gelir",
              ],
              correctAnswer: "Arzın henüz dolaşıma sürülmemiş önemli bir kısmının bulunduğu anlamına gelir",
            },
            {
              prompt: "Hangi tokenler için piyasa değeri/FDV oranına dikkatlice bakmak özellikle önemlidir?",
              options: [
                "Dolaşımdaki arz oranı düşük yeni tokenler için",
                "Piyasa değeri/FDV oranının pratik bir önemi yoktur",
                "Yalnızca stabilcoinler için",
              ],
              correctAnswer: "Dolaşımdaki arz oranı düşük yeni tokenler için",
            },
          ],
        },
        {
          slug: "vesting",
          title: "Vesting",
          summary: "Ekip ve yatırımcı tokenlerinin belirlenen bir takvime göre kademeli olarak unlock edilmesi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Vesting, ekibe, yatırımcılara veya proje danışmanlarına ayrılan tokenlerin tek seferde verilmesi yerine önceden belirlenmiş bir takvime göre kademeli olarak unlock edilmesi mekanizmasıdır. Bu, erken katılımcıların listeleme sonrasında tokenleri hemen satma isteğini azaltmalıdır.",
            },
            {
              type: "paragraph",
              text: "Standart bir vesting yapısı, tokenlerin tamamen kilitli olduğu bir dönem olan \"cliff\" ile ardından gelen doğrusal veya kademeli unlock sürecini içerir. Kısa bir cliff ve agresif bir vesting takvimi, erken aşamalarda satış baskısı riskini artırır.",
            },
            {
              type: "list",
              items: [
                "Vesting, ekip ve yatırımcı tokenlerini bir anda değil kademeli olarak unlock eder",
                "Cliff, vesting takviminin başında tokenlerin tamamen kilitli olduğu dönemdir",
                "Kısa bir cliff ve agresif bir unlock takvimi, satış baskısı riskini artırır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Token vesting nedir?",
              options: [
                "Yeni tokenlerin madenciliğini yapma yöntemi",
                "Tokenlerin belirlenen bir takvime göre kademeli olarak unlock edilmesi mekanizması",
                "Projenin tüm tokenlerinin tek seferde satılması",
              ],
              correctAnswer: "Tokenlerin belirlenen bir takvime göre kademeli olarak unlock edilmesi mekanizması",
            },
            {
              prompt: "Vesting takviminde cliff nedir?",
              options: [
                "Takvimin başında tokenlerin tamamen kilitli olduğu dönem",
                "Tokenlerin erken çekilmesi için alınan komisyon",
                "Kalan tüm tokenlerin nihai unlock'u",
              ],
              correctAnswer: "Takvimin başında tokenlerin tamamen kilitli olduğu dönem",
            },
            {
              prompt: "Projeler ekip ve yatırımcılar için neden vesting kullanır?",
              options: [
                "Bu, her blok zincirinin teknik bir gerekliliğidir",
                "Listeleme sonrasında tokenleri hemen satma isteğini azaltmak için",
                "Ekibin projeye katılımını tamamen dışlamak için",
              ],
              correctAnswer: "Listeleme sonrasında tokenleri hemen satma isteğini azaltmak için",
            },
          ],
        },
        {
          slug: "unlocks",
          title: "Unlocks",
          summary: "Takvime göre yapılan token unlock'ları ve varlığın fiyatı üzerindeki etkisi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Unlock'lar, kilitli tokenlerin (ekip, yatırımcılar, ekosistem fonları) bir sonraki bölümünün transfer edilmeye ve potansiyel olarak satılmaya uygun hale geldiği anlardır. Unlock tarihleri ve hacimleri genellikle önceden bilinir ve proje tarafından yayınlanır.",
            },
            {
              type: "paragraph",
              text: "Mevcut işlem hacmine göre büyük bir unlock, özellikle tokenleri alanların uzun vadede elde tutma motivasyonu yoksa, fiyat üzerinde belirgin bir satış baskısı yaratabilir. Traderlar genellikle risk yönetiminin bir parçası olarak unlock takvimini önceden takip eder.",
            },
            {
              type: "list",
              items: [
                "Unlock, bir sonraki token bölümünü transfer ve satışa uygun hale getirir",
                "İşlem hacmine göre büyük bir unlock, fiyat üzerinde baskı yaratabilir",
                "Yaklaşan unlock takvimi, altcoin pozisyonları için önemli bir risk yönetimi unsurudur",
              ],
            },
          ],
          questions: [
            {
              prompt: "Token unlock anında ne olur?",
              options: [
                "Borsa varlığın işlemlerini geçici olarak durdurur",
                "Daha önce kilitli olan bir sonraki token bölümü transfere uygun hale gelir",
                "Projenin tüm tokenleri yok edilir",
              ],
              correctAnswer: "Daha önce kilitli olan bir sonraki token bölümü transfere uygun hale gelir",
            },
            {
              prompt: "Token unlock'u ne zaman fiyat üzerinde belirgin baskı yaratabilir?",
              options: [
                "Hacmi mevcut işlem hacmine göre büyük olduğunda",
                "Yalnızca unlock gece gerçekleşirse",
                "Unlock'lar fiyatı hiçbir zaman etkilemez",
              ],
              correctAnswer: "Hacmi mevcut işlem hacmine göre büyük olduğunda",
            },
            {
              prompt: "Traderlar neden bir tokenin unlock takvimini takip eder?",
              options: [
                "Unlock takviminin pratik bir uygulaması yoktur",
                "Bu, bir altcoin pozisyonu tutarken risk yönetiminin bir parçasıdır",
                "Kâr üzerindeki vergileri kesin olarak hesaplamak için",
              ],
              correctAnswer: "Bu, bir altcoin pozisyonu tutarken risk yönetiminin bir parçasıdır",
            },
          ],
        },
        {
          slug: "emissiya",
          title: "Emisyon",
          summary: "Yeni tokenlerin çıkarılma hızı ve bunun fiyat üzerindeki uzun vadeli baskıya etkisi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Emisyon, örneğin madencilik ödülleri, staking veya ekosistem hibeleri yoluyla yeni tokenlerin dolaşıma çıkarılması sürecidir. Emisyon hızı, tokenin arzının zamanla ne kadar hızlı arttığını, ona olan talepten bağımsız olarak belirler.",
            },
            {
              type: "paragraph",
              text: "Buna karşılık gelen bir talep artışı olmadan yüksek ve sürekli bir emisyon, uzun vadede fiyat üzerinde kalıcı bir baskı yaratır — bazı projelerin emisyonu kısmen dengelemek için token yakma (burn) mekanizmaları getirmesinin nedenlerinden biri budur.",
            },
            {
              type: "list",
              items: [
                "Emisyon, mevcut talepten bağımsız olarak token arzını artırır",
                "Talep artışı olmadan yüksek emisyon, fiyat üzerinde uzun vadeli baskı yaratır",
                "Token yakma mekanizmaları, emisyonu kısmen dengelemek için getirilir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Token emisyonu nedir?",
              options: [
                "Bir cüzdanın gerçekliğinin doğrulanması süreci",
                "Yeni tokenlerin dolaşıma çıkarılması süreci",
                "Bir tokenin borsadan tamamen kaldırılması süreci",
              ],
              correctAnswer: "Yeni tokenlerin dolaşıma çıkarılması süreci",
            },
            {
              prompt: "Buna karşılık gelen bir talep artışı olmadan yüksek emisyonda ne olur?",
              options: [
                "Tokenin toplam arzı azalır",
                "Fiyat üzerinde kalıcı, uzun vadeli bir baskı oluşur",
                "Tokenin fiyatı kesin olarak yükselir",
              ],
              correctAnswer: "Fiyat üzerinde kalıcı, uzun vadeli bir baskı oluşur",
            },
            {
              prompt: "Bazı projeler neden token yakma mekanizması getirir?",
              options: [
                "Ağın çalışmasını tamamen durdurmak için",
                "Emisyonun arz üzerindeki etkisini kısmen dengelemek için",
                "Bu, borsaların token listelemesi için bir gerekliliğidir",
              ],
              correctAnswer: "Emisyonun arz üzerindeki etkisini kısmen dengelemek için",
            },
          ],
        },
      ],
    },
    {
      title: "DeFi",
      lessons: [
        {
          slug: "dex",
          title: "DEX",
          summary: "Merkeziyetsiz borsalar ve merkezi borsalardan temel farkları.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "DEX (Decentralized Exchange), kullanıcıların fonlarını tutan merkezi bir operatör olmadan akıllı sözleşmeler aracılığıyla çalışan bir borsadır. İşlemler, merkezi platformlarda olduğu gibi borsanın dahili veritabanı üzerinden değil, doğrudan katılımcıların cüzdanları arasında gerçekleştirilir.",
            },
            {
              type: "paragraph",
              text: "DEX'in temel avantajı, kullanıcının işlem anına kadar fonları üzerindeki kontrolünü korumasıdır (\"anahtarların değilse, coinlerin de değildir\" ilkesi). Dezavantajı ise cüzdan güvenliğinin ve akıllı sözleşmeyle doğru etkileşimin tüm sorumluluğunun kullanıcının kendisine ait olmasıdır.",
            },
            {
              type: "list",
              items: [
                "DEX, fonları merkezi bir şekilde saklayan biri olmadan akıllı sözleşmeler aracılığıyla çalışır",
                "Kullanıcı, işlem anına kadar varlıkları üzerindeki kontrolünü korur",
                "DEX'te cüzdan güvenliğinin sorumluluğu tamamen kullanıcıya aittir",
              ],
            },
          ],
          questions: [
            {
              prompt: "DEX, merkezi bir borsadan temel olarak nasıl farklıdır?",
              options: [
                "DEX, kullanıcı fonlarını merkezi olarak saklayan biri olmadan akıllı sözleşmeler aracılığıyla çalışır",
                "DEX'ler yalnızca kurumsal yatırımcılara açıktır",
                "DEX'te işlem yapmak mümkün değildir",
              ],
              correctAnswer: "DEX, kullanıcı fonlarını merkezi olarak saklayan biri olmadan akıllı sözleşmeler aracılığıyla çalışır",
            },
            {
              prompt: "Varlıklar üzerindeki kontrol açısından DEX üzerinden işlem yapmanın temel avantajı nedir?",
              options: [
                "Kullanıcı, işlem anına kadar fonlar üzerindeki kontrolünü korur",
                "DEX otomatik olarak her türlü dolandırıcılığa karşı koruma sağlar",
                "DEX kesinlikle komisyon almaz",
              ],
              correctAnswer: "Kullanıcı, işlem anına kadar fonlar üzerindeki kontrolünü korur",
            },
            {
              prompt: "DEX kullanırken cüzdan güvenliğinin sorumluluğu kimdedir?",
              options: [
                "Tamamen protokol geliştiricilerinde",
                "Sorumluluk otomatik olarak borsa tarafından sigortalanır",
                "Tamamen kullanıcının kendisinde",
              ],
              correctAnswer: "Tamamen kullanıcının kendisinde",
            },
          ],
        },
        {
          slug: "amm",
          title: "AMM",
          summary: "Otomatik market-maker'lar ve likidite havuzlarının çalışma prensibi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "AMM (Automated Market Maker), çoğu DEX'in temelini oluşturan bir mekanizmadır; varlığın fiyatı, geleneksel borsalarda olduğu gibi bir emir defteri ile değil, likidite havuzundaki token oranına dayalı matematiksel bir formülle belirlenir.",
            },
            {
              type: "paragraph",
              text: "Likidite havuzu, eşit değerde bir token çifti yatıran ve karşılığında işlem komisyonlarından pay alan kullanıcılar (likidite sağlayıcıları) tarafından beslenir. Havuzun büyüklüğüne göre büyük işlemler, işlem fiyatının piyasa fiyatından belirgin biçimde sapmasına yol açan slippage'a (kayma) neden olur.",
            },
            {
              type: "list",
              items: [
                "AMM, fiyatı emir defteri yerine havuzdaki token oranına dayalı bir formülle belirler",
                "Likidite sağlayıcıları, havuzun işlem komisyonlarından pay kazanır",
                "Havuzun büyüklüğüne göre büyük bir işlem, belirgin bir fiyat kaymasına (slippage) neden olur",
              ],
            },
          ],
          questions: [
            {
              prompt: "AMM, bir varlığın fiyatını nasıl belirler?",
              options: [
                "Merkezi bir borsada olduğu gibi bir emir defteri ile",
                "Token sahiplerinin oylamasıyla",
                "Havuzdaki token oranına dayalı matematiksel bir formülle",
              ],
              correctAnswer: "Havuzdaki token oranına dayalı matematiksel bir formülle",
            },
            {
              prompt: "Bir AMM havuzunda likidite sağlayıcıları ne kazanır?",
              options: [
                "Risksiz, garantili sabit bir yıllık faiz oranı",
                "Protokolü tek başına yönetme hakkı",
                "Havuzun işlem komisyonlarından bir pay",
              ],
              correctAnswer: "Havuzun işlem komisyonlarından bir pay",
            },
            {
              prompt: "AMM bağlamında slippage (kayma) nedir?",
              options: [
                "Bir ağ düğümünün işlemi işleme sürecindeki gecikme",
                "Ağın işlem onayı için aldığı komisyon",
                "Havuzun büyüklüğüne göre büyük bir işlemde işlem fiyatının piyasa fiyatından sapması",
              ],
              correctAnswer: "Havuzun büyüklüğüne göre büyük bir işlemde işlem fiyatının piyasa fiyatından sapması",
            },
          ],
        },
        {
          slug: "staking",
          title: "Staking",
          summary: "Konsensüse katılmak veya ödül kazanmak için tokenlerin kilitlenmesi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Staking, ağın çalışmasını desteklemek (Proof-of-Stake mekanizmasına sahip blok zincirlerinde) veya bir protokole katılmak amacıyla, karşılığında ödül almak üzere tokenlerin kilitlenmesidir. PoS ağlarında staker'lar, işlemlerin onaylanmasına ve ağın güvenliğinin sağlanmasına yardımcı olur.",
            },
            {
              type: "paragraph",
              text: "Staking getirisi genellikle yıllık yüzde (APR/APY) olarak ifade edilir, ancak bu getirinin kısmen veya tamamen yeni token emisyonundan oluştuğunu ve bunun nominal getiriyi gerçek bir arz seyrelmesiyle dengeleyebileceğini göz önünde bulundurmak önemlidir.",
            },
            {
              type: "list",
              items: [
                "Proof-of-Stake ağlarında staking, işlemlerin onaylanmasına ve ağın korunmasına yardımcı olur",
                "Staking getirisi genellikle yıllık yüzde (APR/APY) olarak ifade edilir",
                "Staking getirisi genellikle yalnızca gerçek talep değil, kısmen emisyon yoluyla da oluşur",
              ],
            },
          ],
          questions: [
            {
              prompt: "Staking, Proof-of-Stake ağlarında hangi rolü oynar?",
              options: [
                "Yalnızca projenin pazarlaması için kullanılır",
                "İşlemlerin onaylanmasına ve ağın güvenliğinin sağlanmasına yardımcı olur",
                "Blok zincirine olan ihtiyacın tamamen yerini alır",
              ],
              correctAnswer: "İşlemlerin onaylanmasına ve ağın güvenliğinin sağlanmasına yardımcı olur",
            },
            {
              prompt: "Staking getirisi genellikle neyle ifade edilir?",
              options: [
                "Yıllık yüzde ile (APR/APY)",
                "Staking getirisi hiçbir zaman sayısal olarak ifade edilmez",
                "Yalnızca yılda bir kez sabit bir dolar tutarıyla",
              ],
              correctAnswer: "Yıllık yüzde ile (APR/APY)",
            },
            {
              prompt: "Staking getirisi genellikle kısmen neyin sayesinde oluşur?",
              options: [
                "Yeni tokenlerin emisyonu sayesinde",
                "Devletin vergi teşvikleri sayesinde",
                "Yalnızca merkezi borsaların komisyonları sayesinde",
              ],
              correctAnswer: "Yeni tokenlerin emisyonu sayesinde",
            },
          ],
        },
        {
          slug: "lending",
          title: "Lending",
          summary: "Kripto varlıklar teminat gösterilerek yapılan merkeziyetsiz kredilendirme.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "DeFi'de lending, bazı kullanıcıların akıllı sözleşme aracılığıyla varlıklarını ödünç vermesine ve faiz kazanmasına, diğerlerinin ise kendi kripto varlıklarını teminat göstererek — genellikle aşırı teminatlandırma ile (teminatın değeri kredi tutarından daha yüksektir) — kredi almasına olanak tanır.",
            },
            {
              type: "paragraph",
              text: "Teminatın değeri, kredi tutarına göre belirli bir eşiğin altına düşerse, protokol borcu kapatmak için teminatı otomatik olarak likide eder. Bu, borç verenleri korur ancak borç alanların pozisyonlarının teminat oranını dikkatle takip etmeleri gerektiği anlamına gelir.",
            },
            {
              type: "list",
              items: [
                "DeFi kredilendirmesi genellikle borç alandan aşırı teminat ister",
                "Kredi ve mevduat faizi, protokoldeki arz ve talebe göre algoritmik olarak belirlenir",
                "Teminatın değeri eşiğin altına düştüğünde protokol pozisyonu otomatik olarak likide eder",
              ],
            },
          ],
          questions: [
            {
              prompt: "DeFi kredilendirmesinde borç alandan genellikle ne istenir?",
              options: [
                "Kredi tutarını aşan fazla bir teminat",
                "Merkezi bir borsadan garanti",
                "Banka üzerinden kimlik doğrulaması",
              ],
              correctAnswer: "Kredi tutarını aşan fazla bir teminat",
            },
            {
              prompt: "Teminatın değeri belirli bir eşiğin altına düşerse ne olur?",
              options: [
                "Kredi herhangi bir sonuç doğurmadan otomatik olarak iptal edilir",
                "Protokol kredi tutarını otomatik olarak artırır",
                "Protokol, borcu kapatmak için teminatı otomatik olarak likide eder",
              ],
              correctAnswer: "Protokol, borcu kapatmak için teminatı otomatik olarak likide eder",
            },
            {
              prompt: "DeFi kredilendirme sisteminde faizi kim alır?",
              options: [
                "DeFi kredilendirmesinde faiz kimseye ödenmez",
                "Protokol aracılığıyla varlıklarını ödünç veren kullanıcılar",
                "Yalnızca protokol geliştiricileri",
              ],
              correctAnswer: "Protokol aracılığıyla varlıklarını ödünç veren kullanıcılar",
            },
          ],
        },
        {
          slug: "yield-farming",
          title: "Yield Farming",
          summary: "Farklı DeFi protokollerini birleştirerek maksimum getiri arayışı.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Yield Farming, varlıkların çeşitli DeFi protokollerine (likidite havuzları, lending, staking) yerleştirilmesi yoluyla maksimum getiri arayan bir stratejidir; sunulan getiri değiştikçe sermaye genellikle protokoller arasında taşınır.",
            },
            {
              type: "paragraph",
              text: "Farming'de vaat edilen yüksek getiri genellikle artan riskle ilişkilidir: ödül olarak verilen tokenlerin kendi oynaklığı, protokolün akıllı sözleşme riski veya likidite havuzlarındaki geçici kayıplar (impermanent loss). DeFi'de getiri ve risk genellikle sıkı bir şekilde birbirine bağlıdır.",
            },
            {
              type: "list",
              items: [
                "Yield farming, getiri elde etmek amacıyla sermayenin protokoller arasında aktif olarak taşınmasını içerir",
                "Yüksek vaat edilen getiri genellikle artan riskle birlikte gelir",
                "Geçici kayıplar (impermanent loss), likidite havuzlarına özgü bir risktir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Yield farming nedir?",
              options: [
                "Kripto projelerine devlet sübvansiyon programı",
                "Özel donanımlarla bitcoin madenciliği yapma yöntemi",
                "Varlıkları farklı DeFi protokollerine yerleştirerek maksimum getiri arayan bir strateji",
              ],
              correctAnswer: "Varlıkları farklı DeFi protokollerine yerleştirerek maksimum getiri arayan bir strateji",
            },
            {
              prompt: "Farming'de çok yüksek vaat edilen getiri genellikle neyle ilişkilidir?",
              options: [
                "Risk olmamasıyla",
                "Artan riskle (token oynaklığı, sözleşme riski, impermanent loss)",
                "Devletin getiri garantisiyle",
              ],
              correctAnswer: "Artan riskle (token oynaklığı, sözleşme riski, impermanent loss)",
            },
            {
              prompt: "Impermanent loss (geçici kayıp) nedir?",
              options: [
                "Token transferi için ağ komisyonu",
                "Her staking işleminde garantili bir zarar",
                "Varlıkların fiyat oranındaki değişimle ilişkili, likidite havuzlarına özgü bir risk",
              ],
              correctAnswer: "Varlıkların fiyat oranındaki değişimle ilişkili, likidite havuzlarına özgü bir risk",
            },
          ],
        },
      ],
    },
    {
      title: "Memecoinler ve Yeni Projeler",
      lessons: [
        {
          slug: "launchpad",
          title: "Launchpad",
          summary: "Yeni projelerin erken lansmanı ve token satışı için platformlar.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Launchpad, yeni projelerin ilk token dağıtımını yapmasına ve başlangıç likiditesi çekmesine yardımcı olan bir platformdur; genellikle platform katılımcılarına belirli koşulları (yerel tokenin staking'i, KYC vb.) yerine getirmeleri karşılığında erken erişim sağlar.",
            },
            {
              type: "paragraph",
              text: "Bir launchpad üzerinden katılım, projenin risklerini ortadan kaldırmaz — platformun itibarı ilk elemeyi etkiler ancak listeleme sonrasında tokenin başarısını garanti etmez. Projenin kendisini, lansmanın gerçekleştiği platformdan bağımsız olarak değerlendirmek önemlidir.",
            },
            {
              type: "list",
              items: [
                "Launchpad, projelere ilk token dağıtımı ve likidite çekme konusunda yardımcı olur",
                "Lansmana erişim genellikle platformun koşullarının (staking, KYC) yerine getirilmesini gerektirir",
                "Launchpad'in itibarı, listeleme sonrasında tokenin başarısını garanti etmez",
              ],
            },
          ],
          questions: [
            {
              prompt: "Projeler launchpad platformlarını ne için kullanır?",
              options: [
                "Yatırımcı çekmekten tamamen vazgeçmek için",
                "Yalnızca blok zinciri teknik desteği için",
                "İlk token dağıtımı ve likidite çekmek için",
              ],
              correctAnswer: "İlk token dağıtımı ve likidite çekmek için",
            },
            {
              prompt: "Bir launchpad'deki lansmana erişim için katılımcılardan genellikle ne istenir?",
              options: [
                "Finansal analist diplomasına sahip olmak",
                "Platformun koşullarını yerine getirmek, örneğin yerel tokeni stake etmek",
                "Tüzel kişilik kaydı yaptırmak",
              ],
              correctAnswer: "Platformun koşullarını yerine getirmek, örneğin yerel tokeni stake etmek",
            },
            {
              prompt: "İyi bir launchpad itibarı, üzerinden lanse edilen tokenin başarısını garanti eder mi?",
              options: [
                "Evet, bu yüzde yüz başarı garantisidir",
                "Evet, ama yalnızca Bitcoin üzerindeki projeler için",
                "Hayır, proje yine de ayrıca değerlendirilmelidir",
              ],
              correctAnswer: "Hayır, proje yine de ayrıca değerlendirilmelidir",
            },
          ],
        },
        {
          slug: "ico",
          title: "ICO",
          summary: "Kripto projelerinde erken bir sermaye toplama biçimi olarak ilk coin arzı.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "ICO (Initial Coin Offering), bir projenin genellikle geliştirmenin erken bir aşamasında, yerleşik kripto paralar veya fiat karşılığında yeni bir tokeni doğrudan yatırımcılara sattığı bir sermaye toplama modelidir. Bu, kripto endüstrisindeki ilk crowdfunding mekanizmalarından biridir.",
            },
            {
              type: "paragraph",
              text: "2017 ICO dalgası, modelin hızlı sermaye toplama potansiyelini olduğu kadar risklerini de gösterdi: düzenleme eksikliği, gerçek bir ürünü olmayan çok sayıda projenin ortaya çıkmasına yol açtı. Bu durum, launchpad ve IDO da dahil olmak üzere daha yapılandırılmış lansman formatlarının ortaya çıkmasının nedenlerinden biri oldu.",
            },
            {
              type: "list",
              items: [
                "ICO, yeni bir tokenin projenin erken aşamasında doğrudan yatırımcılara satılması modelidir",
                "ICO, kripto endüstrisindeki ilk crowdfunding biçimlerinden biri oldu",
                "ICO'daki zayıf düzenleme, tarihsel olarak yüksek oranda yaşayamaz projeye yol açtı",
              ],
            },
          ],
          questions: [
            {
              prompt: "ICO modeli nedir?",
              options: [
                "Bitcoin madenciliği süreci",
                "Yeni bir tokenin projenin erken aşamasında doğrudan yatırımcılara satılması",
                "Kripto paraların devlet tarafından düzenlenmesi",
              ],
              correctAnswer: "Yeni bir tokenin projenin erken aşamasında doğrudan yatırımcılara satılması",
            },
            {
              prompt: "ICO, kripto endüstrisinde hangi tarihsel rolü oynadı?",
              options: [
                "Kripto paralarda ilk crowdfunding biçimlerinden biri oldu",
                "Blok zinciri teknolojisinin iptaline yol açtı",
                "Borsa işlemlerinin yerini tamamen aldı",
              ],
              correctAnswer: "Kripto paralarda ilk crowdfunding biçimlerinden biri oldu",
            },
            {
              prompt: "2017 ICO dalgasındaki zayıf düzenleme neye yol açtı?",
              options: [
                "Tüm ülkelerde tüm kripto paraların derhal yasaklanmasına",
                "Yatırımcılar için risklerin tamamen ortadan kalkmasına",
                "Gerçek bir ürünü olmayan yüksek oranda projeye",
              ],
              correctAnswer: "Gerçek bir ürünü olmayan yüksek oranda projeye",
            },
          ],
        },
        {
          slug: "ido",
          title: "IDO",
          summary: "ICO'ya daha şeffaf bir alternatif olarak merkeziyetsiz bir borsada ilk arz.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "IDO (Initial DEX Offering), bir tokenin doğrudan merkeziyetsiz bir borsa veya launchpad platformu aracılığıyla arz edilmesidir; likidite genellikle satıştan hemen sonra havuza eklenir ve listeleme, geleneksel bir ICO'ya kıyasla daha hızlı ve daha şeffaf gerçekleşir.",
            },
            {
              type: "paragraph",
              text: "IDO, ICO'ya özgü risklerin bir kısmını (örneğin fon toplama ile listeleme arasındaki gecikme) azaltır, ancak projenin kendi risklerini ortadan kaldırmaz. IDO'ya yüksek talep, genellikle işlemler başladıktan hemen sonra ani fiyat oynaklığına yol açar.",
            },
            {
              type: "list",
              items: [
                "IDO, merkeziyetsiz bir borsa veya launchpad platformu aracılığıyla gerçekleştirilir",
                "Havuzdaki likidite genellikle token satışından hemen sonra eklenir",
                "IDO'ya yüksek talep, listeleme sonrasında genellikle ani fiyat oynaklığına neden olur",
              ],
            },
          ],
          questions: [
            {
              prompt: "IDO genellikle ne aracılığıyla gerçekleştirilir?",
              options: [
                "Merkezi bir piyasa düzenleyicisi aracılığıyla",
                "Merkeziyetsiz bir borsa veya launchpad platformu aracılığıyla",
                "Yalnızca geleneksel bir banka aracılığıyla",
              ],
              correctAnswer: "Merkeziyetsiz bir borsa veya launchpad platformu aracılığıyla",
            },
            {
              prompt: "IDO, listeleme açısından klasik ICO'dan nasıl farklıdır?",
              options: [
                "ICO ile IDO arasında bir fark yoktur",
                "IDO hiçbir zaman token listelemesi içermez",
                "Likiditenin hemen eklenmesi sayesinde listeleme daha hızlı ve daha şeffaf gerçekleşir",
              ],
              correctAnswer: "Likiditenin hemen eklenmesi sayesinde listeleme daha hızlı ve daha şeffaf gerçekleşir",
            },
            {
              prompt: "IDO'da işlemler başladıktan hemen sonra tokenin fiyatına genellikle ne olur?",
              options: [
                "İşlemler otomatik olarak bir gün süreyle durdurulur",
                "Fiyat her zaman kusursuz biçimde istikrarlı kalır",
                "Yüksek talep nedeniyle ani oynaklık",
              ],
              correctAnswer: "Yüksek talep nedeniyle ani oynaklık",
            },
          ],
        },
        {
          slug: "airdrop",
          title: "Airdrop",
          summary: "Tokenlerin kullanıcılar arasında ücretsiz dağıtımı ve nelere dikkat edilmesi gerektiği.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Airdrop, bir projenin tokenlerinin belirli bir kullanıcı grubu arasında ücretsiz olarak dağıtılmasıdır; genellikle protokolün erken kullanımı, test ağına katılım veya belirlenen eylemlerin gerçekleştirilmesi karşılığında verilen bir ödüldür. Bu, dikkat çekmenin ve ilk sahip topluluğunu oluşturmanın bir yoludur.",
            },
            {
              type: "paragraph",
              text: "Potansiyel bir airdrop beklentisi çok sayıda kullanıcıyı çeker, ancak aynı zamanda riskler de yaratır: sahte airdrop'lar, kötü amaçlı akıllı sözleşmeler aracılığıyla oltalama ve fon çalma amacıyla kullanılır. Meşru bir airdrop, tokenleri almak için asla fon veya özel anahtar gönderilmesini istemez.",
            },
            {
              type: "list",
              items: [
                "Airdrop, tokenlerin belirli bir kullanıcı grubu arasında ücretsiz dağıtımıdır",
                "Airdrop genellikle protokolün erken kullanımını veya test ağına katılımı ödüllendirir",
                "Meşru bir airdrop asla fon veya özel anahtar gönderilmesini istemez",
              ],
            },
          ],
          questions: [
            {
              prompt: "Token airdrop'u nedir?",
              options: [
                "Kripto para işlemlerine zorunlu vergi",
                "Proje haberlerine ücretli abonelik",
                "Tokenlerin belirli bir kullanıcı grubu arasında ücretsiz dağıtımı",
              ],
              correctAnswer: "Tokenlerin belirli bir kullanıcı grubu arasında ücretsiz dağıtımı",
            },
            {
              prompt: "Projeler airdrop yoluyla kullanıcıları genellikle ne için ödüllendirir?",
              options: [
                "Cüzdanı ağdan silmek için",
                "Protokolün erken kullanımı veya test ağına katılım için",
                "Proje hakkında olumsuz yorumlar için",
              ],
              correctAnswer: "Protokolün erken kullanımı veya test ağına katılım için",
            },
            {
              prompt: "Potansiyel bir airdrop'ta kullanıcıyı hangi işaret uyarmalıdır?",
              options: [
                "Kullanıcıdan herhangi bir talepte bulunulmaması",
                "Tokenleri almak için fon veya özel anahtar gönderme talebi",
                "Cüzdan adresinin herkese açık bir listede basitçe kontrol edilmesi",
              ],
              correctAnswer: "Tokenleri almak için fon veya özel anahtar gönderme talebi",
            },
          ],
        },
        {
          slug: "kak-iskat-proekty",
          title: "Projeler nasıl aranır",
          summary: "Yatırım yapmadan önce yeni bir kripto projesini ilk değerlendirmek için temel kontrol listesi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Umut vadeden projeleri aramak temel bir kontrolle başlar: ekip kim ve kamuya açık bir itibarı var mı, çalışan bir ürün mü var yoksa yalnızca bir sunum mu, erken turlardaki yatırımcılar kim, tokenomics ne kadar şeffaf ve dengeli.",
            },
            {
              type: "paragraph",
              text: "Yalnızca sosyal medyadaki pazarlama açıklamalarına değil, topluluk aktivitesine ve herkese açık depolardaki geliştirme sürecine de bakmak faydalıdır. Aktif, büyüyen bir kitleye ve düzenli kod güncellemelerine sahip bir proje, genellikle tek bir gösterişli duyuruya sahip bir projeden daha fazla güveni hak eder.",
            },
            {
              type: "list",
              items: [
                "Ekip, ürün ve yatırımcı kontrolü, bir projeyi değerlendirmenin temel ilk adımıdır",
                "Açık depolardaki geliştirme aktivitesi, pazarlamadan daha güvenilir bir sinyaldir",
                "Dengeli ve şeffaf bir tokenomics, gelecekteki satış baskısı riskini azaltır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Yeni bir kripto projesinin temel kontrolü genellikle neyle başlar?",
              options: [
                "Yalnızca projenin logosunun incelenmesiyle",
                "Ekibin, ürünün ve erken yatırımcıların analiziyle",
                "Maksimum miktarda token derhal satın alınmasıyla",
              ],
              correctAnswer: "Ekibin, ürünün ve erken yatırımcıların analiziyle",
            },
            {
              prompt: "Projenin gerçek ilerlemesinin daha güvenilir bir göstergesi genellikle hangi sinyal olarak kabul edilir?",
              options: [
                "Başka bir doğrulama olmadan sosyal medyadaki takipçi sayısı",
                "Açık kod depolarındaki geliştirme aktivitesi",
                "Pazarlama gönderilerindeki gösterişli vaatlerin sayısı",
              ],
              correctAnswer: "Açık kod depolarındaki geliştirme aktivitesi",
            },
            {
              prompt: "Bir projenin ilk değerlendirmesinde tokenomics'e neden dikkat edilmelidir?",
              options: [
                "Tokenomics yalnızca blok zinciri olmayan projeler için önemlidir",
                "Dengeli bir tokenomics, gelecekteki satış baskısı riskini azaltır",
                "Tokenomics, projenin riskleriyle hiçbir şekilde ilişkili değildir",
              ],
              correctAnswer: "Dengeli bir tokenomics, gelecekteki satış baskısı riskini azaltır",
            },
          ],
        },
      ],
    },
    {
      title: "Ticaret Stratejileri",
      lessons: [
        {
          slug: "scalping",
          title: "Scalping",
          summary: "Dakikalık zaman dilimlerinde küçük kârlarla çok sayıda kısa işlem stratejisi.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Scalping, bir traderın kısa bir süre içinde (saniyeler-dakikalar) çok sayıda işlem açarak her birinden küçük bir kâr elde etmeye çalıştığı bir stratejidir. Scalping, yüksek konsantrasyon, düşük komisyonlar ve enstrümanın iyi likiditesini gerektirir.",
            },
            {
              type: "paragraph",
              text: "İşlem sıklığının yüksek olması nedeniyle borsanın küçük bir komisyonu bile scalper'ın nihai getirisini önemli ölçüde etkiler, bu yüzden maliyetlerin doğru hesaplanması önemlidir. Scalping ayrıca emir yürütme hızına ve bağlantı istikrarına yönelik artan gereksinimler doğurur.",
            },
            {
              type: "list",
              items: [
                "Scalping, küçük bir kâr hedefiyle çok sayıda kısa işlem içerir",
                "İşlem sıklığının yüksek olması nedeniyle borsa komisyonları nihai getiri üzerinde önemli bir etki yaratır",
                "Strateji, enstrümanın yüksek likiditesini ve emirlerin istikrarlı bir şekilde yürütülmesini gerektirir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Bir strateji olarak scalping'in temel özelliği nedir?",
              options: [
                "Pozisyonun aylarca tutulması",
                "Grafik analizinden tamamen vazgeçilmesi",
                "Her birinden küçük bir kâr elde edilen çok sayıda kısa işlem",
              ],
              correctAnswer: "Her birinden küçük bir kâr elde edilen çok sayıda kısa işlem",
            },
            {
              prompt: "Borsa komisyonları scalper için neden özellikle önemlidir?",
              options: [
                "Scalping her borsada komisyonlardan tamamen muaftır",
                "İşlem sıklığının yüksek olması nedeniyle nihai getiriyi önemli ölçüde etkilerler",
                "Komisyonlar yalnızca pozisyon bir aydan fazla tutulduğunda önemlidir",
              ],
              correctAnswer: "İşlem sıklığının yüksek olması nedeniyle nihai getiriyi önemli ölçüde etkilerler",
            },
            {
              prompt: "Scalping'de kullanılan bir enstrüman için özellikle ne önemlidir?",
              options: [
                "Gerçek zamanlı fiyat grafiğinin olmaması",
                "Mümkün olduğunca düşük likidite",
                "Yüksek likidite ve hızlı emir yürütme",
              ],
              correctAnswer: "Yüksek likidite ve hızlı emir yürütme",
            },
          ],
        },
        {
          slug: "day-trading",
          title: "Day Trading",
          summary: "Tüm pozisyonların işlem seansı sona ermeden kapatıldığı gün içi trading.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Day Trading, tüm işlemlerin bir gün içinde açılıp kapatıldığı, pozisyonların bir sonraki güne taşınmadığı bir stratejidir. Bu, gece gap'i riskini ortadan kaldırır ve traderın seans sonunda piyasaya olan maruziyetini tamamen kontrol etmesini sağlar.",
            },
            {
              type: "paragraph",
              text: "Day trading, daha uzun vadeli yaklaşımlara kıyasla gün içinde piyasa analizi ve takibi için daha fazla zaman gerektirir, ancak daha geniş kâr hedefleri sayesinde scalping'e kıyasla daha fazla giriş fırsatı sunar.",
            },
            {
              type: "list",
              items: [
                "Day trading'de tüm pozisyonlar işlem günü sona ermeden kapatılır",
                "Pozisyonların taşınmaması, gece gap'i riskini ortadan kaldırır",
                "Day trading, piyasanın aktif olarak takip edilmesi için önemli miktarda zaman gerektirir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Day trading'in temel kuralı nedir?",
              options: [
                "Pozisyonlar mutlaka birkaç hafta tutulur",
                "İşlemler yalnızca ayda bir kez açılır",
                "Tüm pozisyonlar aynı işlem günü içinde kapatılır",
              ],
              correctAnswer: "Tüm pozisyonlar aynı işlem günü içinde kapatılır",
            },
            {
              prompt: "Pozisyonların bir sonraki güne taşınmaması hangi riski ortadan kaldırır?",
              options: [
                "Borsa komisyonu riski",
                "Token adının değişmesi riski",
                "Gece fiyat gap'i riski",
              ],
              correctAnswer: "Gece fiyat gap'i riski",
            },
            {
              prompt: "Day trading, kâr hedefleri açısından scalping'den nasıl farklıdır?",
              options: [
                "Day trading kâr hedefi içermez",
                "Her iki stratejinin kâr hedefleri tamamen aynıdır",
                "Day trading'de işlem başına genellikle daha geniş kâr hedefleri vardır",
              ],
              correctAnswer: "Day trading'de işlem başına genellikle daha geniş kâr hedefleri vardır",
            },
          ],
        },
        {
          slug: "swing-trading",
          title: "Swing Trading",
          summary: "Orta vadeli hareketlerde birkaç günden birkaç haftaya kadar pozisyon tutma.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Swing Trading, orta vadeli bir fiyat hareketini (\"swing\") yakalamak amacıyla pozisyonların birkaç günden birkaç haftaya kadar tutulduğu bir stratejidir. Bu, day trading ve scalping'e kıyasla sürekli takip için daha az zaman gerektirir.",
            },
            {
              type: "paragraph",
              text: "Swing traderlar, trendi ve giriş noktalarını belirlemek için genellikle daha üst zaman dilimlerine (H4, D1) dayanır; bu sırada işlem kaçınılmaz olarak gece ve hafta sonu gap'lerine maruz kalır, bu nedenle stop-loss ve pozisyon büyüklüğü bunu hesaba katmalıdır.",
            },
            {
              type: "list",
              items: [
                "Swing trading, pozisyonun birkaç günden birkaç haftaya kadar tutulmasını içerir",
                "Strateji, day trading veya scalping'e göre daha az sürekli takip gerektirir",
                "Swing trading'deki pozisyonlar, gece ve hafta sonu gap'i riskine maruz kalır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Swing trading'de tipik pozisyon tutma süresi nedir?",
              options: [
                "Birkaç saniyeden birkaç dakikaya kadar",
                "Birkaç günden birkaç haftaya kadar",
                "İstisnasız birkaç yıl",
              ],
              correctAnswer: "Birkaç günden birkaç haftaya kadar",
            },
            {
              prompt: "Swing traderlar analiz için en sık hangi zaman dilimlerini kullanır?",
              options: [
                "Yalnızca tik grafiği",
                "Daha üst zaman dilimleri, örneğin H4 ve D1",
                "Yalnızca dakikalık zaman dilimi",
              ],
              correctAnswer: "Daha üst zaman dilimleri, örneğin H4 ve D1",
            },
            {
              prompt: "Swing trading'deki pozisyonlar, tutma süresinin uzunluğu nedeniyle hangi özel riske maruz kalır?",
              options: [
                "Emrin anlık yürütülmesi riskine",
                "Hiçbir oynaklık olmaması riskine",
                "Gece ve hafta sonu fiyat gap'i riskine",
              ],
              correctAnswer: "Gece ve hafta sonu fiyat gap'i riskine",
            },
          ],
        },
        {
          slug: "position-trading",
          title: "Position Trading",
          summary: "Büyük trendlere ve temel faktörlere dayalı olarak pozisyonların uzun vadeli tutulması.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Position Trading, birkaç haftadan aylara ve daha uzun süreye kadar pozisyonların tutulduğu, büyük ve uzun vadeli trendleri yakalamaya odaklanan bir stratejidir. Pozisyon traderları, kısa vadeli fiyat gürültüsüne daha az, makroekonomik ve temel bağlama ise daha fazla dikkat eder.",
            },
            {
              type: "paragraph",
              text: "Uzun vadeli ufuk nedeniyle position trading, genel trend içindeki ara drawdown'lara karşı daha fazla tolerans gerektirir ve genellikle işlem başına sermayeye göre daha geniş stoplar kullanır; bunu daha az sayıda eşzamanlı pozisyonla dengeler.",
            },
            {
              type: "list",
              items: [
                "Position trading, pozisyonların birkaç haftadan aylara kadar tutulmasına odaklanır",
                "Strateji, kısa vadeli gürültüden daha çok makroekonomik ve temel bağlama dayanır",
                "Pozisyon traderları genellikle daha geniş stoplar ve daha az sayıda eşzamanlı pozisyon kullanır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Position trading öncelikle neye odaklanır?",
              options: [
                "Dakikalık fiyat dalgalanmalarına",
                "Borsalar arasında gerçek zamanlı arbitraja",
                "Büyük, uzun vadeli trendleri yakalamaya",
              ],
              correctAnswer: "Büyük, uzun vadeli trendleri yakalamaya",
            },
            {
              prompt: "Pozisyon traderı, uzun tutma ufku nedeniyle neye hazırlıklı olmalıdır?",
              options: [
                "Herhangi bir fiyat dalgalanmasının tamamen olmamasına",
                "Genel trend içindeki ara drawdown'lara",
                "İşlemin her gün sonunda mutlaka kapatılmasına",
              ],
              correctAnswer: "Genel trend içindeki ara drawdown'lara",
            },
            {
              prompt: "Position trading'de hangi tür analiz özellikle önemli bir rol oynar?",
              options: [
                "Yalnızca son bir dakikanın emir defteri analizi",
                "Makroekonomik ve temel analiz",
                "Herhangi bir analiz gerekli değildir",
              ],
              correctAnswer: "Makroekonomik ve temel analiz",
            },
          ],
        },
        {
          slug: "liquidity-sweep-strategiya",
          title: "Liquidity Sweep",
          summary: "Kilit bir seviyenin ardındaki likidite alındıktan sonra giriş yapan bir ticaret stratejisi.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Bir ticaret stratejisi olarak Liquidity Sweep, fiyatın sıklıkla önemli bir seviyeyi (bir zirve, bir dip, stop-loss'ların yoğunlaştığı bir bölge) yanlış kırdığı, orada likidite topladığı ve ardından ters yöne döndüğü fikrine dayanır — işte bu dönüş noktası giriş sinyali olarak kullanılır.",
            },
            {
              type: "paragraph",
              text: "Basit bir seviye kırılımından temel farkı, traderın seviyenin ötesinde hareketin devamını değil, tam olarak fiyatın aralığın içine hızlı bir şekilde geri dönmesini beklemesidir; bu da kırılımın gerçek bir trend gücünden değil, likidite toplanmasından kaynaklandığını doğrular.",
            },
            {
              type: "list",
              items: [
                "Strateji, bir seviyenin yanlış kırılımı ve ardından fiyatın hızlı bir şekilde dönmesi üzerine kuruludur",
                "Giriş, kırılımın olduğu anda değil, fiyatın aralığın içine dönüşü doğrulandıktan sonra gerçekleşir",
                "Strateji, bir sweep'i gerçek bir kırılımdan ayırt etmek için sabır ve doğrulama gerektirir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Liquidity Sweep stratejisi hangi fikre dayanır?",
              options: [
                "Bir seviyenin yanlış kırılımı, likidite toplanması ve ardından fiyatın dönmesine",
                "Her türlü destek ve direnç seviyesinin göz ardı edilmesine",
                "Seviye analizi yapmadan pozisyonun sürekli tutulmasına",
              ],
              correctAnswer: "Bir seviyenin yanlış kırılımı, likidite toplanması ve ardından fiyatın dönmesine",
            },
            {
              prompt: "Bir seviye kırılımının gerçek bir kırılım değil de tam olarak bir sweep olduğunu ne doğrular?",
              options: [
                "Kırılımda hacmin tamamen olmaması",
                "Fiyat hareketinin seviyenin çok ötesinde devam etmesi",
                "Kırılımdan sonra fiyatın hızlı bir şekilde aralığın içine geri dönmesi",
              ],
              correctAnswer: "Kırılımdan sonra fiyatın hızlı bir şekilde aralığın içine geri dönmesi",
            },
            {
              prompt: "Bu stratejiyi kullanan bir trader işlemi genellikle ne zaman açar?",
              options: [
                "Doğrulama beklemeden, seviyeye değildiği anda hemen",
                "Fiyatın aralığın içine dönüşü doğrulandıktan sonra",
                "Yalnızca işlem haftası kapandıktan sonra",
              ],
              correctAnswer: "Fiyatın aralığın içine dönüşü doğrulandıktan sonra",
            },
          ],
        },
        {
          slug: "breakout",
          title: "Breakout",
          summary: "Kilit bir seviyenin onaylanmış kırılımı yönünde giriş yapan strateji.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Breakout (kırılım stratejisi), fiyat önemli bir destek, direnç seviyesini veya konsolidasyon sınırını onaylanmış bir şekilde — genellikle artan hacim ve seviyenin ötesinde mumun kapanışıyla, yalnızca dokunmayla değil — aştığında hareket yönünde işleme girmeyi öngörür.",
            },
            {
              type: "paragraph",
              text: "Kırılım stratejisinin en büyük riski, fiyatın kısa süreliğine seviyenin ötesine çıkıp hemen geri döndüğü yanlış kırılımlardır. Bu nedenle traderlar, daha güvenilir bir giriş için genellikle kırılan seviyenin (direncin desteğe dönüştüğü veya tam tersinin gerçekleştiği) yeniden test edilmesini (retest) bekler.",
            },
            {
              type: "list",
              items: [
                "Kırılım stratejisi, onaylanmış bir seviye kırılımı yönünde giriş yapılmasını öngörür",
                "Kırılımın onayı genellikle artan hacim ve seviyenin ötesinde mumun kapanışıdır",
                "Kırılan seviyenin yeniden test edilmesini beklemek, yanlış bir kırılımda giriş yapma riskini azaltır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Breakout (kırılım) stratejisi neye dayanır?",
              options: [
                "Yalnızca kırılımın tersine girişe",
                "Destek ve direnç seviyelerinin tamamen göz ardı edilmesine",
                "Önemli bir seviyenin onaylanmış kırılımı yönünde girişe",
              ],
              correctAnswer: "Önemli bir seviyenin onaylanmış kırılımı yönünde girişe",
            },
            {
              prompt: "Gerçek bir kırılımın onayı olarak genellikle ne kullanılır, yanlış bir kırılımın değil?",
              options: [
                "Hacmin sıfıra düşmesi",
                "Mumun kapanışı olmadan fiyatın seviyeye basitçe dokunması",
                "Artan hacim ve seviyenin dışında mumun kapanışı",
              ],
              correctAnswer: "Artan hacim ve seviyenin dışında mumun kapanışı",
            },
            {
              prompt: "Traderlar bazen girişten önce kırılan seviyenin yeniden test edilmesini neden bekler?",
              options: [
                "İşlem komisyonunu kesin olarak artırmak için",
                "Retest'in giriş için hiçbir önemi yoktur",
                "Yanlış bir kırılımda giriş yapma riskini azaltmak için",
              ],
              correctAnswer: "Yanlış bir kırılımda giriş yapma riskini azaltmak için",
            },
          ],
        },
        {
          slug: "mean-reversion",
          title: "Mean Reversion",
          summary: "Fiyatta güçlü bir sapmadan sonra ortalamaya dönüş stratejisi.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Mean Reversion (ortalamaya dönüş), ortalama değerinden (örneğin bir hareketli ortalama veya VWAP'tan) güçlü bir şekilde sapmış fiyatın, zamanla ona geri dönme eğiliminde olduğu fikrine dayanır. Strateji, güçlü bir trendde değil, yatay bir piyasada daha sık işe yarar.",
            },
            {
              type: "paragraph",
              text: "Bu stratejiyi kullanan traderlar, genellikle ortalamaya dönüş beklentisiyle güçlü bir kısa vadeli hareketin tersine işlem açarak RSI gibi osilatörleri, ortalamadan sapma seviyeleriyle (örneğin Bollinger Bands) birleştirir.",
            },
            {
              type: "list",
              items: [
                "Strateji, güçlü bir sapmadan sonra fiyatın ortalama değere dönmesini öngörür",
                "Mean reversion genellikle güçlü, yönlü bir trendden çok yatay bir piyasada daha etkilidir",
                "Osilatörler ve sapma bantları, giriş noktalarını bulmak için sıklıkla birlikte kullanılır",
              ],
            },
          ],
          questions: [
            {
              prompt: "Mean Reversion stratejisi hangi fikre dayanır?",
              options: [
                "Fiyat hiçbir zaman ortalama değere geri dönmez",
                "Ortalama değerden güçlü şekilde sapan fiyat, ona geri dönme eğilimindedir",
                "Fiyat her zaman aynı yönde sonsuza kadar hareketine devam eder",
              ],
              correctAnswer: "Ortalama değerden güçlü şekilde sapan fiyat, ona geri dönme eğilimindedir",
            },
            {
              prompt: "Mean reversion stratejisi genellikle hangi piyasa türünde daha iyi çalışır?",
              options: [
                "Traderın kendisinden başka hiçbir katılımcının olmadığı bir piyasada",
                "Yatay piyasada",
                "Yalnızca hiperenflasyon dönemlerinde",
              ],
              correctAnswer: "Yatay piyasada",
            },
            {
              prompt: "Traderlar mean reversion'da giriş noktalarını bulmak için hangi araçları sıklıkla birleştirir?",
              options: [
                "Yalnızca sosyal medya haberleri",
                "RSI gibi osilatörler ve ortalamadan sapma bantları",
                "Yalnızca borsa komisyon verileri",
              ],
              correctAnswer: "RSI gibi osilatörler ve ortalamadan sapma bantları",
            },
          ],
        },
      ],
    },
    {
      title: "Final Sınavı",
      lessons: [
        {
          slug: "polnaya-torgovlya-na-simulyatore",
          title: "Simülatörde Tam Kapsamlı Trading",
          summary: "Son uygulama: öğrenilen tüm kavramların sanal bir hesapta uygulanması.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Bu ders, kursta işlenen tüm materyali bir araya getirir — piyasanın temel kavramlarından risk yönetimine, psikolojiye, göstergelere ve ticaret stratejilerine kadar. Görev, risk yönetimi kurallarını ve her işlem için önceden belirlenmiş bir planı uygulayarak sanal bir hesapta bir dizi işlem gerçekleştirmektir.",
            },
            {
              type: "paragraph",
              text: "Bu aşamanın amacı tek seferlik büyük bir kâr değil, tutarlı ve disiplinli bir yaklaşım sergilemektir: doğru pozisyon büyüklüğü hesaplaması, gerekçeli stop-loss ve take profit, ve profesyonel traderların yaptığı gibi her işlem için kayıt tutulması.",
            },
            {
              type: "list",
              items: [
                "Her işlem, önceden belirlenmiş bir giriş ve çıkış planıyla birlikte olmalıdır",
                "Pozisyon büyüklüğü, istenen kâra göre değil riske göre hesaplanır",
                "Tek bir işlemin sonucu, kurallara tutarlı bir şekilde uyulmasından daha az önemlidir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Sanal hesaptaki final uygulamasının temel amacı nedir?",
              options: [
                "Ne pahasına olursa olsun mümkün olan en yüksek kârı elde etmek",
                "Trading'e tutarlı ve disiplinli bir yaklaşım sergilemek",
                "Analiz yapmadan mümkün olduğunca çok işlem yapmak",
              ],
              correctAnswer: "Trading'e tutarlı ve disiplinli bir yaklaşım sergilemek",
            },
            {
              prompt: "Bu aşamada her işlemin açılmasından önce ne gelmelidir?",
              options: [
                "Kaldıracın maksimuma çıkarılması",
                "Önceden belirlenmiş bir giriş ve çıkış planı",
                "Analiz yapmadan rastgele bir varlık seçimi",
              ],
              correctAnswer: "Önceden belirlenmiş bir giriş ve çıkış planı",
            },
            {
              prompt: "Kurs materyaline göre pozisyon büyüklüğü neyle belirlenir?",
              options: [
                "Yalnızca traderın sezgisiyle",
                "İşlem anındaki dolar kuruyla",
                "İstenen kâra değil, işlem başına kabul edilebilir riske göre",
              ],
              correctAnswer: "İstenen kâra değil, işlem başına kabul edilebilir riske göre",
            },
          ],
        },
        {
          slug: "proyti-vse-zadaniya",
          title: "Tüm Görevlerin Tamamlanması Gerekir",
          summary: "Son kontrol: kursu tamamlamak için her modülü bitirmenin neden önemli olduğu.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Kursun her modülü, bir öncekine dayanacak şekilde tasarlanmıştır: risk yönetimini anlamak, oynaklık ve piyasa yapısını anlamaya dayanır; işlem psikolojisi, riskin nasıl işlediğini anlamaya dayanır; stratejiler ise gösterge ve hacim analizine hakimiyete dayanır.",
            },
            {
              type: "paragraph",
              text: "Bazı modüllerin atlanması, daha sonra ortaya çıkan boşluklar yaratır — örneğin bir stratejiyi, onun için pozisyon büyüklüğünün nasıl doğru hesaplanacağını anlamadan kullanmak gibi. Kursu tamamlamak için seçilen bazı modüller değil, tüm görevlerin tamamlanmasının gerekmesinin nedeni tam olarak budur.",
            },
            {
              type: "list",
              items: [
                "Kursun modülleri sıralı olarak inşa edilmiştir ve birbirine dayanır",
                "Bir modülün atlanması, öğrenmenin sonraki aşamalarında ortaya çıkan boşluklar yaratır",
                "Kursun tam olarak tamamlanması, yalnızca seçilen modüllerin değil, tüm görevlerin bitirilmesini gerektirir",
              ],
            },
          ],
          questions: [
            {
              prompt: "Kursun modüllerinin sıralı olarak tamamlanması neden önerilir?",
              options: [
                "Bu yalnızca XP kazanmak için gereklidir",
                "Modüllerin tamamlanma sırasının hiçbir önemi yoktur",
                "Her sonraki modül, önceki modüllerden edinilen bilgiye dayanır",
              ],
              correctAnswer: "Her sonraki modül, önceki modüllerden edinilen bilgiye dayanır",
            },
            {
              prompt: "Kursun bazı modüllerinin atlanması neye yol açabilir?",
              options: [
                "Öğrenim görmeden otomatik olarak sertifika almaya",
                "Bunun sonraki öğrenme üzerinde hiçbir etkisi yoktur",
                "Sonraki aşamalarda ortaya çıkacak bilgi boşluklarına",
              ],
              correctAnswer: "Sonraki aşamalarda ortaya çıkacak bilgi boşluklarına",
            },
            {
              prompt: "Kursun tamamen bitirilmesi için ne gereklidir?",
              options: [
                "Kursun ilk dersini açmak yeterlidir",
                "Yalnızca seçilen modüllerin değil, tüm görevlerin tamamlanması",
                "Seçilen herhangi bir modülün tamamlanması",
              ],
              correctAnswer: "Yalnızca seçilen modüllerin değil, tüm görevlerin tamamlanması",
            },
          ],
        },
        {
          slug: "poluchenie-sertifikata",
          title: "Sertifika Alma",
          summary: "\"Trader Yolu\" kursunu tamamlamak ne anlama gelir ve edinilen bilgiler daha sonra nasıl kullanılır.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "\"Trader Yolu\" kursunun tüm modüllerinin tamamlanması, piyasanın temel kavramlarından göstergeler, hacim analizi, on-chain veriler, DeFi, tokenomics ve geçmiş verilerle test edilmiş kendi ticaret stratejisini oluşturma gibi ileri düzey konulara kadar tam bir yolun kat edildiği anlamına gelir.",
            },
            {
              type: "paragraph",
              text: "Kursun tamamlanması, tek başına pratik deneyimin yerini tutmaz: gerçek piyasa koşulları, baskı altında canlı psikoloji ve gerçek sermayeyle çalışmak daha fazla pratik gerektirir. Kursun bilgisi, bir trader olarak daha ileri gelişimin üzerine inşa edileceği temeldir.",
            },
            {
              type: "list",
              items: [
                "Kurs, piyasanın temel kavramlarından analiz ve strateji konusundaki ileri düzey konulara kadar olan yolu kapsar",
                "Kursu tamamlamak bir temeldir, gerçek trading deneyiminin yerine geçmez",
                "Daha ileri gelişim, pratik yapmayı, günlük tutmayı ve kendi kararlarının sürekli analiz edilmesini gerektirir",
              ],
            },
          ],
          questions: [
            {
              prompt: "\"Trader Yolu\" kursunun tam olarak tamamlanması neyi kapsar?",
              options: [
                "Yalnızca cüzdanla çalışmanın temellerini",
                "Yalnızca kripto paraların hukuki yönlerini",
                "Piyasanın temel kavramlarından analiz ve strateji konusundaki ileri düzey konulara kadar olan yolu",
              ],
              correctAnswer: "Piyasanın temel kavramlarından analiz ve strateji konusundaki ileri düzey konulara kadar olan yolu",
            },
            {
              prompt: "Kursu tamamlamak gerçek trading deneyiminin yerini tutar mı?",
              options: [
                "Evet, kurs her türlü pratiğin tamamen yerini tutar",
                "Hayır, kurs bir temeldir ve gerçek deneyim daha fazla pratik gerektirir",
                "Evet, ama yalnızca 10x üzerindeki kaldıraçlı işlemler için",
              ],
              correctAnswer: "Hayır, kurs bir temeldir ve gerçek deneyim daha fazla pratik gerektirir",
            },
            {
              prompt: "Kurs tamamlandıktan sonra yapmaya devam etmesi önerilen nedir?",
              options: [
                "Risk yönetiminden derhal vazgeçmek",
                "İşlem günlüğü tutmak ve kendi kararlarını sürekli analiz etmek",
                "Kendi trading'ini analiz etmeyi tamamen bırakmak",
              ],
              correctAnswer: "İşlem günlüğü tutmak ve kendi kararlarını sürekli analiz etmek",
            },
          ],
        },
      ],
    },
  ],
};
