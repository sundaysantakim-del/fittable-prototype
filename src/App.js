const h = React.createElement;
const { createRoot } = ReactDOM;

const A = "./public/assets/";

const products = [
  { image: `${A}product-salad.png`, name: "[샐러딩] 버라이어티\n샐러드 4종 (택1)", price: "9,900원~", reviews: "999+" },
  { image: `${A}product-cookie.png`, name: "[헬시쿠키] 프로틴 쿠키\n밸런스 바이트", originalPrice: "38,900원", discount: "20%", price: "31,120원", reviews: "223" },
  { image: `${A}product-pizza.png`, name: "[피자클럽] 고단백 밸런스\n피자 (택1)", originalPrice: "20,900원", discount: "29%", price: "14,800원~", reviews: "38" },
];

function svg(className, size, viewBox, children) {
  return h("svg", { className, width: size, height: size, viewBox, fill: "none", "aria-hidden": true }, children);
}

function Icon({ type, active }) {
  const color = "currentColor";
  if (type === "home") return svg(null, 24, "0 0 24 24", [
    h("path", { key: 1, d: "M3 11.8 12 3l9 8.8", stroke: color, strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }),
    h("path", { key: 2, d: "M5.2 9.8v8.1c0 .8.6 1.4 1.4 1.4h3.1v-4.2c0-.8.6-1.4 1.4-1.4h1.8c.8 0 1.4.6 1.4 1.4v4.2h3.1c.8 0 1.4-.6 1.4-1.4V9.8", stroke: color, strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }),
  ]);
  if (type === "filter") return svg(null, 24, "0 0 24 24", h("path", { d: "M4 4h16v2L14 13v6.4l-4-1V13L4 6V4Z", fill: active ? color : "none", stroke: color, strokeWidth: 1.4, strokeLinejoin: "round" }));
  if (type === "list") return svg(null, 24, "0 0 24 24", h("path", { d: "M4 6h16M4 12h16M4 18h16", stroke: color, strokeWidth: 1.3, strokeLinecap: "round" }));
  if (type === "search") return svg(null, 24, "0 0 24 24", [
    h("circle", { key: 1, cx: 11, cy: 11, r: 5.5, stroke: color, strokeWidth: 1.3 }),
    h("path", { key: 2, d: "m15 15 4 4", stroke: color, strokeWidth: 1.3, strokeLinecap: "round" }),
  ]);
  if (type === "user") return svg(null, 24, "0 0 24 24", [
    h("circle", { key: 1, cx: 12, cy: 8.2, r: 4.1, stroke: color, strokeWidth: 1.3 }),
    h("path", { key: 2, d: "M4.5 20.2a7.5 7.5 0 0 1 15 0", stroke: color, strokeWidth: 1.3, strokeLinecap: "round" }),
  ]);
  if (type === "cart") return svg(null, 24, "0 0 24 24", [
    h("path", { key: 1, d: "M6 6h1.2l2 6.1h6.2l2.1-4.2H8M9.3 14.3h6.4", stroke: color, strokeWidth: 1.1, strokeLinecap: "round", strokeLinejoin: "round" }),
    h("circle", { key: 2, cx: 9.5, cy: 17, r: 1, fill: color }),
    h("circle", { key: 3, cx: 15.4, cy: 17, r: 1, fill: color }),
  ]);
  if (type === "plus") return svg(null, 22, "0 0 22 22", h("path", { d: "M11 6v10M6 11h10", stroke: color, strokeWidth: 1.7, strokeLinecap: "round" }));
  if (type === "chat") return svg(null, 16, "0 0 16 16", [
    h("path", { key: 1, d: "M2.2 3.2h11.6v8.6H9.5L8 14l-1.5-2.2H2.2V3.2Z", stroke: color, strokeWidth: 1, strokeLinejoin: "round" }),
    h("path", { key: 2, d: "M5.3 7.5h.1M8 7.5h.1M10.7 7.5h.1", stroke: color, strokeWidth: 1.4, strokeLinecap: "round" }),
  ]);
  return null;
}

function StatusBar() {
  return h("div", { className: "status-bar", "aria-hidden": true }, [
    h("div", { className: "status-time", key: "time" }, "9:41"),
    h("div", { className: "dynamic-island", key: "island" }),
    h("div", { className: "status-icons", key: "icons" }, [
      h("div", { className: "signal", key: "signal" }, [1, 2, 3, 4].map((n) => h("span", { key: n }))),
      svg("wifi", 17, "0 0 17 12", h("path", { d: "M8.5 11.8 6.1 9.4c1.4-1.3 3.4-1.3 4.8 0L8.5 11.8ZM3.1 6.2c3-2.9 7.8-2.9 10.8 0l-1.3 1.3c-2.2-2-5.9-2-8.2 0L3.1 6.2ZM.1 3.4c4.7-4.6 12.1-4.6 16.8 0l-1.3 1.4c-3.9-3.8-10.3-3.8-14.2 0L.1 3.4Z", fill: "currentColor" })),
      h("div", { className: "battery", key: "battery" }, h("span")),
    ]),
  ]);
}

function Logo() {
  return h("img", { className: "logo", src: `${A}brand-logo.svg`, alt: "Fittable" });
}

function BackIcon() {
  return svg("back-icon", 24, "0 0 24 24",
    h("path", { d: "M8.33 12.61L15.37 19.64L14.5 20.5L6 12L14.5 3.5L15.37 4.36L8.33 11.39H23V12.61H8.33Z", fill: "currentColor" }),
  );
}

