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
    safety: { title: string; body: string };
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
    safetyEyebrow: string;
    safetyTitle: string;
    safetyBody: string;
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
      line: "A screen-free bracelet that learns your cycle, notices when the pattern drifts, and reminds you to drink. It looks like jewelry because it is.",
      waitlistCta: "Join the waitlist",
      featuresCta: "See what it does",
      videoAlt:
        "QiLyra bracelet resting on a warm beige surface, with soft rippling light moving across the stones and silver bar.",
    },
    statement: {
      lead: "It does not announce itself.",
      rest: "No screen on the wrist. Your cycle, a drift from your usual pattern, a quiet reminder to drink — and, if you want it, a way for the people you choose to be reached.",
    },
    presence: {
      eyebrow: "The piece",
      title: "A bracelet, not a device.",
      body: "Stones and a silver bar, made to disappear into an ordinary afternoon. The cycle, the pattern, and a glass of water stay underneath.",
      wristAlt:
        "QiLyra bracelet on a wrist at a linen table, beside a cup of tea in soft window light.",
      productAlt:
        "QiLyra bracelet of green quartz and a pavé diamond bar, resting on travertine with palm shadows.",
    },
    care: {
      eyebrow: "Day to day",
      title: "Three quiet habits.",
      items: [
        {
          title: "Your cycle",
          body: "The bracelet learns your rhythm. There is no screen on the wrist; you follow the pattern in the companion app.",
        },
        {
          title: "When the pattern drifts",
          body: "QiLyra notices when your cycle drifts from your usual pattern, and suggests checking in with a doctor. It does not diagnose.",
        },
        {
          title: "A reminder to drink",
          body: "A gentle reminder for water. Nothing on the wrist lights up, and there is no alarm there.",
        },
      ],
      safety: {
        title: "And a quieter kind of safety",
        body: "Share your location with the people you choose. When something needs attention, they can be contacted in the order you set — a clear, unhurried message for the walk home, or for travelling on your own.",
      },
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
      agePlaceholder: "32",
      ageInvalid: "Please enter a valid age, such as 32.",
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
            "It is made to look like jewelry: moss-green stones and a matte silver bar. There is no screen on the wrist, and no siren.",
        },
        {
          question: "How does cycle tracking work without a screen?",
          answer:
            "The bracelet learns your rhythm. Because there is no screen, you follow that pattern in the companion app. Which phones the app supports, we'll share before launch, and waitlist members hear first.",
        },
        {
          question: "What happens when my cycle becomes irregular?",
          answer:
            "QiLyra notices when your cycle drifts from your usual pattern, and suggests checking in with a doctor. It does not diagnose a condition, and it is not a contraceptive.",
        },
        {
          question: "How do water reminders reach me?",
          answer:
            "As a gentle reminder in the companion app. Nothing lights up on the wrist, and there is no alarm there.",
        },
        {
          question: "Who can see where I am, and how does someone hear if I am walking home or travelling alone?",
          answer:
            "Only the people you choose can see your location, and only with your consent. You also choose who is contacted, and in what order, when something needs attention. They receive a clear, unhurried message — not a panic, and not a siren on the wrist. It is there for the walk home, and for travelling on your own.",
        },
        {
          question: "What do you do with my email, and with what the bracelet knows?",
          answer:
            "Location goes only to the people you choose. Heart and movement stay with you unless you decide to share them. If you join the waitlist, we use your email for launch notes. We do not sell the list, and we do not send advertising for anyone else. You may also share your age, your gender, and whether you would like to be a beta tester. This site does not ask for your phone's location.",
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
        "QiLyra is jewelry with a quiet layer of care. It is not a medical device, it is not a contraceptive, and it is not intended to diagnose, treat, cure, or prevent any condition.",
    },
    footer: {
      blurb:
        "Quiet jewelry for the rhythm of your days. A first collection, worn as jewelry.",
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
        "Cycle tracking, awareness when your pattern drifts, hydration reminders, and personal safety — designed as jewelry.",
      eyebrow: "What it does",
      heading: "Quiet through the day.",
      intro:
        "A cycle it learns, a pattern it watches, a reminder to drink. Safety sits further down, for the people you choose.",
      highlightsEyebrow: "In the day",
      highlights: [
        {
          title: "Your cycle",
          body: "The bracelet learns your rhythm. There is no screen; you follow the pattern in the companion app.",
        },
        {
          title: "When the pattern drifts",
          body: "QiLyra notices when your cycle drifts from your usual pattern, and suggests checking in with a doctor. It does not diagnose a condition, and it is not a contraceptive.",
        },
        {
          title: "A reminder to drink",
          body: "A gentle reminder for water, in the companion app. Nothing on the wrist lights up, and there is no alarm there.",
        },
      ],
      safetyEyebrow: "If you want it",
      safetyTitle: "A quieter kind of safety.",
      safetyBody:
        "Share your location with the people you choose, with your consent. You also choose who is contacted, and in what order, when something needs attention. They receive a clear, unhurried message — for the walk home, or for travelling on your own. Not a siren on the wrist.",
      everydayEyebrow: "Also",
      everydayTitle: "Made for the day you already have.",
      everyday: [
        {
          title: "Designed as jewelry",
          body: "Moss-green stones, a matte silver curve, a clasp you already know how to use.",
        },
        {
          title: "A charge that lasts through ordinary days",
          body: "QiLyra is made for everyday wear. A long charge, and a gentle reminder when it is time to rest on the charger — never an urgent red alarm on the wrist.",
        },
        {
          title: "At home in daily water",
          body: "Washed hands, a little rain, a splash at the sink. Not for swimming or a long bath. We will share the exact rating with the first collection.",
        },
        {
          title: "A companion app",
          body: "People you invite can receive a calm note when something needs them, and the app stays quiet when the day is simply going on.",
        },
        {
          title: "Heart and movement, kept with you",
          body: "A gentle sense of heart and movement stays with you, unless you decide to share it.",
        },
      ],
      waitlistTitle: "Join the first collection",
      waitlistBody:
        "If this is the bracelet you want with you, we would like to write when it is ready.",
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
      line: "一条无屏手链。它记住你的周期，在节律偏离平时时轻轻留意，并提醒你喝水。它看起来像珠宝，因为它就是。",
      waitlistCta: "加入等候名单",
      featuresCta: "看看它做的事",
      videoAlt:
        "QiLyra 手链静置于暖米色台面上，柔和的水波光影在石珠与银弧上轻轻流动。",
    },
    statement: {
      lead: "它不必先开口。",
      rest: "腕上没有屏幕。你的周期、一次偏离平时的变化、一句喝水的轻提醒。",
    },
    presence: {
      eyebrow: "这件饰物",
      title: "一条手链，不是一只设备。",
      body: "石珠与银弧，为融进平常的午后而做。周期、节律与一杯水，都收在底下。",
      wristAlt: "戴在腕上的 QiLyra 手链，靠在亚麻桌边，旁边一杯茶，窗光很柔。",
      productAlt: "绿石英与密镶钻石银弧的 QiLyra 手链，放在洞石上，棕榈叶影落在一旁。",
    },
    care: {
      eyebrow: "日常",
      title: "三件安静的事。",
      items: [
        {
          title: "你的周期",
          body: "手链记住你的节律。腕上没有屏幕，这段规律写在陪伴应用里。",
        },
        {
          title: "节律偏离时",
          body: "QiLyra 会留意周期何时偏离你平时的样子。",
        },
        {
          title: "喝水的提醒",
          body: "一句轻提醒。腕上不会亮，也没有警报。",
        },
      ],
      safety: {
        title: "还有，一种更安静的安心",
        body: "把位置分享给你选定的人。若有事需要留意，可以按你排定的顺序联系他们——清楚、不催促的告知，为独自回家的路，或一个人的旅行。",
      },
      featuresCta: "查看全部功能",
    },
    waitlist: {
      eyebrow: "提前预览",
      title: "系列开放时，请排在前面。",
      body: "加入等候名单，获取抢先预览、尺寸说明，以及首批选购。",
      firstName: "名字",
      optional: "（选填）",
      firstNamePlaceholder: "您的名字",
      firstNameRequired: "请填写名字。",
      firstNameTooLong: "这个名字看起来有些长，请核对后再试。",
      email: "电子邮箱",
      emailPlaceholder: "you@example.com",
      age: "年龄",
      agePlaceholder: "32",
      ageInvalid: "请填写有效年龄，例如 32。",
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
      eyebrow: "好问题",
      title: "加入前的简短回答。",
      intro: "预留名额之前，这几件事值得先知道。",
      items: [
        {
          question: "戴起来像珠宝，还是像一个装置？",
          answer:
            "该像珠宝。QiLyra 是苔绿石珠与一条雾面银弧。腕上没有屏幕。",
        },
        {
          question: "没有屏幕，数据要怎么看？",
          answer:
            "手链记住你的节律。因为腕上没有屏幕，这段规律写在陪伴应用里。它支持哪些手机，我们会在推出前说明，等候名单上的人会先知道。",
        },
        {
          question: "周期变得不规律时，会怎样？",
          answer:
            "QiLyra 会留意你的周期何时偏离平时的样子，这些变化与规律都会记录在陪伴应用里。结合你的经期与日常身体数据，我们也会以中医养生理念为基础，提供针对经期节律与不规律状况的个性化调养建议",
        },
        {
          question: "喝水的提醒怎么来到我这里？",
          answer:
            "一句轻提醒，写在陪伴应用里。",
        },
        {
question: "谁看得到我的数据？我的健康数据会分享给别人吗？",
answer:
"你的数据属于你。我们不会将你的个人数据分享给任何人。只有当你主动选择时，才可以将想分享的数据导出，交给你信任的人，例如家人或医生。分享什么、分享给谁，都由你决定。",
},
        {
          question: "一次充电可以撑多久？",
          answer:
            "它为日常佩戴而做：一次充电可以用得久。具体能用几天，我们会在推出前说明，等候名单上的人会先知道。",
        },
        {
          question: "什么时候能买到？等候名单和测试优惠包含什么？",
          answer:
            "还没有。首批系列即将推出。公开的日期尚未写下——我们会在推出前说明，等候名单上的人会先知道。加入名单，是为了抢先预览、以及首批选购。我们很少写信，只在值得告诉你的时候。你也可以表示希望成为首批测试者，并享有优惠。优惠的内容，同样会在推出前说明。",
        },
      ],
      disclaimer:
        "QiLyra 是珠宝，带着一层安静的照料。它不是医疗器械，也不是避孕手段，无意诊断、治疗、治愈或预防任何状况。",
    },
    footer: {
      blurb: "安静的珠宝，陪着你自己的节律。首批系列，戴起来就是珠宝。",
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
        "周期记录、节律偏离时的留意、喝水提醒，以及个人安全——按珠宝来设计。",
      eyebrow: "它能做什么",
      heading: "一天里，它保持安静。",
      intro: "它记住的周期，它留意的节律，一句喝水的提醒。安全放在后面，给你选定的人。",
      highlightsEyebrow: "在这一天里",
      highlights: [
        {
title: "读懂你的周期",
body: "记录经期与周期变化，让身体的节律更清晰。结合你的周期与日常身体数据，陪伴应用会融入中医养生理念，为经期不规律等变化提供个性化的调养建议。"
},
{
title: "每天，多了解自己一点",
body: "步数、活动时间与日常运动都会被轻轻记录下来。不是为了追逐数字，而是让你更自然地看见自己的生活节奏与变化。"
},
        {
          title: "喝水的提醒",
          body: "陪伴应用会根据你的日常节奏，适时送上一句补水提醒。少一点操心，多一点照顾。",
        },
      ],
     
      everyday: [
        {
          title: "按珠宝来设计",
          body: "苔绿石珠、一条雾面银弧、你本来就会用的扣。",
        },
        {
          title: "电量陪你过完平常的日子",
          body: "QiLyra 为日常佩戴而做，可持续使用几天。",
        },
        {
          title: "日常的水，也可以",
          body: "洗手、一点雨水、水槽边的溅湿。不适合游泳或长时间沐浴。精确等级将随首批系列一并说明。",
        },
        {
          title: "陪伴应用",
          body: "你邀请的人，会在需要他们时收到从容的通知；若这一天只是平常地过去，应用便保持安静。",
        },
        {
          title: "心跳与活动，留在你身边",
          body: "对心跳与走动的轻柔感知先留在你身边，除非你决定分享。",
        },
      ],
      waitlistTitle: "加入首批系列",
      waitlistBody: "若这正是你想戴在身边的手链，我们愿意在准备好时写信告诉你。",
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
