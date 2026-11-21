import circularCover from "../images/blog/circular-economy-cover.webp";
import covidCover from "../images/blog/covid-cover.webp";
import covidActions from "../images/blog/covid-mckinsey-actions.webp";
import araTay from "../images/blog/aratay-son-la.webp";
import foodStuckersCover from "../images/blog/food-stuckers-cover.webp";
import yifangCover from "../images/blog/yifang-cover.webp";
import yifangTea from "../images/blog/yifang-tea.webp";

/**
 * Blog posts.
 *
 * To add a post: copy one entry, give it a unique `slug` (used in the URL:
 * /blog/<slug>), and write the body as a list of blocks. Posts are sorted by
 * date automatically; set `featured: true` on the one to show at the top.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "facts"; items: { label: string; value: string; href?: string }[] }
  | { type: "source"; text: string; label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2021-02-01" */
  date: string;
  category: string;
  /** Language of the post body: "en" or "vi" */
  lang: "en" | "vi";
  authors: string;
  cover: string;
  coverAlt: string;
  /** CSS object-position for cropped cover thumbnails, e.g. "center bottom" */
  coverPosition?: string;
  featured?: boolean;
  body: Block[];
};

const posts: BlogPost[] = [
  {
    slug: "yifang-fruit-tea-stockholm",
    title: "YiFang Fruit Tea - New option for young couples",
    excerpt:
      "Stuck with ideas for Valentine? Wanna surprise and please your girl/boyfriend? Take her/him to Yi Fang, a small newly-opened bubble tea shop, right in the centre of Stockholm.",
    date: "2021-02-01",
    category: "Food Stuckers",
    lang: "en",
    authors: "Son Nguyen & Yul Sku",
    cover: yifangCover,
    coverAlt: "The lit Yi Fang Taiwan Fruit Tea sign above the shop entrance in Stockholm",
    body: [
      {
        type: "facts",
        items: [
          { label: "Address", value: "Mäster Samuelsgatan 38, Stockholm" },
          { label: "Opening hours", value: "Mon-Sun 11:30-19:30" },
          { label: "Website", value: "yifangteastockholmse.webnode.se", href: "https://yifangteastockholmse.webnode.se/" },
          { label: "Price", value: "Approx. 50 SEK medium, 70 SEK large" },
        ],
      },
      {
        type: "p",
        text: "Stuck with ideas for Valentine? Wanna surprise and please your girl/boyfriend? Take her/him to Yi Fang, a small newly-opened bubble tea shop, right in the centre of Stockholm. Despite their name, their menu has a large choice of drinks related to tea. During their opening week, they offered a 10% discount and a small gift for the first 15 customers of the day. Luckily, we were two first on the last give-away day and received a small cup holder as in the picture below (Yayyy!!!!).",
      },
      {
        type: "image",
        src: yifangTea,
        alt: "A Yi Fang bubble tea in a blue cup holder, held up in front of the shop's neon sign",
        caption: "Our opening-week give-away: a small cup holder.",
      },
      {
        type: "p",
        text: "Regarding the bubble tea, we’ve tried hot Taro Latte (50% sugar), and cold Brown Sugar Pearl Oolong Tea Latte. Both of them were so delicious that we couldn’t stop drinking LOL. As Yi Fang said, we couldn’t feel anything “fake” while drinking them. They were mainly made from natural ingredients incl. tea, fruit, and milk.",
      },
      {
        type: "p",
        text: "The hot taro latte is made from a lot of fresh chunky taro which fits perfectly with hot milk (vegan option available). It’s hot enough to keep you away from the cold outside of Nordic winter but still drinkable immediately.",
      },
      {
        type: "p",
        text: "The other tea is appropriate for those who wanna drink bubble tea without fear of gaining weight. The brown sugar pearl is freshly made every day. Even though the brown sugar & pearl are not quite mixed with each other since they weren’t cooked in the same pot (we assume), Brown Sugar Pearl Oolong Tea Latte is kind of a harmony of all the ingredients. You can feel the particular bitterness of oolong tea which is lighter thanks to the milk part and the taste rises to a new level with a little sweet of the brown sugar pearl mixture.",
      },
      {
        type: "p",
        text: "In general, Yi Fang does a good job with their drinks; however, the shop is small with only 8 chairs and no restroom for customers. Apart from this, the owner and the workers are friendly and approachable.",
      },
      {
        type: "facts",
        items: [
          { label: "Location", value: "9/10" },
          { label: "Space", value: "6/10" },
          { label: "Drinks", value: "8/10" },
          { label: "Price", value: "8/10" },
          { label: "Service", value: "7/10" },
        ],
      },
      {
        type: "source",
        text: "More photos on Instagram:",
        label: "Yifang Tea Stockholm - by Food Stuckers",
        href: "https://www.instagram.com/p/CKuh3GMMXvn/",
      },
    ],
  },
  {
    slug: "hello-world-food-stuckers",
    title: "Hello world, we're Food Stuckers - Yul & Ngo",
    excerpt:
      "Two Vietnamese guys in Sweden who can't stop eating and looking for the best food every day. Follow us to fulfill your empty stomach.",
    date: "2021-01-28",
    category: "Food Stuckers",
    lang: "en",
    authors: "Son Nguyen & Yul Sku",
    cover: foodStuckersCover,
    coverAlt: "Illustrated avatars of Yul and Ngo with the Food Stuckers logo",
    body: [
      { type: "p", text: "Hej hej! Welcome to our spiritual child!" },
      { type: "h2", text: "But wait, who are we?" },
      {
        type: "p",
        text: "We’re two Asians living in Stockholm where the cuisine’s been said to be boring due to lack of choice even at a high-standard price.",
      },
      { type: "h2", text: "How could our souls meet?" },
      {
        type: "p",
        text: "We were friends at first (ofc). However, under this pandemic situation, we were stuck together in our small inner circle and found that we’re passionate about one common thing: good food at a good price. Then, we became bros sharing a consistent belief in affordable & delicious meals existing everywhere, even in this Nordic capital.",
      },
      { type: "h2", text: "Why was our child born?" },
      {
        type: "p",
        text: "Everything in the world has its own mission to complete & so does our small baby. It represents us to tell you about our food adventure & tries to satisfy your food cravings in all categories. It could be a romantic dinner to please your crush, or a budgeted fika to have fun with your friends, or even a business lunch to impress your customers. We don’t, surely, focus on the famous and touristic places which many have already reviewed. Instead we will take you to discover various local restaurants with detailed reviews as objective as possible.",
      },
      { type: "h2", text: "Why should you follow us?" },
      {
        type: "p",
        text: "Don’t do that if you wanna destroy your wallet with unworthy places! Don’t do that if you wanna eat boring food day by day! & don’t do that if you wanna miss the most trendy and interesting restaurants in Sthlm!",
      },
      { type: "quote", text: "Just do that to satisfy your eyes, fulfill your empty stomach, & save your money for other importances." },
      { type: "p", text: "Just do that & you never regret, we promise!" },
      {
        type: "p",
        text: "P/s: You might see romantic concepts & think that we’re a couple. Yet we aren’t, we’re just bros with the same soul who’re always stuck with the food.",
      },
      { type: "source", text: "Follow us on Instagram:", label: "@foodstuckers.sthlm", href: "https://instagram.com/foodstuckers.sthlm" },
    ],
  },
  {
    slug: "chieng-chung-muong-chanh-ara-tay-coffee",
    title: "Chiềng Chung, Mường Chanh - Cội nguồn của những con người gắn bó với hạt cà phê Arabica",
    excerpt: "“Người Pháp đem cà phê tới Sơn La thì Người Sơn La sẽ đem cà phê ra ngoài thế giới.”",
    date: "2020-12-23",
    category: "Brand storytelling",
    lang: "vi",
    authors: "Son Nguyen",
    cover: araTay,
    coverAlt: "Green coffee-growing hills of Sơn La at golden hour, with wild grass in the foreground",
    body: [
      {
        type: "p",
        text: "Bản tôi nằm tại vùng lõi của khu vực trồng cà phê Arabica của Sơn La, nơi đây có bề dày lịch sử với hoạt động trồng hạt cà phê cách đây hơn 30 năm. Từ khi thực dân Pháp đô hộ và mang loài cây này tới khu vực này, cả bản bắt đầu trồng và chăm bón cho nó mà không hề có bất kì hiểu biết gì về nó, chỉ để mọc tự nhiên và bón phân như các loại cây mà bà con thường hay trồng. Khu vực hai xã chúng tôi hầu hết là bà con dân tộc Thái nên vẫn giữ những hình thức canh tác truyền thống từ xưa vì vậy chất lượng của hạt cà phê không được cải thiện nhiều, chính vì vậy khi thời tiết khí hậu khắc nghiệt xảy ra, cả bản không thể bảo vệ được nó khiến cho sản phẩm thu hoạch bị hạn chế, có năm còn mất sạch toàn bộ.",
      },
      {
        type: "p",
        text: "Do bắt nguồn từ du nhập của Pháp và từ đó chúng tôi chỉ biết làm theo chứ không hề hiểu gì về nó và chỉ trồng theo bản năng, dần dần lượng thu mua ít đi do chất lượng không tốt lên. Một vài bà con trong bản bắt đầu chuyển sang trồng các loại cây khác để cải thiện thu nhập. Rồi những đợt sương muối hoành hành khiến bà con mất mùa vô cùng khó khăn, nhiều gia đình anh chị cạnh nhà tôi vì nản chí mà chặt bỏ nhiều hecta cây cà phê đã gắn bó gần chục năm để chuyển sang trồng các loại cây khác.",
      },
      {
        type: "p",
        text: "Nhưng trong số đó còn nhiều gia đình vô cùng tâm huyết và họ cùng với tôi được hiểu biết thêm sau khi được tham quan các khu vực trồng cà phê ở Lâm Đồng, chúng tôi hiểu rõ hơn và xác định được giá trị của hạt cà phê mình trồng. Từ đó, tổ nhóm sản xuất ra đời và thương hiệu Ara-Tay Coffee cũng dần được hình thành nhằm thúc đẩy sản phẩm cà phê chất lượng cao của bản làng. Làm cà phê không hề đơn giản mà chắc khó đi quá, nhưng tôi cũng như mọi thành viên tổ nhóm, trong hợp tác xã tin là mình sẽ làm được!",
      },
      { type: "quote", text: "“Người Pháp đem cà phê tới Sơn La thì Người Sơn La sẽ đem cà phê ra ngoài thế giới.”" },
      { type: "source", text: "Thông tin chi tiết:", label: "Ara-Tay Coffee", href: "https://www.facebook.com/AraTayCoffee/" },
    ],
  },
  {
    slug: "doi-dau-covid-19-doanh-nghiep-thieu-gi",
    title: "Đương đầu COVID-19: Doanh nghiệp thiếu gì?",
    excerpt:
      "Những cuộc trao đổi, đàm thoại với hàng trăm doanh nghiệp trên toàn thế giới đã cho tôi thấy toàn cảnh cách các công ty phản ứng với thách thức từ đại dịch COVID-19.",
    date: "2020-12-18",
    category: "Business strategy",
    lang: "vi",
    authors: "Son Nguyen",
    cover: covidCover,
    coverPosition: "center bottom",
    coverAlt: "A hand holding bamboo straws and a green leaf, with the title “Đương đầu với COVID-19: Doanh nghiệp thiếu gì?”",
    body: [
      {
        type: "p",
        text: "Mặc dù danh sách bên dưới được tổng hợp khá đầy đủ, vẫn có một vài công ty chọn những nước đi khác. Tuy nhiên, bằng chứng cho thấy rằng các công ty vẫn đang gặp khó trong việc hành động một cách đúng đắn và hợp lí. Và dưới đây là 5 thách thức chính:",
      },
      { type: "h2", text: "1. Kiến thức, hiểu biết không đồng nghĩa với khả năng nội hoá/áp dụng thực tế" },
      {
        type: "p",
        text: "Ngày càng có nhiều trường hợp gặp vấn đề với việc áp dụng lí thuyết để phản ứng thực tế trừ khi đã trải qua trường hợp tương tự trước đó. Các nhà quản lí, nếu chưa bao giờ trải nghiệm hoặc chỉ trải nghiệm qua mô phỏng, thực sự gặp khó trong việc phản ứng đúng cách. Chẳng hạn, lí thuyết cơ chế chuyển bậc khá dễ hiểu, nhưng áp dụng chúng trong thực tế là một bài toán khó với các doanh nghiệp, đơn giản là thực tế luôn không giống như những gì trong sách hướng dẫn. Những trường hợp gặp ‘khủng hoảng’ thường đến từ các nhà quản lí, mà việc không chọn cơ chế chuyển bậc đã tạo ra những tình huống còn tệ hơn cho doanh nghiệp của họ.",
      },
      { type: "h2", text: "2. An toàn nhân sự là tối cao, nhưng cơ chế hành động không hiệu quả" },
      {
        type: "p",
        text: "Hoạch định chính sách tại các công ty thường không dàn trải và không hiệu quả, đặc biệt những nơi chưa được Virus Corona ‘ghé thăm.’ Nhiều doanh nghiệp, về công nghệ và dịch vụ chuyên nghiệp, tỏ ra vô cùng bảo thủ: các cơ chế bảo hộ chỉ đang giúp tăng thêm nhận thức về sự an toàn chứ không thực sự làm mọi người an toàn hơn. Ví dụ, kiểm tra thân nhiệt có thể không phải hình thức sàng lọc hiệu quả nhất, do Virus có thể truyền đi không có triệu chứng. Yêu cầu nhân viên ở nhà nếu họ thấy không khoẻ sẽ giảm thiểu khả năng truyền nhiễm. Những chính sách như vậy sẽ hiệu quả hơn nếu nhân viên nhận được bồi thường - và cách ly khỏi các hậu quả khác nữa.",
      },
      {
        type: "p",
        text: "Một số công ty không nghĩ đến những tác động ngược khi thực hiện chính sách. Ví dụ, lệnh cấm đi lại mà không có chính sách làm việc tại nhà kèm theo có thể biến văn phòng thành một tụ điểm vô cùng đông đúc với khả năng lây nhiễm thậm chí còn cao hơn. Hoặc áp dụng chính sách chung cho toàn công ty mà không nghĩ đến những nhu cầu đặc thù của các vị trí và bộ phận nhân viên khác nhau.",
      },
      {
        type: "image",
        src: covidActions,
        alt: "McKinsey chart listing how companies are responding to the outbreak with five sets of actions across 18 work streams",
        caption: "Tổng hợp các cách doanh nghiệp phản ứng với đại dịch COVID-19. (Ảnh: McKinsey)",
      },
      { type: "h2", text: "3. Lạc quan về sức cầu là nguy hiểm" },
      {
        type: "p",
        text: "Lạc quan về sự hồi phục của sức cầu thực sự là một vấn đề, đặc biệt là cho các công ty thiếu vốn lưu động hoặc thanh khoản, và đứng trước nguy cơ phá sản. Các công ty khi gặp vấn đề có xu hướng đặt niềm tin vào một sự phục hồi nhanh chóng - hoặc xuống dốc ít hơn. Đối diện với khả năng suy thoái kéo dài là cần thiết, do các phương án sớm ở hiện tại, trước khi suy thoái ‘đổ bộ,’ có thể đem lại hiệu quả hơn là những phương án sau này. Lấy ví dụ, việc thoái vốn để nhận số tiền mặt cần thiết có thể được hoàn thành với mức giá cao hơn hôm nay so với vài tuần hay vài tháng sau.",
      },
      { type: "h2", text: "4. Giả định trên doanh nghiệp đi sai hướng" },
      {
        type: "p",
        text: "Một số công ty đang phản ứng với Virus Corona dựa trên các bộ phận/silo khác nhau trong tổ chức (ví dụ như nhóm thu mua chịu trách nhiệm về cung-cầu, nhóm marketing và bán hàng phụ trách liên hệ khách hàng). Nhưng rõ ràng mỗi đội ngũ có những giả định khác nhau và từ đó có những chiến thuật riêng biệt, đào sâu vào đặc thù phòng ban hơn là nghĩ về hướng đi của các bộ phận khác - hoặc những gì có thể tiếp diễn.",
      },
      { type: "h2", text: "5. Ngắn hạn quan trọng, nhưng đừng quên dài hạn" },
      {
        type: "p",
        text: "Phản ứng nhanh và hiệu quả tất nhiên là quan trọng. Chúng ta nghĩ các công ty đã và đang theo đuổi các cách phản ứng phù hợp, như trong Phụ lục 4. Nhưng với các luồng công việc, tác động dài hạn mới là thứ yếu. Suy thoái có thể xảy ra. Gián đoạn do đợt bùng dịch này đang thay đổi cơ cấu thị trường. Thị trường tín dụng có thể tăng trưởng, dù không có yếu tố kích thích. Khả năng phục hồi chuỗi cung-ứng sẽ ở mức cao. Nghe có vẻ vô lí với những đội ngũ quản lí đã làm việc 18 tiếng một ngày, nhưng có quá ít đang dành đủ thời gian và công sức cho những phản ứng có tác động về lâu dài.",
      },
      {
        type: "source",
        text: "Bài viết được dịch từ McKinsey & Company, COVID-19: Implications for business - Briefing note, ngày 16 tháng 3, 2020. Bài viết gốc:",
        label: "mckinsey.com",
        href: "https://www.mckinsey.com/business-functions/risk/our-insights/covid-19-implications-for-business",
      },
      { type: "source", text: "Thông tin chi tiết:", label: "seedplanter.org", href: "https://seedplanter.org" },
    ],
  },
  {
    slug: "chien-luoc-hai-hoa-loi-nhuan-va-bao-ve-moi-truong",
    title: "Chiến lược nào để hài hoà Lợi nhuận và Bảo vệ môi trường?",
    excerpt:
      "Vừa có lợi nhuận, vừa tiến đến cái đích Zero waste giờ đã thành bài toán cho người người nhà nhà. Chiến lược giải bài toán này nằm ở mô hình Kinh tế tuần hoàn (Circular Economy).",
    date: "2020-12-18",
    category: "Sustainability",
    lang: "vi",
    authors: "Son Nguyen",
    cover: circularCover,
    coverAlt: "Illustration comparing linear, recycling and circular economy models, titled “Chiến lược hài hoà lợi nhuận và môi trường”",
    featured: true,
    body: [
      {
        type: "p",
        text: "Vừa có lợi nhuận, vừa tiến đến cái đích Zero waste giờ đã thành bài toán cho người người nhà nhà - từ các ông lớn tới các startup còn chân ướt chân ráo. Chiến lược giải bài toán này nằm ở mô hình Kinh tế tuần hoàn (Circular Economy) - còn mới mẻ nhưng sẽ sớm trở thành xu thế tại Việt Nam!",
      },
      {
        type: "p",
        text: "Nếu để ý, bạn sẽ thấy rằng nền kinh tế thế giới chủ yếu vận hành theo mô hình tuyến tính (Linear Economy), trong đó tài nguyên được khai thác thành sản phẩm, tiêu thụ và sau đó bị \"lãng quên\" tại những bãi rác. Mô hình này đã và đang gây nên gánh nặng khổng lồ cho môi trường và thế hệ tương lai. Còn mô hình tái chế (Recycling Economy) cũng có hạn chế khi chỉ kéo dài thời gian sản phẩm trở thành rác thải.",
      },
      {
        type: "p",
        text: "Muốn cán đích đến Zero waste, giải pháp hữu hiệu nhất là \"uốn cong\" hai mô hình trên thành mô hình tuần hoàn khép kín. Rác thải sau tiêu thụ được quản lý, tái tạo trong vòng đời mới bằng nhiều cách: tái sử dụng, tái chế, sửa chữa sản phẩm hay chia sẻ, cho thuê khi sử dụng.",
      },
      {
        type: "p",
        text: "Có một sự thực rằng, \"các ma mới\" - những startup / doanh nghiệp trẻ thường là nhân tố dễ dàng thách thức lối mòn, góp phần thay đổi cách suy nghĩ, sản xuất và tiêu thụ, đặc biệt với mô hình Kinh tế tuần hoàn. Có thể kể tên OLIO - startup Mỹ góp phẩn giải quyết vấn đề rác thải thực phẩm (tại Mỹ, 63 triệu tấn thải ra mỗi năm) với ứng dụng chia sẻ thực phẩm; hay Library of Things - startup tại Anh với dịch vụ cho thuê máy khoan, máy cắt cỏ, máy chiếu... những sản phẩm mọi người ít khi sử dụng. Những startup này không chỉ hoàn thành xuất sắc mục tiêu bảo vệ môi trường khi nhận không ít giải thưởng, tuyên dương, mà còn thành công, bền vững về lợi nhuận.",
      },
      { type: "quote", text: "“Lửa thử vàng, gian nan thử sức.”" },
      {
        type: "p",
        text: "Tư duy theo mô hình Kinh tế tuần hoàn cần nhiều nỗ lực hơn chỉ nghĩ tới việc hạn chế lượng rác thải, mà phải tiến tới xây dựng một quy trình khép kín, hoàn thiện. Nhưng \"lửa thử vàng, gian nan thử sức\", nỗ lực lớn sẽ đem lại giá trị đích đáng đúng không nào?",
      },
      { type: "source", text: "Thông tin chi tiết:", label: "seedplanter.org", href: "https://seedplanter.org" },
    ],
  },
];

/** All posts, newest first. */
export const blogPosts: BlogPost[] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string | undefined): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Estimated reading time in minutes (about 200 words a minute). */
export function readingTime(post: BlogPost): number {
  const words = post.body
    .map((b) => ("text" in b ? b.text : ""))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).toUpperCase();
}

export const languageLabel: Record<BlogPost["lang"], string> = {
  en: "English",
  vi: "Tiếng Việt",
};