function TopNav({ variant = "home", onBack } = {}) {
  if (variant === "sheet") {
    return h("header", { className: "top-nav sheet-nav" }, [
      h("button", { className: "back-button", "aria-label": "뒤로가기", onClick: onBack, key: "back" }, BackIcon()),
      Logo(),
      h("button", { className: "icon-button sheet-bell-button", "aria-label": "알림", key: "bell" },
        h("img", { className: "bell-icon", src: `${A}ph_bell-light.svg`, alt: "" }),
      ),
    ]);
  }
  return h("header", { className: "top-nav" }, [
    Logo(),
    h("button", { className: "icon-button", "aria-label": "알림", key: "bell" },
      h("img", { className: "bell-icon", src: `${A}ph_bell-light.svg`, alt: "" }),
    ),
  ]);
}

function Hero({ onOpenRecommendation, hintDismissed, dismissHint }) {
  const handleRecommendationClick = () => {
    dismissHint("recommend");
    onOpenRecommendation();
  };

  return h("section", { className: "hero" }, [
    h("div", { className: "hero-copy", key: "copy" }, [
      h("h1", { key: "h" }, ["내 기준에 맞는", h("br", { key: "br" }), "식품을 더 쉽게 찾아보세요"]),
      h("p", { key: "p" }, ["성분과 영양 정보를 한눈에 비교하고", h("br", { key: "br" }), "나에게 맞는 제품을 빠르게 탐색할 수 있어요."]),
      h("button", { className: `recommend-button${hintDismissed.recommend ? "" : " demo-hint"}`, "aria-label": "맞춤 추천 설정", onClick: handleRecommendationClick, key: "btn" }, [
        h("img", { className: "recommend-button-icon", src: `${A}recommend-setting-icon.svg`, alt: "", key: "icon" }),
        h("span", { key: "text" }, "맞춤 추천 설정"),
      ]),
    ]),
    h("div", { className: "hero-image-slot", key: "hero" },
      h("img", { className: "hero-image", src: `${A}chicken-salad.png`, alt: "" }),
    ),
  ]);
}

const dietGoals = [
  { icon: "icon-goal-protein.svg", tone: "green", title: "고단백", desc: "단백질 섭취를 늘리고 근육 관리를 하고 싶어요." },
  { icon: "icon-goal-sugar.svg", tone: "red", title: "저당 / 혈당 관리", desc: "당 섭취를 줄이고 혈당 관리를 하고 싶어요." },
  { icon: "icon-goal-fat.svg", tone: "purple", title: "저지방 / 체지방 관리", desc: "지방 섭취를 줄이고 체지방 관리를 하고 싶어요." },
  { icon: "icon-goal-weight.svg", tone: "yellow", title: "체중 관리", desc: "건강한 체중 유지를 위해 균형 잡힌 식단을 원해요." },
  { icon: "icon-gut-shield.svg", tone: "blue", title: "장 건강", desc: "장 건강을 위해 가벼운 식단을 하고 싶어요." },
];

const goalSummaryLabels = {
  "고단백": "고단백",
  "저당 / 혈당 관리": "혈당",
  "저지방 / 체지방 관리": "체지방",
  "체중 관리": "체중",
  "장 건강": "장 건강",
};

function formatGoalSummary(goals) {
  if (!goals.length) return "(선택)";
  const labels = goals.map((goal) => goalSummaryLabels[goal] || goal);
  const needsManagementSuffix = labels.every((label) => ["혈당", "체지방", "체중"].includes(label));
  return `(${labels.join(", ")}${needsManagementSuffix ? " 관리" : ""} 선택됨 ${goals.length}/2)`;
}

function CheckBox({ checked }) {
  return h("span", { className: checked ? "sheet-check checked" : "sheet-check" }, checked ? "✓" : "");
}

function Chevron({ open }) {
  return h("span", { className: open ? "sheet-chevron open" : "sheet-chevron", "aria-hidden": "true" });
}

function ProgressSteps({ activeStep = 1 } = {}) {
  const steps = [
    { step: 1, src: `${A}recommendation/section1-default.svg`, alt: "추천 설정 1단계" },
    { step: 2, src: `${A}recommendation/section2.svg`, alt: "추천 설정 2단계" },
    { step: 3, src: `${A}recommendation/section3.svg`, alt: "추천 설정 3단계" },
  ];
  return h("div", { className: "sheet-steps" },
    steps.map((item) => h("img", {
      className: item.step === activeStep ? "sheet-steps-image active" : "sheet-steps-image",
      src: item.src,
      alt: item.step === activeStep ? item.alt : "",
      "aria-hidden": item.step === activeStep ? "false" : "true",
      key: item.step,
    })),
  );
}

function GoalOption(goal, selectedGoals, onToggle) {
  const checked = selectedGoals.includes(goal.title);
  const disabled = !checked && selectedGoals.length >= 2;
  return h("button", { className: disabled ? "sheet-option disabled" : "sheet-option", key: goal.title, onClick: () => onToggle(goal.title), disabled }, [
    CheckBox({ checked }),
    h("span", { className: `sheet-option-icon ${goal.tone}`, key: "icon" },
      h("img", { src: `${A}recommendation/${goal.icon}`, alt: "" }),
    ),
    h("span", { className: "sheet-option-copy", key: "copy" }, [
      h("strong", { key: "title" }, goal.title),
      h("span", { key: "desc" }, goal.desc),
    ]),
  ]);
}

function SheetNote({ text, count }) {
  return h("div", { className: "sheet-note" }, [
    h("img", { key: "icon", className: "sheet-note-icon", src: `${A}recommendation/info-exclamation.svg`, alt: "" }),
    h("span", { key: "text" }, text),
    h("span", { key: "count", className: "sheet-count" }, count),
  ]);
}

function IngredientCheck({ checked }) {
  return h("span", { className: checked ? "ingredient-check checked" : "ingredient-check", "aria-hidden": "true" }, checked ? "✓" : "");
}

