export interface MealDetailData {
  [key: string]: {
    food: {
      foodName: string;
      foodImage: string;
      XYCoordinate: number[];
    }[];
    totalCalories: number;
    totalNutrient: {
      carbohydrates: number;
      proteins: number;
      fats: number;
      dietaryFiber: number;
    };
    // recommendNutrient: {
    //   carbohydrates: number;
    //   proteins: number;
    //   fats: number;
    //   dietaryFiber: number;
    // };
    imgurl: string | undefined;
  };
}

const mealDetailData: MealDetailData = {
  1: {
    food: [
      {
        foodName: '떡만둣국',
        foodImage: 'Image1',
        XYCoordinate: [10, 9],
      },
      {
        foodName: '김치찌개',
        foodImage: 'Image1',
        XYCoordinate: [31, 10],
      },
      {
        foodName: '오징어무침',
        foodImage: 'Image1',
        XYCoordinate: [70, 55],
      },
      {
        foodName: '오징어무침1',
        foodImage: 'Image1',
        XYCoordinate: [70, 50],
      },
    ],

    totalCalories: 1400,
    totalNutrient: {
      carbohydrates: 240,
      proteins: 80,
      fats: 25,
      dietaryFiber: 2,
    },
    imgurl: '/images/record_example.png',
  },

  2: {
    food: [
      {
        foodName: '감자떡',
        foodImage: 'Image1',
        XYCoordinate: [],
      },
      {
        foodName: '고구마빵',
        foodImage: 'Image1',
        XYCoordinate: [],
      },
      {
        foodName: '아이스크림',
        foodImage: 'Image1',
        XYCoordinate: [],
      },
      {
        foodName: '약과',
        foodImage: 'Image1',
        XYCoordinate: [],
      },
    ],
    totalCalories: 600,
    totalNutrient: {
      carbohydrates: 240,
      proteins: 80,
      fats: 25,
      dietaryFiber: 2,
    },
    // recommendNutrient: {
    //   carbohydrates: 200,
    //   proteins: 80,
    //   fats: 50,
    //   dietaryFiber: 4,
    // },
    imgurl: undefined,
  },

  3: {
    food: [
      {
        foodName: '감자탕면',
        foodImage: 'Image1',
        XYCoordinate: [50, 130],
      },
      {
        foodName: '뚝배기',
        foodImage: 'Image1',
        XYCoordinate: [120, 154],
      },
      {
        foodName: '비빔국수',
        foodImage: 'Image1',
        XYCoordinate: [50, 130.02],
      },
      {
        foodName: '갈비탕',
        foodImage: 'Image1',
        XYCoordinate: [50, 130.02],
      },

      {
        foodName: '어쩌구저쩌구',
        foodImage: 'Image1',
        XYCoordinate: [35.67, 146.02],
      },

      {
        foodName: '올로로롤1',
        foodImage: 'Image1',
        XYCoordinate: [50, 70],
      },
      {
        foodName: '올로로롤2',
        foodImage: 'Image1',
        XYCoordinate: [35.67, 146.02],
      },
      {
        foodName: '올로로롤3',
        foodImage: 'Image1',
        XYCoordinate: [35.67, 146.02],
      },
      {
        foodName: '올로로롤4',
        foodImage: 'Image1',
        XYCoordinate: [35.67, 146.02],
      },
      {
        foodName: '올로로롤5',
        foodImage: 'Image1',
        XYCoordinate: [35.67, 146.02],
      },
      {
        foodName: '올로로롤6',
        foodImage: 'Image1',
        XYCoordinate: [35.67, 146.02],
      },
    ],
    totalCalories: 5100,
    totalNutrient: {
      carbohydrates: 100,
      proteins: 50,
      fats: 3,
      dietaryFiber: 10,
    },
    // recommendNutrient: {
    //   carbohydrates: 200,
    //   proteins: 80,
    //   fats: 50,
    //   dietaryFiber: 4,
    // },
    imgurl: '/images/record_example.png',
  },

  4: {
    food: [],
    totalCalories: 0,
    totalNutrient: { carbohydrates: 0, proteins: 0, fats: 0, dietaryFiber: 0 },
    // recommendNutrient: {
    //   carbohydrates: 200,
    //   proteins: 80,
    //   fats: 50,
    //   dietaryFiber: 4,
    // },
    imgurl: undefined,
  },
};

export { mealDetailData };
