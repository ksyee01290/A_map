export const ORGANS = [
  { id: 'liver',     name: '간',     sub: 'Liver',       hasData: true  },
  { id: 'kidney',    name: '신장',   sub: 'Kidney',      hasData: false },
  { id: 'spleen',    name: '비장',   sub: 'Spleen',      hasData: false },
  { id: 'heart',     name: '심장',   sub: 'Heart',       hasData: false },
  { id: 'lung',      name: '폐',     sub: 'Lung',        hasData: false },
  { id: 'bladder',   name: '방광',   sub: 'Bladder',     hasData: false },
  { id: 'stomach',   name: '위',     sub: 'Stomach',     hasData: false },
  { id: 'intestine', name: '장',     sub: 'Intestine',   hasData: false },
  { id: 'pancreas',  name: '췌장',   sub: 'Pancreas',    hasData: false },
  { id: 'adrenal',   name: '부신',   sub: 'Adrenal',     hasData: false },
  { id: 'lymph',     name: '림프절', sub: 'Lymph node',  hasData: false },
  { id: 'prostate',  name: '전립선', sub: 'Prostate',    hasData: false },
];

export const DATA = {
  liver: {
    modalities: {
      'X-ray': {
        '크기 (Size)': {
          'Enlarged': '간 다소 종대되어 관찰됩니다.',
          'Small':    'The liver is small in size, with cranial displacement of the gastric axis.',
          'Normal':   'Hepatic size is within normal limits.',
        },
        '변연 (Margin)': {
          'Regular':   'reactive/vacuolar hepatopathy, hepatic lipidosis, inflammation/infiltrative dz, mass 등의 가능성 고려될 수 있으며, 간담도 초음파 검사 및 혈액검사 종합한 평가 추천됩니다. ',
          'Irregular': 'Hepatic margins appear irregular and indistinct.',
        },
      },
      'Ultrasound': {
        '에코 (Echogenicity)': {
          'Hyperechoic':   'The hepatic parenchyma is diffusely hyperechoic compared to the renal cortex.',
          'Hypoechoic':    'The hepatic parenchyma is diffusely hypoechoic.',
          'Isoechoic':     'The hepatic parenchyma is isoechoic and homogeneous.',
          'Heterogeneous': 'The hepatic parenchyma is heterogeneous in echogenicity.',
        },
        '크기 (Size)': {
          'Enlarged': 'The liver is diffusely enlarged on ultrasound examination.',
          'Small':    'The liver appears small with rounded margins.',
          'Normal':   'Hepatic size is within normal limits.',
        },
        '국소 병변 (Focal lesion)': {
          'Cyst':   'A well-defined anechoic structure with posterior acoustic enhancement is identified, consistent with a hepatic cyst.',
          'Nodule': 'A focal hypoechoic nodule is identified within the hepatic parenchyma.',
          'None':   'No focal hepatic lesions are identified.',
        },
      },
    },
  },
  // 다른 장기 데이터는 여기에 추가하세요
};