function IngredientChevron({ open = false }) {
  return h("span", { className: open ? "ingredient-chevron open" : "ingredient-chevron", "aria-hidden": "true" });
}

function IngredientRow({ item, checked, summary, open, onToggle, onDetail }) {
  return h("div", { className: open ? "ingredient-real-row open" : "ingredient-real-row", key: item.key }, [
    h("button", {
      className: "ingredient-real-main",
      "aria-label": `${item.label} 선택`,
      onClick: onToggle,
      key: "main",
    }, [
      IngredientCheck({ checked }),
      h("strong", { key: "label" }, item.label),
    ]),
    summary ? h("span", { className: "ingredient-real-summary", key: "summary" }, summary) : null,
    h("button", {
      className: "ingredient-real-chevron",
      "aria-label": `${item.label} 상세 기준`,
      onClick: onDetail,
      key: "detail",
    }, IngredientChevron({ open })),
  ]);
}

function SugarScale() {
  const ticks = Array.from({ length: 9 });
  return h("div", { className: "sugar-scale", "aria-hidden": "true" }, [
    h("div", { className: "sugar-scale-track", key: "track" }, [
      h("span", { className: "sugar-scale-fill", key: "fill" }),
      h("span", { className: "sugar-scale-thumb", key: "thumb" }),
    ]),
    h("div", { className: "sugar-scale-labels", key: "labels" }, [
      h("span", null, "0g"),
      h("strong", null, "10g"),
      h("span", { className: "sugar-scale-max" }, "50g+"),
    ]),
    h("div", { className: "sugar-scale-ticks", key: "ticks" }, ticks.map((_, index) => h("span", { key: index }))),
  ]);
}

function SugarAvoidOption({ option, checked, onClick }) {
  return h("button", { className: "sugar-real-option", onClick, key: option.key }, [
    IngredientCheck({ checked }),
    h("strong", { key: "label" }, option.label),
    option.desc ? h("span", { key: "desc" }, option.desc) : null,
  ]);
}

function SugarSettingPanel({ closing, selectedSugarAvoids, toggleSugarAvoid, selectedIngredients, toggleIngredient, onToggleSugar, onClose, onCollapse }) {
  const sugarSelected = selectedIngredients.includes("sugar");
  const ingredientRows = [
    { key: "dairy", label: "유제품" },
    { key: "nuts", label: "견과류" },
    { key: "flour", label: "밀가루" },
    { key: "additives", label: "첨가물" },
  ];
  const topRows = ingredientRows.slice(0, 3);
  const bottomRows = ingredientRows.slice(3);
  const avoidRows = [
    { key: "sugar", label: "설탕", desc: "백설탕, 흑설탕" },
    { key: "cornSyrup", label: "액상과당", desc: "" },
    { key: "alternative", label: "대체당", desc: "자일리톨, 알룰로스 등" },
    { key: "sweetener", label: "인공감미료", desc: "아스파탐, 수크랄로스" },
  ];
  return h("div", { className: closing ? "ingredient-list real-list sugar-real-list closing" : "ingredient-list real-list sugar-real-list", key: "sugar-setting" }, [
    h("button", { className: "ingredient-real-header", "aria-label": "성분 선택 닫기", onClick: onClose, key: "header" }, [
      h("strong", null, "나와 맞지 않는 성분"),
      IngredientChevron({ open: true }),
    ]),
    h("div", { className: "ingredient-real-rows", key: "top-rows" },
      topRows.map((item) => IngredientRow({
        item,
        checked: selectedIngredients.includes(item.key),
        onToggle: () => toggleIngredient(item.key),
        onDetail: () => toggleIngredient(item.key),
      })),
    ),
    h("div", { className: "sugar-real-card", key: "sugar-card" }, [
      h("div", { className: "ingredient-real-row sugar-real-head", key: "sugar-row" }, [
        h("button", { className: "ingredient-real-main", onClick: onToggleSugar, key: "main" }, [
          IngredientCheck({ checked: sugarSelected }),
          h("strong", null, "당류"),
        ]),
        h("button", { className: "ingredient-real-chevron", "aria-label": "당류 설정 접기", onClick: onCollapse, key: "chevron" }, IngredientChevron({ open: true })),
      ]),
      h("div", { className: "sugar-real-detail", key: "detail" }, [
        h("p", { className: "sugar-real-title", key: "title" }, ["당류 기준 설정 ", h("span", null, "(g)")]),
        SugarScale(),
        h("p", { className: "sugar-real-subtitle", key: "subtitle" }, ["피하고 싶은 당류 선택 ", h("span", null, "(최대 4개)")]),
        h("div", { className: "sugar-real-options", key: "options" },
          avoidRows.map((option) => SugarAvoidOption({
            option,
            checked: selectedSugarAvoids.includes(option.key),
            onClick: () => toggleSugarAvoid(option.key),
          })),
        ),
      ]),
    ]),
    h("div", { className: "ingredient-real-rows bottom", key: "bottom-rows" },
      bottomRows.map((item) => IngredientRow({
        item,
        checked: selectedIngredients.includes(item.key),
        onToggle: () => toggleIngredient(item.key),
        onDetail: () => toggleIngredient(item.key),
      })),
    ),
    SheetNote({ text: "최대 5개까지 선택할 수 있어요.", count: `${selectedIngredients.length}/5` }),
  ]);
}

const sugarAvoidLabels = {
  sugar: "설탕",
  cornSyrup: "액상과당",
  alternative: "대체당",
  sweetener: "인공감미료",
};

const defaultSugarAvoid = "cornSyrup";

