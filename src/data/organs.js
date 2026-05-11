export const ORGANS = [
    { id: 'liver', name: '간', sub: 'Liver', hasData: true },
    { id: 'kidney', name: '신장', sub: 'Kidney', hasData: false },
    { id: 'spleen', name: '비장', sub: 'Spleen', hasData: false },
    { id: 'heart', name: '심장', sub: 'Heart', hasData: false },
    { id: 'lung', name: '폐', sub: 'Lung', hasData: false },
    { id: 'bladder', name: '방광', sub: 'Bladder', hasData: false },
    { id: 'stomach', name: '위', sub: 'Stomach', hasData: false },
    { id: 'intestine', name: '장', sub: 'Intestine', hasData: false },
    { id: 'pancreas', name: '췌장', sub: 'Pancreas', hasData: false },
    { id: 'adrenal', name: '부신', sub: 'Adrenal', hasData: false },
    { id: 'lymph', name: '림프절', sub: 'Lymph node', hasData: false },
    { id: 'prostate', name: '전립선', sub: 'Prostate', hasData: false },
];

export const DATA = {
    liver: {
        modalities: {
            'X-ray': {
                size: {
                    label: '크기 (Size)',
                    options: ['크다', '작다', 'Normal'],
                    hints: {
                        '크다': [
                            'Reactive/vacuolar hepatopathy',
                            'Hepatic lipidosis',
                            'Inflammation / infiltrative dz',
                            'Primary or metastatic neoplasia',
                        ],
                        '작다': [
                            'PSS (Portosystemic shunt)',
                            'Cirrhosis',
                        ],
                        'Normal':[]
                    }
                },
                margin: {
                    label: '변연 (Margin)',
                    options: ['Regular', 'Irregular']
                },
                findings: {
                    '크다|Regular': '간 다소 종대되어 관찰됩니다. reactive/vacuolar hepatopathy, hepatic lipidosis, inflammation/infiltrative dz, mass 등의 가능성 고려될 수 있으며, 간담도 초음파 검사 및 혈액검사 종합한 평가 추천됩니다. ',
                    '크다|Irregular': '간 다소 종대되어 관찰되며, 변연 다소 불균일한 양상으로 관찰됩니다. 복부 초음파 및 혈액검사 종합한 평가 추천됩니다. ',
                    '작다|Regular': '간 다소 작게 관찰됩니다. PSS, chirrosis 등의 가능성 고려될 수 있으며 간담도 초음파 및 혈액검사 종합한 평가 추천됩니다. ',
                    '작다|Irregular': '간 다소 작게 관찰되며, 변연은 불규칙한 양상으로 관찰됩니다. 간경화 등의 가능성 고려될 수 있으며 혈액검사 및 간담도 초음파 종합한 평가 추천됩니다. ',
                    'Normal|Irregular': '간 크기는 정상범주로 관찰되나 다소 불균일한 변연으로 관찰됩니다. 초기 간 질환/종양 등의 가능성 배제할 수 없으므로 간담도 초음파 및 혈액검사 종합한 평가 추천됩니다. ',
                }
            },
            'Ultrasound': {
                Echogenicity: {
                    label: '에코 (Echogenicity)',
                    options: ['hyperecho', 'isoecho', 'hypoecho']
                },
                margin: {
                    label: '변연 (Margin)',
                    options: ['Regular', 'Irregular']
                },
                contour: {
                    label: '윤곽 (contour)',
                    options: ['fine', 'coarse', 'nrf']
                },
                texture: {
                    label: '조직 (texture)',
                    options: ['homo', 'hetero']
                },
                nodule_presence: {
                    label: '결절/종괴 유무',
                    options: ['있음', '없음']
                },
                // 결절 있을 때만 보이는 항목들
                nodule_count: {
                    label: '개수',
                    options: ['하나', '두개 이상'],
                    showIf: { cat: 'nodule_presence', val: '있음' }
                },
                nodule_size: {
                    label: '크기',
                    options: ['>2cm', '<2cm'],
                    showIf: { cat: 'nodule_presence', val: '있음' }
                },
                nodule_echo: {
                    label: '결절 에코',
                    options: ['anecho', 'hypo', 'hyper', 'mixed'],
                    showIf: { cat: 'nodule_presence', val: '있음' }
                },
                nodule_boundary: {
                    label: '경계',
                    options: ['focal', 'multifocal', 'diffuse'],
                    showIf: { cat: 'nodule_presence', val: '있음' }
                },
                findings: {
                    // 소견문 데이터는 나중에 추가
                }
            },
        },
    },
    // 다른 장기 데이터는 여기에 추가하세요
};