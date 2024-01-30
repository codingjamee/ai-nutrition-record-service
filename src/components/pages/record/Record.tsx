import { useNavigate, useParams } from 'react-router-dom';
import style from './record.module.css';
import getDates from '@utils/getDates';
import { useState, useEffect } from 'react';
import { mapSelectMealToMsg, mealTypes } from './recordMappingConstant';
import useApi, { TriggerType } from '@hooks/useApi';
import { RecordProps } from './RecordTypes';
const mealLogo = '/images/9gram_logo_box.png';

const Record = () => {
  const params = useParams();
  const selectedDate = params.selectedDate;
  const { thisYear, thisMonth, thisDay } = getDates();
  const todayDate = `${thisYear}-${thisMonth}-${thisDay}`;
  const dateSplit = selectedDate
    ? selectedDate.split('-')
    : todayDate.split('-');

  const [foodData, setFoodData] = useState<RecordProps>({
    dateArr: [[1], [2], [3], [4]] as unknown as Array<
      [number, number, string | null]
    >,
  });

  const {
    trigger,
    result: data,
  }: {
    trigger: TriggerType;
    result: { data: RecordProps } | undefined;
  } = useApi({
    path: `/cumulative-record/meal?date=${dateSplit[0]}-${dateSplit[1]}-${dateSplit[2]}`,
  });

  useEffect(() => {
    trigger({});
  }, []);

  useEffect(() => {
    if (data && data.data) {
      setFoodData(data.data);
    }
  }, [data]);

  const formatDate =
    dateSplit.length === 3
      ? `${dateSplit[0]}.${dateSplit[1]}.${dateSplit[2]}`
      : `${thisYear}.${thisMonth}.${thisDay}`;

  const headerDate = formatDate || `${thisYear}.${thisMonth}.${thisDay}`;

  const navigate = useNavigate();

  const handleMealClick = (meal: number) => {
    navigate(`/record/${selectedDate || todayDate}/${meal}`);
  };
  const handleMealDelete = (meal: number) => {
    const updatedFoodData = { ...foodData };
    updatedFoodData.dateArr[meal - 1] = [meal, 0, null];
    trigger({
      method: 'delete',
      path: `/cumulative-record/meal?date=${dateSplit[0]}-${dateSplit[1]}-${dateSplit[2]}&meal=${meal}`,
    });
    setFoodData(updatedFoodData);
  };

  return (
    <div>
      <div className={style.meal_container}>
        <div className={style.meal_header}> {headerDate} </div>
        {foodData &&
          foodData.dateArr.map((mealData, index) => (
            <div
              onClick={() => handleMealClick(mealData[0])}
              key={index}
              className={style.meal_content}
            >
              <div className={style.meal_info}>
                {mealData[1] || mealData[2] ? (
                  <>
                    <img
                      className={style.meal_contentBackground}
                      src={mealData[2] || mealLogo}
                      alt='하루 식단 이미지'
                    />
                    s
                    <div className={style.meal_time}>
                      {mapSelectMealToMsg[mealData[0]]}
                    </div>
                    <div className={style.meal_calories}>
                      {' '}
                      {mealData[1] ?? 0} kcal{' '}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={style.defaultBackground}></div>
                    <div className={style.default_time}>
                      {mapSelectMealToMsg[mealData[0]]}
                    </div>
                    <div className={style.default_calories}> 0 kcal </div>
                  </>
                )}
              </div>
              <img
                className={style.meal_button}
                src={
                  !mealData[1] && !mealData[2]
                    ? '/icons/meal_plus_button.png'
                    : '/icons/meal_delete.png'
                }
                onClick={() =>
                  !mealData[1] && !mealData[2]
                    ? handleMealClick(mealData[0])
                    : handleMealDelete(mealData[0])
                }
                alt={
                  !mealData[1] && !mealData[2]
                    ? '하루 식단 추가 버튼'
                    : '하루 식단 삭제 버튼'
                }
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Record;