function formatSugarIngredientSummary(selectedSugarAvoids) {
  const avoidLabel = selectedSugarAvoids.length > 1
    ? `${sugarAvoidLabels[selectedSugarAvoids[0]] || selectedSugarAvoids[0]} 외 ${selectedSugarAvoids.length - 1}개`
    : selectedSugarAvoids.length
      ? sugarAvoidLabels[selectedSugarAvoids[0]] || selectedSugarAvoids[0]
      : "당류";
  return `${avoidLabel} · 10g이하`;
}

const ingredientLabels = {
  dairy: "유제품",
  nuts: "견과류",
  flour: "밀가루",
  sugar: "당류",
  additives: "첨가물",
};

const ingredientOrder = ["dairy", "nuts", "flour", "sugar", "additives"];
const resultActionRows = [387, 512, 637];

function formatIngredientClosedSummary(selectedIngredients) {
  const sorted = ingredientOrder.filter((key) => selectedIngredients.includes(key));
  const countText = sorted.length ? `선택된 성분 ${sorted.length}개` : "나와 맞지 않는 성분";
  if (!sorted.length || sorted.length >= 3) return { countText, detailText: "" };
  const labels = sorted.map((key) => ingredientLabels[key]).join(", ");
  return { countText, detailText: `(${labels} 선택됨)` };
}

function IngredientSelectionList({ closing, selectedIngredients, toggleIngredient, onClose, onSugar, onSugarToggle, sugarSummary, onUnavailableDetail }) {
  const rows = [
    { key: "dairy", label: "유제품" },
    { key: "nuts", label: "견과류" },
    { key: "flour", label: "밀가루" },
    { key: "sugar", label: "당류" },
    { key: "additives", label: "첨가물" },
  ];
  return h("div", { className: closing ? "ingredient-list real-list closing" : "ingredient-list real-list", key: "list" }, [
    h("button", { className: "ingredient-real-header", "aria-label": "성분 선택 닫기", onClick: onClose, key: "header" }, [
      h("strong", null, "나와 맞지 않는 성분"),
      IngredientChevron({ open: true }),
    ]),
    h("div", { className: "ingredient-real-rows", key: "rows" },
      rows.map((item) => {
        const checked = selectedIngredients.includes(item.key);
        return IngredientRow({
          item,
          checked,
          summary: item.key === "sugar" && checked ? sugarSummary : "",
          open: false,
          onToggle: item.key === "sugar" ? onSugarToggle : () => toggleIngredient(item.key),
          onDetail: item.key === "sugar" ? onSugar : onUnavailableDetail,
        });
      }),
    ),
    SheetNote({ text: "최대 5개까지 선택할 수 있어요.", count: `${selectedIngredients.length}/5` }),
  ]);
}

function RecommendationResult({ onEdit, onCompareStart }) {
  return h("div", { className: "figma-result-screen" }, [
    h("img", { className: "figma-result-image", src: `${A}feature3-compare_1.svg?v=recommend2`, alt: "추천 결과 비교 화면", key: "image" }),
    h("img", { className: "result-chip result-chip-protein", src: `${A}result-chip-protein.svg`, alt: "", key: "chip-protein" }),
    h("img", { className: "result-chip result-chip-sugar", src: `${A}result-chip-sugar.svg`, alt: "", key: "chip-sugar" }),
    h("img", { className: "result-chip result-chip-corn-syrup", src: `${A}result-chip-corn-syrup.svg`, alt: "", key: "chip-corn-syrup" }),
    resultActionRows.map((top, index) => h("span", {
      className: "result-action-mask",
      style: { top: `${top + 3}px` },
      key: `result-cart-mask-${index}`,
    })),
    resultActionRows.map((top, index) => h("span", {
      className: "result-action-mask",
      style: { top: `${top + 35}px` },
      key: `result-compare-mask-${index}`,
    })),
    resultActionRows.map((top, index) => h("img", {
      className: "result-action-button result-cart-button",
      src: `${A}cart-button-new.svg?v=crisp1`,
      alt: "",
      style: { top: `${top}px` },
      key: `result-cart-${index}`,
    })),
    resultActionRows.map((top, index) => h("img", {
      className: "result-action-button result-compare-button",
      src: `${A}compare-button-new.svg?v=crisp1`,
      alt: "",
      style: { top: `${top + 32}px` },
      key: `result-compare-${index}`,
    })),
    h("button", { className: "result-compare-start-hotspot", "aria-label": "제품 비교 시작하기", onClick: onCompareStart, key: "compare-start" }),
    h("button", { className: "result-edit-hotspot", "aria-label": "기준수정", onClick: onEdit, key: "edit" }),
  ]);
}

const compareSelectButtonTops = [424, 516, 608, 700, 792];
const compareDemoSelectableIndexes = new Set([2, 3]);
const compareSlotLefts = [19, 140, 261];
const compareDemoProducts = [
  {
    id: "salading-pumpkin-chicken",
    rowIndex: 2,
    name: "[샐러딩] 단호박 닭가슴살 샐러드",
    slotSrc: "compare-slot-pumpkin-chicken.svg",
  },
  {
    id: "cleanmeal-sesame-noodle",
    rowIndex: 3,
    name: "[클린밀] 참깨 메밀 누들 샐러드",
    slotSrc: "compare-slot-sesame-noodle.svg",
  },
];

