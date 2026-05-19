export const ORGANS = [
  { id: "liver", name: "간", sub: "Liver", hasData: true },
  { id: "kidney", name: "신장", sub: "Kidney", hasData: true },
  { id: "spleen", name: "비장", sub: "Spleen", hasData: false },
  { id: "heart", name: "심장", sub: "Heart", hasData: false },
  { id: "lung", name: "폐", sub: "Lung", hasData: false },
  { id: "bladder", name: "방광", sub: "Bladder", hasData: false },
  { id: "stomach", name: "위", sub: "Stomach", hasData: false },
  { id: "intestine", name: "장", sub: "Intestine", hasData: false },
  { id: "pancreas", name: "췌장", sub: "Pancreas", hasData: false },
  { id: "adrenal", name: "부신", sub: "Adrenal", hasData: false },
  { id: "lymph", name: "림프절", sub: "Lymph node", hasData: false },
  { id: "prostate", name: "전립선", sub: "Prostate", hasData: false },
];

export const DATA = {
  liver: {
    modalities: {
      "X-ray": {
        modalityHint: [
          "- 개 LL/T11 ratio) normal nonbrachycephalic breed dogs; 5.40 ± 0.74 (3.92<ref<6.88)",
          "non-Pekingese brachycephalic 5.16 ± 0.74 (3.68<ref<6.64)                         ",
          "Pekingese 4.64 ± 0.65(3.34<ref<5.94)",
          "- 냥 LL/T11 ratio) 4.22 ± 0.54 (3.14<ref<5.3)",
        ],
        size: {
          label: "크기 (Size)",
          options: ["크다", "작다", "Normal"],
          hints: {
            크다: [
              "Reactive/vacuolar hepatopathy",
              "Hepatic lipidosis",
              "Inflammation / infiltrative dz",
              "Primary or metastatic neoplasia",
            ],
            작다: ["PSS (Portosystemic shunt)", "Cirrhosis"],
            Normal: [],
          },
        },
        margin: {
          label: "변연 (Margin)",
          options: ["Regular", "Irregular"],
        },
        findings: {
          "크다|Regular":
            "간 다소 종대되어 관찰됩니다. reactive/vacuolar hepatopathy, hepatic lipidosis, inflammation/infiltrative dz, mass 등의 가능성 고려될 수 있으며, 간담도 초음파 검사 및 혈액검사 종합한 평가 추천됩니다. ",
          "크다|Irregular":
            "간 다소 종대되어 관찰되며, 변연 다소 불균일한 양상으로 관찰됩니다. 복부 초음파 및 혈액검사 종합한 평가 추천됩니다. ",
          "작다|Regular":
            "간 다소 작게 관찰됩니다. PSS, chirrosis 등의 가능성 고려될 수 있으며 간담도 초음파 및 혈액검사 종합한 평가 추천됩니다. ",
          "작다|Irregular":
            "간 다소 작게 관찰되며, 변연은 불규칙한 양상으로 관찰됩니다. 간경화 등의 가능성 고려될 수 있으며 혈액검사 및 간담도 초음파 종합한 평가 추천됩니다. ",
          "Normal|Irregular":
            "간 크기는 정상범주로 관찰되나 다소 불균일한 변연으로 관찰됩니다. 초기 간 질환/종양 등의 가능성 배제할 수 없으므로 간담도 초음파 및 혈액검사 종합한 평가 추천됩니다. ",
        },
      },
      Ultrasound: {
        Echogenicity: {
          label: "에코 (Echogenicity)",
          options: ["isoecho", "hyperecho", "hypoecho"],
        },
        margin: {
          label: "변연 (Margin)",
          options: ["Sharp", "Blunt", "Irregular"],
        },
        contour: {
          label: "윤곽 (contour)",
          options: ["Normal", "Fine", "Coarse"],
        },
        // texture: {
        //   label: "조직 (texture)",
        //   options: ["homo", "hetero"],
        // },
        nodule_presence: {
          label: "결절/종괴 유무",
          options: ["있음", "없음"],
        },
        // 결절 있을 때만 보이는 항목들
        nodule_count: {
          label: "분포",
          options: ["Focal", "Multifocal", "Diffuse"],
          showIf: { cat: "nodule_presence", val: "있음" },
        },
        nodule_size: {
          label: "크기",
          options: ["<2cm", ">2cm"],
          showIf: { cat: "nodule_presence", val: "있음" },
        },
        nodule_echo: {
          label: "성상",
          options: ["Solid", "Cystic", "Mixed"],
          showIf: { cat: "nodule_presence", val: "있음" },
        },
        nodule_boundary: {
          label: "경계",
          options: ["Well-defined", "Ill-defined"],
          showIf: { cat: "nodule_presence", val: "있음" },
        },
        findings: {
          "isoecho|Sharp|Normal|없음":
            "간 실질 특이 사항 관찰되지 않습니다. 혈액검사 종합한 평가 추천됩니다. ",
          "isoecho|Blunt|Normal|없음":
            "간 실질의 에코는 정상적으로 관찰되나 변연 다소 blunt하게 관찰되는 바, 경미한 간종대 고려됩니다. 혈액검사 종합한 평가 추천됩니다. ",
          "isoecho|Blunt|Fine|없음":
            "간 실질의 에코는 정상적으로 관찰되나 blunt한 변연과 fine한 echotexture 관찰되는 바, 경미한 간종대 고려됩니다. 혈액검사 종합한 평가 추천됩니다. ",
          "isoecho|Blunt|Coarse|없음":
            "간 실질의 에코는 정상적으로 관찰되나, blunt한 변연과 coarse한 echotexture 관찰됩니다. 만성 간염, 초기 간경화, 미만성 간침윤 등의 가능성 고려될 수 있으며, 혈액검사 및 추적관찰 추천됩니다. ",
          "isoecho|Irregular|Normal|없음":
            "간 변연 다소 불균일한 양상으로 관찰됩니다. 에코 및 실질은 정상적으로 관찰되는 바, 국소적인 섬유화 혹은 염증성 변화 가능성 고려될 수 있습니다. 혈액검사 종합한 평가 추천됩니다. ",
          "isoecho|Irregular|Coarse|없음":
            "간 변연 다소 불균일한 양상으로 관찰되며 실질의 coarse한 echotexture 관찰됩니다. 만성적인 염증성 변화 및 섬유화 가능성 고려되며 혈액검사 종합한 간기능 평가와 FNA/trucut/biopsy 등을 통한 세포/조직학적 검사가 고려될 수 있습니다. ",
          "hyperecho|Sharp|Normal|없음":
            "간 실질의 고에코 변화 관찰됩니다. 침윤성 간질환 (Cushing, DM, steroid-induced, hepatic lipidosis etc..), 만성 간염 혹은 침윤성 종양 (MCT, Lymphoma, plasma cell tumor etc..)등의 가능성 고려될 수 있습니다. 임상증상 및 혈액검사, 요검사 등을 종합한 평가 추천됩니다. ",
          "hyperecho|Sharp|Fine|없음":
            "간 실질의 고에코 변화 관찰됩니다. 침윤성 간질환 (Cushing, DM, steroid-induced, hepatic lipidosis etc..), 만성 간염 혹은 침윤성 종양 (MCT, Lymphoma, plasma cell tumor etc..)등의 가능성 고려될 수 있습니다. 임상증상 및 혈액검사, 요검사 등을 종합한 평가 추천됩니다. ",
          "hyperecho|Sharp|Coarse|없음":
            "간 실질의 고에코 변화 및 corase한 echotexture 관찰됩니다. 지방 침착, 만성적인 섬유화 등의 가능성, 미만성 간 질환 가능성 고려될 수 있으며 혈액검사 종합한 평가 추천됩니다. ",
          "hyperecho|Blunt|Normal|없음":
            "간 실질의 고에코 변화 및 blunt한 간 변연 관찰됩니다. 침윤성 간질환 (Cushing, DM, steroid-induced, hepatic lipidosis etc..), 만성 간염 혹은 침윤성 종양 (MCT, Lymphoma, plasma cell tumor etc..)등의 가능성 고려될 수 있습니다. 임상증상 및 혈액검사, 요검사 등을 종합한 평가 추천됩니다.",
          "hyperecho|Blunt|Fine|없음":
            "간 실질의 고에코 변화 및 blunt한 간 변연 관찰됩니다. 침윤성 간질환 (Cushing, DM, steroid-induced, hepatic lipidosis etc..), 만성 간염 혹은 침윤성 종양 (MCT, Lymphoma, plasma cell tumor etc..)등의 가능성 고려될 수 있습니다. 임상증상 및 혈액검사, 요검사 등을 종합한 평가 추천됩니다. ",
          "hyperecho|Blunt|Coarse|없음":
            "간 실질의 고에코 변화 및 blunt한 간 변연, coarse한 echotexture 관찰됩니다. 침윤성 간질환 (Cushing, DM, steroid-induced, hepatic lipidosis etc..), 만성 간염 혹은 침윤성 종양 (MCT, Lymphoma, plasma cell tumor etc..)등의 가능성 고려될 수 있습니다. 임상증상 및 혈액검사, 요검사 등을 종합한 평가 추천됩니다. ",
          "hypoecho|Sharp|Normal|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Sharp|Fine|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Sharp|Coarse|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Blunt|Normal|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Blunt|Fine|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Blunt|Coarse|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Irregular|Normal|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Irregular|Fine|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
          "hypoecho|Irregular|Coarse|없음":
            "간 실질의 저에코 변화 관찰됩니다. 간 울혈, 급성 간염 등의 가능성 고려될 수 있으며 혈액검사 종합한 평가와 우심부전 여부를 위한 청진, 심장 초음파 검사 등이 고려됩니다. 1) 혈관벽 두드러짐 - 간 실질의 저에코변화 및 혈관벽 다소 두드러지게 관찰됩니다. 급성 간염 가능성 고려되며 문진을 통한 이력 평가와 혈액검사 종합한 평가 추천됩니다. 2) 혈관벽 확장 -  간 실질의 저에코 변화 및 혈관 확장 관찰됩니다. 울혈 가능성 고려되며 혈액검사, 심장사상충 키트 검사 및 우심부전 여부 확인을 위한 심장 초음파 검사 추천됩니다.    ",
        },
      },
    },
  },
  kidney: {
    modalities: {
      "X-ray": {
        findings: {},
      },
      Ultrasound: {
        findings: {},
      },
    },
  },
  // 다른 장기 데이터는 여기에 추가하세요
};
