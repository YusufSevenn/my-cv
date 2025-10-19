import { Card } from "flowbite-react";

export function Projects() {
  return (
    <Card className="w-300">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Projeler
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        ToDo List Web Uygulaması :
        Node.js, Express.js ve MySQL kullanarak kullanıcı giriş sistemi ve görev yönetimi özelliklerine sahip
        bir web uygulaması geliştirdim. RESTful API yapısı ile backend tasarlandı; frontend kısmında kullanıcı dostu bir
        arayüz oluşturdum.Proje, CRUD işlemlerinin tam entegrasyonunu ve oturum yönetimini içermektedir.
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Çizim Dili (Domain-Specific Language) :
        Flex ve Bison kullanarak C-benzeri sözdizimine sahip özel bir çizim dili geliştirdim.
        Bu dil; değişken atama, kontrol yapıları, fonksiyon tanımları ve grafik çizim komutlarını desteklemektedir.
        Proje, derleyici ve yorumlayıcı tasarımı konusundaki bilgi birikimimi pekiştirdi.
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Meteor Escape (2D Oyun) :
        Python ve Raylib kullanarak fizik tabanlı bir 2D arcade oyunu tasarladım.
        Oyuncu, yukarıdan düşen meteorlardan kaçarken skor tutma, çarpışma kontrolü ve görsel efektler gibi
        mekaniklerle etkileşime girer. Oyun, temel oyun döngüsü yönetimi ve çarpışma algılama mantığı üzerine inşa edilmiştir.
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Araç Sigorta Takip Sistemi :
        Araç sahiplerinin sigorta poliçelerini takip edebileceği bir web tabanlı sistem geliştirdim.
        Kullanıcı, sigorta tarihlerini görüntüleyebilir, hatırlatma bildirimleri alabilir. Proje, MySQL veritabanı
        ve Node.js backend üzerinde çalışmakta, verilerin güvenli yönetimine odaklanmaktadır.
      </p>
    </Card>
  )

}