function ProductCompareScreen({
  onBack,
  onRecommendationHome,
  onToggleSave,
  onUnavailableSelect,
  onToggleProduct,
  onRemoveProduct,
  onCompare,
  selectedProducts,
  selected,
  isSaved,
}) {
  const selectedIds = new Set(selectedProducts);
  const selectedProductItems = selectedProducts
    .map((productId) => compareDemoProducts.find((product) => product.id === productId))
    .filter(Boolean);
  const selectedCount = selectedProducts.length;

  return h("div", { className: "figma-result-screen" }, [
    h("img", {
      className: "figma-result-image",
      src: selected ? `${A}feature3-compare_4.svg?v=recommend2` : `${A}feature3-compare_2.svg?v=realtext4`,
      alt: "제품 비교 화면",
      key: "image",
    }),
    selected ? [
      h("span", { className: "compare-product-card-shadow compare-product-card-shadow-left", key: "compare-card-shadow-left" }),
      h("span", { className: "compare-product-card-shadow compare-product-card-shadow-right", key: "compare-card-shadow-right" }),
    ] : null,
    h("button", { className: "compare-back-hotspot", "aria-label": "추천 결과로 돌아가기", onClick: onBack, key: "back" }),
    h("button", { className: "compare-logo-hotspot", "aria-label": "추천 결과 메인으로 이동", onClick: onRecommendationHome, key: "logo-home" }),
    selected ? h("button", { className: "compare-recommend-tab-hotspot", "aria-label": "추천 탭으로 이동", onClick: onRecommendationHome, key: "recommend-tab" }) : null,
    selected ? h("button", {
      className: `compare-save-hotspot${isSaved ? " saved" : ""}`,
      "aria-label": isSaved ? "비교 결과 저장 해제" : "비교 결과 저장",
      onClick: onToggleSave,
      key: "save",
    }, h("img", {
      className: "compare-save-icon",
      src: `${A}${isSaved ? "bookmark-filled.svg" : "bookmark.svg"}?v=savefill1`,
      alt: "",
    })) : null,
    selected ? null : [
      h("div", { className: "compare-tabs-mask", key: "tabs-mask" }),
      h("nav", { className: "compare-tabs-real", "aria-label": "비교 상품 카테고리", key: "tabs" },
        ["전체", "한끼식단", "간식", "음료", "베이커리"].map((label, index) =>
          h("button", {
            className: `compare-tab-real${index === 0 ? " is-active" : ""}`,
            type: "button",
            key: label,
          }, label)
        )
      ),
      selectedProductItems.map((product, slotIndex) => h("div", {
        className: "compare-slot-card",
        style: { left: `${compareSlotLefts[slotIndex]}px` },
        key: `slot-${product.id}`,
      }, [
        h("img", {
          className: "compare-slot-card-image",
          src: `${A}${product.slotSrc}?v=slot2`,
          alt: "",
          key: "slot-image",
        }),
        h("button", {
          className: "compare-slot-remove",
          "aria-label": `${product.name} 제거`,
          onClick: () => onRemoveProduct(product.id),
          key: "remove",
        }, h("img", { src: `${A}compare-slot-remove.svg?v=1`, alt: "" })),
      ])),
      compareDemoProducts.filter((product) => selectedIds.has(product.id)).map((product) => h("div", {
        className: "compare-selected-button-mask",
        style: { top: `${compareSelectButtonTops[product.rowIndex]}px` },
        key: `mask-${product.id}`,
      })),
      compareDemoProducts.filter((product) => selectedIds.has(product.id)).map((product) => h("div", {
        className: "compare-row-selection-glow",
        style: { top: `${compareSelectButtonTops[product.rowIndex] - 22}px` },
        key: `glow-${product.id}`,
      })),
      compareDemoProducts.filter((product) => selectedIds.has(product.id)).map((product) => h("button", {
        className: "compare-selected-button",
        onClick: () => onToggleProduct(product),
        style: { top: `${compareSelectButtonTops[product.rowIndex]}px` },
        key: `selected-${product.id}`,
      }, [
        h("span", { className: "compare-selected-check", key: "check" }),
        h("span", { key: "label" }, "선택됨"),
      ])),
      compareSelectButtonTops.map((top, index) => {
        const product = compareDemoProducts.find((item) => item.rowIndex === index);
        return h("button", {
          className: "compare-select-hotspot",
          "aria-label": product ? `${product.name} 선택` : "제품 선택",
          onClick: product ? () => onToggleProduct(product) : onUnavailableSelect,
          style: { top: `${top}px` },
          key: `select-${index}`,
        }, [
          h("span", { className: "compare-select-plus", key: "plus" }, "+"),
          h("span", { key: "label" }, "선택"),
        ]);
      }),
      h("div", { className: "compare-bottom-cta-mask", key: "cta-mask" }),
      h("button", {
        className: "compare-bottom-cta",
        onClick: onCompare,
        key: "cta",
      }, `비교하기 (${selectedCount}개)`),
    ],
  ]);
}

