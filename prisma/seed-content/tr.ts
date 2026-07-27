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
                "Trading, kısa vadeli ve sık işlemler içerir",
                "Trading yalnızca bankalara açıktır",
                "Trading risk içermez",
              ],
              correctAnswer: "Trading, kısa vadeli ve sık işlemler içerir",
            },
            {
              prompt: "Klasik yatırımcının aksine, kim bir varlığın fiyat düşüşünden de kazanç sağlayabilir?",
              options: ["Kısa (short) pozisyon açan trader", "Yalnızca bankalar", "Yalnızca market-maker'lar"],
              correctAnswer: "Kısa (short) pozisyon açan trader",
            },
            {
              prompt: "Market-maker'lar piyasada neyi sağlar?",
              options: ["Diğer katılımcıların işlemleri için likidite", "Devlet düzenlemesi", "Sabit varlık kuru"],
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
              options: ["Hafta sonu dahil 7/24 çalışır", "Yalnızca hafta içi gündüz işlem görür", "Tamamen devlet tarafından düzenlenir"],
              correctAnswer: "Hafta sonu dahil 7/24 çalışır",
            },
            {
              prompt: "Forex piyasasında ne işlem görür?",
              options: ["Döviz çiftleri", "Şirket hisseleri", "Emtialar"],
              correctAnswer: "Döviz çiftleri",
            },
            {
              prompt: "Sayılan piyasalardan hangisi genellikle en yüksek volatiliteye sahiptir?",
              options: ["Kripto para piyasası", "Devlet tahvili piyasası", "G7 döviz çiftleri"],
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
              options: ["Varlığın fiyatı", "İşlem hacmi", "Trader sayısı"],
              correctAnswer: "Varlığın fiyatı",
            },
            {
              prompt: "Zaman dilimi (timeframe) nedir?",
              options: [
                "Grafikteki tek bir öğenin temsil ettiği zaman aralığı",
                "Bir borsanın adı",
                "Bir emir türü",
              ],
              correctAnswer: "Grafikteki tek bir öğenin temsil ettiği zaman aralığı",
            },
            {
              prompt: "Traderlar neden aynı anda birden fazla zaman dilimini analiz eder?",
              options: [
                "Hem trendin genel resmini hem de doğru giriş noktasını aynı anda görmek için",
                "Bunun pratik bir anlamı yoktur",
                "Borsa komisyonlarından kaçınmak için",
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
                "Açılış ve kapanış fiyatı arasındaki aralık",
                "Maksimum işlem hacmi",
                "Piyasa katılımcısı sayısı",
              ],
              correctAnswer: "Açılış ve kapanış fiyatı arasındaki aralık",
            },
            {
              prompt: "Mumun gölgeleri (fitilleri) neyi gösterir?",
              options: [
                "Gövdenin dışındaki fiyat aralığını — dönem içindeki en yüksek ve en düşük değeri",
                "Ortalama işlem hacmini",
                "Gün içindeki işlem sayısını",
              ],
              correctAnswer: "Gövdenin dışındaki fiyat aralığını — dönem içindeki en yüksek ve en düşük değeri",
            },
            {
              prompt: "Fiyat düşüşünden sonra oluşan uzun bir alt gölge neyin işareti olabilir?",
              options: [
                "Alıcılar fiyatı aşağıdan aktif biçimde satın aldı — bir dönüş mümkün",
                "Piyasa kesinlikle düşmeye devam edecek",
                "İşlem hacmi sıfırdı",
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
                "Alıcıların tarihsel olarak düşüşü durdurduğu fiyat",
                "Borsanın açılış fiyatı",
                "İşlem komisyonu",
              ],
              correctAnswer: "Alıcıların tarihsel olarak düşüşü durdurduğu fiyat",
            },
            {
              prompt: "Bir direnç seviyesi yukarı kırıldıktan sonra genellikle ne olur?",
              options: [
                "Genellikle yeni bir destek haline gelir",
                "Ortadan kaybolur ve fiyatı bir daha etkilemez",
                "Fiyatın anında geri dönmesi gerekir",
              ],
              correctAnswer: "Genellikle yeni bir destek haline gelir",
            },
            {
              prompt: "Grafikte güvenilir seviyeler nasıl doğru çizilir?",
              options: [
                "Tek bir noktaya değil, fiyatın birden çok temasına göre",
                "Kesinlikle grafiğin tam ortasına göre",
                "Yalnızca dakikalık zaman diliminde",
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
                "Birbirini izleyen daha yüksek zirveler ve diplerden",
                "Yüksekliği aynı olan mumlardan",
                "Yalnızca art arda gelen yeşil mumlardan",
              ],
              correctAnswer: "Birbirini izleyen daha yüksek zirveler ve diplerden",
            },
            {
              prompt: "Yatay trend (flat) nedir?",
              options: [
                "Fiyatın belirgin bir yön olmadan bir aralıkta hareket etmesi",
                "Fiyatın keskin bir şekilde düşmesi",
                "Borsada işlemlerin durdurulduğu bir dönem",
              ],
              correctAnswer: "Fiyatın belirgin bir yön olmadan bir aralıkta hareket etmesi",
            },
            {
              prompt: "Neden \"trend senin dostundur\" denir?",
              options: [
                "Trend yönünde işlem yapmak istatistiksel olarak daha fazla başarı şansı verir",
                "Trend asla yön değiştirmez",
                "Bu, pratik bir anlamı olmayan sadece bir söz öbeğidir",
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
                "Hareket zayıftır ve doğrulanmamış olabilir",
                "Bu, giriş için en güvenilir sinyaldir",
                "Varlığın likiditesi maksimum düzeydedir",
              ],
              correctAnswer: "Hareket zayıftır ve doğrulanmamış olabilir",
            },
            {
              prompt: "Piyasa likiditesi nedir?",
              options: [
                "Bir varlığı fiyatını fazla etkilemeden kolayca alıp satabilme",
                "Dolaşımdaki toplam coin miktarı",
                "Borsanın işlem komisyonu",
              ],
              correctAnswer: "Bir varlığı fiyatını fazla etkilemeden kolayca alıp satabilme",
            },
            {
              prompt: "Düşük likiditeli bir varlıkla çalışan trader için tehlike nedir?",
              options: [
                "İşlem gerçekleşirken büyük bir slippage yaşanması",
                "Komisyonların tamamen ortadan kalkması",
                "Garanti kâr",
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
                "İşlemdeki zararı önceden sınırlamak için",
                "Pozisyon büyüklüğünü artırmak için",
                "Kârı garanti etmek için",
              ],
              correctAnswer: "İşlemdeki zararı önceden sınırlamak için",
            },
            {
              prompt: "Tek bir işlemde depozitonun genellikle yüzde kaçının riske atılması önerilir?",
              options: ["%1-2", "%25-30", "Depozitonun tamamı"],
              correctAnswer: "%1-2",
            },
            {
              prompt: "1:3 risk/kazanç oranı ne anlama gelir?",
              options: [
                "Potansiyel kâr, riskten 3 kat daha büyüktür",
                "Risk, kârdan 3 kat daha büyüktür",
                "İşlem 3 saat sonra kapanacaktır",
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
                "EMA, son fiyatlara daha fazla ağırlık verir",
                "SMA yalnızca dakikalık grafikte çalışır",
                "Aralarında fark yoktur, ikisi aynı şeydir",
              ],
              correctAnswer: "EMA, son fiyatlara daha fazla ağırlık verir",
            },
            {
              prompt: "Fiyatın hareketli ortalamanın üzerinde olması neyin işaretidir?",
              options: ["Trend muhtemelen yükseliş yönündedir", "Varlık kesinlikle aşırı değerlenmiştir", "İşlem hacmi sıfırdır"],
              correctAnswer: "Trend muhtemelen yükseliş yönündedir",
            },
            {
              prompt: "\"Altın kesişim\" (golden cross) nedir?",
              options: [
                "Kısa MA'nın uzun MA'yı yukarı kesmesi — boğa sinyali",
                "Yeni bir coin'in listelendiği an",
                "Fiyatın sıfır çizgisini kesmesi",
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
          ],
          questions: [
            {
              prompt: "RSI göstergesi hangi aralıkta çalışır?",
              options: ["0 ile 100 arasında", "-1 ile 1 arasında", "0 ile 10000 arasında"],
              correctAnswer: "0 ile 100 arasında",
            },
            {
              prompt: "70'in üzerindeki bir RSI genellikle ne anlama gelir?",
              options: ["Varlık aşırı alım bölgesindedir", "Varlık satılamaz durumdadır", "İşlem hacmi sıfıra düşmüştür"],
              correctAnswer: "Varlık aşırı alım bölgesindedir",
            },
            {
              prompt: "RSI uyumsuzluğu (divergence) nedir?",
              options: [
                "Fiyat ve göstergenin farklı yönlerde hareket etmesi — olası bir dönüş sinyali",
                "Fiyat ve gösterge hareketinin tam olarak örtüşmesi",
                "Göstergenin teknik arızası",
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
              options: ["%61.8", "%10", "%100"],
              correctAnswer: "%61.8",
            },
            {
              prompt: "Fibonacci düzeltmeleri ne için kullanılır?",
              options: [
                "Trend içindeki geri çekilmede giriş noktaları aramak için",
                "Borsa komisyonunu hesaplamak için",
                "Haberlerin yayınlanacağı kesin zamanı belirlemek için",
              ],
              correctAnswer: "Trend içindeki geri çekilmede giriş noktaları aramak için",
            },
            {
              prompt: "Fibonacci uzantıları ne için gereklidir?",
              options: [
                "Fiyatın dürtünün ötesindeki hareket hedeflerini belirlemek için",
                "Stop-loss büyüklüğünü yüzde olarak belirlemek için",
                "İşlem hacmini göstermek için",
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
                "Yükselişin garanti devamı",
                "Borsada işlemlerin durdurulması",
              ],
              correctAnswer: "Yükselen trendin olası dönüşü",
            },
            {
              prompt: "\"Çift tepe\" formasyonunun gerçekleştiğini ne doğrular?",
              options: ["Boyun çizgisinin aşağı yönlü kırılması", "Üçüncü bir zirvenin oluşması", "Hacmin tam zirvede artması"],
              correctAnswer: "Boyun çizgisinin aşağı yönlü kırılması",
            },
            {
              prompt: "Bir formasyonun kırılmasını doğrularken hacim neden önemlidir?",
              options: [
                "Hacim olmadan kırılma daha sık sahte çıkar",
                "Hacmin formasyonlar üzerinde hiçbir etkisi yoktur",
                "Hacim yalnızca günlük zaman diliminde gereklidir",
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
              options: ["Önceki trend yönünde", "Her zaman kesinlikle aşağı yönde", "Rastgele bir yönde"],
              correctAnswer: "Önceki trend yönünde",
            },
            {
              prompt: "Üçgenlerin, bayrakların ve dikdörtgenlerin ortak noktası nedir?",
              options: [
                "Trend içindeki duraklama/konsolidasyonlardır",
                "Her zaman dönüş sinyalidirler",
                "Yalnızca forex'te görülürler",
              ],
              correctAnswer: "Trend içindeki duraklama/konsolidasyonlardır",
            },
            {
              prompt: "Bir üçgenden gerçek bir çıkışa genellikle ne eşlik eder?",
              options: ["Hacimde bir artış", "Hacmin tamamen yok olması", "İşlemlerin durdurulması"],
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
              options: ["Büyük zaman diliminden (örneğin günlük)", "Dakikalık zaman diliminden", "Rastgele herhangi birinden"],
              correctAnswer: "Büyük zaman diliminden (örneğin günlük)",
            },
            {
              prompt: "Çoklu zaman dilimi analizinde küçük zaman dilimi neden gereklidir?",
              options: ["İşleme doğru bir şekilde girmek için", "Büyük zaman diliminin yerini tamamen almak için", "Borsa komisyonunu hesaplamak için"],
              correctAnswer: "İşleme doğru bir şekilde girmek için",
            },
            {
              prompt: "Büyük zaman dilimi göz ardı edilirse ne olabilir?",
              options: [
                "Ana trende karşı işlem yapmak",
                "Kârın otomatik olarak artması",
                "Hiçbir şey, bunun önemi yoktur",
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
                "Zararı duygusal işlemlerle hemen telafi etme girişimi",
                "Hedge fonların resmi stratejisi",
                "Borsanın komisyonu iade etmesi",
              ],
              correctAnswer: "Zararı duygusal işlemlerle hemen telafi etme girişimi",
            },
            {
              prompt: "Trader neden bir işlem günlüğü tutmalıdır?",
              options: [
                "Hataları analiz etmek ve stratejiyi geliştirmek için",
                "Bu, borsanın bir gerekliliğidir",
                "Vergileri azaltmak için",
              ],
              correctAnswer: "Hataları analiz etmek ve stratejiyi geliştirmek için",
            },
            {
              prompt: "Zararlı bir pozisyonu çok uzun süre tutmaya en çok hangi duygu yol açar?",
              options: ["Dönüş umudu ve zararı kesinleştirme korkusu", "Sıkılma", "Borsanın haklı olduğuna dair güven"],
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
                "Giriş noktası, stop-loss ve kâr hedefi",
                "Yalnızca giriş noktası",
                "Önceden hiçbir şey belirlemeye gerek yoktur",
              ],
              correctAnswer: "Giriş noktası, stop-loss ve kâr hedefi",
            },
            {
              prompt: "Neden önce sanal bakiyede pratik yapılmalıdır?",
              options: [
                "Stratejiyi gerçek para riski olmadan uygulamak için",
                "Sanal bakiye daha fazla kâr sağlar",
                "Bu, yasal bir zorunluluktur",
              ],
              correctAnswer: "Stratejiyi gerçek para riski olmadan uygulamak için",
            },
            {
              prompt: "Bir işlem kapatıldıktan hemen sonra ne yapmak önemlidir?",
              options: [
                "İşlemi analiz etmek ve sonucu günlüğe kaydetmek",
                "Hemen zıt yönde bir işlem açmak",
                "İşlem geçmişini silmek",
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
                "Riskli varlıklar (kripto dahil) çoğunlukla düşer",
                "Kripto piyasası faize hiç tepki vermez",
                "Bitcoin faiz artışında her zaman yükselir",
              ],
              correctAnswer: "Riskli varlıklar (kripto dahil) çoğunlukla düşer",
            },
            {
              prompt: "FOMC nedir?",
              options: [
                "FED'in faiz oranı kararlarını alan komitesi",
                "ABD'nin en büyük kripto borsası",
                "Piyasa volatilite endeksi",
              ],
              correctAnswer: "FED'in faiz oranı kararlarını alan komitesi",
            },
            {
              prompt: "Para politikasındaki gevşemeye piyasa jargonunda ne denir?",
              options: ["\"Güvercin\" (dovish) politika", "\"Şahin\" (hawkish) politika", "\"Nötr\" emisyon"],
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
                "Tüketici mal ve hizmet sepetindeki fiyat değişimini",
                "Bitcoin'in dolar karşısındaki kurunu",
                "Borsadaki işlem hacmini",
              ],
              correctAnswer: "Tüketici mal ve hizmet sepetindeki fiyat değişimini",
            },
            {
              prompt: "Piyasa, beklentinin üzerinde açıklanan bir CPI verisine genellikle nasıl tepki verir?",
              options: [
                "Riskli varlıklar daha çok düşer",
                "Piyasa CPI'ye asla tepki vermez",
                "Kripto piyasası işlemleri otomatik olarak durdurur",
              ],
              correctAnswer: "Riskli varlıklar daha çok düşer",
            },
            {
              prompt: "FED'in kendisinin tercih ettiği enflasyon göstergesi hangisidir?",
              options: ["PCE", "DXY", "RSI"],
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
                "Bitcoin'in volatilitesini",
                "Kripto piyasasının toplam piyasa değerini",
              ],
              correctAnswer: "ABD dolarının diğer para birimlerinden oluşan bir sepete karşı gücünü",
            },
            {
              prompt: "DXY ve Bitcoin hareketleri genellikle nasıl ilişkilidir?",
              options: [
                "Çoğunlukla zıt yönlerde hareket ederler",
                "Her zaman tamamen eşzamanlı hareket ederler",
                "Aralarında hiçbir ilişki yoktur",
              ],
              correctAnswer: "Çoğunlukla zıt yönlerde hareket ederler",
            },
            {
              prompt: "DXY endeksindeki keskin bir yükseliş neyin habercisi olabilir?",
              options: [
                "Kripto piyasasındaki olası bir düzeltmenin",
                "Bitcoin'in garanti yükselişinin",
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
                "Yüksek teknoloji hisseleriyle (Nasdaq)",
                "Devlet tahvilleriyle",
                "Hiçbir şeyle korelasyon göstermiyor",
              ],
              correctAnswer: "Yüksek teknoloji hisseleriyle (Nasdaq)",
            },
            {
              prompt: "BTC ile Nasdaq arasındaki yüksek korelasyon ne anlama gelir?",
              options: [
                "Genellikle aynı yönde hareket ederler",
                "Zıt yönlerde hareket etmek zorundadırlar",
                "BTC, Nasdaq endeksinin yerini tamamen alır",
              ],
              correctAnswer: "Genellikle aynı yönde hareket ederler",
            },
            {
              prompt: "BTC'nin hisse senedi piyasasıyla olan korelasyonunu geçici olarak ne zayıflatabilir?",
              options: [
                "Kripto'ya özgü olaylar (borsa hack'i, düzenleyici haberler)",
                "Borsada bir tatil günü",
                "Saat diliminin değişmesi",
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
                "Piyasayı etkileyen önemli haberlerin tarihlerini takip etmek için",
                "Kişisel tatil planlamak için",
                "Teknik analizin yerini tamamen almak için",
              ],
              correctAnswer: "Piyasayı etkileyen önemli haberlerin tarihlerini takip etmek için",
            },
            {
              prompt: "NFP nedir?",
              options: [
                "ABD'nin tarım dışı istihdam raporu",
                "Yeni bir kriptografik protokol",
                "Korku ve açgözlülük endeksi",
              ],
              correctAnswer: "ABD'nin tarım dışı istihdam raporu",
            },
            {
              prompt: "Yüksek önemdeki bir haber açıklanmadan önce yapılması akıllıca olan nedir?",
              options: [
                "Riski azaltmak veya yeni işlemlerden kaçınmak",
                "Pozisyon büyüklüğünü maksimuma çıkarmak",
                "Stop-loss'ları kapatmak",
              ],
              correctAnswer: "Riski azaltmak veya yeni işlemlerden kaçınmak",
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
                "Bir stop-loss seviyesi",
                "Bir hacim göstergesi",
              ],
              correctAnswer: "Keskin bir dürtü nedeniyle 1. ve 3. mumun kuyrukları arasında oluşan boşluk",
            },
            {
              prompt: "Piyasa daha sonra imbalance bölgesiyle genellikle ne yapar?",
              options: [
                "Geri döner ve onu kısmen veya tamamen \"kapatır\"",
                "Ona bir daha asla değmez",
                "Onu grafikten otomatik olarak siler",
              ],
              correctAnswer: "Geri döner ve onu kısmen veya tamamen \"kapatır\"",
            },
            {
              prompt: "Klasik FVG formasyonu kaç mumdan oluşur?",
              options: ["Üç mumdan", "Bir mumdan", "Yedi mumdan"],
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
                "Eşit zirveler/dipler ve belirgin destek/direnç seviyelerinin yakınında",
                "Nedensiz olarak tam olarak aralığın ortasında",
                "Yalnızca haber mumlarında",
              ],
              correctAnswer: "Eşit zirveler/dipler ve belirgin destek/direnç seviyelerinin yakınında",
            },
            {
              prompt: "Buy-side likidite nedir?",
              options: [
                "Yerel zirvelerin üzerinde bulunan short pozisyoncuların stop'ları",
                "Yerel diplerin altındaki long pozisyoncuların stop'ları",
                "Borsanın alım komisyonu",
              ],
              correctAnswer: "Yerel zirvelerin üzerinde bulunan short pozisyoncuların stop'ları",
            },
            {
              prompt: "Büyük oyuncuların piyasada likiditeye neden ihtiyacı vardır?",
              options: [
                "Büyük bir pozisyonu güçlü bir slippage olmadan açmak veya kapatmak için",
                "İşlemleri tamamen durdurmak için",
                "Bunun büyük oyuncularla bir ilgisi yoktur",
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
                "Fiyat her zaman delinme yönünde hareketine devam eder",
                "Hiçbir şey, hacim sıfıra düşer",
              ],
              correctAnswer: "Delinme yönünün tersine keskin bir dönüş",
            },
            {
              prompt: "Liquidity sweep'in hedefi en çok hangi bölge olur?",
              options: [
                "Bekleyen emirlerin bulunduğu bölge — örneğin eşit zirveler/dipler",
                "Seviyesiz rastgele bir aralığın ortası",
                "Sıfır likiditeye sahip bir bölge",
              ],
              correctAnswer: "Bekleyen emirlerin bulunduğu bölge — örneğin eşit zirveler/dipler",
            },
            {
              prompt: "Yeni başlayanların bir sweep gördüklerinde yaptığı tipik hata nedir?",
              options: [
                "Olası bir dönüşü hesaba katmadan kırılma yönünde işleme girmek",
                "Kârlı bir pozisyonu çok erken kapatmak",
                "İşleme girmeden önce stop-loss belirlemek",
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
                "Mevcut trendin olası dönüşü",
                "Trendin hızlanarak devam etmesi",
                "Piyasada likidite bulunmaması",
              ],
              correctAnswer: "Mevcut trendin olası dönüşü",
            },
            {
              prompt: "Break of Structure (BOS) neyi doğrular?",
              options: [
                "Mevcut trendin devamını",
                "İşlemlerin otomatik olarak durmasını",
                "Önceki tüm seviyelerin geçersiz olmasını",
              ],
              correctAnswer: "Mevcut trendin devamını",
            },
            {
              prompt: "Yükselen trendin yapısı neden oluşur?",
              options: [
                "Higher High ve Higher Low'dan",
                "Lower High ve Lower Low'dan",
                "Yüksekliği aynı olan mumlardan",
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
          ],
          questions: [
            {
              prompt: "Order block nedir?",
              options: [
                "Güçlü bir dürtü hareketinden önceki son ters yönlü mum",
                "Bir işlem hacmi göstergesi",
                "Gecikmeli gerçekleşen bir borsa emri türü",
              ],
              correctAnswer: "Güçlü bir dürtü hareketinden önceki son ters yönlü mum",
            },
            {
              prompt: "Traderlar order block'ları genellikle nasıl kullanır?",
              options: [
                "Fiyat geri döndüğünde potansiyel giriş bölgeleri olarak",
                "Bir enflasyon göstergesi olarak",
                "Borsa komisyonunu hesaplamak için",
              ],
              correctAnswer: "Fiyat geri döndüğünde potansiyel giriş bölgeleri olarak",
            },
            {
              prompt: "Boğa order block'u ayı order block'undan nasıl farklıdır?",
              options: [
                "Aşağı yönlü değil, yukarı yönlü bir dürtüden önce oluşur",
                "Her zaman boyut olarak daha büyüktür",
                "Yalnızca günlük zaman diliminde ortaya çıkar",
              ],
              correctAnswer: "Aşağı yönlü değil, yukarı yönlü bir dürtüden önce oluşur",
            },
          ],
        },
      ],
    },
  ],
};
