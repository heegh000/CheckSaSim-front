interface QuestionInfoType {
    content : string;
    questId : number;
    isReverse : boolean;
    score : number;
};

interface AnswerInfoType {
    content : string;
    answerId : number;
};


interface SurveyInfoType {
    surveyId : number;
    surveyTitle : string;
    questionData : QuestionInfoType[];
    answerData : AnswerInfoType[];
};

interface newSurveyDataType {
    weekNum : number;
    surveyTitle : string;
    answerList : any;
    questList : any;
    isReverseList : any;
}

export type {
    SurveyInfoType,
    AnswerInfoType,
    QuestionInfoType,
    newSurveyDataType
}