function RecommendationSheet({ onClose, hintDismissed, dismissHint }) {
  const [screenMode, setScreenMode] = React.useState("settings");
  const [resultDissolving, setResultDissolving] = React.useState(false);
  const [goalOpen, setGoalOpen] = React.useState(false);
  const [goalClosing, setGoalClosing] = React.useState(false);
  const [goalExpanded, setGoalExpanded] = React.useState(false);
  const [selectedGoals, setSelectedGoals] = React.useState(["고단백"]);
  const [ingredientsOpen, setIngredientsOpen] = React.useState(false);
  const [ingredientsClosing, setIngredientsClosing] = React.useState(false);
  const [selectedIngredients, setSelectedIngredients] = React.useState(["sugar"]);
  const [sugarOpen, setSugarOpen] = React.useState(false);
  const [selectedSugarAvoids, setSelectedSugarAvoids] = React.useState([defaultSugarAvoid]);
  const [isComplete, setComplete] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isScrolling, setScrolling] = React.useState(false);
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [compareSaved, setCompareSaved] = React.useState(false);
  const [toastVisible, setToastVisible] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("상세 기준은 당류 설정 예시를 참고해주세요");
  const [toastKey, setToastKey] = React.useState(0);
  const toastTimerRef = React.useRef(null);
  const scrollTimerRef = React.useRef(null);
  const goalCount = selectedGoals.length;
  const completedStep = screenMode === "result" ? 3 : selectedIngredients.length ? 2 : goalCount ? 1 : 1;
  const activeStep = screenMode === "result" ? 3 : Math.max(currentStep, completedStep);
  const canFilter = goalCount > 0 && selectedIngredients.length > 0;
  const goalSummary = formatGoalSummary(selectedGoals);
  const sugarIngredientSummary = formatSugarIngredientSummary(selectedSugarAvoids);
  const ingredientClosedSummary = formatIngredientClosedSummary(selectedIngredients);
  const contentMode = goalOpen || ingredientsOpen || sugarOpen ? "expanded" : "default";
  const toggleGoal = (goalTitle) => {
    setSelectedGoals((current) => {
      if (current.includes(goalTitle)) return current.filter((title) => title !== goalTitle);
      if (current.length >= 2) return current;
      return [...current, goalTitle];
    });
  };
  const keepScroll = (update) => {
    const scroller = document.querySelector(".recommendation-scroll");
    const top = scroller?.scrollTop || 0;
    update();
    setTimeout(() => {
      if (scroller) scroller.scrollTop = top;
    }, 50);
    setTimeout(() => {
      if (scroller) scroller.scrollTop = top;
    }, 260);
  };
  const startFiltering = () => {
    if (!canFilter) return;
    setCurrentStep(3);
    setComplete(true);
    setScreenMode("result");
    setTimeout(() => {
      document.querySelector(".recommendation-scroll")?.scrollTo(0, 0);
      setComplete(false);
    }, 0);
  };
  const editCriteria = () => {
    setResultDissolving(true);
    window.setTimeout(() => {
      setScreenMode("settings");
      setResultDissolving(false);
      setCurrentStep(2);
      setTimeout(() => document.querySelector(".recommendation-scroll")?.scrollTo(0, 0), 0);
    }, 300);
  };
  const openProductCompare = () => {
    setSelectedProducts([]);
    setResultDissolving(true);
    window.setTimeout(() => {
      setScreenMode("compare");
      setResultDissolving(false);
    }, 300);
  };
  const toggleCompareProduct = (product) => {
    setSelectedProducts((current) => current.includes(product.id)
      ? current.filter((id) => id !== product.id)
      : current.length >= 2 ? current : [...current, product.id]);
  };
  const removeCompareProduct = (productId) => {
    setSelectedProducts((current) => current.filter((id) => id !== productId));
  };
  const toggleCompareSave = () => {
    setCompareSaved((current) => {
      const next = !current;
      showToast(next ? "비교 결과를 저장했어요" : "저장을 해제했어요");
      return next;
    });
  };
  const openSelectedCompareResult = () => {
    if (selectedProducts.length < 2) {
      showToast("비교할 제품 2개를 선택해주세요");
      return;
    }
    setResultDissolving(true);
    window.setTimeout(() => {
      setScreenMode("compareSelected");
      setResultDissolving(false);
    }, 300);
  };
  const backToResult = () => {
    setResultDissolving(true);
    window.setTimeout(() => {
      setScreenMode("result");
      setResultDissolving(false);
    }, 300);
  };
  const backToCompareSelection = () => {
    setResultDissolving(true);
    window.setTimeout(() => {
      setScreenMode("compare");
      setResultDissolving(false);
    }, 300);
  };
  const goToRecommendationMain = () => {
    setSelectedProducts([]);
    if (screenMode === "result") return;
    setResultDissolving(true);
    window.setTimeout(() => {
      setScreenMode("result");
      setResultDissolving(false);
    }, 300);
  };
  const openGoal = () => keepScroll(() => {
    dismissHint("goal");
    setCurrentStep(1);
    setGoalOpen(true);
    setGoalClosing(false);
    setGoalExpanded(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setGoalExpanded(true));
    });
  });
  const closeGoal = () => {
    setGoalClosing(true);
    setGoalExpanded(false);
    setTimeout(() => {
      setGoalOpen(false);
      setGoalClosing(false);
      setGoalExpanded(false);
    }, 420);
  };
  const openIngredients = () => keepScroll(() => {
    dismissHint("ingredients");
    setCurrentStep(2);
    setIngredientsOpen(true);
    setIngredientsClosing(false);
  });
  const closeIngredients = () => {
    setIngredientsClosing(true);
    setSugarOpen(false);
    setTimeout(() => {
      setIngredientsOpen(false);
      setIngredientsClosing(false);
    }, 420);
  };
  const ensureSugarSelected = () => {
    setSelectedIngredients((current) => current.includes("sugar")
      ? current
      : current.length >= 5 ? current : [...current, "sugar"]);
  };
  const clearSugarSelection = () => {
    setSelectedSugarAvoids([]);
    setSelectedIngredients((current) => current.filter((item) => item !== "sugar"));
  };
  const openSugar = () => keepScroll(() => {
    setCurrentStep(2);
    setIngredientsOpen(true);
    setSugarOpen(true);
    setIngredientsClosing(false);
    ensureSugarSelected();
    setSelectedSugarAvoids((current) => current.length ? current : [defaultSugarAvoid]);
  });
  const toggleSugarFromList = () => {
    openSugar();
  };
  const toggleSugarInsidePanel = () => {
    ensureSugarSelected();
  };
  const collapseSugar = () => keepScroll(() => {
    ensureSugarSelected();
    setSelectedSugarAvoids((current) => current.length ? current : [defaultSugarAvoid]);
    setSugarOpen(false);
  });
  const toggleIngredient = (key) => {
    setSelectedIngredients((current) => current.includes(key)
      ? current.filter((item) => item !== key)
      : current.length >= 5 ? current : [...current, key]);
  };
  const showToast = (message) => {
    window.clearTimeout(toastTimerRef.current);
    setToastMessage(message);
    setToastVisible(true);
    setToastKey((current) => current + 1);
    toastTimerRef.current = window.setTimeout(() => setToastVisible(false), 1500);
  };
  const showUnavailableDetailToast = () => {
    showToast("상세 기준은 당류 설정 예시를 참고해주세요");
  };
  const showCompareDemoToast = () => {
    showToast("현재 데모에서는 2개 제품 비교만 지원해요");
  };
  const toggleSugarAvoid = (key) => {
    ensureSugarSelected();
    setSelectedSugarAvoids([key]);
  };
  const handleRecommendationScroll = () => {
    window.clearTimeout(scrollTimerRef.current);
    setScrolling(true);
    scrollTimerRef.current = window.setTimeout(() => setScrolling(false), 400);
  };
  React.useEffect(() => () => {
    window.clearTimeout(scrollTimerRef.current);
  }, []);

  if (screenMode === "result") {
    return h("section", { className: "recommendation-screen", "aria-label": "추천 결과 비교" },
      h("div", { className: resultDissolving ? "result-dissolve leaving" : "result-dissolve" },
        RecommendationResult({ onEdit: editCriteria, onCompareStart: openProductCompare }),
      ),
    );
  }

  if (screenMode === "compare") {
    return h("section", { className: "recommendation-screen", "aria-label": "제품 비교" }, [
      h("div", { className: resultDissolving ? "result-dissolve leaving" : "result-dissolve" },
        ProductCompareScreen({
          onBack: backToResult,
          onRecommendationHome: goToRecommendationMain,
          onToggleSave: toggleCompareSave,
          onUnavailableSelect: showCompareDemoToast,
          onToggleProduct: toggleCompareProduct,
          onRemoveProduct: removeCompareProduct,
          onCompare: openSelectedCompareResult,
          selectedProducts,
          selected: false,
          isSaved: compareSaved,
        }),
      ),
      toastVisible ? h("div", { className: "demo-toast", key: `toast-${toastKey}`, role: "status" }, toastMessage) : null,
    ]);
  }

  if (screenMode === "compareSelected") {
    return h("section", { className: "recommendation-screen", "aria-label": "제품 비교 선택 완료" },
      h("div", { className: resultDissolving ? "result-dissolve leaving" : "result-dissolve" },
        ProductCompareScreen({
          onBack: backToCompareSelection,
          onRecommendationHome: goToRecommendationMain,
          onToggleSave: toggleCompareSave,
          onUnavailableSelect: showCompareDemoToast,
          onToggleProduct: toggleCompareProduct,
          onRemoveProduct: removeCompareProduct,
          onCompare: openSelectedCompareResult,
          selectedProducts,
          selected: true,
          isSaved: compareSaved,
        }),
      ),
      toastVisible ? h("div", { className: "demo-toast", key: `toast-${toastKey}`, role: "status" }, toastMessage) : null,
    );
  }

  return h("section", { className: "recommendation-screen", "aria-label": "맞춤 추천 설정" }, [
    h("div", { className: goalOpen || ingredientsOpen || sugarOpen ? "recommendation-scroll scrollable" : "recommendation-scroll", onScroll: handleRecommendationScroll, key: "scroll" }, [
      StatusBar(),
      TopNav({ variant: "sheet", onBack: onClose }),
      ProgressSteps({ activeStep }),
      h("div", { className: `sheet-content ${contentMode}`, key: "content" }, [
        h("section", { className: "sheet-section goal-section", key: "goal" }, [
          h("h2", null, "1. 식단 목표는 무엇인가요?"),
          goalOpen
            ? h("div", { className: `${goalCount ? "sheet-card selected expanded-card" : "sheet-card expanded-card"}${goalClosing ? " closing" : ""}`, key: "card" }, [
                h("button", { className: "sheet-card-head", onClick: closeGoal, key: "head" }, [
                  h("span", { className: "sheet-option-icon green", key: "icon" },
                    h("img", { src: `${A}recommendation/icon-goal-recommend.svg`, alt: "" }),
                  ),
                  h("span", { className: "sheet-card-copy", key: "copy" }, [
                    h("span", { key: "title" }, [h("strong", null, "추천 기준"), h("em", { className: goalCount ? "selected-summary" : "" }, goalSummary)]),
                    h("small", { key: "desc" }, "운동, 건강 등 나의 목표에 맞는 추천이 가능해요."),
                  ]),
                  Chevron({ open: goalExpanded && !goalClosing }),
                ]),
                h("div", { className: `accordion-body${goalExpanded && !goalClosing ? " open" : ""}${goalClosing ? " closing" : ""}`, key: "body" },
                  h("div", { className: "accordion-body-inner" }, [
                    h("div", { className: "sheet-options", key: "options" }, dietGoals.map((goal) => GoalOption(goal, selectedGoals, toggleGoal))),
                    SheetNote({ text: "최대 2개까지 선택할 수 있어요.", count: `${goalCount}/2` }),
                  ]),
                ),
              ])
            : h("button", { className: `${goalCount ? "sheet-card closed goal-closed selected-closed" : "sheet-card closed goal-closed"}${hintDismissed.goal ? "" : " demo-hint"}`, key: "card", onMouseDown: (event) => event.preventDefault(), onClick: openGoal }, [
                h("span", { className: "sheet-option-icon green", key: "icon" },
                  h("img", { src: `${A}recommendation/icon-goal-recommend.svg`, alt: "" }),
                ),
                h("span", { className: "sheet-card-copy", key: "copy" }, [
                  h("span", { key: "title" }, [h("strong", null, "추천 기준"), h("em", { className: goalCount ? "selected-summary" : "" }, goalSummary)]),
                  h("small", { key: "desc" }, "운동, 건강 등 나의 목표에 맞는 추천이 가능해요."),
                ]),
                Chevron({ open: false }),
              ]),
        ]),
        h("section", { className: "sheet-section ingredient-anchor", key: "ingredients" }, [
          h("h2", null, "2. 민감하거나 피하고 싶은 성분이 있나요?"),
          ingredientsOpen || sugarOpen
            ? sugarOpen
              ? SugarSettingPanel({
                  closing: ingredientsClosing,
                  selectedSugarAvoids,
                  toggleSugarAvoid,
                  selectedIngredients,
                  toggleIngredient,
                  onToggleSugar: toggleSugarInsidePanel,
                  onClose: closeIngredients,
                  onCollapse: collapseSugar,
                })
              : IngredientSelectionList({
                  closing: ingredientsClosing,
                  selectedIngredients,
                  toggleIngredient,
                  sugarSummary: sugarIngredientSummary,
                  onClose: closeIngredients,
                  onSugar: openSugar,
                  onSugarToggle: toggleSugarFromList,
                  onUnavailableDetail: showUnavailableDetailToast,
                })
            : h("button", { className: `sheet-card ingredient-closed${hintDismissed.ingredients ? "" : " demo-hint"}`, key: "card", onMouseDown: (event) => event.preventDefault(), onClick: openIngredients }, [
                h("span", { className: "sheet-card-copy", key: "copy" }, [
                  h("span", { key: "title" }, [
                    h("strong", null, ingredientClosedSummary.countText),
                    ingredientClosedSummary.detailText
                      ? h("span", { className: "ingredient-closed-detail", key: "summary" }, ` ${ingredientClosedSummary.detailText}`)
                      : null,
                  ]),
                ]),
                Chevron({ open: false }),
              ]),
        ]),
        h("button", { className: canFilter ? "filter-start inline" : "filter-start inline disabled", disabled: !canFilter, onClick: startFiltering, key: "start" }, isComplete ? "완료" : "필터링 시작하기"),
      ]),
    ]),
    toastVisible ? h("div", { className: "demo-toast", key: `toast-${toastKey}`, role: "status" }, toastMessage) : null,
  ]);
}

