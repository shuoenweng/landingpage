export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export type Messages = {
  skipToContent: string;
  languageLabel: string;
  header: {
    howItHelps: string;
    thePiece: string;
    forFamilies: string;
    features: string;
    joinWaitlist: string;
    joinWaitlistShort: string;
    homeAria: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    waitlistTitle: string;
    featuresLink: string;
    imageAlt: string;
    caption: string;
  };
  howItHelps: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    featuresCta: string;
  };
  jewelry: {
    eyebrow: string;
    title: string;
    body: string;
    imageAlt: string;
    details: { name: string; detail: string }[];
  };
  families: {
    eyebrow: string;
    title: string;
    intro: string;
    notes: { audience: string; title: string; body: string }[];
    featuresCta: string;
  };
  waitlist: {
    eyebrow: string;
    title: string;
    body: string;
    firstName: string;
    optional: string;
    firstNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    audienceLegend: string;
    audienceMyself: string;
    audienceLovedOne: string;
    audienceBoth: string;
    submit: string;
    submitting: string;
    privacyNote: string;
    emailRequired: string;
    emailTooLong: string;
    emailInvalid: string;
    audienceRequired: string;
    submitFailed: string;
    sending: string;
    successTitle: string;
    successBody: string;
  };
  footer: {
    blurb: string;
    joinWaitlist: string;
    features: string;
    privacy: string;
    copyright: string;
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
      howItHelps: "How it helps",
      thePiece: "The piece",
      forFamilies: "For families",
      features: "Features",
      joinWaitlist: "Join the waitlist",
      joinWaitlistShort: "Join waitlist",
      homeAria: "QiLyra home",
    },
    hero: {
      eyebrow: "First collection · coming soon",
      title: "Quiet confidence, beautifully worn.",
      body: "QiLyra is a jewelry-first bracelet for older adults who want to look like themselves — and for families who want to stay close without hovering. Discreet care for unexpected moments, held in a piece you would choose anyway.",
      waitlistTitle: "Join the waitlist",
      featuresLink: "See what QiLyra can do",
      imageAlt:
        "QiLyra bracelet with translucent moss-green stone beads, silver spacers, a lobster clasp, and a matte silver curved sensor bar, photographed on cream silk",
      caption: "Matte silver bar · moss-green stones · made to be worn, not hidden",
    },
    howItHelps: {
      eyebrow: "How it helps",
      title: "Safety that leaves your dignity intact.",
      intro:
        "QiLyra is not an alarm you have to explain. It is a quiet layer of care — for walks, for time alone, for the ordinary days that still matter.",
      items: [
        {
          title: "If something happens, you are not alone",
          body: "Should a fall or a sudden stillness occur, QiLyra can quietly let the people you choose know. No panic button on display. No siren on your wrist. Just a calm signal, sent with care.",
        },
        {
          title: "Wellbeing, kept private",
          body: "Optional daily check-ins help those who love you feel at ease — without turning your life into a dashboard. You decide what is shared, and with whom.",
        },
        {
          title: "Made for the day you already live",
          body: "Light on the wrist, easy to fasten, comfortable from morning tea to evening reading. It is meant to become ordinary — the best kind of companion.",
        },
        {
          title: "Independence, with company nearby",
          body: "You keep your rhythm. Family keeps their peace of mind. QiLyra is designed so both can be true at once, without anyone feeling watched.",
        },
      ],
      featuresCta: "Explore all features",
    },
    jewelry: {
      eyebrow: "Designed as jewelry",
      title: "If it looks like a medical device, we have not succeeded.",
      body: "QiLyra is composed like a boutique piece: stones you would find in a jeweler's tray, a silver line with presence, and no screen competing for attention. Wear it with a watch, a wedding band, or nothing else at all.",
      imageAlt: "Close view of the QiLyra bracelet resting on draped cream silk",
      details: [
        {
          name: "The bar",
          detail:
            "A matte silver curve that holds the sensing quietly. Soft to the eye, not a gadget housing.",
        },
        {
          name: "The stones",
          detail:
            "Translucent moss-green beads with natural inclusions — like garden light held in glass.",
        },
        {
          name: "The finish",
          detail:
            "Polished silver spacers, a single onyx accent, and a classic lobster clasp with an extender.",
        },
      ],
    },
    families: {
      eyebrow: "For families",
      title:
        "Made for two kinds of love: the wish to be free, and the wish to know they are well.",
      intro:
        "Adult children should not have to choose between respect and reassurance. QiLyra is a shared object — one gift, two kinds of rest.",
      notes: [
        {
          audience: "For the wearer",
          title: "Stay yourself",
          body: "No pendant to tuck under a collar. No conversation about “the device.” Just a bracelet that belongs with the rest of your jewelry — and a little extra ease in the day.",
        },
        {
          audience: "For family",
          title: "Stay close, without hovering",
          body: "Fewer worry-driven check-ins. If something needs attention, you will know. If the afternoon is simply quiet, you can let it be quiet.",
        },
        {
          audience: "For both",
          title: "Privacy, chosen together",
          body: "You choose who is notified, and how. QiLyra is built so care does not have to feel like surveillance — for the person wearing it, or the people waiting to hear.",
        },
      ],
      featuresCta: "How QiLyra looks after a family",
    },
    waitlist: {
      eyebrow: "Early access",
      title: "Be first when the collection opens.",
      body: "Join the waitlist for a private preview, sizing notes, and first-collection access. We write rarely, and only when there is something worth knowing.",
      firstName: "First name",
      optional: "(optional)",
      firstNamePlaceholder: "Alex",
      email: "Email address",
      emailPlaceholder: "you@example.com",
      audienceLegend: "Who is this for?",
      audienceMyself: "For myself",
      audienceLovedOne: "For a loved one",
      audienceBoth: "For both of us",
      submit: "Reserve a place",
      submitting: "Joining…",
      privacyNote: "We only use your email for launch notes. No ads, no clutter.",
      emailRequired: "Please enter your email address.",
      emailTooLong:
        "That email looks a little too long. Please check it and try again.",
      emailInvalid: "Please enter a valid email, such as name@example.com.",
      audienceRequired: "Please tell us who the bracelet is for.",
      submitFailed:
        "We could not join the waitlist just now. Please try again in a moment.",
      sending: "Sending your request.",
      successTitle: "You are on the list.",
      successBody:
        "Thank you{name}. We will write when the first collection is ready — calmly, and only about QiLyra.",
    },
    footer: {
      blurb:
        "Quiet jewelry for everyday independence. A first collection for older adults and the families who love them.",
      joinWaitlist: "Join the waitlist",
      features: "Features",
      privacy: "Privacy",
      copyright: "© {year} QiLyra.",
    },
    privacy: {
      title: "Privacy",
      p1: "QiLyra is not for sale yet. This site collects waitlist details so we can tell you when the first collection is ready.",
      p2: "We ask for an email address, an optional first name, and whether you are joining for yourself, a loved one, or both. We use that information only to send launch updates about QiLyra.",
      p3Before:
        "We do not sell waitlist data. We do not send advertising on behalf of others. If a form provider is connected later, that provider will process submissions under their own terms — the endpoint is configured with",
      p3After: ".",
      p4: "Until that endpoint is set, submissions stay in your browser for demonstration only and are not sent to a server.",
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
      howItHelps: "它如何帮到你",
      thePiece: "这件饰物",
      forFamilies: "写给家人",
      features: "功能",
      joinWaitlist: "加入等候名单",
      joinWaitlistShort: "加入等候",
      homeAria: "QiLyra 首页",
    },
    hero: {
      eyebrow: "首批系列 · 即将推出",
      title: "从容的自信，戴在腕上。",
      body: "QiLyra 是一款以珠宝为先的手链，写给希望保持本色的年长者，也写给希望陪伴、却不愿过分叮咛的家人。意外来临时的一份安静照料，收在一件你本来就会戴上的饰物里。",
      waitlistTitle: "加入等候名单",
      featuresLink: "看看 QiLyra 能做什么",
      imageAlt:
        "QiLyra 手链：通透的苔绿石珠、银隔片、龙虾扣，以及雾面银色弧形感应条，置于奶油色丝绸上",
      caption: "雾面银弧 · 苔绿石珠 · 为佩戴而做，不必藏起",
    },
    howItHelps: {
      eyebrow: "它如何帮到你",
      title: "安心，也不委屈体面。",
      intro:
        "QiLyra 不是一只需要解释的警铃。它是一层安静的照料——散步时、独处时、那些依然要紧的平常日子里。",
      items: [
        {
          title: "若有万一，你并不孤单",
          body: "若有跌倒，或忽然静止，QiLyra 可以安静地告知你选定的人。腕上没有醒目的按钮，也没有刺耳的铃声。只是一个从容的信号，带着体贴送出。",
        },
        {
          title: "身心安好，留在私下",
          body: "可选的日常问候，让爱你的人安心——而不把你的日子变成一张看板。分享什么、与谁分享，由你决定。",
        },
        {
          title: "为你本来的日子而做",
          body: "戴在腕上很轻，扣上也不费力，从早茶到夜读都舒适。它该成为日常——最好的陪伴，往往如此。",
        },
        {
          title: "独立如常，身边有人",
          body: "你保持自己的节奏。家人保有一份安心。QiLyra 让这两件事可以同时成立，而不让任何人觉得被注视。",
        },
      ],
      featuresCta: "查看全部功能",
    },
    jewelry: {
      eyebrow: "按珠宝来设计",
      title: "若看起来像医疗器械，我们便没有做成。",
      body: "QiLyra 的构成像一件精品店里的作品：珠宝盘上会有的石头、一条有分量的银线，没有屏幕来抢去目光。可以与手表、婚戒同戴，也可以独戴。",
      imageAlt: "QiLyra 手链静置于褶皱奶油色丝绸上的近景",
      details: [
        {
          name: "银弧",
          detail: "一条雾面银弧，把感应安静收起。看起来柔软，不像器械的外壳。",
        },
        {
          name: "石珠",
          detail: "通透的苔绿珠，带天然纹理——像园中的光，收在玻璃里。",
        },
        {
          name: "收尾",
          detail: "抛光银隔片、一颗墨玉点缀，以及经典龙虾扣与调节链。",
        },
      ],
    },
    families: {
      eyebrow: "写给家人",
      title: "为两种爱而做：想自由生活的心，以及想知道他们安好的心。",
      intro:
        "成年子女不该在尊重与安心之间二选一。QiLyra 是一份共同的物件——一份礼物，两种歇息。",
      notes: [
        {
          audience: "写给佩戴的人",
          title: "做你自己",
          body: "不必把吊坠藏进衣领，也不必解释“那个设备”。只是一条配得上你其余珠宝的手链——日子里多一点从容。",
        },
        {
          audience: "写给家人",
          title: "陪伴，而不催促",
          body: "少一些出于担心的问候。若需要留意，你会知道。若午后只是安静，便让它安静。",
        },
        {
          audience: "写给彼此",
          title: "隐私，一起选择",
          body: "由你决定通知谁、如何通知。QiLyra 让照料不必像监视——对戴着它的人如此，对等候消息的人也是。",
        },
      ],
      featuresCta: "QiLyra 如何照料一个家",
    },
    waitlist: {
      eyebrow: "提前预览",
      title: "系列开放时，请排在前面。",
      body: "加入等候名单，获取私密预览、尺寸说明，以及首批选购。我们很少写信，只在真正值得告诉你的时候。",
      firstName: "名字",
      optional: "（选填）",
      firstNamePlaceholder: "可填写名字",
      email: "电子邮箱",
      emailPlaceholder: "you@example.com",
      audienceLegend: "这是为谁准备的？",
      audienceMyself: "给我自己",
      audienceLovedOne: "给亲人",
      audienceBoth: "给我们两人",
      submit: "预留一个名额",
      submitting: "正在加入…",
      privacyNote: "邮箱仅用于发布消息。没有广告，也没有打扰。",
      emailRequired: "请填写电子邮箱。",
      emailTooLong: "这个邮箱看起来太长了，请核对后再试。",
      emailInvalid: "请填写有效邮箱，例如 name@example.com。",
      audienceRequired: "请告诉我们，这条手链是为谁准备的。",
      submitFailed: "此刻无法加入等候名单，请稍后再试。",
      sending: "正在发送您的请求。",
      successTitle: "已为您记下。",
      successBody:
        "谢谢{name}。首批系列准备好时，我们会写信告诉您——从容一些，也只谈 QiLyra。",
    },
    footer: {
      blurb:
        "安静的珠宝，日常的独立。首批系列写给年长者，以及爱他们的家人。",
      joinWaitlist: "加入等候名单",
      features: "功能",
      privacy: "隐私",
      copyright: "© {year} QiLyra。",
    },
    privacy: {
      title: "隐私",
      p1: "QiLyra 尚未发售。本页收集等候名单信息，以便在首批系列准备好时告知您。",
      p2: "我们会询问电子邮箱、可选的名字，以及您是为自己、为亲人，还是为彼此加入。这些信息仅用于发送 QiLyra 的发布消息。",
      p3Before:
        "我们不会出售等候名单。也不会代他人发送广告。若日后接入表单服务，该服务将按其条款处理提交内容——接口由",
      p3After: " 配置。",
      p4: "在设置该接口之前，提交内容仅保存在您的浏览器中，供演示使用，不会发送到服务器。",
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
