export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export type Messages = {
  skipToContent: string;
  languageLabel: string;
  header: {
    faq: string;
    features: string;
    joinWaitlist: string;
    joinWaitlistShort: string;
    homeAria: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    line: string;
    waitlistCta: string;
    featuresCta: string;
    videoAlt: string;
  };
  statement: {
    lead: string;
    rest: string;
  };
  presence: {
    eyebrow: string;
    title: string;
    body: string;
    wristAlt: string;
    productAlt: string;
  };
  care: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
    featuresCta: string;
  };
  waitlist: {
    eyebrow: string;
    title: string;
    body: string;
    firstName: string;
    optional: string;
    firstNamePlaceholder: string;
    firstNameRequired: string;
    firstNameTooLong: string;
    email: string;
    emailPlaceholder: string;
    age: string;
    agePlaceholder: string;
    ageInvalid: string;
    gender: string;
    genderPlaceholder: string;
    genderPreferNot: string;
    genderFemale: string;
    genderMale: string;
    genderOther: string;
    betaInterest: string;
    submit: string;
    submitting: string;
    privacyNote: string;
    emailRequired: string;
    emailTooLong: string;
    emailInvalid: string;
    submitFailed: string;
    sending: string;
    successTitle: string;
    successBody: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { question: string; answer: string }[];
    disclaimer: string;
  };
  footer: {
    blurb: string;
    joinWaitlist: string;
    faq: string;
    features: string;
    privacy: string;
    copyright: string;
    backToTop: string;
  };
  privacy: {
    title: string;
    p1: string;
    p2: string;
    p3Before: string;
    p3After: string;
    p4: string;
    p5Before: string;
    p5After: string;
  };
  notFound: {
    title: string;
    body: string;
    backHome: string;
  };
  features: {
    title: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    highlightsEyebrow: string;
    highlights: { title: string; body: string }[];
    everydayEyebrow: string;
    everydayTitle: string;
    everyday: { title: string; body: string }[];
    waitlistTitle: string;
    waitlistBody: string;
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    skipToContent: "Skip to main content",
    languageLabel: "Language",
    header: {
      faq: "Questions",
      features: "Features",
      joinWaitlist: "Join the waitlist",
      joinWaitlistShort: "Join",
      homeAria: "QiLyra home",
    },
    hero: {
      eyebrow: "First collection · coming soon",
      title: "Jewelry you will actually wear.",
      line: "A screen-free bracelet for older adults. Discreet fall alerts and family peace of mind, in a piece that looks like jewelry because it is.",
      waitlistCta: "Join the waitlist",
      featuresCta: "See how it cares",
      videoAlt:
        "QiLyra bracelet resting on a warm beige surface, with soft rippling light moving across the stones and silver bar.",
    },
    statement: {
      lead: "Care that does not announce itself.",
      rest: "No screen on the wrist, and no pendant to explain — until a fall, a stillness, or a familiar path needs a calm word.",
    },
    presence: {
      eyebrow: "The piece",
      title: "A bracelet, not a device.",
      body: "Stones and a silver bar, made to disappear into an ordinary afternoon. The care stays underneath until a fall happens, or someone you love leaves a familiar path.",
      wristAlt:
        "QiLyra bracelet on a wrist at a linen table, beside a cup of tea in soft window light.",
      productAlt:
        "QiLyra bracelet of green quartz and a pavé diamond bar, resting on travertine with palm shadows.",
    },
    care: {
      eyebrow: "When the day asks",
      title: "Three quiet promises.",
      items: [
        {
          title: "Fall alert",
          body: "If a fall happens, QiLyra can notice the sudden change and let the people you choose know. No siren on the wrist.",
        },
        {
          title: "Emergency auto-contact",
          body: "The people you name, in the order you choose, can receive a clear, unhurried message when something needs attention.",
        },
        {
          title: "Location, with dignity",
          body: "For families walking with dementia: a consented thread of whereabouts. Not a leash, and not a camera.",
        },
      ],
      featuresCta: "Read all features",
    },
    waitlist: {
      eyebrow: "Early access",
      title: "Be first when the collection opens.",
      body: "Join the waitlist for a private preview, sizing notes, and first-collection access. We write rarely, and only when there is something worth knowing.",
      firstName: "First name",
      optional: "(optional)",
      firstNamePlaceholder: "Alex",
      firstNameRequired: "Please enter your first name.",
      firstNameTooLong:
        "That name looks a little too long. Please check it and try again.",
      email: "Email address",
      emailPlaceholder: "you@example.com",
      age: "Age",
      agePlaceholder: "72",
      ageInvalid: "Please enter a valid age, such as 72.",
      gender: "Gender",
      genderPlaceholder: "Choose one",
      genderPreferNot: "Prefer not to say",
      genderFemale: "Female",
      genderMale: "Male",
      genderOther: "Other",
      betaInterest:
        "I would like to be among the first beta testers, with a discount.",
      submit: "Reserve a place",
      submitting: "Joining…",
      privacyNote: "We only use your email for launch notes. No ads, no clutter.",
      emailRequired: "Please enter your email address.",
      emailTooLong:
        "That email looks a little too long. Please check it and try again.",
      emailInvalid: "Please enter a valid email, such as name@example.com.",
      submitFailed:
        "We could not join the waitlist just now. Please try again in a moment.",
      sending: "Sending your request.",
      successTitle: "You are on the list.",
      successBody:
        "Thank you{name}. We will write when the first collection is ready — calmly, and only about QiLyra.",
    },
    faq: {
      eyebrow: "Good questions",
      title: "Short answers before you join.",
      intro: "A few things worth knowing before you reserve a place.",
      items: [
        {
          question: "Will it look like jewelry, or like a gadget?",
          answer:
            "It should look like jewelry. QiLyra is moss-green stones and a matte silver bar, with no screen competing for attention. If it looks like a medical device, we have not succeeded.",
        },
        {
          question: "Is there a screen? Will it light up or make a sound through the day?",
          answer:
            "No screen, and no siren on the wrist. The people you invite can receive a calm note in a companion app when something needs them, and the app stays quiet when the day is simply going on. There is no feed of surveillance. Which phones that app supports, we'll share before launch, and waitlist members hear first.",
        },
        {
          question: "Can I wear it in the rain, or while I wash my hands?",
          answer:
            "Washed hands, a little rain, a splash at the sink. Not for swimming or a long bath. We will share the exact rating with the first collection.",
        },
        {
          question: "Who can see where I am?",
          answer:
            "Only the people you choose. QiLyra can share your location with them, with your consent. It is a thread of whereabouts, not a leash and not a camera.",
        },
        {
          question: "If I am walking home, out for the night, or travelling on my own, how does someone hear?",
          answer:
            "You choose who is contacted, and in what order. When something needs attention, QiLyra can reach them with a clear, unhurried message — not a panic. There is no siren on the wrist, and no pendant to remember.",
        },
        {
          question: "What do you do with what the bracelet knows, and with my email?",
          answer:
            "Heart and movement stay with you unless you decide to share them. They are not a hospital readout. Location goes only to the people you choose. If you join the waitlist, we use your email for launch notes. We do not sell the list, and we do not send advertising for anyone else. You may also share your age, your gender, and whether you would like to be a beta tester. This site does not ask for your phone's location.",
        },
        {
          question: "How long does a charge last?",
          answer:
            "It is made for everyday wear: a long charge, and a gentle reminder when it is time to rest on the charger. Never an urgent alarm on the wrist. How many days that charge covers, we'll share before launch, and waitlist members hear first.",
        },
        {
          question: "When can I have one, and what do the waitlist and the beta discount include?",
          answer:
            "Not yet. The first collection is coming soon. We have not published a date — we'll share it before launch, and waitlist members hear first. Joining the list is for a private preview, sizing notes, and first-collection access. We write rarely, and only when there is something worth knowing. You can also ask to be among the first beta testers, with a discount. The details of that discount, we'll share before launch.",
        },
      ],
      disclaimer:
        "QiLyra is jewelry with a quiet layer of care. It is not a medical device, it is not a substitute for emergency services, and it is not intended to diagnose, treat, cure, or prevent any condition.",
    },
    footer: {
      blurb:
        "Quiet jewelry for everyday independence. A first collection for older adults and the families who love them.",
      joinWaitlist: "Join the waitlist",
      faq: "Questions",
      features: "Features",
      privacy: "Privacy",
      copyright: "© {year} QiLyra.",
      backToTop: "Back to top",
    },
    privacy: {
      title: "Privacy",
      p1: "QiLyra is not for sale yet. This site collects waitlist details so we can tell you when the first collection is ready.",
      p2: "We ask for a first name and an email address. You may also share your age, gender, and whether you would like to be among the first beta testers. When you submit, we may also record an approximate country (for example TW or US) from the hosting platform’s IP geo headers. We do not ask for device location permission. We use that information only to send launch updates about QiLyra.",
      p3Before:
        "We do not sell waitlist data. We do not send advertising on behalf of others. If a form provider is connected later, that provider will process submissions under their own terms — the endpoint is configured with",
      p3After: ".",
      p4: "Until that endpoint is set, a demo copy stays in your browser and is not forwarded to a form provider. Submissions still pass through this site’s waitlist API, which may attach an approximate country from Vercel geo headers.",
      p5Before: "To be removed from the list after launch, write to",
      p5After: ".",
    },
    notFound: {
      title: "This page is not here.",
      body: "The link may be out of date. You can return to the QiLyra waitlist from here.",
      backHome: "Back to home",
    },
    features: {
      title: "Features",
      metaDescription:
        "Fall detection, emergency auto-contact, location peace of mind for families walking with dementia, and everyday wellbeing — designed as jewelry.",
      eyebrow: "What it does",
      heading: "Care that stays quiet until it is needed.",
      intro:
        "QiLyra is made to be worn, not explained. The capabilities below live in the matte silver bar — for independent days, and for the people who love you.",
      highlightsEyebrow: "When something needs you",
      highlights: [
        {
          title: "Fall detection, sent with care",
          body: "If a fall happens, QiLyra can notice the sudden change and quietly let your chosen contacts know. There is no pendant to remember, and no siren on the wrist — only a calm signal when it matters.",
        },
        {
          title: "Emergency contacts, notified automatically",
          body: "When a fall or an unresolved stillness needs attention, QiLyra can reach the people you have named — in the order you choose. You set who hears. They receive a clear, unhurried message, not a panic.",
        },
        {
          title: "Location peace of mind, for families walking with dementia",
          body: "Memory can wander even when the person you love is still themselves. QiLyra can share location with the family members you choose, so if someone leaves a familiar path, you have a quiet way to find them. It is not a leash, and not a camera. It is a thread of reassurance, used with consent and dignity.",
        },
      ],
      everydayEyebrow: "Everyday living",
      everydayTitle: "Made for the day you already have.",
      everyday: [
        {
          title: "Heart and activity, kept private",
          body: "A gentle sense of the day’s rhythm — heart and movement — stays with the wearer unless you decide to share. Not a hospital readout. A quiet companion to ordinary living.",
        },
        {
          title: "A charge that lasts through ordinary days",
          body: "QiLyra is made for everyday wear. A long charge, and a gentle reminder when it is time to rest on the charger — never an urgent red alarm on the wrist.",
        },
        {
          title: "Designed as jewelry",
          body: "Moss-green stones, a matte silver curve, a clasp you already know how to use. If it looks like a medical device, we have not succeeded.",
        },
        {
          title: "A companion app for the people who care",
          body: "Family members you invite can receive calm notifications when something needs them — and stay quiet when the afternoon is simply unfolding. No feed of surveillance.",
        },
        {
          title: "At home in daily water",
          body: "Washed hands, a little rain, a splash at the sink. Not for swimming or a long bath. We will share the exact rating with the first collection.",
        },
      ],
      waitlistTitle: "Join the first collection",
      waitlistBody:
        "If this is the kind of care you have been looking for, we would like to write when it is ready.",
    },
  },
  zh: {
    skipToContent: "跳到正文",
    languageLabel: "语言",
    header: {
      faq: "常见问题",
      features: "功能",
      joinWaitlist: "加入等候名单",
      joinWaitlistShort: "加入等候",
      homeAria: "QiLyra 首页",
    },
    hero: {
      eyebrow: "首批系列 · 即将推出",
      title: "一件你会真正戴上的珠宝。",
      line: "为年长者而做的无屏手链。安静的跌倒提醒，给家人的安心，收在一件看起来就是珠宝的饰物里。",
      waitlistCta: "加入等候名单",
      featuresCta: "了解它如何照料",
      videoAlt:
        "QiLyra 手链静置于暖米色台面上，柔和的水波光影在石珠与银弧上轻轻流动。",
    },
    statement: {
      lead: "照料不必先开口。",
      rest: "腕上没有屏幕，也没有需要解释的吊坠——直到跌倒、一段静止，或熟悉的路需要一句从容的话。",
    },
    presence: {
      eyebrow: "这件饰物",
      title: "一条手链，不是一只设备。",
      body: "石珠与银弧，为融进平常的午后而做。跌倒发生时，或亲人走出熟悉的路时，照料才从底下出现。",
      wristAlt: "戴在腕上的 QiLyra 手链，靠在亚麻桌边，旁边一杯茶，窗光很柔。",
      productAlt: "绿石英与密镶钻石银弧的 QiLyra 手链，放在洞石上，棕榈叶影落在一旁。",
    },
    care: {
      eyebrow: "日子需要的时候",
      title: "三件安静的事。",
      items: [
        {
          title: "跌倒提醒",
          body: "若有跌倒，QiLyra 可以察觉那一阵忽然的变化，并告知你选定的人。腕上没有刺耳的铃声。",
        },
        {
          title: "紧急联系，自动送达",
          body: "你写下的人，按你排定的顺序，可以在需要留意时收到清楚、不催促的告知。",
        },
        {
          title: "位置，顾及体面",
          body: "写给与认知障碍同行的家人：一条经同意的位置线索。不是拴绳，也不是镜头。",
        },
      ],
      featuresCta: "查看全部功能",
    },
    waitlist: {
      eyebrow: "提前预览",
      title: "系列开放时，请排在前面。",
      body: "加入等候名单，获取私密预览、尺寸说明，以及首批选购。我们很少写信，只在真正值得告诉你的时候。",
      firstName: "名字",
      optional: "（选填）",
      firstNamePlaceholder: "您的名字",
      firstNameRequired: "请填写名字。",
      firstNameTooLong: "这个名字看起来有些长，请核对后再试。",
      email: "电子邮箱",
      emailPlaceholder: "you@example.com",
      age: "年龄",
      agePlaceholder: "72",
      ageInvalid: "请填写有效年龄，例如 72。",
      gender: "性别",
      genderPlaceholder: "请选择",
      genderPreferNot: "不想说明",
      genderFemale: "女",
      genderMale: "男",
      genderOther: "其他",
      betaInterest: "希望成为首批测试用户，并享优惠。",
      submit: "预留一个名额",
      submitting: "正在加入…",
      privacyNote: "邮箱仅用于发布消息。没有广告，也没有打扰。",
      emailRequired: "请填写电子邮箱。",
      emailTooLong: "这个邮箱看起来太长了，请核对后再试。",
      emailInvalid: "请填写有效邮箱，例如 name@example.com。",
      submitFailed: "此刻无法加入等候名单，请稍后再试。",
      sending: "正在发送您的请求。",
      successTitle: "已为您记下。",
      successBody:
        "谢谢{name}。首批系列准备好时，我们会写信告诉您——从容一些，也只谈 QiLyra。",
    },
    faq: {
      eyebrow: "好問題",
      title: "加入前的簡短回答。",
      intro: "預留名額之前，這幾件事值得先知道。",
      items: [
        {
          question: "戴起來像珠寶，還是像一個裝置？",
          answer:
            "該像珠寶。QiLyra 是苔綠石珠與一條霧面銀弧，沒有螢幕來搶去目光。若看起來像醫療器械，我們便沒有做成。",
        },
        {
          question: "腕上有螢幕嗎？一天裡會亮、會響嗎？",
          answer:
            "沒有螢幕，腕上也沒有警鈴。你邀請的人，可以在陪伴應用裡收到從容的通知——只在有事需要他們的時候；若這一天只是平常地過去，應用便保持安靜。沒有監視用的資訊流。這支應用支援哪些手機，我們會在推出前說明，等候名單上的人會先知道。",
        },
        {
          question: "下雨，或洗手的時候，可以戴著嗎？",
          answer:
            "洗手、一點雨水、水槽邊的濺濕，都可以。不適合游泳，也不適合長時間沐浴。精確的防水等級，會隨首批系列一起說明。",
        },
        {
          question: "誰看得到我在哪裡？",
          answer:
            "只有你選定的人。在你同意之下，QiLyra 可以把位置告訴他們。那是一條行蹤的線索，不是拴繩，也不是鏡頭。",
        },
        {
          question: "晚上獨自回家、出門，或一個人旅行時，別人怎麼知道？",
          answer:
            "由你決定聯絡誰，以及先後順序。當有事需要留意，QiLyra 可以送出清楚、不催促的告知，而不是一陣驚慌。腕上沒有警鈴，也不必記得去按一個吊墜。",
        },
        {
          question: "手鏈知道的事，還有我的信箱，你們怎麼對待？",
          answer:
            "心跳與活動先留在你身邊，除非你決定分享。那不是醫院的讀數。位置只給你選定的人。若你加入等候名單，信箱只用來寄發布的消息。我們不出售這份名單，也不代他人發廣告。你也可以選填年齡、性別，以及是否希望成為測試者。這個網站不會向你的手機索取定位權限。",
        },
        {
          question: "一次充電可以撐多久？",
          answer:
            "它為日常佩戴而做：一次充電可以用得久，該放回充電器時只會輕輕提醒，腕上不會亮起催促的紅燈。具體能用幾天，我們會在推出前說明，等候名單上的人會先知道。",
        },
        {
          question: "什麼時候能買到？等候名單和測試優惠包含什麼？",
          answer:
            "還沒有。首批系列即將推出。公開的日期尚未寫下——我們會在推出前說明，等候名單上的人會先知道。加入名單，是為了私下預覽、尺寸說明，以及首批選購。我們很少寫信，只在值得告訴你的時候。你也可以表示希望成為首批測試者，並享有優惠。優惠的內容，同樣會在推出前說明。",
        },
      ],
      disclaimer:
        "QiLyra 是珠寶，帶著一層安靜的照料。它不是醫療器械，也不是急救的替代，無意診斷、治療、治癒或預防任何疾病。",
    },
    footer: {
      blurb:
        "安静的珠宝，日常的独立。首批系列写给年长者，以及爱他们的家人。",
      joinWaitlist: "加入等候名单",
      faq: "常见问题",
      features: "功能",
      privacy: "隐私",
      copyright: "© {year} QiLyra。",
      backToTop: "回到顶部",
    },
    privacy: {
      title: "隐私",
      p1: "QiLyra 尚未发售。本页收集等候名单信息，以便在首批系列准备好时告知您。",
      p2: "我们会询问名字和电子邮箱。您也可以选填年龄、性别，以及是否希望成为首批测试用户。提交时，我们也可能根据托管平台的 IP 地理信息记录一个大致的国家或地区（例如 TW、US）。我们不会请求设备定位权限。这些信息仅用于发送 QiLyra 的发布消息。",
      p3Before:
        "我们不会出售等候名单。也不会代他人发送广告。若日后接入表单服务，该服务将按其条款处理提交内容——接口由",
      p3After: " 配置。",
      p4: "在设置该接口之前，演示副本会保存在您的浏览器中，不会转发给表单服务。提交仍会经过本站的等候名单接口，并可能根据 Vercel 的地理信息附上大致的国家或地区。",
      p5Before: "发布后如需从名单中移除，请来信",
      p5After: "。",
    },
    notFound: {
      title: "这一页不在这里。",
      body: "链接可能已经过时。您可以从这里回到 QiLyra 的等候名单。",
      backHome: "返回首页",
    },
    features: {
      title: "功能",
      metaDescription:
        "跌倒察觉、紧急联系人自动通知、写给与认知障碍同行之家人的位置安心，以及日常身心照料——按珠宝来设计。",
      eyebrow: "它能做什么",
      heading: "照料一直安静，直到真正需要的时候。",
      intro:
        "QiLyra 为佩戴而做，不必解释。下列能力收在雾面银弧里——为独立的日子，也为爱你的人。",
      highlightsEyebrow: "当有事需要你",
      highlights: [
        {
          title: "跌倒察觉，带着体贴送出",
          body: "若有跌倒，QiLyra 可以察觉那一阵忽然的变化，并安静地告知你选定的人。不必记得按吊坠，腕上也没有刺耳的铃声——只在要紧时，送出一个从容的信号。",
        },
        {
          title: "紧急联系人，自动通知",
          body: "当跌倒，或一段没有解开的静止需要留意，QiLyra 可以按你排定的顺序，联系你写下的人。谁会收到消息，由你决定。他们收到的是清楚、不催促的告知，而不是惊慌。",
        },
        {
          title: "位置的安心，写给与认知障碍同行的家人",
          body: "记忆会走神，即使亲人仍是他们自己。QiLyra 可以把位置告诉你选定的家人；若有人走出熟悉的路，你们有一条安静的方式彼此找到。这不是拴绳，也不是镜头。这是一份经同意、也顾及体面的安心。",
        },
      ],
      everydayEyebrow: "日常的日子",
      everydayTitle: "为你本来就有的一天而做。",
      everyday: [
        {
          title: "心跳与活动，留在私下",
          body: "对一日节奏的轻柔感知——心跳与走动——先留在佩戴者身边，除非你决定分享。不是医院的读数，而是日常的安静伴侣。",
        },
        {
          title: "电量陪你过完平常的日子",
          body: "QiLyra 为日常佩戴而做。一次充电用得久，该休息充电时只会轻轻提醒——腕上从不会亮起催促的红灯。",
        },
        {
          title: "按珠宝来设计",
          body: "苔绿石珠、一条雾面银弧、你本来就会用的扣。若看起来像医疗器械，我们便没有做成。",
        },
        {
          title: "给照料者的陪伴应用",
          body: "你邀请的家人，会在需要他们时收到从容的通知；若午后只是安静地过去，应用便保持安静。没有监视的信息流。",
        },
        {
          title: "日常的水，也可以",
          body: "洗手、一点雨水、水槽边的溅湿。不适合游泳或长时间沐浴。精确等级将随首批系列一并说明。",
        },
      ],
      waitlistTitle: "加入首批系列",
      waitlistBody: "若这正是你在寻找的照料，我们愿意在准备好时写信告诉你。",
    },
  },
};

export const STORAGE_KEY = "qilyra-locale";
export const LEGACY_STORAGE_KEY = "liora-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "zh";
}

export function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const language = window.navigator.language.toLowerCase();
  return language.startsWith("zh") ? "zh" : "en";
}

export function interpolate(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}
