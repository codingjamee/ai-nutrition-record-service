import styles from '@components/pages/ai-analyze/drawer.module.css';
import DrawerCard from './DrawerCard';

const DUMMYdrawerData = [
  {
    date: '24.01.02',
    questionType: '식단추천',
    question: '내 목표에 맞게 추천 받고 싶어!',
    text: '권장 섭취 칼로리가 1200kcal이고 근육증량을 목표로 하니, 아침에 닭가슴살 300g, 두유 200ml, 현미밥 150g, 기타 반찬 자유롭게 드시는 걸 추천드립니다. 점심과 저녁은 사과 하나, 소고기 200g 정도 먹으시고 하던 운동 지속하시면 됩니다.',
    option: { goal: '근육증량', calorie: 1200 },
  },
  {
    date: '24.01.03',
    questionType: '목표추천',
    question: undefined,
    text: '아침에 닭가슴살 100g, 두유 200ml, 현미밥 50g을 섭취하세요. 오후에는 건강한 간식으로 과일과 견과류를 즐겨보세요. 저녁 식사로는 양배추 샐러드와 그릴된 연어를 추천합니다.',
    option: undefined,
  },
  {
    date: '24.01.04',
    questionType: '식단평가',
    question: '오늘 하루 내 식단은 어땠어?',
    text: '오늘의 점심에는 단백질이 풍부한 두부와 채소 스튜를 드세요. 간식으로는 삶은 달걀과 수박을 먹어보세요. 저녁에는 양송이버섯과 닭가슴살을 사용한 볶음 요리를 추천합니다.',
    option: undefined,
  },
  {
    date: '24.01.05',
    questionType: '식단추천',
    question: '오늘은 맛있는 걸로 추천받을래!',
    text: '간식으로는 그릴된 아스파라거스와 토마토를 즐겨보세요. 점심에는 올리브 오일과 로즈마리로 조리한 구운 닭다리를 드세요. 저녁 식사에는 새우와 야채를 넣은 카레를 추천합니다.',
    option: undefined,
  },
  {
    date: '24.01.06',
    questionType: '식단추천',
    question: '내 목표에 맞게 추천 받고 싶어!',
    text: '아침에는 볶은 브로콜리와 토마토를 곁들인 계란말이를 드세요. 간식으로는 그릴된 베이컨과 아보카도를 즐겨보세요. 저녁에는 참치와 양파를 사용한 스파게티를 추천합니다.',
    option: { goal: '체중유지', calorie: 1400 },
  },
  {
    date: '24.01.07',
    questionType: '식단평가',
    question: '이번주 식단 전체를 평가받을래!',
    text: '하루에 2리터의 물을 마시는 것을 잊지 마세요. 간식으로는 샐러드에 올린 갈릭 치킨 스트립스를 추천합니다. 저녁에는 두부와 채소를 사용한 카레를 드세요. 마지막으로 자정에는 우유와 견과류를 함께 먹어보세요.',
    option: undefined,
  },
];

const AiDrawer = () => {
  return (
    <div className={styles.drawer_wrapper}>
      {DUMMYdrawerData.map((drawer, idx) => (
        <DrawerCard
          key={`drawercard-${idx}`}
          date={drawer.date}
          type={drawer.questionType}
          tag={drawer.question}
          text={drawer.text}
          option={drawer.option}
        />
      ))}
    </div>
  );
};

export default AiDrawer;