function SectionTitle() {
  return h("div", { className: "section-title" }, [
    h("div", { key: "txt" }, [h("h2", null, "내게 맞는 식품, 찾아볼까요?"), h("p", null, "내 기준을 설정하면 맞춤 추천 제품을 볼 수 있어요.")]),
    h("button", { className: "view-all", key: "all" }, [
      "전체보기",
      h("img", { className: "view-all-arrow", src: `${A}view-all-arrow.svg`, alt: "" }),
    ]),
  ]);
}

function ProductActions() {
  return h("div", { className: "product-actions" }, [
    h("button", { className: "outline-button neutral", "aria-label": "담기", key: "cart" },
      h("img", { className: "action-button-image", src: `${A}cart-button-new.svg?v=crisp1`, alt: "" }),
    ),
    h("button", { className: "outline-button accent", "aria-label": "비교하기", key: "plus" },
      h("img", { className: "action-button-image", src: `${A}compare-button-new.svg?v=crisp1`, alt: "" }),
    ),
  ]);
}

function ProductItem(product) {
  return h("article", { className: "product-item", key: product.name }, [
    h("div", { className: "product-main", key: "main" }, [
      h("img", { className: "product-image", src: product.image, alt: "", key: "img" }),
      h("div", { className: "product-info", key: "info" }, [
        h("h3", { key: "name" }, product.name),
        h("div", { className: "price-block", key: "price" }, [
          product.originalPrice ? h("div", { className: "original-price", key: "origin" }, product.originalPrice) : null,
          h("div", { className: "current-price-row", key: "current" }, [product.discount ? h("span", { className: "discount", key: "discount" }, product.discount) : null, h("strong", { key: "price" }, product.price)]),
        ]),
        h("div", { className: "reviews", key: "reviews" }, [Icon({ type: "chat" }), h("span", null, product.reviews)]),
      ]),
    ]),
    ProductActions(),
  ]);
}

