export const projects = [
  {
    title: 'Acute Kidney Injury Prediction',
    tech: 'Python, XGBoost, Shap',
    kind: 'High dimension classication using structured and unstructured data',
    description: `
The goal was to develop a model with a similar approach as those presented
in state of the art papers for this disease and to enhance it using nlp. 
The dataset used was based on the *MIMIC* database and composed of 20742 adult patients with **more than 100000 features**. 
Our best model is based on *XGBoost* and has an auroc score of **86.5%** 24 hours before the event.
A second objective was **model explainability** and **real-time analysis of the predictions**. `,
    link: 'https://github.com/AymericBasset/Acute_Kidney_Injury_Prediction_In_ICU',
    linkTitle: `Project page`,
  },
  {
    title: 'Others',
    tech: 'Python',
    kind: 'work in progress',
    description: `
I'm currently working on getting as much of my work available on github. This is to avoid non-disclosure agreement issues and polish my repositories. 
Please make sure to check back later or contact me directly to talk more about the rest of my projects!
I will be adding soon (non-exaustive): Gan research on financial time series, Reiforcement Learning game engine, Tool for imputation of missing values in large industrial databases,
Web scrapping tool for health related topics ...

`,
    link: '',
    linkTitle: `Project page`,
  },
]