function ProductList() {
  return h("section", { className: "products" }, [
    SectionTitle(),
    h("div", { className: "product-list", key: "list" }, products.map(ProductItem)),
    h("div", { className: "compare-note", key: "note" }, [
      svg(null, 14, "0 0 14 14", h("path", { d: "M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0Zm.7 10.5H6.3V6.2h1.4v4.3ZM7 5.1a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z", fill: "currentColor" })),
      h("span", null, "최대 3개 제품까지 비교할 수 있습니다."),
    ]),
  ]);
}

function BottomTabBar() {
  return h("nav", { className: "bottom-tabs", "aria-label": "하단 메뉴" },
    h("img", { className: "bottom-tabs-image", src: `${A}bottom-tabbar.svg?v=recommend1`, alt: "" }),
  );
}

function App() {
  const [isRecommendationOpen, setRecommendationOpen] = React.useState(false);
  const [hintDismissed, setHintDismissed] = React.useState({});
  const dismissHint = (key) => {
    setHintDismissed((current) => current[key] ? current : { ...current, [key]: true });
  };
  const openRecommendation = () => {
    setRecommendationOpen(true);
    setTimeout(() => document.querySelector(".recommendation-scroll")?.scrollTo(0, 0), 0);
  };
  return h("main", { className: "page-shell" }, h("div", { className: "phone-frame" }, [
    StatusBar(),
    h("div", { className: "app-content", key: "content" }, [TopNav(), Hero({ onOpenRecommendation: openRecommendation, hintDismissed, dismissHint }), ProductList()]),
    BottomTabBar(),
    isRecommendationOpen ? h(RecommendationSheet, { onClose: () => setRecommendationOpen(false), hintDismissed, dismissHint, key: "recommendation-sheet" }) : null,
  ]));
}

createRoot(document.getElementById("root")).render(h(App));
