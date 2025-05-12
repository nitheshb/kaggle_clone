// import { useState } from 'react';
// import { Search, X, MoreHorizontal, ChevronDown, LayoutGrid } from 'lucide-react';
// import { SlidersHorizontal } from 'lucide-react';



// export default function Competitions() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterActive, setFilterActive] = useState(false);
//   // Sample competition data based on the image
//  const competitions = [
//     {
//       id: 1,
//       title: "Predict Calorie Expenditure",
//       series: "Playground Series - Season 5, Episode 5",
//       type: "Playground",
//       teams: 1520,
//       timeRemaining: "22 days to go",
//       score: "5.05",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746884072&Signature=GxZRzok8%2B3PmO%2FL7wSiX3ctUIxEmO%2BrJk2P4I3L%2FvSyecQbhBBpS%2BS45Sr59QynwWqXKjya4PBVar%2FjxKSzjY%2Fu6CTqW9MENsR8Ps7gbDkTzcwtvwWxmWnhSJrfdb0AAVcwkstCgSCnG%2B8DGp%2Fi0YOmgoNI7ozpSH17TBXSOCQbyN1VUIl38aae9Hl2G1b9QEQ4HpUcNuJUJSB27yiZyl31SwGPO6WSvplIU4WGVbwjc8NMV2FqIQJO2UVjiZZR%2BdM7H1Tjm%2BReK4OJD2yT9H0tXqiCB79XMqJnkw675qU6WgOiJkkfSxnTQKtLag57xw12blgkswvBlkZ3Zwx86jQ%3D%3D",
//       link: "/competitions/playground-series-s5e5"
//     },
//     {
//       id: 2,
//       title: "Yale/UNC-CH - Geophysical Waveform Inversion",
//       description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
//       type: "Research",
//       teams: 491,
//       timeRemaining: "2 months to go",
//       prize: "$50,000",
//    image:   "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746885253&Signature=UOS6W76N9jlJMEMxjTDWDEd0PN8EWTvBt9IkMTYG1FVd%2Ba7njt%2BT5SGdR5mUmKv0Z8RBRB8EbgGgJhpsmCMeOWdiyH1Ej%2BRamyPB4qObjJR6i22Njpt83pHibg9cT%2FDjs0%2BoV7qIwvFatBtH5w%2FrhIMd6u4YMhn4E6DPDQX9xdMBKhm96SB%2BQet%2F35y4Pc56tLRvzEcrIvyldcoFDrwVRqK%2FbfebjoRfrM3%2FLJNETJh0NslrJ%2BcHFhXS2h1joBFWpKMNAqpTtRYUzHFfzsx0a80%2FOWyItfO7CmKWGXGFfxpvAqzbiMq3Cj3vCWLiH4HRMCk4G7xTIXkE%2BLvBQ2%2Fs1A%3D%3D"
 
//     },
//     {
//       id: 3,
//       title: "Image Matching Challenge 2025",
//       description: "Reconstruct 3D scenes from messy image collections.",
//       type: "Research",
//       subtype: "Code Competition",
//       teams: 609,
//       timeRemaining: "25 days to go",
//       prize: "$50,000",
//       image:
// "https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746885738&Signature=fsjmWmcCDO5u0NhT%2BeaUSRpI0UEINigInCZk7ZRt3zJGozEDQ1T1FZoRaGWRAmORxKjvuYKacj2RGaW960c6rLFIOb%2BFF97I4Ajdal6zAbLOyZ4vgdWvoFX8CEgSHhANov1y%2FELIBZMY897yYxJ%2F6aU6MMLFf3a5uFgVpqOcJMzAvKE34jvgyYx8lcM8J1phobOL1Zz4NjlMlBUubNQv3PCFDG0cCQZO3Yj4Y47K9TMUAijysBaCoFN98cZP2dmdHW32Lwe77YKcXELpFyLJeXTwBkJg0G1%2BBhVrT%2FCYqlhFTlLyXqq6x%2Bqbm2T%2BWDNT94TSRA2B%2B3oc85d6YwFVTA%3D%3D"
//      },
     
     
//      {
//       id: 4,
//       title: "Predict Podcast Listening Time",
//       series: "Playground Series - Season 5, Episode 4",
//       type: "Playground",
//       teams: 3310,
//       timeRemaining: "8 days ago",
//       score: "5.04",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746885738&Signature=lLAsty08zg1MCYQzE0N%2FJJyhYFAGA3WLVMlv5EQY4bPgU5xR4YX5yIX%2FmwS86VdPppxNkJg1VMwgvmZ4KYflsDysq9P%2FUZ9%2Fplumlun1L%2BpmdmSYYCLTPRLm5IhE%2FPEMvAOfgcA9jLxDur0oGt%2BJbceGJTSTRJhMrthjzyYCA3o3mvL%2Bkt0iHNZ%2BmrH9alyfArTmmaXIBADmPgBSvZEmS2dTtNk5XFqCD4hXMHMrIIAEKNRV3aAAbrS%2FU%2FPFJKsSUKyQG7yoR4YLSFE7SIABlIgwJHL1HXgTboBSMuzx4byEu7%2Btt%2FY4Jzo9Eo6MbmDuMVEzmEzgsdB01vwmVhgzKQ%3D%3D"
//     },

    
//   {
//     "id": 5,
//     "title": "ARC Prize 2025",
//     "series": "Code Competition",
//     "type": "Featured",
//     "teams": 357,
//     "timeRemaining": "6 months to go",
//     "prize": "$725,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=UtCROZk%2B%2B%2FSy2TpxaHETQIsfXSJ0jfT1swnoKw2ru7o%2BZBFhNreVG6KTCq3%2BEDdExFPz9%2BZAl34TjhrUArgx35CtafJ4GP1EfxchJ0EaFXLYOSukAk4It9Ztoqv%2F%2FpsvchTOg44Mbobm9y4pl%2BNC51XXh9mEuanvS6lhIWbcysHjPdfE9n9XajgXzUiFdrYp96W5GJLZnjSkPdVRfpsmlwzL5a%2F8X9fxWWUphbT1CyrbbvYzQ7IaF5BHPtDpoTwzrt6uxptlswtlXwIYO0fiUc7pjpohlV8WLvHRMw2321aJsHjLMpFZHZ62Y6%2BtvtpuXJNlbGcfR0p0pxFLR4NSxw%3D%3D"
//   },
//   {
//     "id": 6,
//     "title": "BirdCLEF+ 2025",
//     "series": "Code Competition",
//     "type": "Research",
//     "teams": 1599,
//     "timeRemaining": "A month to go",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=anv%2F5SZYU%2F22jHuNYHdefaumvjIsIhluoqYTWkC9Emh0xL%2Fv6uPMr77VnNrhuSABXWYLHNIWu3OIIC8h8BLTLPZBRm3LL3S7%2FkC%2BDcjW8zFOFzXOPtg2U8LDug4BHmQ0PNTHiKhOWpM3deGK4ZOVtAveV%2Bh4Up8I7ylD%2FglqBUZ1jXOQ4Ler%2FUFCAYJdRCfPfnmvjtAFfFyBBaEhks5I4erral4wgAMYBiwjHz4zk2aRCvXsFKZ%2FTPNTwDaQ7FQT6yuxD32PbYKkHURmvi6tr4NAaN7u2fxoJCY0GG%2FDoxSeTG7q6YzshQWESQVS80BTb%2FAzDj4u4fcoMjvXCnVjsw%3D%3D"
//   },
//   {
//     "id":7,
//     "title": "BYU - Locating Bacterial Flagellar Motors 2025",
//     "series": "Code Competition",
//     "type": "Research",
//     "teams": 908,
//     "timeRemaining": "A month to go",
//     "prize": "$65,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=P4fZIYIu3JBp0wdqRdVyhcM%2FFNWt4aiiUsozASblyJo%2FcfUGREnuV2xH3O99W8sUEQ0zqnMObe1URURp5cwcaZn04aTjLPiYkuCyjrRuIz6WOD5ZrMIfGnuu7jOHSFuchhbqS0BlGsDC5eFrSImUrnvcZw04YDNqDiKjSU54jH4LpfZbp5hgAVhKucvE%2BbxLvkY7O6JHfSTiQ%2F2x7jtTWeTxYlrnc5oplF4KfP5hVkpuBMPSVWqBNx3PPZ%2B%2BXNUWgbvJ7zhbdHZl2yZKnVmphvKouXIZfo%2BPN4UjFSGi1w%2B6g9Nwf8tIgzun3iDJZvy5AoL5y8oZdMAxmL3qc7TCsA%3D%3D"
//   },
//   {
//     "id":8,
//     "title": "Binary Prediction with a Rainfall Dataset",
//     "series": "Playground Series - Season 5, Episode 3",
//     "type": "Playground",
//     "teams": 4381,
//     "timeRemaining": "A month ago",
//     "prize": "Swag",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=eMunJOFManqUDB6HQHCxu8mkM6BwOIHmFqJoWsGQsKkn2PdrbNOAjNNSN0qkOOVfBfC8bU5Y0Uf%2BoWtWyU4c46%2BYte7Ro9ncZywZoHnYdej%2FuFsQmTMj2eHygeAezDgOIBoknGoGiE1LgkyOsj7y76sFogzvo3B5Ppnk7TZy30yCSIYZ4WYvO2CU%2BJ2tUzIOOelmuyx%2B3WJOCu8rTlNHcpkkx2Foko2Mg%2FeMqmQwlOCe1c8nY5sPtta0HmFzEyvuq5gAqw9KbqhVmM6ciRoTsToewII9YbS7ninYDACmhV87b%2Bl3JqIhPpB9%2FCTzKntnjmtqEgypsEurAO%2FMY2uhog%3D%3D"
//   },
//   {
//     "id": 9,
//     "title": "Stanford RNA 3D Folding",
//     "series": "Code Competition",
//     "type": "Featured",
//     "teams": 1265,
//     "timeRemaining": "20 days to go",
//     "prize": "$75,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=MXTVJOpEiBaLSdaZw0TvGPmGj3Y0EyBQM8z475TUOKFc6TtHh1jVcRZ%2FMbP%2FtAZhSf6SofRYf4tC%2B5YvB9b7fJYu90YGNIYPBgd40uygT9TKnj3Ej4fy5peGT%2FaNDJxcyqDYkz88sORsF2XIN9dH51g9MyEbdFtc5FOT43JP9PCndwsw9ky2lRgurh7u7B%2F57mFI%2F8Zyw6VruFshMs0vvvK5dABXld19M0Uyy7sixlSuZa6WRTkvrFYzKrwbSgwrhViQAofkS6sOF%2FMJduOQkVpzCMxlZwI%2FFObgciW%2BOYTAph0toBufadIlSju4DYYNCXze7Qimlzx7d3QlP%2FKpVQ%3D%3D"
//   },
//   {
//     "id": 10,
//     "title": "Drawing with LLMs",
//     "series": "Code Competition",
//     "type": "Featured",
//     "teams": 1276,
//     "timeRemaining": "18 days to go",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=MviNOLZWwX4aNLiD%2Bj4rai2orJYwlENIrYM1zynFcLVlImj10gGjhOZ%2FMRXVNYgtxVpZlADZrtYs3mPIPUv5pqoagFWqQhE2nAFmJQp8YymYKbnO1TF%2Fo3WhjcNWXOx1afcqkANP0h1UtYjtIxQDpXte3MDurqMMs0ETBw5EZSnFoQrl4Tu7C%2FEG6t6gOV9rqPyt9UIwPcINLm6%2BjbHHDg3hhlSiYHeWdWLmxOdgkeGh7AWuOCY9dkIfFJLjcfhDmPQS6pLhbeu7AAY3aCmAOurOCas2%2FA4rKyoebaTO1I%2F%2BLIc8L0uy82MH8ldZP6pJHqYDbFBD3UlEbnIgd0yGlw%3D%3D"
//   },
  
//   {
//     "id": 11,
//     "title": "March Machine Learning Mania 2025",
//     "series": "Code Competition",
//     "type": "Featured",
//     "teams": 1727,
//     "timeRemaining": "a month ago",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=DUH8g%2B3hQEoNclcT1jMpVHrpnuk%2FJd1PIBHXdhjhUozBZpXgaXJSFdtm5a%2BMDPW%2Bu5Fe31iPneo%2FD%2FiNWtEP7xQLHt5ZCV3ZZX%2FPg2xL05tbrOsqUPgZm6fPDH67mskDhV2zXvj0D75gFWbppa7hE3WFAUAY7TrFs8s1X742JSz%2F5SDNv96EKPOG7Zln%2BLqY2n8tr1FeYkHKp0eLvZbGeNSyGrq5laOF7k2CTUKUFRps8m1wNnZcMuRYgGe00M0Vw%2F0cpNldMElO1R1NZADDtp7V49C9m5pFopYNli7rCnDwfM1jz56QwxTtRcNxl4bjWfP4NwK3rU6a3VOu1JjXrw%3D%3D"
//   },
//   {
//     "id": 12,
//     "title": "Backpack Prediction Challenge",
//     "series": "Playground Series - Season 5, Episode 2",
//     "type": "Playground",
//     "teams": 3393,
//     "timeRemaining": "2 months ago",
//     "prize": "Swag",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=E%2BMaUqwntT2QVCyCLcozJTjWmXFcRcnER7RIvkOmA4X5cexqQTRcxwBgwUjl1KezyLmJlSyJFIyZNbDa%2BNi3d8EHdM%2B5OlEQMPAnbygyRWDaQRB3RChgmntjxisG%2F0K%2FOgWfJya9TzDMS2AjcHi6rTiDnTBOMNIKGfgTjbCyUAreA7UQp6y9wfUrXDjOHKYZXr%2BIBq4IL1vxp6Wi3ofGk8AYu05OFyVfhahfbvQwsuuIH2%2BMjh%2FFSV6SYvOCEWqzv3Qvy%2F7v2%2F8aWtfxNbeAm0GytJr0XTQnw5VyKg9KKa60X7Mp1%2Fw5pAzHS%2BmOCIvzLu5FXLoPMLvZB3Krhjd%2FWw%3D%3D"
//   },
//   {
//     "id": 13,
//     "title": "Forecasting Sticker Sales",
//     "series": "Playground Series - Season 5, Episode 1",
//     "type": "Playground",
//     "teams": 2722,
//     "timeRemaining": "3 months ago",
//     "prize": "Swag",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=JI7lFFgW4ZmaI1b3ZUs2f%2FC4tbZByXt5Qhx0rYxYIP%2FKDwu2QEq31yWqQWnTM2aV9vBFVOSuhLY4P0axwcDNBUMWoq4kceO1ZzfXFrllCSZ8TzvoHY4j0KelO2gTdlYQ8z8Kr5EjbilvXNpkrbISEXhIdhIJxpkYv3yvs8yQ7SdV2Gqf17smghWJF9f2InzMlCnChNqY8294T88aPpqFQBsDuYfNzTatKStayKe21xm1rOfeFalaufxbrRi09sdCN3xNq3XYS%2FyVD8MjDcW6Q3BNahgKv9CLqM4y36LLZQbrFx3vtK2HIUG87rBW%2FWQ0WYJ%2FvviqKwyw1WGw58mSSQ%3D%3Dhttps://storage.googleapis.com/kaggle-competitions/kaggle/103980/logos/thumb76_76.png"
//   },
//   {
//     "id": 14,
//     "title": "Konwinski Prize",
//     "series": "Code Competition",
//     "type": "Featured",
//     "teams": 617,
//     "timeRemaining": "a month to go",
//     "prize": "$1,225,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/104697/logos/thumb76_76.pnghttps://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=NwQ42wYKEkDfriJwkOPymRyxN%2BS8%2Ft9dpSszXb%2F6aXPt8zIMDSKyg1siSDFFA1VWrLO8xBzaTnB%2Fxz%2F06tIpFbyKqHW7ypLpElt%2BAo6sfGFESF5uw8XdJ4BFTZMAJ5zTLby0XTHEtxjCgJr7bp6fH11a0H8v2GPetZ27ht0vRSiQX8DhD8y7JZUKfGlQIF7xTYt1XMprySxfQPCR2UV85ZrtQXwgEN2L7B05rrm8FEQq54W1AZLFDQgyU9EvntqZVtZAtdx0MW5J5ABOpGumda7OvJySiR2GqsyS%2FLCBf1cHiwUiUW1wyh%2BzZvHTNkxG1iaw%2Bcg%2BM9bXc8zr0WV5sA%3D%3D"
//   },
//   {
//     "id": 15,
//     "title": "NeurIPS 2024 - Lux AI Season 3",
//     "series": "Simulation Competition",
//     "type": "Featured",
//     "teams": 701,
//     "timeRemaining": "2 months ago",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=Mczh7SdzuudMjxY605dA8YtxvRNHBilnS%2Fiy28qAbRlnFfgmcw0LoCIxsN5fOQFKP5WHvSCNJWz8wDafmxC7AY2YhVUcw6Zuf3XommBo0ROZ3%2BXz0mdODzYk%2FTQFkZd1tvqfYoF3snlR2F9SxfEcTr0y1N3rcPeR474aDMjgkbOw9ufBmwZOxyRB0Ia1fWajE50eX3J3msD3gfabNZKDYZuDM0ZUzguGYrXAiM4959pA2Li7WMoFEAW9dPpzTVRm50clfWMk%2Bjf1Kj%2F6fFi73Dv0fsFYE23wQ7xDmRRxBlAqw8tv5SCKjGyZnHDVuOS%2B8hhGi9Cl0Qjb2Ywf8OBSkg%3D%3D"
//   },
//   {
//     "id": 16,
//     "title": "CIBMTR - Equity in post-HCT Survival Predictions",
//     "series": "Code Competition",
//     "type": "Research",
//     "teams": 3325,
//     "timeRemaining": "2 months ago",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/103901/logos/thumb76_76.png"
//   },
  
//   {
//     "id": 17,
//     "title": "LLMs - You Can't Please Them All",
//     "series": "Code Competition",
//     "type": "Featured",
//     "teams": 1693,
//     "timeRemaining": "2 months ago",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/103682/logos/thumb76_76.png"
//   },
//   {
//     "id": 18,
//     "title": "Regression with an Insurance Dataset",
//     "series": "Playground Series - Season 4, Episode 12",
//     "type": "Playground",
//     "teams": 2390,
//     "timeRemaining": "4 months ago",
//     "prize": "Swag",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/103040/logos/thumb76_76.png"
//   },
//   {
//     "id": 19,
//     "title": "Santa 2024 - The Perplexity Permutation Puzzle",
//     "series": "Code Competition",
//     "type": "Featured",
//     "teams": 1514,
//     "timeRemaining": "3 months ago",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/104120/logos/thumb76_76.png"
//   },
//   {
//     "id": 20,
//     "title": "FIDE & Google Efficient Chess AI Challenge",
//     "series": "Simulation Competition",
//     "type": "Featured",
//     "teams": 1120,
//     "timeRemaining": "2 months ago",
//     "prize": "$50,000",
//     "image": "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png"

//   }




//   ];

//     // Filter competitions based on the search term
//   const filteredCompetitions = competitions.filter((competition) =>
//     competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (competition.series && competition.series.toLowerCase().includes(searchTerm.toLowerCase()))
//   );
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm p-4">
//         <div className="container mx-auto flex items-center justify-between">
//           <div className="relative w-full max-w-lg">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-gray-700 font-semibold">Sign In</button>
//             <button className="bg-gray-900 text-white font-semibold py-2 px-6 rounded-full">Register</button>
//           </div>
//         </div>
//       </header>
//  {/* Main Content - Exactly matching the image with heading on left side */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//         <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>

        
//        {/* Search and Filters */}
//         <div className="mb-6">
//           <div className="flex items-center w-full border border-gray-300 rounded-full bg-white">
//             <div className="pl-4">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search competitions"
//               className="flex-1 py-3 px-3 rounded-full border-none focus:outline-none text-gray-700 sm:w-full"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="pr-6">
//               <button className="flex items-center gap-2 text-gray-700 font-medium" onClick={() => setFilterActive(!filterActive)}>
//                 <SlidersHorizontal className="h-5 w-5" />
//                 <span>Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>
 
//         {/* Active Filters */}
//         {filterActive && (
//           <div className="mb-6 flex">
//             <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//               <span>All competitions</span>
//               <button onClick={() => setFilterActive(false)}>
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Results Section */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Results</h2>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <span className="text-gray-700">Recently Launched</span>
//               <ChevronDown className="h-4 w-4 text-gray-700" />
//             </div>
//             <button>
//               <LayoutGrid className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Competition Cards */}
//         <div className="space-y-4">
//           {competitions.map((competition) => (
//             <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
//               <div className="relative p-4 flex-shrink-0">
//                 <img 
//                   src={competition.image} 
//                   alt={competition.title} 
//                   className="w-16 h-16 object-cover rounded-lg"
//                 />
//                 {competition.score && (
//                   <div className="absolute bottom-0 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
//                     {competition.score}
//                   </div>
//                 )}
//               </div>
//               <div className="flex-grow p-4">
//                 <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
//                 {competition.series && (
//                   <p className="text-gray-600">{competition.series}</p>
//                 )}
//                 {competition.description && (
//                   <p className="text-gray-600">{competition.description}</p>
//                 )}
//                 <div className="mt-2 flex items-center text-sm text-gray-500">
//                   <span>{competition.type}</span>
//                   {competition.subtype && (
//                     <>
//                       <span className="mx-1">·</span>
//                       <span>{competition.subtype}</span>
//                     </>
//                   )}
//                   <span className="mx-1">·</span>
//                   <span>{competition.teams} Teams</span>
//                   <span className="mx-1">·</span>
//                   <span>{competition.timeRemaining}</span>
//                 </div>
//               </div>
//               <div className="p-4 flex flex-col items-end justify-between">
//                 <button>
//                   <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                 </button>
//                 <div className="text-lg font-bold text-right">
//                   {competition.prize}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }




// import { useState } from 'react';
// import { Search, X, MoreHorizontal, ChevronDown, LayoutGrid, Grid } from 'lucide-react';
// import { SlidersHorizontal } from 'lucide-react';

// export default function Competitions() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterActive, setFilterActive] = useState(true);
  
//   // Sample competition data based on the image
//   const competitions = [
//  {
//       id: 1,
//       title: "Predict Calorie Expenditure",
//       series: "Playground Series - Season 5, Episode 5",
//       type: "Playground",
//       teams: 1520,
//       timeRemaining: "22 days to go",
//       score: "5.05",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746884072&Signature=GxZRzok8%2B3PmO%2FL7wSiX3ctUIxEmO%2BrJk2P4I3L%2FvSyecQbhBBpS%2BS45Sr59QynwWqXKjya4PBVar%2FjxKSzjY%2Fu6CTqW9MENsR8Ps7gbDkTzcwtvwWxmWnhSJrfdb0AAVcwkstCgSCnG%2B8DGp%2Fi0YOmgoNI7ozpSH17TBXSOCQbyN1VUIl38aae9Hl2G1b9QEQ4HpUcNuJUJSB27yiZyl31SwGPO6WSvplIU4WGVbwjc8NMV2FqIQJO2UVjiZZR%2BdM7H1Tjm%2BReK4OJD2yT9H0tXqiCB79XMqJnkw675qU6WgOiJkkfSxnTQKtLag57xw12blgkswvBlkZ3Zwx86jQ%3D%3D"
//     },
//     {
//       id: 2,
//       title: "Yale/UNC-CH - Geophysical Waveform Inversion",
//       series: null,
//       description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
//       type: "Research",
//       teams: 491,
//       timeRemaining: "2 months to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746950197&Signature=Cksk%2FhjCSn2LKLdMkn4rSIdDQXqgmWytRDWTLa%2F0wLtxrCePH3JcJERTV42F4faLcmn7Y%2BiWwIeS%2Fr0i4ztGU3bF6HjK6fnCknK5MQetIV8GAmnRGptflXx%2F5QElrJYmu3e4Nbs2RVyxci3sloMJB68T5jIDo2%2F3no9RBuh0V2%2F7AoMbMR4beO36qrQQMSAvpal6pKop%2Fdz6yjhyzNo4ruA7S7Tlsgj8cykjl5Bukh7dGPGifnFI1rpyUxlIDrj58B%2BUZG%2F346BP9Zo5S6P1fIe7u0ALhmIIQAL4N6l7090%2Bopm6nPMIwfeCDuN8qRPCeHyQhHhfStKpr0BaC8O5nA%3D%3D"
//     },
//     {
//       id: 3,
//       title: "Image Matching Challenge 2025",
//       series: null,
//       description: "Reconstruct 3D scenes from messy image collections.",
//       type: "Research",
//       subtype: "Code Competition",
//       teams: 609,
//       timeRemaining: "25 days to go",
//       prize: "$50,000",
//       image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746885738&Signature=fsjmWmcCDO5u0NhT%2BeaUSRpI0UEINigInCZk7ZRt3zJGozEDQ1T1FZoRaGWRAmORxKjvuYKacj2RGaW960c6rLFIOb%2BFF97I4Ajdal6zAbLOyZ4vgdWvoFX8CEgSHhANov1y%2FELIBZMY897yYxJ%2F6aU6MMLFf3a5uFgVpqOcJMzAvKE34jvgyYx8lcM8J1phobOL1Zz4NjlMlBUubNQv3PCFDG0cCQZO3Yj4Y47K9TMUAijysBaCoFN98cZP2dmdHW32Lwe77YKcXELpFyLJeXTwBkJg0G1%2BBhVrT%2FCYqlhFTlLyXqq6x%2Bqbm2T%2BWDNT94TSRA2B%2B3oc85d6YwFVTA%3D%3D"

//     },
//     {
//       id: 4,
//       title: "Predict Podcast Listening Time",
//       series: "Playground Series - Season 5, Episode 4",
//       type: "Playground",
//       teams: 3310,
//       timeRemaining: "8 days ago",
//       score: "5.04",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746950197&Signature=nCwe1qYKBhWc5LfOxXz%2F6%2BMaU7rGZFUD1LdoIzHwRjs%2BNTLeuyPwQwgWfyvuGeoEYULZ3pAmUEHivNipbCzJjxKNpwJTPNHcNY%2B8xrwUZ1S2srP%2FLPBXkgDsbSQnHoeMytqsj6Kl%2Fg68OC8vlwdDej%2Ff9A1tidbMNi2PX%2BLY4MPdSKAgfRTlwu3pv0wHo0AOIJTd4AqbAOCTKdRKiaqQyyr7mQKV6YGrVcJAqlINvzmI7QyjQSIaixDNFMCRc7QmQNCJuKIyKrjx9nGF1g6Nrf4J1Ca6S1ian7rEtKxQ%2F5fo3BVKvZd4zvgTDL9jDZrSQk7K5gcaOlZJU4jI9KavPg%3D%3D"
//     },
//     {
//       id: 5,
//       title: "ARC Prize 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 357,
//       timeRemaining: "6 months to go",
//       prize: "$725,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=UtCROZk%2B%2B%2FSy2TpxaHETQIsfXSJ0jfT1swnoKw2ru7o%2BZBFhNreVG6KTCq3%2BEDdExFPz9%2BZAl34TjhrUArgx35CtafJ4GP1EfxchJ0EaFXLYOSukAk4It9Ztoqv%2F%2FpsvchTOg44Mbobm9y4pl%2BNC51XXh9mEuanvS6lhIWbcysHjPdfE9n9XajgXzUiFdrYp96W5GJLZnjSkPdVRfpsmlwzL5a%2F8X9fxWWUphbT1CyrbbvYzQ7IaF5BHPtDpoTwzrt6uxptlswtlXwIYO0fiUc7pjpohlV8WLvHRMw2321aJsHjLMpFZHZ62Y6%2BtvtpuXJNlbGcfR0p0pxFLR4NSxw%3D%3D"

//     },
//     {
//       id: 6,
//       title: "BirdCLEF+ 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 1599,
//       timeRemaining: "A month to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=anv%2F5SZYU%2F22jHuNYHdefaumvjIsIhluoqYTWkC9Emh0xL%2Fv6uPMr77VnNrhuSABXWYLHNIWu3OIIC8h8BLTLPZBRm3LL3S7%2FkC%2BDcjW8zFOFzXOPtg2U8LDug4BHmQ0PNTHiKhOWpM3deGK4ZOVtAveV%2Bh4Up8I7ylD%2FglqBUZ1jXOQ4Ler%2FUFCAYJdRCfPfnmvjtAFfFyBBaEhks5I4erral4wgAMYBiwjHz4zk2aRCvXsFKZ%2FTPNTwDaQ7FQT6yuxD32PbYKkHURmvi6tr4NAaN7u2fxoJCY0GG%2FDoxSeTG7q6YzshQWESQVS80BTb%2FAzDj4u4fcoMjvXCnVjsw%3D%3D"

//     },
//     {
//       id: 7,
//       title: "BYU - Locating Bacterial Flagellar Motors 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 908,
//       timeRemaining: "A month to go",
//       prize: "$65,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=P4fZIYIu3JBp0wdqRdVyhcM%2FFNWt4aiiUsozASblyJo%2FcfUGREnuV2xH3O99W8sUEQ0zqnMObe1URURp5cwcaZn04aTjLPiYkuCyjrRuIz6WOD5ZrMIfGnuu7jOHSFuchhbqS0BlGsDC5eFrSImUrnvcZw04YDNqDiKjSU54jH4LpfZbp5hgAVhKucvE%2BbxLvkY7O6JHfSTiQ%2F2x7jtTWeTxYlrnc5oplF4KfP5hVkpuBMPSVWqBNx3PPZ%2B%2BXNUWgbvJ7zhbdHZl2yZKnVmphvKouXIZfo%2BPN4UjFSGi1w%2B6g9Nwf8tIgzun3iDJZvy5AoL5y8oZdMAxmL3qc7TCsA%3D%3D"
//     },
//     {
//       id: 8,
//       title: "Binary Prediction with a Rainfall Dataset",
//       series: "Playground Series - Season 5, Episode 3",
//       type: "Playground",
//       teams: 4381,
//       timeRemaining: "A month ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=eMunJOFManqUDB6HQHCxu8mkM6BwOIHmFqJoWsGQsKkn2PdrbNOAjNNSN0qkOOVfBfC8bU5Y0Uf%2BoWtWyU4c46%2BYte7Ro9ncZywZoHnYdej%2FuFsQmTMj2eHygeAezDgOIBoknGoGiE1LgkyOsj7y76sFogzvo3B5Ppnk7TZy30yCSIYZ4WYvO2CU%2BJ2tUzIOOelmuyx%2B3WJOCu8rTlNHcpkkx2Foko2Mg%2FeMqmQwlOCe1c8nY5sPtta0HmFzEyvuq5gAqw9KbqhVmM6ciRoTsToewII9YbS7ninYDACmhV87b%2Bl3JqIhPpB9%2FCTzKntnjmtqEgypsEurAO%2FMY2uhog%3D%3D"
//     },
//     {
//       id: 9,
//       title: "Stanford RNA 3D Folding",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1265,
//       timeRemaining: "20 days to go",
//       prize: "$75,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=MXTVJOpEiBaLSdaZw0TvGPmGj3Y0EyBQM8z475TUOKFc6TtHh1jVcRZ%2FMbP%2FtAZhSf6SofRYf4tC%2B5YvB9b7fJYu90YGNIYPBgd40uygT9TKnj3Ej4fy5peGT%2FaNDJxcyqDYkz88sORsF2XIN9dH51g9MyEbdFtc5FOT43JP9PCndwsw9ky2lRgurh7u7B%2F57mFI%2F8Zyw6VruFshMs0vvvK5dABXld19M0Uyy7sixlSuZa6WRTkvrFYzKrwbSgwrhViQAofkS6sOF%2FMJduOQkVpzCMxlZwI%2FFObgciW%2BOYTAph0toBufadIlSju4DYYNCXze7Qimlzx7d3QlP%2FKpVQ%3D%3D"
//     },
//     {
//       id: 10,
//       title: "Drawing with LLMs",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1276,
//       timeRemaining: "18 days to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=MviNOLZWwX4aNLiD%2Bj4rai2orJYwlENIrYM1zynFcLVlImj10gGjhOZ%2FMRXVNYgtxVpZlADZrtYs3mPIPUv5pqoagFWqQhE2nAFmJQp8YymYKbnO1TF%2Fo3WhjcNWXOx1afcqkANP0h1UtYjtIxQDpXte3MDurqMMs0ETBw5EZSnFoQrl4Tu7C%2FEG6t6gOV9rqPyt9UIwPcINLm6%2BjbHHDg3hhlSiYHeWdWLmxOdgkeGh7AWuOCY9dkIfFJLjcfhDmPQS6pLhbeu7AAY3aCmAOurOCas2%2FA4rKyoebaTO1I%2F%2BLIc8L0uy82MH8ldZP6pJHqYDbFBD3UlEbnIgd0yGlw%3D%3D"
//     },
//     {
//       id: 11,
//       title: "March Machine Learning Mania 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1727,
//       timeRemaining: "a month ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=DUH8g%2B3hQEoNclcT1jMpVHrpnuk%2FJd1PIBHXdhjhUozBZpXgaXJSFdtm5a%2BMDPW%2Bu5Fe31iPneo%2FD%2FiNWtEP7xQLHt5ZCV3ZZX%2FPg2xL05tbrOsqUPgZm6fPDH67mskDhV2zXvj0D75gFWbppa7hE3WFAUAY7TrFs8s1X742JSz%2F5SDNv96EKPOG7Zln%2BLqY2n8tr1FeYkHKp0eLvZbGeNSyGrq5laOF7k2CTUKUFRps8m1wNnZcMuRYgGe00M0Vw%2F0cpNldMElO1R1NZADDtp7V49C9m5pFopYNli7rCnDwfM1jz56QwxTtRcNxl4bjWfP4NwK3rU6a3VOu1JjXrw%3D%3D"
//     },
//     {
//       id: 12,
//       title: "Backpack Prediction Challenge",
//       series: "Playground Series - Season 5, Episode 2",
//       type: "Playground",
//       teams: 3393,
//       timeRemaining: "2 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=E%2BMaUqwntT2QVCyCLcozJTjWmXFcRcnER7RIvkOmA4X5cexqQTRcxwBgwUjl1KezyLmJlSyJFIyZNbDa%2BNi3d8EHdM%2B5OlEQMPAnbygyRWDaQRB3RChgmntjxisG%2F0K%2FOgWfJya9TzDMS2AjcHi6rTiDnTBOMNIKGfgTjbCyUAreA7UQp6y9wfUrXDjOHKYZXr%2BIBq4IL1vxp6Wi3ofGk8AYu05OFyVfhahfbvQwsuuIH2%2BMjh%2FFSV6SYvOCEWqzv3Qvy%2F7v2%2F8aWtfxNbeAm0GytJr0XTQnw5VyKg9KKa60X7Mp1%2Fw5pAzHS%2BmOCIvzLu5FXLoPMLvZB3Krhjd%2FWw%3D%3D"
//     },
//     {
//       id: 13,
//       title: "Forecasting Sticker Sales",
//       series: "Playground Series - Season 5, Episode 1",
//       type: "Playground",
//       teams: 2722,
//       timeRemaining: "3 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=JI7lFFgW4ZmaI1b3ZUs2f%2FC4tbZByXt5Qhx0rYxYIP%2FKDwu2QEq31yWqQWnTM2aV9vBFVOSuhLY4P0axwcDNBUMWoq4kceO1ZzfXFrllCSZ8TzvoHY4j0KelO2gTdlYQ8z8Kr5EjbilvXNpkrbISEXhIdhIJxpkYv3yvs8yQ7SdV2Gqf17smghWJF9f2InzMlCnChNqY8294T88aPpqFQBsDuYfNzTatKStayKe21xm1rOfeFalaufxbrRi09sdCN3xNq3XYS%2FyVD8MjDcW6Q3BNahgKv9CLqM4y36LLZQbrFx3vtK2HIUG87rBW%2FWQ0WYJ%2FvviqKwyw1WGw58mSSQ%3D%3D"
//     },
//     {
//       id: 14,
//       title: "Konwinski Prize",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 617,
//       timeRemaining: "a month to go",
//       prize: "$1,225,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=NwQ42wYKEkDfriJwkOPymRyxN%2BS8%2Ft9dpSszXb%2F6aXPt8zIMDSKyg1siSDFFA1VWrLO8xBzaTnB%2Fxz%2F06tIpFbyKqHW7ypLpElt%2BAo6sfGFESF5uw8XdJ4BFTZMAJ5zTLby0XTHEtxjCgJr7bp6fH11a0H8v2GPetZ27ht0vRSiQX8DhD8y7JZUKfGlQIF7xTYt1XMprySxfQPCR2UV85ZrtQXwgEN2L7B05rrm8FEQq54W1AZLFDQgyU9EvntqZVtZAtdx0MW5J5ABOpGumda7OvJySiR2GqsyS%2FLCBf1cHiwUiUW1wyh%2BzZvHTNkxG1iaw%2Bcg%2BM9bXc8zr0WV5sA%3D%3D"
//     },
//     {
//       id: 15,
//       title: "NeurIPS 2024 - Lux AI Season 3",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 701,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=Mczh7SdzuudMjxY605dA8YtxvRNHBilnS%2Fiy28qAbRlnFfgmcw0LoCIxsN5fOQFKP5WHvSCNJWz8wDafmxC7AY2YhVUcw6Zuf3XommBo0ROZ3%2BXz0mdODzYk%2FTQFkZd1tvqfYoF3snlR2F9SxfEcTr0y1N3rcPeR474aDMjgkbOw9ufBmwZOxyRB0Ia1fWajE50eX3J3msD3gfabNZKDYZuDM0ZUzguGYrXAiM4959pA2Li7WMoFEAW9dPpzTVRm50clfWMk%2Bjf1Kj%2F6fFi73Dv0fsFYE23wQ7xDmRRxBlAqw8tv5SCKjGyZnHDVuOS%2B8hhGi9Cl0Qjb2Ywf8OBSkg%3D%3D"
//     },
//     {
//       id: 16,
//       title: "CIBMTR - Equity in post-HCT Survival Predictions",
//       series: "Code Competition",
//       type: "Research",
//       teams: 3325,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=D27Jeha1JjWFaXp9uR7wrKxU7uxvHEPY4KB5T%2B0jvEoJFI7wSLj6Hw4Lv3cYF0mx6MAipf9fAIq7jRxXEhFa3qw6lxE35Ew7czTuxgXGTcm35Sq8LIC4jvLL6ulOazAumXULl0l1opuQjRl1Br8XiqTni5ynIp4pypgBSgkHGdFX9tEgL%2BVgiL5MziuKIWBHci2nfyTCWRmCo9ULMVRIMI3o%2BuxKRmi9oSCp7mTaxCvE6l3TUTKUhhWOHAK6GLbt%2FhVIxesnnctFv1rSGbtX6DjzN%2FaEULGmVE8uU%2FVAwnrC8AON%2FIDputr0EWjqPqus5HTb62FMZtWyFfKzum1KHA%3D%3D"
//     },
//     {
//       id: 17,
//       title: "LLMs - You Can't Please Them All",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1693,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=BbFs%2F13F5ZDlWVNOcgW2ZhZ0iwAdv%2BoaK8vVcMwtYuuSPWXWXdzAl0cpJ2Tsf1CY%2FGpCbndJCion6BsFny7sAmgWNNzzaGotF%2FkqgguPMto5WXXe4DKf0R4%2Fhlhc1Fm5McxWojYu15TG%2FSjn1JRazzlwv6QFaS69n9tstzrTVLXR3AOg1St%2FIniQe5HntVoJPeRqkaqTx5vGV2AaIgzmFPSIwqELxCdefMVzWrSBzpm5yp2SIamHBKkiEdrN1QompnUoQCK9OP8QSoIw0przhACrfFCH4kolrAtGV%2BzJF4iqCjlSq%2BoS7cU1vEMB4Aybs1BV2tJkw6%2FOs3r3NTqRtg%3D%3D"
//     },
//     {
//       id: 18,
//       title: "Regression with an Insurance Dataset",
//       series: "Playground Series - Season 4, Episode 12",
//       type: "Playground",
//       teams: 2390,
//       timeRemaining: "4 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=qBB6IG5lPIBYmhmyybrJNVLpycJN3NZp7u%2F7AWQCjmyZBb40h8tO4CBphu%2BR9ER7UFccxIgJJW8NG39HmeeXAkOyk8z4aDwsQFs%2BbdRaFnmsBLzB6FhifzrrPTrMyoM2k3n6qx%2Bc%2Fpgo4DkaV9FmyLL79l0Q%2BcoGAFzQvf06YSBOiH6zkqy9DcztLv%2BMUXhdVm3dXb7jNl%2FVaMG2JwqNKSIKY%2Fpydh6eBBfDdzbnHAGZXnHcCXOhdLawjgPPcIF%2F3pjpqCBzv9sUeV6Sr%2FCR3vLiHGMSAnc6guAhrA2vgqmxCv8GPVHLZIEp6TafI6i11zbcQhSQ2ekZ9mgjxzwFig%3D%3D"
//     },
//     {
//       id: 19,
//       title: "Santa 2024 - The Perplexity Permutation Puzzle",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1514,
//       timeRemaining: "3 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=Wvhl%2Fy7icYPswZzH%2F0Xma2zEnkbe1nDLDhZg4pRZHltG52crCHSxIxdNlXhtOV3iV2CwRuEftgzIen3k8sbGSi7FqisIJeGzoM7e3MmHHA7R7TBTS5dbyrpy6qiV9wKxKFQNc7AuQhyvmEh%2B%2FUm7xwBz9dek7fXs9Ir8CBkVLwk4wQwAxJp9EoJd%2Bz6pICK4TJoCnEsMaiTwZ7Xd%2BapWWmiPOOiN3v5LijVrTekggI8c9HZq7w%2B0FMhPuXZABx9c3P8gnJrFFit0RemEGce2vN8Vr4gEDg3mVLfMV27wz9qqbCkPtGjHX2gsST5FFfBvT1uCfRfax8%2BM%2FRjsabYTIg%3D%3D"
//     },
//     {
//       id: 20,
//       title: "FIDE & Google Efficient Chess AI Challenge",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 1120,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=XnYCMKmvzLfDpdzByUMYiFgQiAFIgtV5zX5SmNmBThd2CIogcVZvCslWpSe4K3Bz1Un0e5giAn%2BW8uyjGooWwM3%2FqjRYvvMIG8oB8IL2GStNhwS%2Bos7iioX2I9MkY0PsXC4Jz7qKtsQloPM5VCGc0MGwr88hA1wrm7f4%2BAdmHBZ0nvKaOp6cEaMizaJFvgFjxwCABWbqRR0jE0De%2F5yGK8B5GYTJ4OVuxsYpogEGSSM17%2BULVR47C%2FhcBYYplN%2B6lClsc%2BPj4bg61VDcQupB7fst%2FpfvrKsT0myXFQwpi4QyObn5Bgg9Rv3ZuQhsdohJXa%2Bv54u9NgzNKPCArOMxnA%3D%3D"
//     }
 
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm py-2 px-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="relative w-full max-w-lg">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-gray-700 font-medium">Sign In</button>
//             <button className="bg-gray-900 text-white font-medium py-2 px-6 rounded-full">Register</button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content - Exactly matching the image with heading on left side */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>
        
//         {/* Search and Filters */}
//         <div className="mb-6">
//           <div className="flex items-center w-full border border-gray-300 rounded-full bg-white">
//             <div className="pl-4">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search competitions"
//               className="flex-1 py-3 px-3 rounded-full border-none focus:outline-none text-gray-700"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="pr-6">
//               <button className="flex items-center gap-2 text-gray-700 font-medium" onClick={() => setFilterActive(!filterActive)}>
//                 <SlidersHorizontal className="h-5 w-5" />
//                 <span>Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Active Filters */}
//         {filterActive && (
//           <div className="mb-6 flex">
//             <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//               <span>All competitions</span>
//               <button onClick={() => setFilterActive(false)}>
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Results Section */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Results</h2>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <span className="text-gray-700">Recently Launched</span>
//               <ChevronDown className="h-4 w-4 text-gray-700" />
//             </div>
//             <button>
//               <Grid className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Competition Cards */}
//         <div className="space-y-4">
//           {competitions.map((competition) => (
//             <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
//               <div className="relative p-4 flex-shrink-0">
//                 <img 
//                   src={competition.image} 
//                   alt={competition.title} 
//                   className="w-16 h-16 object-cover rounded-lg"
//                 />
//                 {competition.score && (
//                   <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
//                     {competition.score}
//                   </div>
//                 )}
//               </div>
//               <div className="flex-grow p-4">
//                 <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
//                 {competition.series && (
//                   <p className="text-sm text-gray-600">{competition.series}</p>
//                 )}
//                 {competition.description && (
//                   <p className="text-sm text-gray-600">{competition.description}</p>
//                 )}
//                 <div className="mt-2 flex items-center text-sm text-gray-500">
//                   <span>{competition.type}</span>
//                   {competition.subtype && (
//                     <>
//                       <span className="mx-1">·</span>
//                       <span>{competition.subtype}</span>
//                     </>
//                   )}
//                   <span className="mx-1">·</span>
//                   <span>{competition.teams} Teams</span>
//                   <span className="mx-1">·</span>
//                   <span>{competition.timeRemaining}</span>
//                 </div>
//               </div>
//               <div className="p-4 flex flex-col items-end justify-between">
//                 <button>
//                   <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                 </button>
//                 <div className="text-lg font-bold text-right">
//                   {competition.prize}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }





// import { useState } from 'react';
// import { Search, X, MoreHorizontal, ChevronDown, Grid } from 'lucide-react';
// import { SlidersHorizontal } from 'lucide-react';

// export default function Competitions() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterActive, setFilterActive] = useState(true);
//   const [sortOption, setSortOption] = useState('Recently Launched');
//   const [dropdownOpen, setDropdownOpen] = useState(false);
  
//   // Sort options based on the image
//   const sortOptions = [
//     'Hotness',
//     'Recently Launched',
//     'Closing Soon',
//     'Recently Completed',
//     'Reward',
//     'Total Teams'
//   ];
  
//   // Sample competition data based on the image
//    const competitions = [
//  {
//       id: 1,
//       title: "Predict Calorie Expenditure",
//       series: "Playground Series - Season 5, Episode 5",
//       type: "Playground",
//       teams: 1520,
//       timeRemaining: "22 days to go",
//       score: "5.05",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746884072&Signature=GxZRzok8%2B3PmO%2FL7wSiX3ctUIxEmO%2BrJk2P4I3L%2FvSyecQbhBBpS%2BS45Sr59QynwWqXKjya4PBVar%2FjxKSzjY%2Fu6CTqW9MENsR8Ps7gbDkTzcwtvwWxmWnhSJrfdb0AAVcwkstCgSCnG%2B8DGp%2Fi0YOmgoNI7ozpSH17TBXSOCQbyN1VUIl38aae9Hl2G1b9QEQ4HpUcNuJUJSB27yiZyl31SwGPO6WSvplIU4WGVbwjc8NMV2FqIQJO2UVjiZZR%2BdM7H1Tjm%2BReK4OJD2yT9H0tXqiCB79XMqJnkw675qU6WgOiJkkfSxnTQKtLag57xw12blgkswvBlkZ3Zwx86jQ%3D%3D"
//     },
//     {
//       id: 2,
//       title: "Yale/UNC-CH - Geophysical Waveform Inversion",
//       series: null,
//       description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
//       type: "Research",
//       teams: 491,
//       timeRemaining: "2 months to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746950197&Signature=Cksk%2FhjCSn2LKLdMkn4rSIdDQXqgmWytRDWTLa%2F0wLtxrCePH3JcJERTV42F4faLcmn7Y%2BiWwIeS%2Fr0i4ztGU3bF6HjK6fnCknK5MQetIV8GAmnRGptflXx%2F5QElrJYmu3e4Nbs2RVyxci3sloMJB68T5jIDo2%2F3no9RBuh0V2%2F7AoMbMR4beO36qrQQMSAvpal6pKop%2Fdz6yjhyzNo4ruA7S7Tlsgj8cykjl5Bukh7dGPGifnFI1rpyUxlIDrj58B%2BUZG%2F346BP9Zo5S6P1fIe7u0ALhmIIQAL4N6l7090%2Bopm6nPMIwfeCDuN8qRPCeHyQhHhfStKpr0BaC8O5nA%3D%3D"
//     },
//     {
//       id: 3,
//       title: "Image Matching Challenge 2025",
//       series: null,
//       description: "Reconstruct 3D scenes from messy image collections.",
//       type: "Research",
//       subtype: "Code Competition",
//       teams: 609,
//       timeRemaining: "25 days to go",
//       prize: "$50,000",
//       image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746885738&Signature=fsjmWmcCDO5u0NhT%2BeaUSRpI0UEINigInCZk7ZRt3zJGozEDQ1T1FZoRaGWRAmORxKjvuYKacj2RGaW960c6rLFIOb%2BFF97I4Ajdal6zAbLOyZ4vgdWvoFX8CEgSHhANov1y%2FELIBZMY897yYxJ%2F6aU6MMLFf3a5uFgVpqOcJMzAvKE34jvgyYx8lcM8J1phobOL1Zz4NjlMlBUubNQv3PCFDG0cCQZO3Yj4Y47K9TMUAijysBaCoFN98cZP2dmdHW32Lwe77YKcXELpFyLJeXTwBkJg0G1%2BBhVrT%2FCYqlhFTlLyXqq6x%2Bqbm2T%2BWDNT94TSRA2B%2B3oc85d6YwFVTA%3D%3D"

//     },
//     {
//       id: 4,
//       title: "Predict Podcast Listening Time",
//       series: "Playground Series - Season 5, Episode 4",
//       type: "Playground",
//       teams: 3310,
//       timeRemaining: "8 days ago",
//       score: "5.04",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746950197&Signature=nCwe1qYKBhWc5LfOxXz%2F6%2BMaU7rGZFUD1LdoIzHwRjs%2BNTLeuyPwQwgWfyvuGeoEYULZ3pAmUEHivNipbCzJjxKNpwJTPNHcNY%2B8xrwUZ1S2srP%2FLPBXkgDsbSQnHoeMytqsj6Kl%2Fg68OC8vlwdDej%2Ff9A1tidbMNi2PX%2BLY4MPdSKAgfRTlwu3pv0wHo0AOIJTd4AqbAOCTKdRKiaqQyyr7mQKV6YGrVcJAqlINvzmI7QyjQSIaixDNFMCRc7QmQNCJuKIyKrjx9nGF1g6Nrf4J1Ca6S1ian7rEtKxQ%2F5fo3BVKvZd4zvgTDL9jDZrSQk7K5gcaOlZJU4jI9KavPg%3D%3D"
//     },
//     {
//       id: 5,
//       title: "ARC Prize 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 357,
//       timeRemaining: "6 months to go",
//       prize: "$725,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=UtCROZk%2B%2B%2FSy2TpxaHETQIsfXSJ0jfT1swnoKw2ru7o%2BZBFhNreVG6KTCq3%2BEDdExFPz9%2BZAl34TjhrUArgx35CtafJ4GP1EfxchJ0EaFXLYOSukAk4It9Ztoqv%2F%2FpsvchTOg44Mbobm9y4pl%2BNC51XXh9mEuanvS6lhIWbcysHjPdfE9n9XajgXzUiFdrYp96W5GJLZnjSkPdVRfpsmlwzL5a%2F8X9fxWWUphbT1CyrbbvYzQ7IaF5BHPtDpoTwzrt6uxptlswtlXwIYO0fiUc7pjpohlV8WLvHRMw2321aJsHjLMpFZHZ62Y6%2BtvtpuXJNlbGcfR0p0pxFLR4NSxw%3D%3D"

//     },
//     {
//       id: 6,
//       title: "BirdCLEF+ 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 1599,
//       timeRemaining: "A month to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=anv%2F5SZYU%2F22jHuNYHdefaumvjIsIhluoqYTWkC9Emh0xL%2Fv6uPMr77VnNrhuSABXWYLHNIWu3OIIC8h8BLTLPZBRm3LL3S7%2FkC%2BDcjW8zFOFzXOPtg2U8LDug4BHmQ0PNTHiKhOWpM3deGK4ZOVtAveV%2Bh4Up8I7ylD%2FglqBUZ1jXOQ4Ler%2FUFCAYJdRCfPfnmvjtAFfFyBBaEhks5I4erral4wgAMYBiwjHz4zk2aRCvXsFKZ%2FTPNTwDaQ7FQT6yuxD32PbYKkHURmvi6tr4NAaN7u2fxoJCY0GG%2FDoxSeTG7q6YzshQWESQVS80BTb%2FAzDj4u4fcoMjvXCnVjsw%3D%3D"

//     },
//     {
//       id: 7,
//       title: "BYU - Locating Bacterial Flagellar Motors 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 908,
//       timeRemaining: "A month to go",
//       prize: "$65,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=P4fZIYIu3JBp0wdqRdVyhcM%2FFNWt4aiiUsozASblyJo%2FcfUGREnuV2xH3O99W8sUEQ0zqnMObe1URURp5cwcaZn04aTjLPiYkuCyjrRuIz6WOD5ZrMIfGnuu7jOHSFuchhbqS0BlGsDC5eFrSImUrnvcZw04YDNqDiKjSU54jH4LpfZbp5hgAVhKucvE%2BbxLvkY7O6JHfSTiQ%2F2x7jtTWeTxYlrnc5oplF4KfP5hVkpuBMPSVWqBNx3PPZ%2B%2BXNUWgbvJ7zhbdHZl2yZKnVmphvKouXIZfo%2BPN4UjFSGi1w%2B6g9Nwf8tIgzun3iDJZvy5AoL5y8oZdMAxmL3qc7TCsA%3D%3D"
//     },
//     {
//       id: 8,
//       title: "Binary Prediction with a Rainfall Dataset",
//       series: "Playground Series - Season 5, Episode 3",
//       type: "Playground",
//       teams: 4381,
//       timeRemaining: "A month ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=eMunJOFManqUDB6HQHCxu8mkM6BwOIHmFqJoWsGQsKkn2PdrbNOAjNNSN0qkOOVfBfC8bU5Y0Uf%2BoWtWyU4c46%2BYte7Ro9ncZywZoHnYdej%2FuFsQmTMj2eHygeAezDgOIBoknGoGiE1LgkyOsj7y76sFogzvo3B5Ppnk7TZy30yCSIYZ4WYvO2CU%2BJ2tUzIOOelmuyx%2B3WJOCu8rTlNHcpkkx2Foko2Mg%2FeMqmQwlOCe1c8nY5sPtta0HmFzEyvuq5gAqw9KbqhVmM6ciRoTsToewII9YbS7ninYDACmhV87b%2Bl3JqIhPpB9%2FCTzKntnjmtqEgypsEurAO%2FMY2uhog%3D%3D"
//     },
//     {
//       id: 9,
//       title: "Stanford RNA 3D Folding",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1265,
//       timeRemaining: "20 days to go",
//       prize: "$75,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=MXTVJOpEiBaLSdaZw0TvGPmGj3Y0EyBQM8z475TUOKFc6TtHh1jVcRZ%2FMbP%2FtAZhSf6SofRYf4tC%2B5YvB9b7fJYu90YGNIYPBgd40uygT9TKnj3Ej4fy5peGT%2FaNDJxcyqDYkz88sORsF2XIN9dH51g9MyEbdFtc5FOT43JP9PCndwsw9ky2lRgurh7u7B%2F57mFI%2F8Zyw6VruFshMs0vvvK5dABXld19M0Uyy7sixlSuZa6WRTkvrFYzKrwbSgwrhViQAofkS6sOF%2FMJduOQkVpzCMxlZwI%2FFObgciW%2BOYTAph0toBufadIlSju4DYYNCXze7Qimlzx7d3QlP%2FKpVQ%3D%3D"
//     },
//     {
//       id: 10,
//       title: "Drawing with LLMs",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1276,
//       timeRemaining: "18 days to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=MviNOLZWwX4aNLiD%2Bj4rai2orJYwlENIrYM1zynFcLVlImj10gGjhOZ%2FMRXVNYgtxVpZlADZrtYs3mPIPUv5pqoagFWqQhE2nAFmJQp8YymYKbnO1TF%2Fo3WhjcNWXOx1afcqkANP0h1UtYjtIxQDpXte3MDurqMMs0ETBw5EZSnFoQrl4Tu7C%2FEG6t6gOV9rqPyt9UIwPcINLm6%2BjbHHDg3hhlSiYHeWdWLmxOdgkeGh7AWuOCY9dkIfFJLjcfhDmPQS6pLhbeu7AAY3aCmAOurOCas2%2FA4rKyoebaTO1I%2F%2BLIc8L0uy82MH8ldZP6pJHqYDbFBD3UlEbnIgd0yGlw%3D%3D"
//     },
//     {
//       id: 11,
//       title: "March Machine Learning Mania 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1727,
//       timeRemaining: "a month ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=DUH8g%2B3hQEoNclcT1jMpVHrpnuk%2FJd1PIBHXdhjhUozBZpXgaXJSFdtm5a%2BMDPW%2Bu5Fe31iPneo%2FD%2FiNWtEP7xQLHt5ZCV3ZZX%2FPg2xL05tbrOsqUPgZm6fPDH67mskDhV2zXvj0D75gFWbppa7hE3WFAUAY7TrFs8s1X742JSz%2F5SDNv96EKPOG7Zln%2BLqY2n8tr1FeYkHKp0eLvZbGeNSyGrq5laOF7k2CTUKUFRps8m1wNnZcMuRYgGe00M0Vw%2F0cpNldMElO1R1NZADDtp7V49C9m5pFopYNli7rCnDwfM1jz56QwxTtRcNxl4bjWfP4NwK3rU6a3VOu1JjXrw%3D%3D"
//     },
//     {
//       id: 12,
//       title: "Backpack Prediction Challenge",
//       series: "Playground Series - Season 5, Episode 2",
//       type: "Playground",
//       teams: 3393,
//       timeRemaining: "2 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=E%2BMaUqwntT2QVCyCLcozJTjWmXFcRcnER7RIvkOmA4X5cexqQTRcxwBgwUjl1KezyLmJlSyJFIyZNbDa%2BNi3d8EHdM%2B5OlEQMPAnbygyRWDaQRB3RChgmntjxisG%2F0K%2FOgWfJya9TzDMS2AjcHi6rTiDnTBOMNIKGfgTjbCyUAreA7UQp6y9wfUrXDjOHKYZXr%2BIBq4IL1vxp6Wi3ofGk8AYu05OFyVfhahfbvQwsuuIH2%2BMjh%2FFSV6SYvOCEWqzv3Qvy%2F7v2%2F8aWtfxNbeAm0GytJr0XTQnw5VyKg9KKa60X7Mp1%2Fw5pAzHS%2BmOCIvzLu5FXLoPMLvZB3Krhjd%2FWw%3D%3D"
//     },
//     {
//       id: 13,
//       title: "Forecasting Sticker Sales",
//       series: "Playground Series - Season 5, Episode 1",
//       type: "Playground",
//       teams: 2722,
//       timeRemaining: "3 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=JI7lFFgW4ZmaI1b3ZUs2f%2FC4tbZByXt5Qhx0rYxYIP%2FKDwu2QEq31yWqQWnTM2aV9vBFVOSuhLY4P0axwcDNBUMWoq4kceO1ZzfXFrllCSZ8TzvoHY4j0KelO2gTdlYQ8z8Kr5EjbilvXNpkrbISEXhIdhIJxpkYv3yvs8yQ7SdV2Gqf17smghWJF9f2InzMlCnChNqY8294T88aPpqFQBsDuYfNzTatKStayKe21xm1rOfeFalaufxbrRi09sdCN3xNq3XYS%2FyVD8MjDcW6Q3BNahgKv9CLqM4y36LLZQbrFx3vtK2HIUG87rBW%2FWQ0WYJ%2FvviqKwyw1WGw58mSSQ%3D%3D"
//     },
//     {
//       id: 14,
//       title: "Konwinski Prize",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 617,
//       timeRemaining: "a month to go",
//       prize: "$1,225,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=NwQ42wYKEkDfriJwkOPymRyxN%2BS8%2Ft9dpSszXb%2F6aXPt8zIMDSKyg1siSDFFA1VWrLO8xBzaTnB%2Fxz%2F06tIpFbyKqHW7ypLpElt%2BAo6sfGFESF5uw8XdJ4BFTZMAJ5zTLby0XTHEtxjCgJr7bp6fH11a0H8v2GPetZ27ht0vRSiQX8DhD8y7JZUKfGlQIF7xTYt1XMprySxfQPCR2UV85ZrtQXwgEN2L7B05rrm8FEQq54W1AZLFDQgyU9EvntqZVtZAtdx0MW5J5ABOpGumda7OvJySiR2GqsyS%2FLCBf1cHiwUiUW1wyh%2BzZvHTNkxG1iaw%2Bcg%2BM9bXc8zr0WV5sA%3D%3D"
//     },
//     {
//       id: 15,
//       title: "NeurIPS 2024 - Lux AI Season 3",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 701,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=Mczh7SdzuudMjxY605dA8YtxvRNHBilnS%2Fiy28qAbRlnFfgmcw0LoCIxsN5fOQFKP5WHvSCNJWz8wDafmxC7AY2YhVUcw6Zuf3XommBo0ROZ3%2BXz0mdODzYk%2FTQFkZd1tvqfYoF3snlR2F9SxfEcTr0y1N3rcPeR474aDMjgkbOw9ufBmwZOxyRB0Ia1fWajE50eX3J3msD3gfabNZKDYZuDM0ZUzguGYrXAiM4959pA2Li7WMoFEAW9dPpzTVRm50clfWMk%2Bjf1Kj%2F6fFi73Dv0fsFYE23wQ7xDmRRxBlAqw8tv5SCKjGyZnHDVuOS%2B8hhGi9Cl0Qjb2Ywf8OBSkg%3D%3D"
//     },
//     {
//       id: 16,
//       title: "CIBMTR - Equity in post-HCT Survival Predictions",
//       series: "Code Competition",
//       type: "Research",
//       teams: 3325,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=D27Jeha1JjWFaXp9uR7wrKxU7uxvHEPY4KB5T%2B0jvEoJFI7wSLj6Hw4Lv3cYF0mx6MAipf9fAIq7jRxXEhFa3qw6lxE35Ew7czTuxgXGTcm35Sq8LIC4jvLL6ulOazAumXULl0l1opuQjRl1Br8XiqTni5ynIp4pypgBSgkHGdFX9tEgL%2BVgiL5MziuKIWBHci2nfyTCWRmCo9ULMVRIMI3o%2BuxKRmi9oSCp7mTaxCvE6l3TUTKUhhWOHAK6GLbt%2FhVIxesnnctFv1rSGbtX6DjzN%2FaEULGmVE8uU%2FVAwnrC8AON%2FIDputr0EWjqPqus5HTb62FMZtWyFfKzum1KHA%3D%3D"
//     },
//     {
//       id: 17,
//       title: "LLMs - You Can't Please Them All",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1693,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=BbFs%2F13F5ZDlWVNOcgW2ZhZ0iwAdv%2BoaK8vVcMwtYuuSPWXWXdzAl0cpJ2Tsf1CY%2FGpCbndJCion6BsFny7sAmgWNNzzaGotF%2FkqgguPMto5WXXe4DKf0R4%2Fhlhc1Fm5McxWojYu15TG%2FSjn1JRazzlwv6QFaS69n9tstzrTVLXR3AOg1St%2FIniQe5HntVoJPeRqkaqTx5vGV2AaIgzmFPSIwqELxCdefMVzWrSBzpm5yp2SIamHBKkiEdrN1QompnUoQCK9OP8QSoIw0przhACrfFCH4kolrAtGV%2BzJF4iqCjlSq%2BoS7cU1vEMB4Aybs1BV2tJkw6%2FOs3r3NTqRtg%3D%3D"
//     },
//     {
//       id: 18,
//       title: "Regression with an Insurance Dataset",
//       series: "Playground Series - Season 4, Episode 12",
//       type: "Playground",
//       teams: 2390,
//       timeRemaining: "4 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=qBB6IG5lPIBYmhmyybrJNVLpycJN3NZp7u%2F7AWQCjmyZBb40h8tO4CBphu%2BR9ER7UFccxIgJJW8NG39HmeeXAkOyk8z4aDwsQFs%2BbdRaFnmsBLzB6FhifzrrPTrMyoM2k3n6qx%2Bc%2Fpgo4DkaV9FmyLL79l0Q%2BcoGAFzQvf06YSBOiH6zkqy9DcztLv%2BMUXhdVm3dXb7jNl%2FVaMG2JwqNKSIKY%2Fpydh6eBBfDdzbnHAGZXnHcCXOhdLawjgPPcIF%2F3pjpqCBzv9sUeV6Sr%2FCR3vLiHGMSAnc6guAhrA2vgqmxCv8GPVHLZIEp6TafI6i11zbcQhSQ2ekZ9mgjxzwFig%3D%3D"
//     },
//     {
//       id: 19,
//       title: "Santa 2024 - The Perplexity Permutation Puzzle",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1514,
//       timeRemaining: "3 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=Wvhl%2Fy7icYPswZzH%2F0Xma2zEnkbe1nDLDhZg4pRZHltG52crCHSxIxdNlXhtOV3iV2CwRuEftgzIen3k8sbGSi7FqisIJeGzoM7e3MmHHA7R7TBTS5dbyrpy6qiV9wKxKFQNc7AuQhyvmEh%2B%2FUm7xwBz9dek7fXs9Ir8CBkVLwk4wQwAxJp9EoJd%2Bz6pICK4TJoCnEsMaiTwZ7Xd%2BapWWmiPOOiN3v5LijVrTekggI8c9HZq7w%2B0FMhPuXZABx9c3P8gnJrFFit0RemEGce2vN8Vr4gEDg3mVLfMV27wz9qqbCkPtGjHX2gsST5FFfBvT1uCfRfax8%2BM%2FRjsabYTIg%3D%3D"
//     },
//     {
//       id: 20,
//       title: "FIDE & Google Efficient Chess AI Challenge",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 1120,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1746940600&Signature=XnYCMKmvzLfDpdzByUMYiFgQiAFIgtV5zX5SmNmBThd2CIogcVZvCslWpSe4K3Bz1Un0e5giAn%2BW8uyjGooWwM3%2FqjRYvvMIG8oB8IL2GStNhwS%2Bos7iioX2I9MkY0PsXC4Jz7qKtsQloPM5VCGc0MGwr88hA1wrm7f4%2BAdmHBZ0nvKaOp6cEaMizaJFvgFjxwCABWbqRR0jE0De%2F5yGK8B5GYTJ4OVuxsYpogEGSSM17%2BULVR47C%2FhcBYYplN%2B6lClsc%2BPj4bg61VDcQupB7fst%2FpfvrKsT0myXFQwpi4QyObn5Bgg9Rv3ZuQhsdohJXa%2Bv54u9NgzNKPCArOMxnA%3D%3D"
//     }
 
//   ];

//   // Toggle dropdown
//   const handleToggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Select sort option
//   const handleSelectOption = (option) => {
//     setSortOption(option);
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm py-2 px-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="relative w-full max-w-lg">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-gray-700 font-medium">Sign In</button>
//             <button className="bg-gray-900 text-white font-medium py-2 px-6 rounded-full">Register</button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content - Exactly matching the image with heading on left side */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>
        
//         {/* Search and Filters */}
//         <div className="mb-6">
//           <div className="flex items-center w-full border border-gray-300 rounded-full bg-white">
//             <div className="pl-4">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search competitions"
//               className="flex-1 py-3 px-3 rounded-full border-none focus:outline-none text-gray-700"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="pr-6">
//               <button className="flex items-center gap-2 text-gray-700 font-medium" onClick={() => setFilterActive(!filterActive)}>
//                 <SlidersHorizontal className="h-5 w-5" />
//                 <span>Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Active Filters */}
//         {filterActive && (
//           <div className="mb-6 flex">
//             <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//               <span>All competitions</span>
//               <button onClick={() => setFilterActive(false)}>
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Results Section */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Results</h2>
//           <div className="flex items-center gap-4">
//             {/* Dropdown component */}
//             <div className="relative">
//               <button 
//                 className="flex items-center gap-2 text-gray-700"
//                 onClick={handleToggleDropdown}
//               >
//                 <span>{sortOption}</span>
//                 <ChevronDown className="h-4 w-4 text-gray-700" />
//               </button>
              
//               {/* Dropdown menu */}
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
//                   {sortOptions.map((option) => (
//                     <div 
//                       key={option} 
//                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                         option === sortOption ? 'bg-gray-200' : ''
//                       }`}
//                       onClick={() => handleSelectOption(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             <button>
//               <Grid className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Competition Cards */}
//         <div className="space-y-4">
//           {competitions.map((competition) => (
//             <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
//               <div className="relative p-4 flex-shrink-0">
//                 <img 
//                   src={competition.image} 
//                   alt={competition.title} 
//                   className="w-16 h-16 object-cover rounded-lg"
//                 />
//                 {competition.score && (
//                   <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
//                     {competition.score}
//                   </div>
//                 )}
//               </div>
//               <div className="flex-grow p-4">
//                 <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
//                 {competition.series && (
//                   <p className="text-sm text-gray-600">{competition.series}</p>
//                 )}
//                 {competition.description && (
//                   <p className="text-sm text-gray-600">{competition.description}</p>
//                 )}
//                 <div className="mt-2 flex items-center text-sm text-gray-500">
//                   <span>{competition.type}</span>
//                   {competition.subtype && (
//                     <>
//                       <span className="mx-1">·</span>
//                       <span>{competition.subtype}</span>
//                     </>
//                   )}
//                   <span className="mx-1">·</span>
//                   <span>{competition.teams} Teams</span>
//                   <span className="mx-1">·</span>
//                   <span>{competition.timeRemaining}</span>
//                 </div>
//               </div>
//               <div className="p-4 flex flex-col items-end justify-between">
//                 <button>
//                   <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                 </button>
//                 <div className="text-lg font-bold text-right">
//                   {competition.prize}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// // }



// import { useState } from 'react';
// import { Search, X, MoreHorizontal, ChevronDown, Grid, LayoutGrid } from 'lucide-react';
// import { SlidersHorizontal } from 'lucide-react';

// export default function Competitions() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterActive, setFilterActive] = useState(true);
//   const [sortOption, setSortOption] = useState('Recently Launched');
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  
//   // Sort options based on the image
//   const sortOptions = [
//     'Hotness',
//     'Recently Launched',
//     'Closing Soon',
//     'Recently Completed',
//     'Reward',
//     'Total Teams'
//   ];
  
//   // Sample competition data based on the image
//   const competitions = [
//  {
//       id: 1,
//       title: "Predict Calorie Expenditure",
//       series: "Playground Series - Season 5, Episode 5",
//       type: "Playground",
//       teams: 1520,
//       timeRemaining: "22 days to go",
//       score: "5.05",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108281&Signature=U6mjA0Z5%2BM62zM9iBGriIi4qjWOY7J9WLJhndPDUJQc%2FuE8XmKvAhbmJMqOpD5YZhWlnuYwblN0N6OpbgrxibJJmU9kZGYsWi4rK7LMmmwaA8dWWSuMPtlHCiWPjkw09pfs8AuhpcrrHOzxGr5diocIzt%2B6gsu3lBgyK0ui%2BiuJTD2PzS28q42mDYXqw05oV0CCVGfMhmeLzPFyF%2BoM01T3QTXUt1OHJT8G7k2RA1%2FEkRYtYPpJhTHA2eBAUbIgLI1aesdc2ABuy9mLjylajAv9omFm7C0dODtK%2FBGQ11XKup2Bsri%2FSrgLt48h%2FSB0vzTqa8eZm4ZvhT9DTiBzgxg%3D%3D"
//     },
//     {
//       id: 2,
//       title: "Yale/UNC-CH - Geophysical Waveform Inversion",
//       series: null,
//       description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
//       type: "Research",
//       teams: 491,
//       timeRemaining: "2 months to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=jve0eIDswz2vMWBIYTVXbL6PVCG59ZhgfIP28fcv81uvXvfExdNhfqh3fNrnExDnELLGimw49pW5SmKBM7STHzbJp0Rw9ujJF6n54ECtwqBNz6gl5qhHq2CGPCh8RPEzCsfNH9Gu8jytCA%2BJbv%2B%2FrBpqdOPpyEtwapEJ%2BGNnjV6CrKrUndAfyTE5KyrrenNGwU5Enojtj5Yooyp9ql7IE4IVXCHVxsFi%2FG1g7km57qJ8NsAXiNByczMsjb08EVxvQUEjIpx1sYO32zJD2CRB9Xzej4BLLeiMN2%2FgOU0%2BjwGguktG9RHO6FuowZzkT7QIkGTNOR5Fs1f7i40j42yZew%3D%3D"
//     },
//     {
//       id: 3,
//       title: "Image Matching Challenge 2025",
//       series: null,
//       description: "Reconstruct 3D scenes from messy image collections.",
//       type: "Research",
//       subtype: "Code Competition",
//       teams: 609,
//       timeRemaining: "25 days to go",
//       prize: "$50,000",
//       image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=lFbbHJZ1oK32VEGkJ8DBQ%2FFwXWzs%2Bnxih7IY1zGlECfm1wFwaZTkETiaP3MUdTIMc9JJM1aLK07xeDSj5%2BgI%2FnOco6Y7NPy3B%2BfPmjzZcycb%2FxYd6Vfyy149WSauBpmy%2FOixHhtEM0KeWeqHwbXtjrkEELUjR2Q8QJUHtxNltWmS2NOaP8eBNwCE8xnO%2BEWaKnG7BMRQT7pYV8crVOQW4jchFfPNHaEi8n9q%2FK1hy6xNLA80uhCeeTgJXOqa9HJ0LtZTWwHGPuyMcBNCrioVznyOoRTFg3BZV2DOq3ADomXzDfO4p%2B0MjcgYovC%2BWbrZ4XIdOH14fFZCKD6cPgNd6g%3D%3D"

//     },
//     {
//       id: 4,
//       title: "Predict Podcast Listening Time",
//       series: "Playground Series - Season 5, Episode 4",
//       type: "Playground",
//       teams: 3310,
//       timeRemaining: "8 days ago",
//       score: "5.04",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=WcOajdL6COngMc7ApFtP%2FHg8%2F7oDkp6iUPMgjSQdziQToL1koy3PjeI9Z9FayrfDkOtXzrMO6Xe3CELBcihjsSDZTz%2BCIGbZF6%2FLQ4Twyw6yjrM2CP36c%2F67XN2lMzN2pIGaGp7PLp0j2rKlfxxzQiP69t%2F%2FnLuOV%2B5Fp6d5104F%2BtQxVJUcoEvzZtbWCRMDr2SM7Op%2BS0%2FYzyJJkZNQPFtdPUzAge0PTU1%2FsMfAKTg1I3kawnSbU6HCTCg81BLGCWCpsv6XydhfSR5ggwoDhYiDVnLWCv4qfA2Cu3kRzWKzJu7%2B5v8%2B%2FUHeGkIR4VaemzsYSdEEetSB1IqHkfeWWQ%3D%3D"
//     },
//     {
//       id: 5,
//       title: "ARC Prize 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 357,
//       timeRemaining: "6 months to go",
//       prize: "$725,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=nuYy3kmOtlrd0J4M07Tkl0t860lDXmA12a8tfTU4QI%2BA16YTwHGrgygNrJXAOxquyNY%2BRy7rx%2FUlicXvXy2DG2W5STtJfcia01ZC%2Fki3JDKjmOs486kIdMWY9KjDQB%2BhmUG%2B9PwxCUooKPUsGQzStIsgTwNIsHHZYnYSuP%2FqDc%2BLyglP3yAX3%2BOCd9EadRbhfx%2F6EKjvWtUq6MAP9tKiBUJInUGBeaSpNuNMnPRME25SN%2B03tHVXJf3V%2Bo1LCtA5Z2aLdzcHMlnpJ7UaPKfntvJk16P0T4%2FuuOHGlLirTiD9wJhLncY9c90nMTGdO27FDNTnVX1H51kPPsWRF9Zywg%3D%3D"

//     },
//     {
//       id: 6,
//       title: "BirdCLEF+ 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 1599,
//       timeRemaining: "A month to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=PCNdn2%2BK34WZaOBHXw8kM9PD0WQmoP8jPtWocGQBKH7xNE9F6iMrzRgzCKVqb4uo1Rm9Z0k%2BaN5sAeVy8aJV5w54cvbywGGhoSmaqUWproj%2B9rLmUN0HIq9hM2AVlt9UKjqQMfACQM0iOl8gmglW%2FYjaR0YD0QtryyYlVQiS4AAdIa%2BE9NyXfYj0580SFyicVkaIT9c5WWuWTvsOUC%2BSsx%2BypfHUVGkNLTMUy8OD9Oh9zHqwUz4qq6VJ39S%2FvfNbvSB3FXK7hb%2B%2BzklkpVCNIYtF0NyMCnP2qVDWDa9pFhjj6hy0Gq2yVdySWCp%2BSU4YYumFgymq4H6iIuiyzSijKg%3D%3D"

//     },
//     {
//       id: 7,
//       title: "BYU - Locating Bacterial Flagellar Motors 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 908,
//       timeRemaining: "A month to go",
//       prize: "$65,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=fUEq411E%2F9w79S%2FZKA%2BC8EgYfppNQg7WpIwDymfSYtdTo%2Fp045wZulUUCh1E2DHt%2B62HjpU9F5ZKfKTGZAe8cToYXkGA%2BenCMuiYmcvlVvLLypWDKfak7RZ1UfzOpDQRWn1JJWBSvfeZtDE825pvrows10QzKzx3orMfwcgHqASS0qBpnHWIphH8vpnoflJ%2B%2F1YfD0QooJrL%2BUQ%2FrtGZuyA2d4URQBA33i0MdqZifGGrSn8If6DJvwtbDa5Yz9yO6gT8Svn0AxcDlk612NJKV1awaD4LjTLY26MctCfUJ%2BqZLXkeFevg7USlYVRJ0dE0xcuRfzWTQ2uKMY%2FipA%2BqvA%3D%3D"
//     },
//     {
//       id: 8,
//       title: "Binary Prediction with a Rainfall Dataset",
//       series: "Playground Series - Season 5, Episode 3",
//       type: "Playground",
//       teams: 4381,
//       timeRemaining: "A month ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=npG%2BEIPvzR%2FFvCxmap8jXLW4Qqk3BV5bx%2BqJnCj74WqT0fFosw%2BXA%2BO1ZIHmOJzjgqxJPX4UntHt3ZXM7cbsqocNoz%2BU3pq7AJa8eEWa2nXg%2Fe0ocezbBfNsXYlHXDcWpmOoC0qlYLjpgPHMa3WxGuox%2B8us%2Bg3HVQOs6uAWOMV09RuD%2FcddYe1ZLyGSl1Yvm%2BGyPAY%2Bl5jXx4fpanlnAMH2acRUy2cz%2B3U3oSuRyyl%2BmSLNkDAUL9CNRGlP6Ymkiztp%2Bj7xmUGOvkSTxxpQUl3NRZOMntlsQL19CIDZkDh%2Bqt%2F5%2FB8Orpxoqw3oMp69BMH944B0AfVKg2%2BRdEvepA%3D%3D"
//     },
//     {
//       id: 9,
//       title: "Stanford RNA 3D Folding",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1265,
//       timeRemaining: "20 days to go",
//       prize: "$75,000",
//         image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=djnu93G56vhK8CZ0bholO9Yz5KDSZ198MiRCqY9%2Bwl%2Blx7U%2FlxiSCVE53lzoK8RZq8gK6CeD3U6LqRA5Knxy0o0y8Lynl78j1oc97YBupN1gCc349vNWoMysMp4%2Bj9xvBNR%2FQIPS9SQ4zBw8CoDIzaoUIF4Vc36fIFE93bzJHnV52QjPCICS%2F5PDYc3fsgrBB88bcHuglSlN6lFjTQyw%2BfN%2FUOqZf2LVpVLd4whbzZCbit%2BLA0aW4%2BqFiXnw1CHzzX8rnSO8o8j3jeNZCPpaWvwYtdV1%2BGgiTTqDeNVMOfHuh0Lp276NnnnxZraJf4899hNgDQHn4ELlhw5DNUphaQ%3D%3D"},
//         {
//       id: 10,
//       title: "Drawing with LLMs",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1276,
//       timeRemaining: "18 days to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=JuDuxJsGt%2FnxtHdf4YBqe4%2FwQzO2pp8SCkZMpmV6U5MN5fHYrCAKJ0%2BTrYWqaCVH0aw%2FffufQY562QwfAjDuOgsbo%2FXibYxYvO0vYnS1N%2FpVlyBOwKuhm0%2Bl9TCRXP2YhpUTjtnk2FBMO%2FMEXnRmp6dSaPubYBxMMO%2Blqa2eHvEhbRh7EeQz48YYyqYcoiHo9yxqVVpOFN7duvdaYrNs%2BYgfemHXG8jtR0%2FXUmVAmC8Bu5%2FrTWWxYFARIlQE0%2FP5ar%2BDyClsN1x87%2Bn0BAR9%2FB0XNR0STwRZpELnY10nTlHSX9q%2BpeqXRPXl4JUzED1%2B03APA%2F2Icf3OoFOuUhnkmg%3D%3D"},
//     {
//       id: 11,
//       title: "March Machine Learning Mania 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1727,
//       timeRemaining: "a month ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=Hxd0Zeypn7tg9p%2BXwHAaOaP5DFt354fwrUD36RscrzuQihI8ZteqT0ekZUM%2BIjOkc%2BEFx2WmoXg3KYcbSkkBNbXyELX0SkUg8faqPUrTEe%2FMchzn7wPMeZNorEtVrcEwc5cG3LyBk5fj%2FqQjMKb1cypjhgUloQBKOEt34TwOsEBPO0%2Fdmy5Lgv1uCPWiDxi0c9ZuTf%2Ba8x5tbiGd5oUmDiNNw1rC0%2BUyWvV2BverEyZDHnu7Xtaubzktqp805DXhd0vUItE5KecOMJG0ob3ZjL7n2EPPuOPjlbKW4Ys0o%2Bbc98J0GXDKLmpVd9prkLwG6e%2Ff0pGBN0R09CjBTtyCgQ%3D%3D"},
//     {
//       id: 12,
//       title: "Backpack Prediction Challenge",
//       series: "Playground Series - Season 5, Episode 2",
//       type: "Playground",
//       teams: 3393,
//       timeRemaining: "2 months ago",
//       prize: "Swag",
//       image:" https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=KRABURCmuB8upibUKV7Rk%2FQ7dff6ki5RnGJg1fJxB%2FAYa8HRwdiBkT1ij5a0N2tCXIGV1x4GiOwB%2Ft%2BZ%2FQl23QwCNwzMVbZDVULmSTOBM%2FZyXAmmJYissi%2FYCDb19lv8VtSkmFHSvq%2BaCgzINfMHbIu1ssjZEcJ6TztmXwMSLkvH7ghmq3lEftoPeXZNbx7ZZkr57pi6uplcyJyt4SctEXAE5aqx4fkggFz8lSd5vIL4YCV2bD2DZLDi9OpXT7J18g6xj2b1HVdFzbxMshuLvadvsR1baFj4MaZOgUUBLYbsOvohlWAv%2FYV5Q68lDRvTywOdC8LUQUvnR9AdmeaPGQ%3D%3D"
//     },
//     {
//       id: 13,
//       title: "Forecasting Sticker Sales",
//       series: "Playground Series - Season 5, Episode 1",
//       type: "Playground",
//       teams: 2722,
//       timeRemaining: "3 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=RTmLmHgdxEIEc0c1PFaWJgp1Bddbn5DzKHg9X34nFejoVBaDME75YrkdviXnTFWgHesjEjICeLRKwsDR3xSDBHry5hCZko9jeKNO1frZsSFcmLrYqgPLj7X3Eu6Ds79UtzqZioHmOdOZbtIxZDYVvALF1XPGQeJw%2FA%2F9sj69QplJoZjGzD5I%2BMc1HDT6Ht4Gb6EMaGV%2BzIovdb9YGLU21HBpCYlGHI%2FlULP5cbrfG9CmRLhWQty5xGg%2F3f%2Fsfqa8jTKTFclQE65wvHv%2BerxqbBvx4epswheEgI%2BvXlOuQlfCoJTCDes6KkxwiSCrqXgqFt4taGZvQhfhSs8wNsDCnw%3D%3D"},
//     {
//       id: 14,
//       title: "Konwinski Prize",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 617,
//       timeRemaining: "a month to go",
//       prize: "$1,225,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=a7k97a056jD7iaWHshwUVezCEv8cEurK0niI6rlozidKyOP%2BPR7KfoRYBPHyNRRS73CdVA%2Blhv8F%2FPKXDVjmK4zFsZY8DhqaunROxaRdJowhHd3J%2FEOqeuUTREetPfok1dl%2BFueesm3qrLv0LnFXKEYWdp9149bORfi6vkJGz%2FYWTPiEle0MoNEGmdqLNr%2BOe2y4D4zMIykcLjXLYpZoJLYEEQirIw7zIIk3rqr3QJHI4F%2FLhN4NysEnmU%2BuyLALUzJPCL4PR4MnHE9aBDCBq7mjLuNpkjONlxZojPWvIimhGV12rsOPl08pdY74M%2BILAdnhGpNtzdNNsk8tAigV9Q%3D%3D"},
//     {
//       id: 15,
//       title: "NeurIPS 2024 - Lux AI Season 3",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 701,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=PTPNvhidrmbh6ClnCpc5tdLLBLGT6EuJ4Nu%2FNEvdF%2BVJRz0Lokixlm9rfH2WC3CkUr8upNBEjDIm0vdPlusnFRAx7uEiBN%2FUwZ%2BoEgTGiUoWK64WLf%2BptP%2F1nqJLLPY5DUgL9zUqYDmgUbsvg41zgiz8feG%2F%2F99zB2ZLUcQffPfCB1umi0jLbGHxZKDraw5UTfjdFLjcpRc8OyARfXxxez0izwAuiqXjdKUKE7XUE49Aku%2F8g191EXTGV9ZwurpuR6%2B0XSfHoG8Lo7ajAimaStiytlxDvlqM%2BWC0b%2BnixR3N1noWl%2F5zOGA1Z2ZakKqwHqa6vWNIopj%2FZfb%2B6VpUqA%3D%3D"},
//     {
//       id: 16,
//       title: "CIBMTR - Equity in post-HCT Survival Predictions",
//       series: "Code Competition",
//       type: "Research",
//       teams: 3325,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=ccE9UU5OlDElhnOR5wkHfzRrCUY4TTLGqERezoKURZ00JouPeBXPj1OBSoKzeusE3nk2vVIvh6eNki6MFKApLqqHSRe1oBS1VjXlDBdbVve38XPC1avwD%2Bx4z3HdEn0omxVFdzVRYKfYlxJNSSP0GyyvQqENbhrNE1Ukx0siMDhSyTXuCEG2eZMkAxCrpiAiLT%2F0e0DfIYEGVr93YYncKPe2KLWmvn6njgW6Y11EAEIiGbvY3Hx%2BCkbJm0b9WODEW7JJGDKU64w8NFN6Co5fvAH%2F9OJWv0zbZztu%2FLuB585mOrv3wd5PZ%2BrrBk4CyDbE0TSuIfvyMPHebAorBYwNXg%3D%3D"},
//     {
//       id: 17,
//       title: "LLMs - You Can't Please Them All",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1693,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=X%2BOJUoUz%2BKIWMbhtkDKhAvhECU7FVxOhl7ewu%2BnKndgMDSEGPjeSe%2F%2FIrli6ABPYWqwgCUVs0Z57YG%2B9DfEXyPhwaBGuJGfXvqTQ0cNJD%2Bu27fiW5Pg3dQsvNNJlST%2FORwtwR7NBb3TJuHx1q%2BhudNnT6UIY1UDnYqCY0PL7mx1EhJeIjlRIzikOYPy3SioSVt3IqLNSgUzHSL0KIw2B%2BB3FlrqcPlxetsrQXWvTLUw9SIH7fL4zVvkc7ZKT746ZO5gwyfnc1bpxNuQpTP5HQHiat9%2B2%2B64G%2B5srmkcy4aA9GQKRtW4XJ8al7wzNsQlemsJ1ssxKNy3e4cncFXGcWw%3D%3D"},
//     {
//       id: 18,
//       title: "Regression with an Insurance Dataset",
//       series: "Playground Series - Season 4, Episode 12",
//       type: "Playground",
//       teams: 2390,
//       timeRemaining: "4 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=l8ttw4Q%2BJkvMeqrYsvCZ8f96kLQ8TdR7CDSXYWDbQUiAEU8ZcNoeSKlVW%2BNQEWF%2FIC1d7JH%2BNxqCjP1KJ%2BPGjYnaMYzUAorBjdLu7iv%2BchTt0GADkloxq1VQzgmcGGXETaLOLkZIdt%2BFt%2FJDC6G0fvvWoG5Mu0R3FQBVBaq58cxt8ye0kvWcjg5jiwa6Di4moIg7NuNYEBCV2iGb%2BaQf2%2Fl5sClD4rf9FuLTWJvcoyhwrxs%2BgY2Sa6L3b%2FaYcg4zIWnjbl%2FjpCu235MLLsSJqKYQMVg1DV3rgJqKG1faU1%2Bfmy4YO3DcXzu0qkCEPJT7%2BT9LEN6oRiUSQX6mmtpgcg%3D%3D"},
//     {
//       id: 19,
//       title: "Santa 2024 - The Perplexity Permutation Puzzle",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1514,
//       timeRemaining: "3 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=NdSeC4eT4eoR%2FXTt6FcIYQpct1muiPS1xnC6T5dt7p%2BHKEjZpveHStt1hfRSmPeki4WpGx13k4C%2B9dsNn0GoMJp7Z0pzk5vRKGhNYsdP82DdDHh%2Baiv5z%2BMG023Hh36GHE1macN4lN55VuMqWDCiYsQjw8THfbWiJZb179Y9yaYVjW%2FNE63hAkFTrxMW86Ka3Y8501SXIr%2F8aY%2F1wHbTaGrH04M8LOt8ykbxGIHZEQ1r8AFZ%2BaBwCkgCtwuxHWovb5rS7Q4%2Bm5xDF7xo%2FIMf7q5z1%2FAM435uIHJ77voCLsks8aCF2QsUYE92lNuD2Q0HOtUDDcSSQ3qCSVwS9cv9Ng%3D%3D"},
//     {
//       id: 20,
//       title: "FIDE & Google Efficient Chess AI Challenge",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 1120,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=Pt%2BHe2A83ZFYwjQkQw5ESck17IZvR9IuIj1Oc1b3JtMSQwtsdAIQyP7%2FjHt7MB0Afha4gDgeg6idMhu%2FvP0feb8Y1Yf5CyWGV3Z90ykjpqkzZBwSTFj1WP%2F%2FW4cYqUQSP3IrLoGzMSyJBekoBgWp4JYlEbpP%2FyfK0CqBIyOzJDKv%2FZ4J1eDPzqiDeI%2Bfcfmm1yy00NWhE2N95%2BOMHkfmcf6Wdmz6JkPmwacStbdYUzA0pGPYUJ%2FFyyCfFX1zuJtcxwOvAVXnzCwcIf%2B5h5OTmX%2B26Ph9pqKULsW4zfVQNNZu9u3rI375lPt%2BuxCQaf47dWEcA%2F56m1oFtrcL1k%2BDbA%3D%3D"},
 
//   ];


//   // Toggle dropdown
//   const handleToggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Select sort option
//   const handleSelectOption = (option) => {
//     setSortOption(option);
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm py-2 px-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="relative w-full max-w-lg">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-gray-700 font-medium">Sign In</button>
//             <button className="bg-gray-900 text-white font-medium py-2 px-6 rounded-full">Register</button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content - Exactly matching the image with heading on left side */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>
        
//         {/* Search and Filters */}
//         <div className="mb-6">
//           <div className="flex items-center w-full border border-gray-300 rounded-full bg-white">
//             <div className="pl-4">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search competitions"
//               className="flex-1 py-3 px-3 rounded-full border-none focus:outline-none text-gray-700"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="pr-6">
//               <button className="flex items-center gap-2 text-gray-700 font-medium" onClick={() => setFilterActive(!filterActive)}>
//                 <SlidersHorizontal className="h-5 w-5" />
//                 <span>Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Active Filters */}
//         {filterActive && (
//           <div className="mb-6 flex">
//             <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//               <span>All competitions</span>
//               <button onClick={() => setFilterActive(false)}>
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Results Section */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Results</h2>
//           <div className="flex items-center gap-4">
//             {/* Dropdown component */}
//             <div className="relative">
//               <button 
//                 className="flex items-center gap-2 text-gray-700"
//                 onClick={handleToggleDropdown}
//               >
//                 <span>{sortOption}</span>
//                 <ChevronDown className="h-4 w-4 text-gray-700" />
//               </button>
              
//               {/* Dropdown menu */}
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
//                   {sortOptions.map((option) => (
//                     <div 
//                       key={option} 
//                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                         option === sortOption ? 'bg-gray-200' : ''
//                       }`}
//                       onClick={() => handleSelectOption(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             <button onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}>
//               {viewMode === 'list' ? (
//                 <Grid className="h-5 w-5 text-gray-700" />
//               ) : (
//                 <LayoutGrid className="h-5 w-5 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Competition Cards - List or Grid View */}
//         {viewMode === 'list' ? (
//           // List View - as in Image 1
//           <div className="space-y-4">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
//                 <div className="relative p-4 flex-shrink-0">
//                   <img 
//                     src={competition.image} 
//                     alt={competition.title} 
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                   {competition.score && (
//                     <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
//                       {competition.score}
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-grow p-4">
//                   <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
//                   {competition.series && (
//                     <p className="text-sm text-gray-600">{competition.series}</p>
//                   )}
//                   {competition.description && (
//                     <p className="text-sm text-gray-600">{competition.description}</p>
//                   )}
//                   <div className="mt-2 flex items-center text-sm text-gray-500">
//                     <span>{competition.type}</span>
//                     {competition.subtype && (
//                       <>
//                         <span className="mx-1">·</span>
//                         <span>{competition.subtype}</span>
//                       </>
//                     )}
//                     <span className="mx-1">·</span>
//                     <span>{competition.teams} Teams</span>
//                     <span className="mx-1">·</span>
//                     <span>{competition.timeRemaining}</span>
//                   </div>
//                 </div>
//                 <div className="p-4 flex flex-col items-end justify-between">
//                   <button>
//                     <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                   </button>
//                   <div className="text-lg font-bold text-right">
//                     {competition.prize}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Grid View - as in Image 2
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
//                 <div className="relative">
//                   <img 
//                     src={competition.image} 
//                     alt={competition.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-2 left-2">
//                     <div className="bg-white rounded-full p-1">
//                       <img src="/api/placeholder/24/24" alt="Logo" className="w-6 h-6" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-4 flex-grow">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-base font-bold text-gray-800">{competition.title}</h3>
//                     <button>
//                       <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                     </button>
//                   </div>
                  
//                   {competition.series && (
//                     <p className="text-sm text-gray-600 mb-1">{competition.series}</p>
//                   )}
                  
//                   <div className="text-sm text-gray-500 mb-2">
//                     <p>{competition.type}</p>
//                     <p>{competition.teams} Teams</p>
//                   </div>
//                 </div>
                
//                 <div className="border-t border-gray-100 p-4 flex justify-between items-center">
//                   <div className="font-bold">
//                     {competition.prize}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {competition.timeRemaining}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
      
//       </main>
//     </div>
//   );
// }



// import { useState } from 'react';
// import { Search, X, MoreHorizontal, ChevronDown, Grid, LayoutGrid } from 'lucide-react';
// import { SlidersHorizontal } from 'lucide-react';

// export default function Competitions() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterActive, setFilterActive] = useState(false);
//   const [sortOption, setSortOption] = useState('Recently Launched');
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
//   const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  
//   // Filter states
//   const [statusFilters, setStatusFilters] = useState([]);
//   const [prizeFilters, setPrizeFilters] = useState([]);
//   const [categoryFilters, setCategoryFilters] = useState([]);
//   const [participationFilters, setParticipationFilters] = useState([]);
//   const [tagSearch, setTagSearch] = useState('');
  
//   // Sort options based on the image
//   const sortOptions = [
//     'Hotness',
//     'Recently Launched',
//     'Closing Soon',
//     'Recently Completed',
//     'Reward',
//     'Total Teams'
//   ];
  
//   const competitions = [
//  {
//       id: 1,
//       title: "Predict Calorie Expenditure",
//       series: "Playground Series - Season 5, Episode 5",
//       type: "Playground",
//       teams: 1520,
//       timeRemaining: "22 days to go",
//       score: "5.05",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108281&Signature=U6mjA0Z5%2BM62zM9iBGriIi4qjWOY7J9WLJhndPDUJQc%2FuE8XmKvAhbmJMqOpD5YZhWlnuYwblN0N6OpbgrxibJJmU9kZGYsWi4rK7LMmmwaA8dWWSuMPtlHCiWPjkw09pfs8AuhpcrrHOzxGr5diocIzt%2B6gsu3lBgyK0ui%2BiuJTD2PzS28q42mDYXqw05oV0CCVGfMhmeLzPFyF%2BoM01T3QTXUt1OHJT8G7k2RA1%2FEkRYtYPpJhTHA2eBAUbIgLI1aesdc2ABuy9mLjylajAv9omFm7C0dODtK%2FBGQ11XKup2Bsri%2FSrgLt48h%2FSB0vzTqa8eZm4ZvhT9DTiBzgxg%3D%3D"
//     },
//     {
//       id: 2,
//       title: "Yale/UNC-CH - Geophysical Waveform Inversion",
//       series: null,
//       description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
//       type: "Research",
//       teams: 491,
//       timeRemaining: "2 months to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=jve0eIDswz2vMWBIYTVXbL6PVCG59ZhgfIP28fcv81uvXvfExdNhfqh3fNrnExDnELLGimw49pW5SmKBM7STHzbJp0Rw9ujJF6n54ECtwqBNz6gl5qhHq2CGPCh8RPEzCsfNH9Gu8jytCA%2BJbv%2B%2FrBpqdOPpyEtwapEJ%2BGNnjV6CrKrUndAfyTE5KyrrenNGwU5Enojtj5Yooyp9ql7IE4IVXCHVxsFi%2FG1g7km57qJ8NsAXiNByczMsjb08EVxvQUEjIpx1sYO32zJD2CRB9Xzej4BLLeiMN2%2FgOU0%2BjwGguktG9RHO6FuowZzkT7QIkGTNOR5Fs1f7i40j42yZew%3D%3D"
//     },
//     {
//       id: 3,
//       title: "Image Matching Challenge 2025",
//       series: null,
//       description: "Reconstruct 3D scenes from messy image collections.",
//       type: "Research",
//       subtype: "Code Competition",
//       teams: 609,
//       timeRemaining: "25 days to go",
//       prize: "$50,000",
//       image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=lFbbHJZ1oK32VEGkJ8DBQ%2FFwXWzs%2Bnxih7IY1zGlECfm1wFwaZTkETiaP3MUdTIMc9JJM1aLK07xeDSj5%2BgI%2FnOco6Y7NPy3B%2BfPmjzZcycb%2FxYd6Vfyy149WSauBpmy%2FOixHhtEM0KeWeqHwbXtjrkEELUjR2Q8QJUHtxNltWmS2NOaP8eBNwCE8xnO%2BEWaKnG7BMRQT7pYV8crVOQW4jchFfPNHaEi8n9q%2FK1hy6xNLA80uhCeeTgJXOqa9HJ0LtZTWwHGPuyMcBNCrioVznyOoRTFg3BZV2DOq3ADomXzDfO4p%2B0MjcgYovC%2BWbrZ4XIdOH14fFZCKD6cPgNd6g%3D%3D"

//     },
//     {
//       id: 4,
//       title: "Predict Podcast Listening Time",
//       series: "Playground Series - Season 5, Episode 4",
//       type: "Playground",
//       teams: 3310,
//       timeRemaining: "8 days ago",
//       score: "5.04",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=WcOajdL6COngMc7ApFtP%2FHg8%2F7oDkp6iUPMgjSQdziQToL1koy3PjeI9Z9FayrfDkOtXzrMO6Xe3CELBcihjsSDZTz%2BCIGbZF6%2FLQ4Twyw6yjrM2CP36c%2F67XN2lMzN2pIGaGp7PLp0j2rKlfxxzQiP69t%2F%2FnLuOV%2B5Fp6d5104F%2BtQxVJUcoEvzZtbWCRMDr2SM7Op%2BS0%2FYzyJJkZNQPFtdPUzAge0PTU1%2FsMfAKTg1I3kawnSbU6HCTCg81BLGCWCpsv6XydhfSR5ggwoDhYiDVnLWCv4qfA2Cu3kRzWKzJu7%2B5v8%2B%2FUHeGkIR4VaemzsYSdEEetSB1IqHkfeWWQ%3D%3D"
//     },
//     {
//       id: 5,
//       title: "ARC Prize 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 357,
//       timeRemaining: "6 months to go",
//       prize: "$725,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=nuYy3kmOtlrd0J4M07Tkl0t860lDXmA12a8tfTU4QI%2BA16YTwHGrgygNrJXAOxquyNY%2BRy7rx%2FUlicXvXy2DG2W5STtJfcia01ZC%2Fki3JDKjmOs486kIdMWY9KjDQB%2BhmUG%2B9PwxCUooKPUsGQzStIsgTwNIsHHZYnYSuP%2FqDc%2BLyglP3yAX3%2BOCd9EadRbhfx%2F6EKjvWtUq6MAP9tKiBUJInUGBeaSpNuNMnPRME25SN%2B03tHVXJf3V%2Bo1LCtA5Z2aLdzcHMlnpJ7UaPKfntvJk16P0T4%2FuuOHGlLirTiD9wJhLncY9c90nMTGdO27FDNTnVX1H51kPPsWRF9Zywg%3D%3D"

//     },
//     {
//       id: 6,
//       title: "BirdCLEF+ 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 1599,
//       timeRemaining: "A month to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=PCNdn2%2BK34WZaOBHXw8kM9PD0WQmoP8jPtWocGQBKH7xNE9F6iMrzRgzCKVqb4uo1Rm9Z0k%2BaN5sAeVy8aJV5w54cvbywGGhoSmaqUWproj%2B9rLmUN0HIq9hM2AVlt9UKjqQMfACQM0iOl8gmglW%2FYjaR0YD0QtryyYlVQiS4AAdIa%2BE9NyXfYj0580SFyicVkaIT9c5WWuWTvsOUC%2BSsx%2BypfHUVGkNLTMUy8OD9Oh9zHqwUz4qq6VJ39S%2FvfNbvSB3FXK7hb%2B%2BzklkpVCNIYtF0NyMCnP2qVDWDa9pFhjj6hy0Gq2yVdySWCp%2BSU4YYumFgymq4H6iIuiyzSijKg%3D%3D"

//     },
//     {
//       id: 7,
//       title: "BYU - Locating Bacterial Flagellar Motors 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 908,
//       timeRemaining: "A month to go",
//       prize: "$65,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=fUEq411E%2F9w79S%2FZKA%2BC8EgYfppNQg7WpIwDymfSYtdTo%2Fp045wZulUUCh1E2DHt%2B62HjpU9F5ZKfKTGZAe8cToYXkGA%2BenCMuiYmcvlVvLLypWDKfak7RZ1UfzOpDQRWn1JJWBSvfeZtDE825pvrows10QzKzx3orMfwcgHqASS0qBpnHWIphH8vpnoflJ%2B%2F1YfD0QooJrL%2BUQ%2FrtGZuyA2d4URQBA33i0MdqZifGGrSn8If6DJvwtbDa5Yz9yO6gT8Svn0AxcDlk612NJKV1awaD4LjTLY26MctCfUJ%2BqZLXkeFevg7USlYVRJ0dE0xcuRfzWTQ2uKMY%2FipA%2BqvA%3D%3D"
//     },
//     {
//       id: 8,
//       title: "Binary Prediction with a Rainfall Dataset",
//       series: "Playground Series - Season 5, Episode 3",
//       type: "Playground",
//       teams: 4381,
//       timeRemaining: "A month ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=npG%2BEIPvzR%2FFvCxmap8jXLW4Qqk3BV5bx%2BqJnCj74WqT0fFosw%2BXA%2BO1ZIHmOJzjgqxJPX4UntHt3ZXM7cbsqocNoz%2BU3pq7AJa8eEWa2nXg%2Fe0ocezbBfNsXYlHXDcWpmOoC0qlYLjpgPHMa3WxGuox%2B8us%2Bg3HVQOs6uAWOMV09RuD%2FcddYe1ZLyGSl1Yvm%2BGyPAY%2Bl5jXx4fpanlnAMH2acRUy2cz%2B3U3oSuRyyl%2BmSLNkDAUL9CNRGlP6Ymkiztp%2Bj7xmUGOvkSTxxpQUl3NRZOMntlsQL19CIDZkDh%2Bqt%2F5%2FB8Orpxoqw3oMp69BMH944B0AfVKg2%2BRdEvepA%3D%3D"
//     },
//     {
//       id: 9,
//       title: "Stanford RNA 3D Folding",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1265,
//       timeRemaining: "20 days to go",
//       prize: "$75,000",
//         image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=djnu93G56vhK8CZ0bholO9Yz5KDSZ198MiRCqY9%2Bwl%2Blx7U%2FlxiSCVE53lzoK8RZq8gK6CeD3U6LqRA5Knxy0o0y8Lynl78j1oc97YBupN1gCc349vNWoMysMp4%2Bj9xvBNR%2FQIPS9SQ4zBw8CoDIzaoUIF4Vc36fIFE93bzJHnV52QjPCICS%2F5PDYc3fsgrBB88bcHuglSlN6lFjTQyw%2BfN%2FUOqZf2LVpVLd4whbzZCbit%2BLA0aW4%2BqFiXnw1CHzzX8rnSO8o8j3jeNZCPpaWvwYtdV1%2BGgiTTqDeNVMOfHuh0Lp276NnnnxZraJf4899hNgDQHn4ELlhw5DNUphaQ%3D%3D"},
//         {
//       id: 10,
//       title: "Drawing with LLMs",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1276,
//       timeRemaining: "18 days to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=JuDuxJsGt%2FnxtHdf4YBqe4%2FwQzO2pp8SCkZMpmV6U5MN5fHYrCAKJ0%2BTrYWqaCVH0aw%2FffufQY562QwfAjDuOgsbo%2FXibYxYvO0vYnS1N%2FpVlyBOwKuhm0%2Bl9TCRXP2YhpUTjtnk2FBMO%2FMEXnRmp6dSaPubYBxMMO%2Blqa2eHvEhbRh7EeQz48YYyqYcoiHo9yxqVVpOFN7duvdaYrNs%2BYgfemHXG8jtR0%2FXUmVAmC8Bu5%2FrTWWxYFARIlQE0%2FP5ar%2BDyClsN1x87%2Bn0BAR9%2FB0XNR0STwRZpELnY10nTlHSX9q%2BpeqXRPXl4JUzED1%2B03APA%2F2Icf3OoFOuUhnkmg%3D%3D"},
//     {
//       id: 11,
//       title: "March Machine Learning Mania 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1727,
//       timeRemaining: "a month ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=Hxd0Zeypn7tg9p%2BXwHAaOaP5DFt354fwrUD36RscrzuQihI8ZteqT0ekZUM%2BIjOkc%2BEFx2WmoXg3KYcbSkkBNbXyELX0SkUg8faqPUrTEe%2FMchzn7wPMeZNorEtVrcEwc5cG3LyBk5fj%2FqQjMKb1cypjhgUloQBKOEt34TwOsEBPO0%2Fdmy5Lgv1uCPWiDxi0c9ZuTf%2Ba8x5tbiGd5oUmDiNNw1rC0%2BUyWvV2BverEyZDHnu7Xtaubzktqp805DXhd0vUItE5KecOMJG0ob3ZjL7n2EPPuOPjlbKW4Ys0o%2Bbc98J0GXDKLmpVd9prkLwG6e%2Ff0pGBN0R09CjBTtyCgQ%3D%3D"},
//     {
//       id: 12,
//       title: "Backpack Prediction Challenge",
//       series: "Playground Series - Season 5, Episode 2",
//       type: "Playground",
//       teams: 3393,
//       timeRemaining: "2 months ago",
//       prize: "Swag",
//       image:" https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=KRABURCmuB8upibUKV7Rk%2FQ7dff6ki5RnGJg1fJxB%2FAYa8HRwdiBkT1ij5a0N2tCXIGV1x4GiOwB%2Ft%2BZ%2FQl23QwCNwzMVbZDVULmSTOBM%2FZyXAmmJYissi%2FYCDb19lv8VtSkmFHSvq%2BaCgzINfMHbIu1ssjZEcJ6TztmXwMSLkvH7ghmq3lEftoPeXZNbx7ZZkr57pi6uplcyJyt4SctEXAE5aqx4fkggFz8lSd5vIL4YCV2bD2DZLDi9OpXT7J18g6xj2b1HVdFzbxMshuLvadvsR1baFj4MaZOgUUBLYbsOvohlWAv%2FYV5Q68lDRvTywOdC8LUQUvnR9AdmeaPGQ%3D%3D"
//     },
//     {
//       id: 13,
//       title: "Forecasting Sticker Sales",
//       series: "Playground Series - Season 5, Episode 1",
//       type: "Playground",
//       teams: 2722,
//       timeRemaining: "3 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=RTmLmHgdxEIEc0c1PFaWJgp1Bddbn5DzKHg9X34nFejoVBaDME75YrkdviXnTFWgHesjEjICeLRKwsDR3xSDBHry5hCZko9jeKNO1frZsSFcmLrYqgPLj7X3Eu6Ds79UtzqZioHmOdOZbtIxZDYVvALF1XPGQeJw%2FA%2F9sj69QplJoZjGzD5I%2BMc1HDT6Ht4Gb6EMaGV%2BzIovdb9YGLU21HBpCYlGHI%2FlULP5cbrfG9CmRLhWQty5xGg%2F3f%2Fsfqa8jTKTFclQE65wvHv%2BerxqbBvx4epswheEgI%2BvXlOuQlfCoJTCDes6KkxwiSCrqXgqFt4taGZvQhfhSs8wNsDCnw%3D%3D"},
//     {
//       id: 14,
//       title: "Konwinski Prize",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 617,
//       timeRemaining: "a month to go",
//       prize: "$1,225,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=a7k97a056jD7iaWHshwUVezCEv8cEurK0niI6rlozidKyOP%2BPR7KfoRYBPHyNRRS73CdVA%2Blhv8F%2FPKXDVjmK4zFsZY8DhqaunROxaRdJowhHd3J%2FEOqeuUTREetPfok1dl%2BFueesm3qrLv0LnFXKEYWdp9149bORfi6vkJGz%2FYWTPiEle0MoNEGmdqLNr%2BOe2y4D4zMIykcLjXLYpZoJLYEEQirIw7zIIk3rqr3QJHI4F%2FLhN4NysEnmU%2BuyLALUzJPCL4PR4MnHE9aBDCBq7mjLuNpkjONlxZojPWvIimhGV12rsOPl08pdY74M%2BILAdnhGpNtzdNNsk8tAigV9Q%3D%3D"},
//     {
//       id: 15,
//       title: "NeurIPS 2024 - Lux AI Season 3",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 701,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=PTPNvhidrmbh6ClnCpc5tdLLBLGT6EuJ4Nu%2FNEvdF%2BVJRz0Lokixlm9rfH2WC3CkUr8upNBEjDIm0vdPlusnFRAx7uEiBN%2FUwZ%2BoEgTGiUoWK64WLf%2BptP%2F1nqJLLPY5DUgL9zUqYDmgUbsvg41zgiz8feG%2F%2F99zB2ZLUcQffPfCB1umi0jLbGHxZKDraw5UTfjdFLjcpRc8OyARfXxxez0izwAuiqXjdKUKE7XUE49Aku%2F8g191EXTGV9ZwurpuR6%2B0XSfHoG8Lo7ajAimaStiytlxDvlqM%2BWC0b%2BnixR3N1noWl%2F5zOGA1Z2ZakKqwHqa6vWNIopj%2FZfb%2B6VpUqA%3D%3D"},
//     {
//       id: 16,
//       title: "CIBMTR - Equity in post-HCT Survival Predictions",
//       series: "Code Competition",
//       type: "Research",
//       teams: 3325,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=ccE9UU5OlDElhnOR5wkHfzRrCUY4TTLGqERezoKURZ00JouPeBXPj1OBSoKzeusE3nk2vVIvh6eNki6MFKApLqqHSRe1oBS1VjXlDBdbVve38XPC1avwD%2Bx4z3HdEn0omxVFdzVRYKfYlxJNSSP0GyyvQqENbhrNE1Ukx0siMDhSyTXuCEG2eZMkAxCrpiAiLT%2F0e0DfIYEGVr93YYncKPe2KLWmvn6njgW6Y11EAEIiGbvY3Hx%2BCkbJm0b9WODEW7JJGDKU64w8NFN6Co5fvAH%2F9OJWv0zbZztu%2FLuB585mOrv3wd5PZ%2BrrBk4CyDbE0TSuIfvyMPHebAorBYwNXg%3D%3D"},
//     {
//       id: 17,
//       title: "LLMs - You Can't Please Them All",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1693,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=X%2BOJUoUz%2BKIWMbhtkDKhAvhECU7FVxOhl7ewu%2BnKndgMDSEGPjeSe%2F%2FIrli6ABPYWqwgCUVs0Z57YG%2B9DfEXyPhwaBGuJGfXvqTQ0cNJD%2Bu27fiW5Pg3dQsvNNJlST%2FORwtwR7NBb3TJuHx1q%2BhudNnT6UIY1UDnYqCY0PL7mx1EhJeIjlRIzikOYPy3SioSVt3IqLNSgUzHSL0KIw2B%2BB3FlrqcPlxetsrQXWvTLUw9SIH7fL4zVvkc7ZKT746ZO5gwyfnc1bpxNuQpTP5HQHiat9%2B2%2B64G%2B5srmkcy4aA9GQKRtW4XJ8al7wzNsQlemsJ1ssxKNy3e4cncFXGcWw%3D%3D"},
//     {
//       id: 18,
//       title: "Regression with an Insurance Dataset",
//       series: "Playground Series - Season 4, Episode 12",
//       type: "Playground",
//       teams: 2390,
//       timeRemaining: "4 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=l8ttw4Q%2BJkvMeqrYsvCZ8f96kLQ8TdR7CDSXYWDbQUiAEU8ZcNoeSKlVW%2BNQEWF%2FIC1d7JH%2BNxqCjP1KJ%2BPGjYnaMYzUAorBjdLu7iv%2BchTt0GADkloxq1VQzgmcGGXETaLOLkZIdt%2BFt%2FJDC6G0fvvWoG5Mu0R3FQBVBaq58cxt8ye0kvWcjg5jiwa6Di4moIg7NuNYEBCV2iGb%2BaQf2%2Fl5sClD4rf9FuLTWJvcoyhwrxs%2BgY2Sa6L3b%2FaYcg4zIWnjbl%2FjpCu235MLLsSJqKYQMVg1DV3rgJqKG1faU1%2Bfmy4YO3DcXzu0qkCEPJT7%2BT9LEN6oRiUSQX6mmtpgcg%3D%3D"},
//     {
//       id: 19,
//       title: "Santa 2024 - The Perplexity Permutation Puzzle",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1514,
//       timeRemaining: "3 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=NdSeC4eT4eoR%2FXTt6FcIYQpct1muiPS1xnC6T5dt7p%2BHKEjZpveHStt1hfRSmPeki4WpGx13k4C%2B9dsNn0GoMJp7Z0pzk5vRKGhNYsdP82DdDHh%2Baiv5z%2BMG023Hh36GHE1macN4lN55VuMqWDCiYsQjw8THfbWiJZb179Y9yaYVjW%2FNE63hAkFTrxMW86Ka3Y8501SXIr%2F8aY%2F1wHbTaGrH04M8LOt8ykbxGIHZEQ1r8AFZ%2BaBwCkgCtwuxHWovb5rS7Q4%2Bm5xDF7xo%2FIMf7q5z1%2FAM435uIHJ77voCLsks8aCF2QsUYE92lNuD2Q0HOtUDDcSSQ3qCSVwS9cv9Ng%3D%3D"},
//     {
//       id: 20,
//       title: "FIDE & Google Efficient Chess AI Challenge",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 1120,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=Pt%2BHe2A83ZFYwjQkQw5ESck17IZvR9IuIj1Oc1b3JtMSQwtsdAIQyP7%2FjHt7MB0Afha4gDgeg6idMhu%2FvP0feb8Y1Yf5CyWGV3Z90ykjpqkzZBwSTFj1WP%2F%2FW4cYqUQSP3IrLoGzMSyJBekoBgWp4JYlEbpP%2FyfK0CqBIyOzJDKv%2FZ4J1eDPzqiDeI%2Bfcfmm1yy00NWhE2N95%2BOMHkfmcf6Wdmz6JkPmwacStbdYUzA0pGPYUJ%2FFyyCfFX1zuJtcxwOvAVXnzCwcIf%2B5h5OTmX%2B26Ph9pqKULsW4zfVQNNZu9u3rI375lPt%2BuxCQaf47dWEcA%2F56m1oFtrcL1k%2BDbA%3D%3D"},
 
//   ];

//   // Toggle dropdown
//   const handleToggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Select sort option
//   const handleSelectOption = (option) => {
//     setSortOption(option);
//     setDropdownOpen(false);
//   };

//   // Toggle filters panel
//   const handleToggleFilters = () => {
//     setShowFiltersPanel(!showFiltersPanel);
//   };

//   // Toggle filter selection
//   const toggleFilter = (type, value) => {
//     switch (type) {
//       case 'status':
//         setStatusFilters(prev => 
//           prev.includes(value) 
//             ? prev.filter(item => item !== value)
//             : [...prev, value]
//         );
//         break;
//       case 'prize':
//         setPrizeFilters(prev => 
//           prev.includes(value) 
//             ? prev.filter(item => item !== value)
//             : [...prev, value]
//         );
//         break;
//       case 'category':
//         setCategoryFilters(prev => 
//           prev.includes(value) 
//             ? prev.filter(item => item !== value)
//             : [...prev, value]
//         );
//         break;
//       case 'participation':
//         setParticipationFilters(prev => 
//           prev.includes(value) 
//             ? prev.filter(item => item !== value)
//             : [...prev, value]
//         );
//         break;
//       default:
//         break;
//     }
    
//     // Set filterActive to true if any filter is selected
//     if (!filterActive) {
//       setFilterActive(true);
//     }
//   };

//   // Check if a filter is active
//   const hasActiveFilters = () => {
//     return statusFilters.length > 0 || 
//            prizeFilters.length > 0 || 
//            categoryFilters.length > 0 || 
//            participationFilters.length > 0;
//   };

//   // Clear all filters
//   const clearAllFilters = () => {
//     setStatusFilters([]);
//     setPrizeFilters([]);
//     setCategoryFilters([]);
//     setParticipationFilters([]);
//     setFilterActive(false);
//   };

//   // Filter option component
//   const FilterOption = ({ label, type, value }) => (
//     <button 
//       className={`rounded-full px-4 py-2 text-sm font-medium ${
//         (type === 'status' && statusFilters.includes(value)) ||
//         (type === 'prize' && prizeFilters.includes(value)) ||
//         (type === 'category' && categoryFilters.includes(value)) ||
//         (type === 'participation' && participationFilters.includes(value))
//           ? 'bg-gray-800 text-white' 
//           : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-100'
//       }`}
//       onClick={() => toggleFilter(type, value)}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
   
//       <header className="bg-white shadow-sm py-2 px-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="relative w-full max-w-lg">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-gray-700 font-medium">Sign In</button>
//             <button className="bg-gray-900 text-white font-medium py-2 px-6 rounded-full">Register</button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content - Exactly matching the image with heading on left side */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>
        
//           {/* Search and Filters */}
//         <div className="mb-6">
//           <div className="flex items-center w-full border border-gray-300 rounded-full bg-white focus-within:ring-2 focus-within:ring-black focus-within:border-black transition-all duration-200">
//             <div className="pl-4">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search competitions"
//               className="flex-1 py-3 px-3 rounded-full border-none focus:outline-none text-gray-700"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="pr-6">
//               <button 
//                 className="flex items-center gap-2 text-gray-700 font-medium" 
//                 onClick={handleToggleFilters}
//               >
//                 <SlidersHorizontal className="h-5 w-5" />
//                 <span>Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Filters Panel */}
//         {showFiltersPanel && (
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Filters</h3>
//               {hasActiveFilters() && (
//                 <button 
//                   className="text-sm text-gray-600 hover:text-gray-900"
//                   onClick={clearAllFilters}
//                 >
//                   Clear all
//                 </button>
//               )}
//             </div>
            
//             {/* Tags */}
//             <div className="mb-6">
//               <h4 className="text-sm font-bold uppercase text-gray-700 mb-3">TAGS</h4>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                   <Search className="h-4 w-4 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search for tags"
//                   className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500"
//                   value={tagSearch}
//                   onChange={(e) => setTagSearch(e.target.value)}
//                 />
//               </div>
//             </div>
            
//             {/* Status */}
//             <div className="mb-6">
//               <h4 className="text-sm font-bold uppercase text-gray-700 mb-3">STATUS</h4>
//               <div className="flex flex-wrap gap-2">
//                 <FilterOption label="Active" type="status" value="active" />
//                 <FilterOption label="Entered" type="status" value="entered" />
//                 <FilterOption label="Completed" type="status" value="completed" />
//                 <FilterOption label="Spotlight" type="status" value="spotlight" />
//               </div>
//             </div>
            
//             {/* Prizes and Awards */}
//             <div className="mb-6">
//               <h4 className="text-sm font-bold uppercase text-gray-700 mb-3">PRIZES AND AWARDS</h4>
//               <div className="flex flex-wrap gap-2">
//                 <FilterOption label="Monetary" type="prize" value="monetary" />
//                 <FilterOption label="Medals" type="prize" value="medals" />
//                 <FilterOption label="Other" type="prize" value="other" />
//               </div>
//             </div>
            
//             {/* Categories */}
//             <div className="mb-6">
//               <h4 className="text-sm font-bold uppercase text-gray-700 mb-3">CATEGORIES</h4>
//               <div className="flex flex-wrap gap-2">
//                 <FilterOption label="Featured" type="category" value="featured" />
//                 <FilterOption label="Research" type="category" value="research" />
//                 <FilterOption label="Getting Started" type="category" value="getting-started" />
//                 <FilterOption label="Playground" type="category" value="playground" />
//                 <FilterOption label="Community" type="category" value="community" />
//                 <FilterOption label="Analytics" type="category" value="analytics" />
//                 <FilterOption label="Simulations" type="category" value="simulations" />
//               </div>
//             </div>
            
//             {/* Participation */}
//             <div className="mb-6">
//               <h4 className="text-sm font-bold uppercase text-gray-700 mb-3">PARTICIPATION</h4>
//               <div className="flex flex-wrap gap-2">
//                 <FilterOption label="Open to Everyone" type="participation" value="open" />
//                 <FilterOption label="Invitation Only" type="participation" value="invitation" />
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Active Filters */}
//         {filterActive && (
//           <div className="mb-6 flex flex-wrap gap-2">
//             {statusFilters.map(filter => (
//               <div key={filter} className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//                 <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
//                 <button onClick={() => toggleFilter('status', filter)}>
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             ))}
//             {prizeFilters.map(filter => (
//               <div key={filter} className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//                 <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
//                 <button onClick={() => toggleFilter('prize', filter)}>
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             ))}
//             {categoryFilters.map(filter => (
//               <div key={filter} className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//                 <span>{filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}</span>
//                 <button onClick={() => toggleFilter('category', filter)}>
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             ))}
//             {participationFilters.map(filter => (
//               <div key={filter} className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//                 <span>{filter === 'open' ? 'Open to Everyone' : 'Invitation Only'}</span>
//                 <button onClick={() => toggleFilter('participation', filter)}>
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//          {filterActive && (
//   <div className="mb-6 flex">
//     <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-gray-700">
//       <span>All competitions</span>
//       <button onClick={() => setFilterActive(false)}>
//         <X className="h-4 w-4" />
//       </button>
//     </div>
//   </div>
// )} 


//         {/* Results Section */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Results</h2>
//           <div className="flex items-center gap-4">
//             {/* Dropdown component */}
//             <div className="relative">
//               <button 
//                 className="flex items-center gap-2 text-gray-700"
//                 onClick={handleToggleDropdown}
//               >
//                 <span>{sortOption}</span>
//                 <ChevronDown className="h-4 w-4 text-gray-700" />
//               </button>
              
//               {/* Dropdown menu */}
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
//                   {sortOptions.map((option) => (
//                     <div 
//                       key={option} 
//                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                         option === sortOption ? 'bg-gray-200' : ''
//                       }`}
//                       onClick={() => handleSelectOption(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             <button onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}>
//               {viewMode === 'list' ? (
//                 <Grid className="h-5 w-5 text-gray-700" />
//               ) : (
//                 <LayoutGrid className="h-5 w-5 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Competition Cards - List or Grid View */}
//         {viewMode === 'list' ? (
//           // List View - as in Image 1
//           <div className="space-y-4">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
//                 <div className="relative p-4 flex-shrink-0">
//                   <img 
//                     src={competition.image} 
//                     alt={competition.title} 
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                   {competition.score && (
//                     <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
//                       {competition.score}
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-grow p-4">
//                   <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
//                   {competition.series && (
//                     <p className="text-sm text-gray-600">{competition.series}</p>
//                   )}
//                   {competition.description && (
//                     <p className="text-sm text-gray-600">{competition.description}</p>
//                   )}
//                   <div className="mt-2 flex items-center text-sm text-gray-500">
//                     <span>{competition.type}</span>
//                     {competition.subtype && (
//                       <>
//                         <span className="mx-1">·</span>
//                         <span>{competition.subtype}</span>
//                       </>
//                     )}
//                     <span className="mx-1">·</span>
//                     <span>{competition.teams} Teams</span>
//                     <span className="mx-1">·</span>
//                     <span>{competition.timeRemaining}</span>
//                   </div>
//                 </div>
//                 <div className="p-4 flex flex-col items-end justify-between">
//                   <button>
//                     <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                   </button>
//                   <div className="text-lg font-bold text-right">
//                     {competition.prize}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Grid View - as in Image 2
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
//                 <div className="relative">
//                   <img 
//                     src={competition.image} 
//                     alt={competition.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-2 left-2">
//                     <div className="bg-white rounded-full p-1">
//                       <img src="/api/placeholder/24/24" alt="Logo" className="w-6 h-6" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-4 flex-grow">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-base font-bold text-gray-800">{competition.title}</h3>
//                     <button>
//                       <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                     </button>
//                   </div>
                  
//                   {competition.series && (
//                     <p className="text-sm text-gray-600 mb-1">{competition.series}</p>
//                   )}
                  
//                   <div className="text-sm text-gray-500 mb-2">
//                     <p>{competition.type}</p>
//                     <p>{competition.teams} Teams</p>
//                   </div>
//                 </div>
                
//                 <div className="border-t border-gray-100 p-4 flex justify-between items-center">
//                   <div className="font-bold">
//                     {competition.prize}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {competition.timeRemaining}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
      
//       </main>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { Search, ChevronDown, Grid, LayoutGrid, MoreHorizontal, X } from 'lucide-react';


// export default function CompetitionsPage() {
//   // State for view mode and sort options
//   const [viewMode, setViewMode] = useState('list');
//   const [sortOption, setSortOption] = useState('Recently Launched');
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);

//   // const [filterActive, setFilterActive] = useState(false);
//   const [filterActive, setFilterActive] = useState(true);

//   const [searchTerm, setSearchTerm] = useState('');
  
//   // Sort options
//   const sortOptions = ['Hotness','Recently Launched','Closing soon', 'Recently completed', 'Rewards', 'Total iteams'];

//   // Handle dropdown toggle
//   const handleToggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Handle option selection
//   const handleSelectOption = (option) => {
//     setSortOption(option);
//     setDropdownOpen(false);
//   };

  

//   // Sample competitions data
  
//   const competitions = [
//  {
//       id: 1,
//       title: "Predict Calorie Expenditure",
//       series: "Playground Series - Season 5, Episode 5",
//       type: "Playground",
//       teams: 1520,
//       timeRemaining: "22 days to go",
//       score: "5.05",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108281&Signature=U6mjA0Z5%2BM62zM9iBGriIi4qjWOY7J9WLJhndPDUJQc%2FuE8XmKvAhbmJMqOpD5YZhWlnuYwblN0N6OpbgrxibJJmU9kZGYsWi4rK7LMmmwaA8dWWSuMPtlHCiWPjkw09pfs8AuhpcrrHOzxGr5diocIzt%2B6gsu3lBgyK0ui%2BiuJTD2PzS28q42mDYXqw05oV0CCVGfMhmeLzPFyF%2BoM01T3QTXUt1OHJT8G7k2RA1%2FEkRYtYPpJhTHA2eBAUbIgLI1aesdc2ABuy9mLjylajAv9omFm7C0dODtK%2FBGQ11XKup2Bsri%2FSrgLt48h%2FSB0vzTqa8eZm4ZvhT9DTiBzgxg%3D%3D"
//     },
//     {
//       id: 2,
//       title: "Yale/UNC-CH - Geophysical Waveform Inversion",
//       series: null,
//       description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
//       type: "Research",
//       teams: 491,
//       timeRemaining: "2 months to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=jve0eIDswz2vMWBIYTVXbL6PVCG59ZhgfIP28fcv81uvXvfExdNhfqh3fNrnExDnELLGimw49pW5SmKBM7STHzbJp0Rw9ujJF6n54ECtwqBNz6gl5qhHq2CGPCh8RPEzCsfNH9Gu8jytCA%2BJbv%2B%2FrBpqdOPpyEtwapEJ%2BGNnjV6CrKrUndAfyTE5KyrrenNGwU5Enojtj5Yooyp9ql7IE4IVXCHVxsFi%2FG1g7km57qJ8NsAXiNByczMsjb08EVxvQUEjIpx1sYO32zJD2CRB9Xzej4BLLeiMN2%2FgOU0%2BjwGguktG9RHO6FuowZzkT7QIkGTNOR5Fs1f7i40j42yZew%3D%3D"
//     },
//     {
//       id: 3,
//       title: "Image Matching Challenge 2025",
//       series: null,
//       description: "Reconstruct 3D scenes from messy image collections.",
//       type: "Research",
//       subtype: "Code Competition",
//       teams: 609,
//       timeRemaining: "25 days to go",
//       prize: "$50,000",
//       image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=lFbbHJZ1oK32VEGkJ8DBQ%2FFwXWzs%2Bnxih7IY1zGlECfm1wFwaZTkETiaP3MUdTIMc9JJM1aLK07xeDSj5%2BgI%2FnOco6Y7NPy3B%2BfPmjzZcycb%2FxYd6Vfyy149WSauBpmy%2FOixHhtEM0KeWeqHwbXtjrkEELUjR2Q8QJUHtxNltWmS2NOaP8eBNwCE8xnO%2BEWaKnG7BMRQT7pYV8crVOQW4jchFfPNHaEi8n9q%2FK1hy6xNLA80uhCeeTgJXOqa9HJ0LtZTWwHGPuyMcBNCrioVznyOoRTFg3BZV2DOq3ADomXzDfO4p%2B0MjcgYovC%2BWbrZ4XIdOH14fFZCKD6cPgNd6g%3D%3D"

//     },
//     {
//       id: 4,
//       title: "Predict Podcast Listening Time",
//       series: "Playground Series - Season 5, Episode 4",
//       type: "Playground",
//       teams: 3310,
//       timeRemaining: "8 days ago",
//       score: "5.04",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=WcOajdL6COngMc7ApFtP%2FHg8%2F7oDkp6iUPMgjSQdziQToL1koy3PjeI9Z9FayrfDkOtXzrMO6Xe3CELBcihjsSDZTz%2BCIGbZF6%2FLQ4Twyw6yjrM2CP36c%2F67XN2lMzN2pIGaGp7PLp0j2rKlfxxzQiP69t%2F%2FnLuOV%2B5Fp6d5104F%2BtQxVJUcoEvzZtbWCRMDr2SM7Op%2BS0%2FYzyJJkZNQPFtdPUzAge0PTU1%2FsMfAKTg1I3kawnSbU6HCTCg81BLGCWCpsv6XydhfSR5ggwoDhYiDVnLWCv4qfA2Cu3kRzWKzJu7%2B5v8%2B%2FUHeGkIR4VaemzsYSdEEetSB1IqHkfeWWQ%3D%3D"
//     },
//     {
//       id: 5,
//       title: "ARC Prize 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 357,
//       timeRemaining: "6 months to go",
//       prize: "$725,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=nuYy3kmOtlrd0J4M07Tkl0t860lDXmA12a8tfTU4QI%2BA16YTwHGrgygNrJXAOxquyNY%2BRy7rx%2FUlicXvXy2DG2W5STtJfcia01ZC%2Fki3JDKjmOs486kIdMWY9KjDQB%2BhmUG%2B9PwxCUooKPUsGQzStIsgTwNIsHHZYnYSuP%2FqDc%2BLyglP3yAX3%2BOCd9EadRbhfx%2F6EKjvWtUq6MAP9tKiBUJInUGBeaSpNuNMnPRME25SN%2B03tHVXJf3V%2Bo1LCtA5Z2aLdzcHMlnpJ7UaPKfntvJk16P0T4%2FuuOHGlLirTiD9wJhLncY9c90nMTGdO27FDNTnVX1H51kPPsWRF9Zywg%3D%3D"

//     },
//     {
//       id: 6,
//       title: "BirdCLEF+ 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 1599,
//       timeRemaining: "A month to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=PCNdn2%2BK34WZaOBHXw8kM9PD0WQmoP8jPtWocGQBKH7xNE9F6iMrzRgzCKVqb4uo1Rm9Z0k%2BaN5sAeVy8aJV5w54cvbywGGhoSmaqUWproj%2B9rLmUN0HIq9hM2AVlt9UKjqQMfACQM0iOl8gmglW%2FYjaR0YD0QtryyYlVQiS4AAdIa%2BE9NyXfYj0580SFyicVkaIT9c5WWuWTvsOUC%2BSsx%2BypfHUVGkNLTMUy8OD9Oh9zHqwUz4qq6VJ39S%2FvfNbvSB3FXK7hb%2B%2BzklkpVCNIYtF0NyMCnP2qVDWDa9pFhjj6hy0Gq2yVdySWCp%2BSU4YYumFgymq4H6iIuiyzSijKg%3D%3D"

//     },
//     {
//       id: 7,
//       title: "BYU - Locating Bacterial Flagellar Motors 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 908,
//       timeRemaining: "A month to go",
//       prize: "$65,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=fUEq411E%2F9w79S%2FZKA%2BC8EgYfppNQg7WpIwDymfSYtdTo%2Fp045wZulUUCh1E2DHt%2B62HjpU9F5ZKfKTGZAe8cToYXkGA%2BenCMuiYmcvlVvLLypWDKfak7RZ1UfzOpDQRWn1JJWBSvfeZtDE825pvrows10QzKzx3orMfwcgHqASS0qBpnHWIphH8vpnoflJ%2B%2F1YfD0QooJrL%2BUQ%2FrtGZuyA2d4URQBA33i0MdqZifGGrSn8If6DJvwtbDa5Yz9yO6gT8Svn0AxcDlk612NJKV1awaD4LjTLY26MctCfUJ%2BqZLXkeFevg7USlYVRJ0dE0xcuRfzWTQ2uKMY%2FipA%2BqvA%3D%3D"
//     },
//     {
//       id: 8,
//       title: "Binary Prediction with a Rainfall Dataset",
//       series: "Playground Series - Season 5, Episode 3",
//       type: "Playground",
//       teams: 4381,
//       timeRemaining: "A month ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=npG%2BEIPvzR%2FFvCxmap8jXLW4Qqk3BV5bx%2BqJnCj74WqT0fFosw%2BXA%2BO1ZIHmOJzjgqxJPX4UntHt3ZXM7cbsqocNoz%2BU3pq7AJa8eEWa2nXg%2Fe0ocezbBfNsXYlHXDcWpmOoC0qlYLjpgPHMa3WxGuox%2B8us%2Bg3HVQOs6uAWOMV09RuD%2FcddYe1ZLyGSl1Yvm%2BGyPAY%2Bl5jXx4fpanlnAMH2acRUy2cz%2B3U3oSuRyyl%2BmSLNkDAUL9CNRGlP6Ymkiztp%2Bj7xmUGOvkSTxxpQUl3NRZOMntlsQL19CIDZkDh%2Bqt%2F5%2FB8Orpxoqw3oMp69BMH944B0AfVKg2%2BRdEvepA%3D%3D"
//     },
//     {
//       id: 9,
//       title: "Stanford RNA 3D Folding",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1265,
//       timeRemaining: "20 days to go",
//       prize: "$75,000",
//         image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=djnu93G56vhK8CZ0bholO9Yz5KDSZ198MiRCqY9%2Bwl%2Blx7U%2FlxiSCVE53lzoK8RZq8gK6CeD3U6LqRA5Knxy0o0y8Lynl78j1oc97YBupN1gCc349vNWoMysMp4%2Bj9xvBNR%2FQIPS9SQ4zBw8CoDIzaoUIF4Vc36fIFE93bzJHnV52QjPCICS%2F5PDYc3fsgrBB88bcHuglSlN6lFjTQyw%2BfN%2FUOqZf2LVpVLd4whbzZCbit%2BLA0aW4%2BqFiXnw1CHzzX8rnSO8o8j3jeNZCPpaWvwYtdV1%2BGgiTTqDeNVMOfHuh0Lp276NnnnxZraJf4899hNgDQHn4ELlhw5DNUphaQ%3D%3D"},
//         {
//       id: 10,
//       title: "Drawing with LLMs",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1276,
//       timeRemaining: "18 days to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=JuDuxJsGt%2FnxtHdf4YBqe4%2FwQzO2pp8SCkZMpmV6U5MN5fHYrCAKJ0%2BTrYWqaCVH0aw%2FffufQY562QwfAjDuOgsbo%2FXibYxYvO0vYnS1N%2FpVlyBOwKuhm0%2Bl9TCRXP2YhpUTjtnk2FBMO%2FMEXnRmp6dSaPubYBxMMO%2Blqa2eHvEhbRh7EeQz48YYyqYcoiHo9yxqVVpOFN7duvdaYrNs%2BYgfemHXG8jtR0%2FXUmVAmC8Bu5%2FrTWWxYFARIlQE0%2FP5ar%2BDyClsN1x87%2Bn0BAR9%2FB0XNR0STwRZpELnY10nTlHSX9q%2BpeqXRPXl4JUzED1%2B03APA%2F2Icf3OoFOuUhnkmg%3D%3D"},
//     {
//       id: 11,
//       title: "March Machine Learning Mania 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1727,
//       timeRemaining: "a month ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=Hxd0Zeypn7tg9p%2BXwHAaOaP5DFt354fwrUD36RscrzuQihI8ZteqT0ekZUM%2BIjOkc%2BEFx2WmoXg3KYcbSkkBNbXyELX0SkUg8faqPUrTEe%2FMchzn7wPMeZNorEtVrcEwc5cG3LyBk5fj%2FqQjMKb1cypjhgUloQBKOEt34TwOsEBPO0%2Fdmy5Lgv1uCPWiDxi0c9ZuTf%2Ba8x5tbiGd5oUmDiNNw1rC0%2BUyWvV2BverEyZDHnu7Xtaubzktqp805DXhd0vUItE5KecOMJG0ob3ZjL7n2EPPuOPjlbKW4Ys0o%2Bbc98J0GXDKLmpVd9prkLwG6e%2Ff0pGBN0R09CjBTtyCgQ%3D%3D"},
//     {
//       id: 12,
//       title: "Backpack Prediction Challenge",
//       series: "Playground Series - Season 5, Episode 2",
//       type: "Playground",
//       teams: 3393,
//       timeRemaining: "2 months ago",
//       prize: "Swag",
//       image:" https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=KRABURCmuB8upibUKV7Rk%2FQ7dff6ki5RnGJg1fJxB%2FAYa8HRwdiBkT1ij5a0N2tCXIGV1x4GiOwB%2Ft%2BZ%2FQl23QwCNwzMVbZDVULmSTOBM%2FZyXAmmJYissi%2FYCDb19lv8VtSkmFHSvq%2BaCgzINfMHbIu1ssjZEcJ6TztmXwMSLkvH7ghmq3lEftoPeXZNbx7ZZkr57pi6uplcyJyt4SctEXAE5aqx4fkggFz8lSd5vIL4YCV2bD2DZLDi9OpXT7J18g6xj2b1HVdFzbxMshuLvadvsR1baFj4MaZOgUUBLYbsOvohlWAv%2FYV5Q68lDRvTywOdC8LUQUvnR9AdmeaPGQ%3D%3D"
//     },
//     {
//       id: 13,
//       title: "Forecasting Sticker Sales",
//       series: "Playground Series - Season 5, Episode 1",
//       type: "Playground",
//       teams: 2722,
//       timeRemaining: "3 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=RTmLmHgdxEIEc0c1PFaWJgp1Bddbn5DzKHg9X34nFejoVBaDME75YrkdviXnTFWgHesjEjICeLRKwsDR3xSDBHry5hCZko9jeKNO1frZsSFcmLrYqgPLj7X3Eu6Ds79UtzqZioHmOdOZbtIxZDYVvALF1XPGQeJw%2FA%2F9sj69QplJoZjGzD5I%2BMc1HDT6Ht4Gb6EMaGV%2BzIovdb9YGLU21HBpCYlGHI%2FlULP5cbrfG9CmRLhWQty5xGg%2F3f%2Fsfqa8jTKTFclQE65wvHv%2BerxqbBvx4epswheEgI%2BvXlOuQlfCoJTCDes6KkxwiSCrqXgqFt4taGZvQhfhSs8wNsDCnw%3D%3D"},
//     {
//       id: 14,
//       title: "Konwinski Prize",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 617,
//       timeRemaining: "a month to go",
//       prize: "$1,225,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=a7k97a056jD7iaWHshwUVezCEv8cEurK0niI6rlozidKyOP%2BPR7KfoRYBPHyNRRS73CdVA%2Blhv8F%2FPKXDVjmK4zFsZY8DhqaunROxaRdJowhHd3J%2FEOqeuUTREetPfok1dl%2BFueesm3qrLv0LnFXKEYWdp9149bORfi6vkJGz%2FYWTPiEle0MoNEGmdqLNr%2BOe2y4D4zMIykcLjXLYpZoJLYEEQirIw7zIIk3rqr3QJHI4F%2FLhN4NysEnmU%2BuyLALUzJPCL4PR4MnHE9aBDCBq7mjLuNpkjONlxZojPWvIimhGV12rsOPl08pdY74M%2BILAdnhGpNtzdNNsk8tAigV9Q%3D%3D"},
//     {
//       id: 15,
//       title: "NeurIPS 2024 - Lux AI Season 3",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 701,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=PTPNvhidrmbh6ClnCpc5tdLLBLGT6EuJ4Nu%2FNEvdF%2BVJRz0Lokixlm9rfH2WC3CkUr8upNBEjDIm0vdPlusnFRAx7uEiBN%2FUwZ%2BoEgTGiUoWK64WLf%2BptP%2F1nqJLLPY5DUgL9zUqYDmgUbsvg41zgiz8feG%2F%2F99zB2ZLUcQffPfCB1umi0jLbGHxZKDraw5UTfjdFLjcpRc8OyARfXxxez0izwAuiqXjdKUKE7XUE49Aku%2F8g191EXTGV9ZwurpuR6%2B0XSfHoG8Lo7ajAimaStiytlxDvlqM%2BWC0b%2BnixR3N1noWl%2F5zOGA1Z2ZakKqwHqa6vWNIopj%2FZfb%2B6VpUqA%3D%3D"},
//     {
//       id: 16,
//       title: "CIBMTR - Equity in post-HCT Survival Predictions",
//       series: "Code Competition",
//       type: "Research",
//       teams: 3325,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=ccE9UU5OlDElhnOR5wkHfzRrCUY4TTLGqERezoKURZ00JouPeBXPj1OBSoKzeusE3nk2vVIvh6eNki6MFKApLqqHSRe1oBS1VjXlDBdbVve38XPC1avwD%2Bx4z3HdEn0omxVFdzVRYKfYlxJNSSP0GyyvQqENbhrNE1Ukx0siMDhSyTXuCEG2eZMkAxCrpiAiLT%2F0e0DfIYEGVr93YYncKPe2KLWmvn6njgW6Y11EAEIiGbvY3Hx%2BCkbJm0b9WODEW7JJGDKU64w8NFN6Co5fvAH%2F9OJWv0zbZztu%2FLuB585mOrv3wd5PZ%2BrrBk4CyDbE0TSuIfvyMPHebAorBYwNXg%3D%3D"},
//     {
//       id: 17,
//       title: "LLMs - You Can't Please Them All",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1693,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=X%2BOJUoUz%2BKIWMbhtkDKhAvhECU7FVxOhl7ewu%2BnKndgMDSEGPjeSe%2F%2FIrli6ABPYWqwgCUVs0Z57YG%2B9DfEXyPhwaBGuJGfXvqTQ0cNJD%2Bu27fiW5Pg3dQsvNNJlST%2FORwtwR7NBb3TJuHx1q%2BhudNnT6UIY1UDnYqCY0PL7mx1EhJeIjlRIzikOYPy3SioSVt3IqLNSgUzHSL0KIw2B%2BB3FlrqcPlxetsrQXWvTLUw9SIH7fL4zVvkc7ZKT746ZO5gwyfnc1bpxNuQpTP5HQHiat9%2B2%2B64G%2B5srmkcy4aA9GQKRtW4XJ8al7wzNsQlemsJ1ssxKNy3e4cncFXGcWw%3D%3D"},
//     {
//       id: 18,
//       title: "Regression with an Insurance Dataset",
//       series: "Playground Series - Season 4, Episode 12",
//       type: "Playground",
//       teams: 2390,
//       timeRemaining: "4 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=l8ttw4Q%2BJkvMeqrYsvCZ8f96kLQ8TdR7CDSXYWDbQUiAEU8ZcNoeSKlVW%2BNQEWF%2FIC1d7JH%2BNxqCjP1KJ%2BPGjYnaMYzUAorBjdLu7iv%2BchTt0GADkloxq1VQzgmcGGXETaLOLkZIdt%2BFt%2FJDC6G0fvvWoG5Mu0R3FQBVBaq58cxt8ye0kvWcjg5jiwa6Di4moIg7NuNYEBCV2iGb%2BaQf2%2Fl5sClD4rf9FuLTWJvcoyhwrxs%2BgY2Sa6L3b%2FaYcg4zIWnjbl%2FjpCu235MLLsSJqKYQMVg1DV3rgJqKG1faU1%2Bfmy4YO3DcXzu0qkCEPJT7%2BT9LEN6oRiUSQX6mmtpgcg%3D%3D"},
//     {
//       id: 19,
//       title: "Santa 2024 - The Perplexity Permutation Puzzle",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1514,
//       timeRemaining: "3 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=NdSeC4eT4eoR%2FXTt6FcIYQpct1muiPS1xnC6T5dt7p%2BHKEjZpveHStt1hfRSmPeki4WpGx13k4C%2B9dsNn0GoMJp7Z0pzk5vRKGhNYsdP82DdDHh%2Baiv5z%2BMG023Hh36GHE1macN4lN55VuMqWDCiYsQjw8THfbWiJZb179Y9yaYVjW%2FNE63hAkFTrxMW86Ka3Y8501SXIr%2F8aY%2F1wHbTaGrH04M8LOt8ykbxGIHZEQ1r8AFZ%2BaBwCkgCtwuxHWovb5rS7Q4%2Bm5xDF7xo%2FIMf7q5z1%2FAM435uIHJ77voCLsks8aCF2QsUYE92lNuD2Q0HOtUDDcSSQ3qCSVwS9cv9Ng%3D%3D"},
//     {
//       id: 20,
//       title: "FIDE & Google Efficient Chess AI Challenge",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 1120,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=Pt%2BHe2A83ZFYwjQkQw5ESck17IZvR9IuIj1Oc1b3JtMSQwtsdAIQyP7%2FjHt7MB0Afha4gDgeg6idMhu%2FvP0feb8Y1Yf5CyWGV3Z90ykjpqkzZBwSTFj1WP%2F%2FW4cYqUQSP3IrLoGzMSyJBekoBgWp4JYlEbpP%2FyfK0CqBIyOzJDKv%2FZ4J1eDPzqiDeI%2Bfcfmm1yy00NWhE2N95%2BOMHkfmcf6Wdmz6JkPmwacStbdYUzA0pGPYUJ%2FFyyCfFX1zuJtcxwOvAVXnzCwcIf%2B5h5OTmX%2B26Ph9pqKULsW4zfVQNNZu9u3rI375lPt%2BuxCQaf47dWEcA%2F56m1oFtrcL1k%2BDbA%3D%3D"},
 
//   ];

//   return (
//     <div>
    

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//         <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>

//  {/* Active Filters */}
// {filterActive && (
//   <div className="mb-6 flex items-center gap-2">
//     <div className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 shadow-sm border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700">
//       <span className="font-medium">All competitions</span>
//       <button
//         onClick={() => setFilterActive(false)}
//         className="p-1 rounded-full hover:bg-gray-300 transition"
//         aria-label="Remove filter"
//       >
//         <X className="h-4 w-4" />
//       </button>
//     </div>
//   </div>
// )}

        
//         {/* Results Section */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Results</h2>
//           <div className="flex items-center gap-4">
//             {/* Dropdown component */}
//             <div className="relative">
//               <button 
//                 className="flex items-center gap-2 text-gray-700"
//                 onClick={handleToggleDropdown}
//               >
//                 <span>{sortOption}</span>
//                 <ChevronDown className="h-4 w-4 text-gray-700" />
//               </button>
              
//               {/* Dropdown menu */}
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
//                   {sortOptions.map((option) => (
//                     <div 
//                       key={option} 
//                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                         option === sortOption ? 'bg-gray-200' : ''
//                       }`}
//                       onClick={() => handleSelectOption(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             <button onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}>
//               {viewMode === 'list' ? (
//                 <Grid className="h-5 w-5 text-gray-700" />
//               ) : (
//                 <LayoutGrid className="h-5 w-5 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Competition Cards - List or Grid View */}
//         {viewMode === 'list' ? (
//           // List View
//           <div className="space-y-4">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
//                 <div className="relative p-4 flex-shrink-0">
//                   <img 
//                     src={competition.image} 
//                     alt={competition.title} 
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                   {competition.score && (
//                     <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
//                       {competition.score}
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-grow p-4">
//                   <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
//                   {competition.series && (
//                     <p className="text-sm text-gray-600">{competition.series}</p>
//                   )}
//                   {competition.description && (
//                     <p className="text-sm text-gray-600">{competition.description}</p>
//                   )}
//                   <div className="mt-2 flex items-center text-sm text-gray-500">
//                     <span>{competition.type}</span>
//                     {competition.subtype && (
//                       <>
//                         <span className="mx-1">·</span>
//                         <span>{competition.subtype}</span>
//                       </>
//                     )}
//                     <span className="mx-1">·</span>
//                     <span>{competition.teams} Teams</span>
//                     <span className="mx-1">·</span>
//                     <span>{competition.timeRemaining}</span>
//                   </div>
//                 </div>
//                 <div className="p-4 flex flex-col items-end justify-between">
//                   <button>
//                     <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                   </button>
//                   <div className="text-lg font-bold text-right">
//                     {competition.prize}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Grid View
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
//                 <div className="relative">
//                   <img 
//                     src={competition.image} 
//                     alt={competition.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-2 left-2">
//                     <div className="bg-white rounded-full p-1">
//                       <img src="/api/placeholder/24/24" alt="Logo" className="w-6 h-6" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-4 flex-grow">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-base font-bold text-gray-800">{competition.title}</h3>
//                     <button>
//                       <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                     </button>
//                   </div>
                  
//                   {competition.series && (
//                     <p className="text-sm text-gray-600 mb-1">{competition.series}</p>
//                   )}
                  
//                   <div className="text-sm text-gray-500 mb-2">
//                     <p>{competition.type}</p>
//                     <p>{competition.teams} Teams</p>
//                   </div>
//                 </div>
                
//                 <div className="border-t border-gray-100 p-4 flex justify-between items-center">
//                   <div className="font-bold">
//                     {competition.prize}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {competition.timeRemaining}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { Search, ChevronDown, Grid, LayoutGrid, MoreHorizontal, X, Bookmark, PlusCircle } from 'lucide-react';

// export default function CompetitionsPage() {
//   // State for view mode and sort options
//   const [viewMode, setViewMode] = useState('list');
//   const [sortOption, setSortOption] = useState('Recently Launched');
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [filterActive, setFilterActive] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Sort options
//   const sortOptions = ['Hotness', 'Recently Launched', 'Closing Soon', 'Recently Completed', 'Rewards', 'Total Teams'];

//   // Handle dropdown toggle
//   const handleToggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Handle option selection
//   const handleSelectOption = (option) => {
//     setSortOption(option);
//     setDropdownOpen(false);
//   };

//   // Handle more options dropdown
//   const handleToggleMoreOptions = (id) => {
//     setActiveDropdown(activeDropdown === id ? null : id);
//   };

  
//   // Sample competitions data
  
//   const competitions = [
//  {
//       id: 1,
//       title: "Predict Calorie Expenditure",
//       series: "Playground Series - Season 5, Episode 5",
//       type: "Playground",
//       teams: 1520,
//       timeRemaining: "22 days to go",
//       score: "5.05",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108281&Signature=U6mjA0Z5%2BM62zM9iBGriIi4qjWOY7J9WLJhndPDUJQc%2FuE8XmKvAhbmJMqOpD5YZhWlnuYwblN0N6OpbgrxibJJmU9kZGYsWi4rK7LMmmwaA8dWWSuMPtlHCiWPjkw09pfs8AuhpcrrHOzxGr5diocIzt%2B6gsu3lBgyK0ui%2BiuJTD2PzS28q42mDYXqw05oV0CCVGfMhmeLzPFyF%2BoM01T3QTXUt1OHJT8G7k2RA1%2FEkRYtYPpJhTHA2eBAUbIgLI1aesdc2ABuy9mLjylajAv9omFm7C0dODtK%2FBGQ11XKup2Bsri%2FSrgLt48h%2FSB0vzTqa8eZm4ZvhT9DTiBzgxg%3D%3D"
//     },
//     {
//       id: 2,
//       title: "Yale/UNC-CH - Geophysical Waveform Inversion",
//       series: null,
//       description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
//       type: "Research",
//       teams: 491,
//       timeRemaining: "2 months to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=jve0eIDswz2vMWBIYTVXbL6PVCG59ZhgfIP28fcv81uvXvfExdNhfqh3fNrnExDnELLGimw49pW5SmKBM7STHzbJp0Rw9ujJF6n54ECtwqBNz6gl5qhHq2CGPCh8RPEzCsfNH9Gu8jytCA%2BJbv%2B%2FrBpqdOPpyEtwapEJ%2BGNnjV6CrKrUndAfyTE5KyrrenNGwU5Enojtj5Yooyp9ql7IE4IVXCHVxsFi%2FG1g7km57qJ8NsAXiNByczMsjb08EVxvQUEjIpx1sYO32zJD2CRB9Xzej4BLLeiMN2%2FgOU0%2BjwGguktG9RHO6FuowZzkT7QIkGTNOR5Fs1f7i40j42yZew%3D%3D"
//     },
//     {
//       id: 3,
//       title: "Image Matching Challenge 2025",
//       series: null,
//       description: "Reconstruct 3D scenes from messy image collections.",
//       type: "Research",
//       subtype: "Code Competition",
//       teams: 609,
//       timeRemaining: "25 days to go",
//       prize: "$50,000",
//       image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=lFbbHJZ1oK32VEGkJ8DBQ%2FFwXWzs%2Bnxih7IY1zGlECfm1wFwaZTkETiaP3MUdTIMc9JJM1aLK07xeDSj5%2BgI%2FnOco6Y7NPy3B%2BfPmjzZcycb%2FxYd6Vfyy149WSauBpmy%2FOixHhtEM0KeWeqHwbXtjrkEELUjR2Q8QJUHtxNltWmS2NOaP8eBNwCE8xnO%2BEWaKnG7BMRQT7pYV8crVOQW4jchFfPNHaEi8n9q%2FK1hy6xNLA80uhCeeTgJXOqa9HJ0LtZTWwHGPuyMcBNCrioVznyOoRTFg3BZV2DOq3ADomXzDfO4p%2B0MjcgYovC%2BWbrZ4XIdOH14fFZCKD6cPgNd6g%3D%3D"

//     },
//     {
//       id: 4,
//       title: "Predict Podcast Listening Time",
//       series: "Playground Series - Season 5, Episode 4",
//       type: "Playground",
//       teams: 3310,
//       timeRemaining: "8 days ago",
//       score: "5.04",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=WcOajdL6COngMc7ApFtP%2FHg8%2F7oDkp6iUPMgjSQdziQToL1koy3PjeI9Z9FayrfDkOtXzrMO6Xe3CELBcihjsSDZTz%2BCIGbZF6%2FLQ4Twyw6yjrM2CP36c%2F67XN2lMzN2pIGaGp7PLp0j2rKlfxxzQiP69t%2F%2FnLuOV%2B5Fp6d5104F%2BtQxVJUcoEvzZtbWCRMDr2SM7Op%2BS0%2FYzyJJkZNQPFtdPUzAge0PTU1%2FsMfAKTg1I3kawnSbU6HCTCg81BLGCWCpsv6XydhfSR5ggwoDhYiDVnLWCv4qfA2Cu3kRzWKzJu7%2B5v8%2B%2FUHeGkIR4VaemzsYSdEEetSB1IqHkfeWWQ%3D%3D"
//     },
//     {
//       id: 5,
//       title: "ARC Prize 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 357,
//       timeRemaining: "6 months to go",
//       prize: "$725,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=nuYy3kmOtlrd0J4M07Tkl0t860lDXmA12a8tfTU4QI%2BA16YTwHGrgygNrJXAOxquyNY%2BRy7rx%2FUlicXvXy2DG2W5STtJfcia01ZC%2Fki3JDKjmOs486kIdMWY9KjDQB%2BhmUG%2B9PwxCUooKPUsGQzStIsgTwNIsHHZYnYSuP%2FqDc%2BLyglP3yAX3%2BOCd9EadRbhfx%2F6EKjvWtUq6MAP9tKiBUJInUGBeaSpNuNMnPRME25SN%2B03tHVXJf3V%2Bo1LCtA5Z2aLdzcHMlnpJ7UaPKfntvJk16P0T4%2FuuOHGlLirTiD9wJhLncY9c90nMTGdO27FDNTnVX1H51kPPsWRF9Zywg%3D%3D"

//     },
//     {
//       id: 6,
//       title: "BirdCLEF+ 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 1599,
//       timeRemaining: "A month to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=PCNdn2%2BK34WZaOBHXw8kM9PD0WQmoP8jPtWocGQBKH7xNE9F6iMrzRgzCKVqb4uo1Rm9Z0k%2BaN5sAeVy8aJV5w54cvbywGGhoSmaqUWproj%2B9rLmUN0HIq9hM2AVlt9UKjqQMfACQM0iOl8gmglW%2FYjaR0YD0QtryyYlVQiS4AAdIa%2BE9NyXfYj0580SFyicVkaIT9c5WWuWTvsOUC%2BSsx%2BypfHUVGkNLTMUy8OD9Oh9zHqwUz4qq6VJ39S%2FvfNbvSB3FXK7hb%2B%2BzklkpVCNIYtF0NyMCnP2qVDWDa9pFhjj6hy0Gq2yVdySWCp%2BSU4YYumFgymq4H6iIuiyzSijKg%3D%3D"

//     },
//     {
//       id: 7,
//       title: "BYU - Locating Bacterial Flagellar Motors 2025",
//       series: "Code Competition",
//       type: "Research",
//       teams: 908,
//       timeRemaining: "A month to go",
//       prize: "$65,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=fUEq411E%2F9w79S%2FZKA%2BC8EgYfppNQg7WpIwDymfSYtdTo%2Fp045wZulUUCh1E2DHt%2B62HjpU9F5ZKfKTGZAe8cToYXkGA%2BenCMuiYmcvlVvLLypWDKfak7RZ1UfzOpDQRWn1JJWBSvfeZtDE825pvrows10QzKzx3orMfwcgHqASS0qBpnHWIphH8vpnoflJ%2B%2F1YfD0QooJrL%2BUQ%2FrtGZuyA2d4URQBA33i0MdqZifGGrSn8If6DJvwtbDa5Yz9yO6gT8Svn0AxcDlk612NJKV1awaD4LjTLY26MctCfUJ%2BqZLXkeFevg7USlYVRJ0dE0xcuRfzWTQ2uKMY%2FipA%2BqvA%3D%3D"
//     },
//     {
//       id: 8,
//       title: "Binary Prediction with a Rainfall Dataset",
//       series: "Playground Series - Season 5, Episode 3",
//       type: "Playground",
//       teams: 4381,
//       timeRemaining: "A month ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=npG%2BEIPvzR%2FFvCxmap8jXLW4Qqk3BV5bx%2BqJnCj74WqT0fFosw%2BXA%2BO1ZIHmOJzjgqxJPX4UntHt3ZXM7cbsqocNoz%2BU3pq7AJa8eEWa2nXg%2Fe0ocezbBfNsXYlHXDcWpmOoC0qlYLjpgPHMa3WxGuox%2B8us%2Bg3HVQOs6uAWOMV09RuD%2FcddYe1ZLyGSl1Yvm%2BGyPAY%2Bl5jXx4fpanlnAMH2acRUy2cz%2B3U3oSuRyyl%2BmSLNkDAUL9CNRGlP6Ymkiztp%2Bj7xmUGOvkSTxxpQUl3NRZOMntlsQL19CIDZkDh%2Bqt%2F5%2FB8Orpxoqw3oMp69BMH944B0AfVKg2%2BRdEvepA%3D%3D"
//     },
//     {
//       id: 9,
//       title: "Stanford RNA 3D Folding",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1265,
//       timeRemaining: "20 days to go",
//       prize: "$75,000",
//         image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=djnu93G56vhK8CZ0bholO9Yz5KDSZ198MiRCqY9%2Bwl%2Blx7U%2FlxiSCVE53lzoK8RZq8gK6CeD3U6LqRA5Knxy0o0y8Lynl78j1oc97YBupN1gCc349vNWoMysMp4%2Bj9xvBNR%2FQIPS9SQ4zBw8CoDIzaoUIF4Vc36fIFE93bzJHnV52QjPCICS%2F5PDYc3fsgrBB88bcHuglSlN6lFjTQyw%2BfN%2FUOqZf2LVpVLd4whbzZCbit%2BLA0aW4%2BqFiXnw1CHzzX8rnSO8o8j3jeNZCPpaWvwYtdV1%2BGgiTTqDeNVMOfHuh0Lp276NnnnxZraJf4899hNgDQHn4ELlhw5DNUphaQ%3D%3D"},
//         {
//       id: 10,
//       title: "Drawing with LLMs",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1276,
//       timeRemaining: "18 days to go",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=JuDuxJsGt%2FnxtHdf4YBqe4%2FwQzO2pp8SCkZMpmV6U5MN5fHYrCAKJ0%2BTrYWqaCVH0aw%2FffufQY562QwfAjDuOgsbo%2FXibYxYvO0vYnS1N%2FpVlyBOwKuhm0%2Bl9TCRXP2YhpUTjtnk2FBMO%2FMEXnRmp6dSaPubYBxMMO%2Blqa2eHvEhbRh7EeQz48YYyqYcoiHo9yxqVVpOFN7duvdaYrNs%2BYgfemHXG8jtR0%2FXUmVAmC8Bu5%2FrTWWxYFARIlQE0%2FP5ar%2BDyClsN1x87%2Bn0BAR9%2FB0XNR0STwRZpELnY10nTlHSX9q%2BpeqXRPXl4JUzED1%2B03APA%2F2Icf3OoFOuUhnkmg%3D%3D"},
//     {
//       id: 11,
//       title: "March Machine Learning Mania 2025",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1727,
//       timeRemaining: "a month ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=Hxd0Zeypn7tg9p%2BXwHAaOaP5DFt354fwrUD36RscrzuQihI8ZteqT0ekZUM%2BIjOkc%2BEFx2WmoXg3KYcbSkkBNbXyELX0SkUg8faqPUrTEe%2FMchzn7wPMeZNorEtVrcEwc5cG3LyBk5fj%2FqQjMKb1cypjhgUloQBKOEt34TwOsEBPO0%2Fdmy5Lgv1uCPWiDxi0c9ZuTf%2Ba8x5tbiGd5oUmDiNNw1rC0%2BUyWvV2BverEyZDHnu7Xtaubzktqp805DXhd0vUItE5KecOMJG0ob3ZjL7n2EPPuOPjlbKW4Ys0o%2Bbc98J0GXDKLmpVd9prkLwG6e%2Ff0pGBN0R09CjBTtyCgQ%3D%3D"},
//     {
//       id: 12,
//       title: "Backpack Prediction Challenge",
//       series: "Playground Series - Season 5, Episode 2",
//       type: "Playground",
//       teams: 3393,
//       timeRemaining: "2 months ago",
//       prize: "Swag",
//       image:" https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=KRABURCmuB8upibUKV7Rk%2FQ7dff6ki5RnGJg1fJxB%2FAYa8HRwdiBkT1ij5a0N2tCXIGV1x4GiOwB%2Ft%2BZ%2FQl23QwCNwzMVbZDVULmSTOBM%2FZyXAmmJYissi%2FYCDb19lv8VtSkmFHSvq%2BaCgzINfMHbIu1ssjZEcJ6TztmXwMSLkvH7ghmq3lEftoPeXZNbx7ZZkr57pi6uplcyJyt4SctEXAE5aqx4fkggFz8lSd5vIL4YCV2bD2DZLDi9OpXT7J18g6xj2b1HVdFzbxMshuLvadvsR1baFj4MaZOgUUBLYbsOvohlWAv%2FYV5Q68lDRvTywOdC8LUQUvnR9AdmeaPGQ%3D%3D"
//     },
//     {
//       id: 13,
//       title: "Forecasting Sticker Sales",
//       series: "Playground Series - Season 5, Episode 1",
//       type: "Playground",
//       teams: 2722,
//       timeRemaining: "3 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=RTmLmHgdxEIEc0c1PFaWJgp1Bddbn5DzKHg9X34nFejoVBaDME75YrkdviXnTFWgHesjEjICeLRKwsDR3xSDBHry5hCZko9jeKNO1frZsSFcmLrYqgPLj7X3Eu6Ds79UtzqZioHmOdOZbtIxZDYVvALF1XPGQeJw%2FA%2F9sj69QplJoZjGzD5I%2BMc1HDT6Ht4Gb6EMaGV%2BzIovdb9YGLU21HBpCYlGHI%2FlULP5cbrfG9CmRLhWQty5xGg%2F3f%2Fsfqa8jTKTFclQE65wvHv%2BerxqbBvx4epswheEgI%2BvXlOuQlfCoJTCDes6KkxwiSCrqXgqFt4taGZvQhfhSs8wNsDCnw%3D%3D"},
//     {
//       id: 14,
//       title: "Konwinski Prize",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 617,
//       timeRemaining: "a month to go",
//       prize: "$1,225,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=a7k97a056jD7iaWHshwUVezCEv8cEurK0niI6rlozidKyOP%2BPR7KfoRYBPHyNRRS73CdVA%2Blhv8F%2FPKXDVjmK4zFsZY8DhqaunROxaRdJowhHd3J%2FEOqeuUTREetPfok1dl%2BFueesm3qrLv0LnFXKEYWdp9149bORfi6vkJGz%2FYWTPiEle0MoNEGmdqLNr%2BOe2y4D4zMIykcLjXLYpZoJLYEEQirIw7zIIk3rqr3QJHI4F%2FLhN4NysEnmU%2BuyLALUzJPCL4PR4MnHE9aBDCBq7mjLuNpkjONlxZojPWvIimhGV12rsOPl08pdY74M%2BILAdnhGpNtzdNNsk8tAigV9Q%3D%3D"},
//     {
//       id: 15,
//       title: "NeurIPS 2024 - Lux AI Season 3",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 701,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=PTPNvhidrmbh6ClnCpc5tdLLBLGT6EuJ4Nu%2FNEvdF%2BVJRz0Lokixlm9rfH2WC3CkUr8upNBEjDIm0vdPlusnFRAx7uEiBN%2FUwZ%2BoEgTGiUoWK64WLf%2BptP%2F1nqJLLPY5DUgL9zUqYDmgUbsvg41zgiz8feG%2F%2F99zB2ZLUcQffPfCB1umi0jLbGHxZKDraw5UTfjdFLjcpRc8OyARfXxxez0izwAuiqXjdKUKE7XUE49Aku%2F8g191EXTGV9ZwurpuR6%2B0XSfHoG8Lo7ajAimaStiytlxDvlqM%2BWC0b%2BnixR3N1noWl%2F5zOGA1Z2ZakKqwHqa6vWNIopj%2FZfb%2B6VpUqA%3D%3D"},
//     {
//       id: 16,
//       title: "CIBMTR - Equity in post-HCT Survival Predictions",
//       series: "Code Competition",
//       type: "Research",
//       teams: 3325,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=ccE9UU5OlDElhnOR5wkHfzRrCUY4TTLGqERezoKURZ00JouPeBXPj1OBSoKzeusE3nk2vVIvh6eNki6MFKApLqqHSRe1oBS1VjXlDBdbVve38XPC1avwD%2Bx4z3HdEn0omxVFdzVRYKfYlxJNSSP0GyyvQqENbhrNE1Ukx0siMDhSyTXuCEG2eZMkAxCrpiAiLT%2F0e0DfIYEGVr93YYncKPe2KLWmvn6njgW6Y11EAEIiGbvY3Hx%2BCkbJm0b9WODEW7JJGDKU64w8NFN6Co5fvAH%2F9OJWv0zbZztu%2FLuB585mOrv3wd5PZ%2BrrBk4CyDbE0TSuIfvyMPHebAorBYwNXg%3D%3D"},
//     {
//       id: 17,
//       title: "LLMs - You Can't Please Them All",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1693,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=X%2BOJUoUz%2BKIWMbhtkDKhAvhECU7FVxOhl7ewu%2BnKndgMDSEGPjeSe%2F%2FIrli6ABPYWqwgCUVs0Z57YG%2B9DfEXyPhwaBGuJGfXvqTQ0cNJD%2Bu27fiW5Pg3dQsvNNJlST%2FORwtwR7NBb3TJuHx1q%2BhudNnT6UIY1UDnYqCY0PL7mx1EhJeIjlRIzikOYPy3SioSVt3IqLNSgUzHSL0KIw2B%2BB3FlrqcPlxetsrQXWvTLUw9SIH7fL4zVvkc7ZKT746ZO5gwyfnc1bpxNuQpTP5HQHiat9%2B2%2B64G%2B5srmkcy4aA9GQKRtW4XJ8al7wzNsQlemsJ1ssxKNy3e4cncFXGcWw%3D%3D"},
//     {
//       id: 18,
//       title: "Regression with an Insurance Dataset",
//       series: "Playground Series - Season 4, Episode 12",
//       type: "Playground",
//       teams: 2390,
//       timeRemaining: "4 months ago",
//       prize: "Swag",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=l8ttw4Q%2BJkvMeqrYsvCZ8f96kLQ8TdR7CDSXYWDbQUiAEU8ZcNoeSKlVW%2BNQEWF%2FIC1d7JH%2BNxqCjP1KJ%2BPGjYnaMYzUAorBjdLu7iv%2BchTt0GADkloxq1VQzgmcGGXETaLOLkZIdt%2BFt%2FJDC6G0fvvWoG5Mu0R3FQBVBaq58cxt8ye0kvWcjg5jiwa6Di4moIg7NuNYEBCV2iGb%2BaQf2%2Fl5sClD4rf9FuLTWJvcoyhwrxs%2BgY2Sa6L3b%2FaYcg4zIWnjbl%2FjpCu235MLLsSJqKYQMVg1DV3rgJqKG1faU1%2Bfmy4YO3DcXzu0qkCEPJT7%2BT9LEN6oRiUSQX6mmtpgcg%3D%3D"},
//     {
//       id: 19,
//       title: "Santa 2024 - The Perplexity Permutation Puzzle",
//       series: "Code Competition",
//       type: "Featured",
//       teams: 1514,
//       timeRemaining: "3 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=NdSeC4eT4eoR%2FXTt6FcIYQpct1muiPS1xnC6T5dt7p%2BHKEjZpveHStt1hfRSmPeki4WpGx13k4C%2B9dsNn0GoMJp7Z0pzk5vRKGhNYsdP82DdDHh%2Baiv5z%2BMG023Hh36GHE1macN4lN55VuMqWDCiYsQjw8THfbWiJZb179Y9yaYVjW%2FNE63hAkFTrxMW86Ka3Y8501SXIr%2F8aY%2F1wHbTaGrH04M8LOt8ykbxGIHZEQ1r8AFZ%2BaBwCkgCtwuxHWovb5rS7Q4%2Bm5xDF7xo%2FIMf7q5z1%2FAM435uIHJ77voCLsks8aCF2QsUYE92lNuD2Q0HOtUDDcSSQ3qCSVwS9cv9Ng%3D%3D"},
//     {
//       id: 20,
//       title: "FIDE & Google Efficient Chess AI Challenge",
//       series: "Simulation Competition",
//       type: "Featured",
//       teams: 1120,
//       timeRemaining: "2 months ago",
//       prize: "$50,000",
//       image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=Pt%2BHe2A83ZFYwjQkQw5ESck17IZvR9IuIj1Oc1b3JtMSQwtsdAIQyP7%2FjHt7MB0Afha4gDgeg6idMhu%2FvP0feb8Y1Yf5CyWGV3Z90ykjpqkzZBwSTFj1WP%2F%2FW4cYqUQSP3IrLoGzMSyJBekoBgWp4JYlEbpP%2FyfK0CqBIyOzJDKv%2FZ4J1eDPzqiDeI%2Bfcfmm1yy00NWhE2N95%2BOMHkfmcf6Wdmz6JkPmwacStbdYUzA0pGPYUJ%2FFyyCfFX1zuJtcxwOvAVXnzCwcIf%2B5h5OTmX%2B26Ph9pqKULsW4zfVQNNZu9u3rI375lPt%2BuxCQaf47dWEcA%2F56m1oFtrcL1k%2BDbA%3D%3D"},
 
//   ];

//   // More options menu items
//   const moreOptions = [
//        { icon: <PlusCircle className="h-4 w-4 mr-2" />, label: "Add to collections" },
//         { icon: <Bookmark className="h-4 w-4 mr-2" />, label: "Bookmark" },
//   ];

//   return (
//     <div>
//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//         <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>

//         {/* Active Filters */}
//         {filterActive && (
//           <div className="mb-6 flex items-center gap-2">
//             <div className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 shadow-sm border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700">
//               <span className="font-medium">All competitions</span>
//               <button
//                 onClick={() => setFilterActive(false)}
//                 className="p-1 rounded-full hover:bg-gray-300 transition"
//                 aria-label="Remove filter"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Results Section */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Results</h2>
//           <div className="flex items-center gap-4">
//             {/* Dropdown component */}
//             <div className="relative">
//               <button
//                 className="flex items-center gap-2 text-gray-700"
//                 onClick={handleToggleDropdown}
//                 aria-label="Sort options"
//               >
//                 <span>{sortOption}</span>
//                 <ChevronDown className="h-4 w-4 text-gray-700" />
//               </button>

//               {/* Dropdown menu */}
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
//                   {sortOptions.map((option) => (
//                     <div
//                       key={option}
//                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                         option === sortOption ? 'bg-gray-200' : ''
//                       }`}
//                       onClick={() => handleSelectOption(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
//               aria-label="Toggle view mode"
//             >
//               {viewMode === 'list' ? (
//                 <Grid className="h-5 w-5 text-gray-700" />
//               ) : (
//                 <LayoutGrid className="h-5 w-5 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Competition Cards - List or Grid View */}
//         {viewMode === 'list' ? (
//           // List View
//           <div className="space-y-4">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
//                 <div className="relative p-4 flex-shrink-0">
//                   <img
//                     src={competition.image}
//                     alt={competition.title}
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                   {competition.score && (
//                     <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
//                       {competition.score}
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-grow p-4">
//                   <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
//                   {competition.series && (
//                     <p className="text-sm text-gray-600">{competition.series}</p>
//                   )}
//                   {competition.description && (
//                     <p className="text-sm text-gray-600">{competition.description}</p>
//                   )}
//                   <div className="mt-2 flex items-center text-sm text-gray-500">
//                     <span>{competition.type}</span>
//                     {competition.subtype && (
//                       <>
//                         <span className="mx-1">·</span>
//                         <span>{competition.subtype}</span>
//                       </>
//                     )}
//                     <span className="mx-1">·</span>
//                     <span>{competition.teams} Teams</span>
//                     <span className="mx-1">·</span>
//                     <span>{competition.timeRemaining}</span>
//                   </div>
//                 </div>
//                 <div className="p-4 flex flex-col items-end justify-between">
//                   <div className="relative">
//                     <button
//                       onClick={() => handleToggleMoreOptions(competition.id)}
//                       className="p-1 hover:bg-gray-100 rounded-full"
//                       aria-label="More options"
//                     >
//                       <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                     </button>

//                     {/* More options dropdown */}
//                     {activeDropdown === competition.id && (
//                       <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
//                         {moreOptions.map((option, index) => (
//                           <div
//                             key={index}
//                             className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
//                             onClick={() => setActiveDropdown(null)}
//                           >
//                             {option.icon}
//                             {option.label}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   <div className="text-lg font-bold text-right">
//                     {competition.prize}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Grid View
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {competitions.map((competition) => (
//               <div key={competition.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
//                 <div className="relative">
//                   <img
//                     src={competition.image}
//                     alt={competition.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-2 left-2">
//                     <div className="bg-white rounded-full p-1">
//                       <img src="/api/placeholder/24/24" alt="Logo" className="w-6 h-6" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-4 flex-grow">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-base font-bold text-gray-800">{competition.title}</h3>
//                     <div className="relative">
//                       <button
//                         onClick={() => handleToggleMoreOptions(grid-${competition.id})}
//                         className="p-1 hover:bg-gray-100 rounded-full"
//                         aria-label="More options"
//                       >
//                         <MoreHorizontal className="h-5 w-5 text-gray-500" />
//                       </button>

//                       {/* More options dropdown */}
//                       {activeDropdown === grid-${competition.id} && (
//                         <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
//                           {moreOptions.map((option, index) => (
//                             <div
//                               key={index}
//                               className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
//                               onClick={() => setActiveDropdown(null)}
//                             >
//                               {option.icon}
//                               {option.label}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {competition.series && (
//                     <p className="text-sm text-gray-600 mb-1">{competition.series}</p>
//                   )}

//                   <div className="text-sm text-gray-500 mb-2">
//                     <p>{competition.type}</p>
//                     <p>{competition.teams} Teams</p>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-100 p-4 flex justify-between items-center">
//                   <div className="font-bold">
//                     {competition.prize}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {competition.timeRemaining}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Search, ChevronDown, Grid, LayoutGrid, MoreHorizontal, X, Bookmark, PlusCircle } from 'lucide-react';

export default function CompetitionsPage() {
  // State for view mode and sort options
  const [viewMode, setViewMode] = useState('list');
  const [sortOption, setSortOption] = useState('Recently Launched');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filterActive, setFilterActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Sort options
  const sortOptions = ['Hotness', 'Recently Launched', 'Closing Soon', 'Recently Completed', 'Rewards', 'Total Teams'];

  // Handle dropdown toggle
  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle option selection
  const handleSelectOption = (option) => {
    setSortOption(option);
    setDropdownOpen(false);
  };

  // Handle more options dropdown
  const handleToggleMoreOptions = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  
  // Sample competitions data
  
  const competitions = [
 {
      id: 1,
      title: "Predict Calorie Expenditure",
      series: "Playground Series - Season 5, Episode 5",
      type: "Playground",
      teams: 1520,
      timeRemaining: "22 days to go",
      score: "5.05",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108281&Signature=U6mjA0Z5%2BM62zM9iBGriIi4qjWOY7J9WLJhndPDUJQc%2FuE8XmKvAhbmJMqOpD5YZhWlnuYwblN0N6OpbgrxibJJmU9kZGYsWi4rK7LMmmwaA8dWWSuMPtlHCiWPjkw09pfs8AuhpcrrHOzxGr5diocIzt%2B6gsu3lBgyK0ui%2BiuJTD2PzS28q42mDYXqw05oV0CCVGfMhmeLzPFyF%2BoM01T3QTXUt1OHJT8G7k2RA1%2FEkRYtYPpJhTHA2eBAUbIgLI1aesdc2ABuy9mLjylajAv9omFm7C0dODtK%2FBGQ11XKup2Bsri%2FSrgLt48h%2FSB0vzTqa8eZm4ZvhT9DTiBzgxg%3D%3D"
    },
    {
      id: 2,
      title: "Yale/UNC-CH - Geophysical Waveform Inversion",
      series: null,
      description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
      type: "Research",
      teams: 491,
      timeRemaining: "2 months to go",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=jve0eIDswz2vMWBIYTVXbL6PVCG59ZhgfIP28fcv81uvXvfExdNhfqh3fNrnExDnELLGimw49pW5SmKBM7STHzbJp0Rw9ujJF6n54ECtwqBNz6gl5qhHq2CGPCh8RPEzCsfNH9Gu8jytCA%2BJbv%2B%2FrBpqdOPpyEtwapEJ%2BGNnjV6CrKrUndAfyTE5KyrrenNGwU5Enojtj5Yooyp9ql7IE4IVXCHVxsFi%2FG1g7km57qJ8NsAXiNByczMsjb08EVxvQUEjIpx1sYO32zJD2CRB9Xzej4BLLeiMN2%2FgOU0%2BjwGguktG9RHO6FuowZzkT7QIkGTNOR5Fs1f7i40j42yZew%3D%3D"
    },
    {
      id: 3,
      title: "Image Matching Challenge 2025",
      series: null,
      description: "Reconstruct 3D scenes from messy image collections.",
      type: "Research",
      subtype: "Code Competition",
      teams: 609,
      timeRemaining: "25 days to go",
      prize: "$50,000",
      image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=lFbbHJZ1oK32VEGkJ8DBQ%2FFwXWzs%2Bnxih7IY1zGlECfm1wFwaZTkETiaP3MUdTIMc9JJM1aLK07xeDSj5%2BgI%2FnOco6Y7NPy3B%2BfPmjzZcycb%2FxYd6Vfyy149WSauBpmy%2FOixHhtEM0KeWeqHwbXtjrkEELUjR2Q8QJUHtxNltWmS2NOaP8eBNwCE8xnO%2BEWaKnG7BMRQT7pYV8crVOQW4jchFfPNHaEi8n9q%2FK1hy6xNLA80uhCeeTgJXOqa9HJ0LtZTWwHGPuyMcBNCrioVznyOoRTFg3BZV2DOq3ADomXzDfO4p%2B0MjcgYovC%2BWbrZ4XIdOH14fFZCKD6cPgNd6g%3D%3D"

    },
    {
      id: 4,
      title: "Predict Podcast Listening Time",
      series: "Playground Series - Season 5, Episode 4",
      type: "Playground",
      teams: 3310,
      timeRemaining: "8 days ago",
      score: "5.04",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=WcOajdL6COngMc7ApFtP%2FHg8%2F7oDkp6iUPMgjSQdziQToL1koy3PjeI9Z9FayrfDkOtXzrMO6Xe3CELBcihjsSDZTz%2BCIGbZF6%2FLQ4Twyw6yjrM2CP36c%2F67XN2lMzN2pIGaGp7PLp0j2rKlfxxzQiP69t%2F%2FnLuOV%2B5Fp6d5104F%2BtQxVJUcoEvzZtbWCRMDr2SM7Op%2BS0%2FYzyJJkZNQPFtdPUzAge0PTU1%2FsMfAKTg1I3kawnSbU6HCTCg81BLGCWCpsv6XydhfSR5ggwoDhYiDVnLWCv4qfA2Cu3kRzWKzJu7%2B5v8%2B%2FUHeGkIR4VaemzsYSdEEetSB1IqHkfeWWQ%3D%3D"
    },
    {
      id: 5,
      title: "ARC Prize 2025",
      series: "Code Competition",
      type: "Featured",
      teams: 357,
      timeRemaining: "6 months to go",
      prize: "$725,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=nuYy3kmOtlrd0J4M07Tkl0t860lDXmA12a8tfTU4QI%2BA16YTwHGrgygNrJXAOxquyNY%2BRy7rx%2FUlicXvXy2DG2W5STtJfcia01ZC%2Fki3JDKjmOs486kIdMWY9KjDQB%2BhmUG%2B9PwxCUooKPUsGQzStIsgTwNIsHHZYnYSuP%2FqDc%2BLyglP3yAX3%2BOCd9EadRbhfx%2F6EKjvWtUq6MAP9tKiBUJInUGBeaSpNuNMnPRME25SN%2B03tHVXJf3V%2Bo1LCtA5Z2aLdzcHMlnpJ7UaPKfntvJk16P0T4%2FuuOHGlLirTiD9wJhLncY9c90nMTGdO27FDNTnVX1H51kPPsWRF9Zywg%3D%3D"

    },
    {
      id: 6,
      title: "BirdCLEF+ 2025",
      series: "Code Competition",
      type: "Research",
      teams: 1599,
      timeRemaining: "A month to go",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=PCNdn2%2BK34WZaOBHXw8kM9PD0WQmoP8jPtWocGQBKH7xNE9F6iMrzRgzCKVqb4uo1Rm9Z0k%2BaN5sAeVy8aJV5w54cvbywGGhoSmaqUWproj%2B9rLmUN0HIq9hM2AVlt9UKjqQMfACQM0iOl8gmglW%2FYjaR0YD0QtryyYlVQiS4AAdIa%2BE9NyXfYj0580SFyicVkaIT9c5WWuWTvsOUC%2BSsx%2BypfHUVGkNLTMUy8OD9Oh9zHqwUz4qq6VJ39S%2FvfNbvSB3FXK7hb%2B%2BzklkpVCNIYtF0NyMCnP2qVDWDa9pFhjj6hy0Gq2yVdySWCp%2BSU4YYumFgymq4H6iIuiyzSijKg%3D%3D"

    },
    {
      id: 7,
      title: "BYU - Locating Bacterial Flagellar Motors 2025",
      series: "Code Competition",
      type: "Research",
      teams: 908,
      timeRemaining: "A month to go",
      prize: "$65,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=fUEq411E%2F9w79S%2FZKA%2BC8EgYfppNQg7WpIwDymfSYtdTo%2Fp045wZulUUCh1E2DHt%2B62HjpU9F5ZKfKTGZAe8cToYXkGA%2BenCMuiYmcvlVvLLypWDKfak7RZ1UfzOpDQRWn1JJWBSvfeZtDE825pvrows10QzKzx3orMfwcgHqASS0qBpnHWIphH8vpnoflJ%2B%2F1YfD0QooJrL%2BUQ%2FrtGZuyA2d4URQBA33i0MdqZifGGrSn8If6DJvwtbDa5Yz9yO6gT8Svn0AxcDlk612NJKV1awaD4LjTLY26MctCfUJ%2BqZLXkeFevg7USlYVRJ0dE0xcuRfzWTQ2uKMY%2FipA%2BqvA%3D%3D"
    },
    {
      id: 8,
      title: "Binary Prediction with a Rainfall Dataset",
      series: "Playground Series - Season 5, Episode 3",
      type: "Playground",
      teams: 4381,
      timeRemaining: "A month ago",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=npG%2BEIPvzR%2FFvCxmap8jXLW4Qqk3BV5bx%2BqJnCj74WqT0fFosw%2BXA%2BO1ZIHmOJzjgqxJPX4UntHt3ZXM7cbsqocNoz%2BU3pq7AJa8eEWa2nXg%2Fe0ocezbBfNsXYlHXDcWpmOoC0qlYLjpgPHMa3WxGuox%2B8us%2Bg3HVQOs6uAWOMV09RuD%2FcddYe1ZLyGSl1Yvm%2BGyPAY%2Bl5jXx4fpanlnAMH2acRUy2cz%2B3U3oSuRyyl%2BmSLNkDAUL9CNRGlP6Ymkiztp%2Bj7xmUGOvkSTxxpQUl3NRZOMntlsQL19CIDZkDh%2Bqt%2F5%2FB8Orpxoqw3oMp69BMH944B0AfVKg2%2BRdEvepA%3D%3D"
    },
    {
      id: 9,
      title: "Stanford RNA 3D Folding",
      series: "Code Competition",
      type: "Featured",
      teams: 1265,
      timeRemaining: "20 days to go",
      prize: "$75,000",
        image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=djnu93G56vhK8CZ0bholO9Yz5KDSZ198MiRCqY9%2Bwl%2Blx7U%2FlxiSCVE53lzoK8RZq8gK6CeD3U6LqRA5Knxy0o0y8Lynl78j1oc97YBupN1gCc349vNWoMysMp4%2Bj9xvBNR%2FQIPS9SQ4zBw8CoDIzaoUIF4Vc36fIFE93bzJHnV52QjPCICS%2F5PDYc3fsgrBB88bcHuglSlN6lFjTQyw%2BfN%2FUOqZf2LVpVLd4whbzZCbit%2BLA0aW4%2BqFiXnw1CHzzX8rnSO8o8j3jeNZCPpaWvwYtdV1%2BGgiTTqDeNVMOfHuh0Lp276NnnnxZraJf4899hNgDQHn4ELlhw5DNUphaQ%3D%3D"},
        {
      id: 10,
      title: "Drawing with LLMs",
      series: "Code Competition",
      type: "Featured",
      teams: 1276,
      timeRemaining: "18 days to go",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=JuDuxJsGt%2FnxtHdf4YBqe4%2FwQzO2pp8SCkZMpmV6U5MN5fHYrCAKJ0%2BTrYWqaCVH0aw%2FffufQY562QwfAjDuOgsbo%2FXibYxYvO0vYnS1N%2FpVlyBOwKuhm0%2Bl9TCRXP2YhpUTjtnk2FBMO%2FMEXnRmp6dSaPubYBxMMO%2Blqa2eHvEhbRh7EeQz48YYyqYcoiHo9yxqVVpOFN7duvdaYrNs%2BYgfemHXG8jtR0%2FXUmVAmC8Bu5%2FrTWWxYFARIlQE0%2FP5ar%2BDyClsN1x87%2Bn0BAR9%2FB0XNR0STwRZpELnY10nTlHSX9q%2BpeqXRPXl4JUzED1%2B03APA%2F2Icf3OoFOuUhnkmg%3D%3D"},
    {
      id: 11,
      title: "March Machine Learning Mania 2025",
      series: "Code Competition",
      type: "Featured",
      teams: 1727,
      timeRemaining: "a month ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=Hxd0Zeypn7tg9p%2BXwHAaOaP5DFt354fwrUD36RscrzuQihI8ZteqT0ekZUM%2BIjOkc%2BEFx2WmoXg3KYcbSkkBNbXyELX0SkUg8faqPUrTEe%2FMchzn7wPMeZNorEtVrcEwc5cG3LyBk5fj%2FqQjMKb1cypjhgUloQBKOEt34TwOsEBPO0%2Fdmy5Lgv1uCPWiDxi0c9ZuTf%2Ba8x5tbiGd5oUmDiNNw1rC0%2BUyWvV2BverEyZDHnu7Xtaubzktqp805DXhd0vUItE5KecOMJG0ob3ZjL7n2EPPuOPjlbKW4Ys0o%2Bbc98J0GXDKLmpVd9prkLwG6e%2Ff0pGBN0R09CjBTtyCgQ%3D%3D"},
    {
      id: 12,
      title: "Backpack Prediction Challenge",
      series: "Playground Series - Season 5, Episode 2",
      type: "Playground",
      teams: 3393,
      timeRemaining: "2 months ago",
      prize: "Swag",
      image:" https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=KRABURCmuB8upibUKV7Rk%2FQ7dff6ki5RnGJg1fJxB%2FAYa8HRwdiBkT1ij5a0N2tCXIGV1x4GiOwB%2Ft%2BZ%2FQl23QwCNwzMVbZDVULmSTOBM%2FZyXAmmJYissi%2FYCDb19lv8VtSkmFHSvq%2BaCgzINfMHbIu1ssjZEcJ6TztmXwMSLkvH7ghmq3lEftoPeXZNbx7ZZkr57pi6uplcyJyt4SctEXAE5aqx4fkggFz8lSd5vIL4YCV2bD2DZLDi9OpXT7J18g6xj2b1HVdFzbxMshuLvadvsR1baFj4MaZOgUUBLYbsOvohlWAv%2FYV5Q68lDRvTywOdC8LUQUvnR9AdmeaPGQ%3D%3D"
    },
    {
      id: 13,
      title: "Forecasting Sticker Sales",
      series: "Playground Series - Season 5, Episode 1",
      type: "Playground",
      teams: 2722,
      timeRemaining: "3 months ago",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=RTmLmHgdxEIEc0c1PFaWJgp1Bddbn5DzKHg9X34nFejoVBaDME75YrkdviXnTFWgHesjEjICeLRKwsDR3xSDBHry5hCZko9jeKNO1frZsSFcmLrYqgPLj7X3Eu6Ds79UtzqZioHmOdOZbtIxZDYVvALF1XPGQeJw%2FA%2F9sj69QplJoZjGzD5I%2BMc1HDT6Ht4Gb6EMaGV%2BzIovdb9YGLU21HBpCYlGHI%2FlULP5cbrfG9CmRLhWQty5xGg%2F3f%2Fsfqa8jTKTFclQE65wvHv%2BerxqbBvx4epswheEgI%2BvXlOuQlfCoJTCDes6KkxwiSCrqXgqFt4taGZvQhfhSs8wNsDCnw%3D%3D"},
    {
      id: 14,
      title: "Konwinski Prize",
      series: "Code Competition",
      type: "Featured",
      teams: 617,
      timeRemaining: "a month to go",
      prize: "$1,225,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=a7k97a056jD7iaWHshwUVezCEv8cEurK0niI6rlozidKyOP%2BPR7KfoRYBPHyNRRS73CdVA%2Blhv8F%2FPKXDVjmK4zFsZY8DhqaunROxaRdJowhHd3J%2FEOqeuUTREetPfok1dl%2BFueesm3qrLv0LnFXKEYWdp9149bORfi6vkJGz%2FYWTPiEle0MoNEGmdqLNr%2BOe2y4D4zMIykcLjXLYpZoJLYEEQirIw7zIIk3rqr3QJHI4F%2FLhN4NysEnmU%2BuyLALUzJPCL4PR4MnHE9aBDCBq7mjLuNpkjONlxZojPWvIimhGV12rsOPl08pdY74M%2BILAdnhGpNtzdNNsk8tAigV9Q%3D%3D"},
    {
      id: 15,
      title: "NeurIPS 2024 - Lux AI Season 3",
      series: "Simulation Competition",
      type: "Featured",
      teams: 701,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=PTPNvhidrmbh6ClnCpc5tdLLBLGT6EuJ4Nu%2FNEvdF%2BVJRz0Lokixlm9rfH2WC3CkUr8upNBEjDIm0vdPlusnFRAx7uEiBN%2FUwZ%2BoEgTGiUoWK64WLf%2BptP%2F1nqJLLPY5DUgL9zUqYDmgUbsvg41zgiz8feG%2F%2F99zB2ZLUcQffPfCB1umi0jLbGHxZKDraw5UTfjdFLjcpRc8OyARfXxxez0izwAuiqXjdKUKE7XUE49Aku%2F8g191EXTGV9ZwurpuR6%2B0XSfHoG8Lo7ajAimaStiytlxDvlqM%2BWC0b%2BnixR3N1noWl%2F5zOGA1Z2ZakKqwHqa6vWNIopj%2FZfb%2B6VpUqA%3D%3D"},
    {
      id: 16,
      title: "CIBMTR - Equity in post-HCT Survival Predictions",
      series: "Code Competition",
      type: "Research",
      teams: 3325,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=ccE9UU5OlDElhnOR5wkHfzRrCUY4TTLGqERezoKURZ00JouPeBXPj1OBSoKzeusE3nk2vVIvh6eNki6MFKApLqqHSRe1oBS1VjXlDBdbVve38XPC1avwD%2Bx4z3HdEn0omxVFdzVRYKfYlxJNSSP0GyyvQqENbhrNE1Ukx0siMDhSyTXuCEG2eZMkAxCrpiAiLT%2F0e0DfIYEGVr93YYncKPe2KLWmvn6njgW6Y11EAEIiGbvY3Hx%2BCkbJm0b9WODEW7JJGDKU64w8NFN6Co5fvAH%2F9OJWv0zbZztu%2FLuB585mOrv3wd5PZ%2BrrBk4CyDbE0TSuIfvyMPHebAorBYwNXg%3D%3D"},
    {
      id: 17,
      title: "LLMs - You Can't Please Them All",
      series: "Code Competition",
      type: "Featured",
      teams: 1693,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=X%2BOJUoUz%2BKIWMbhtkDKhAvhECU7FVxOhl7ewu%2BnKndgMDSEGPjeSe%2F%2FIrli6ABPYWqwgCUVs0Z57YG%2B9DfEXyPhwaBGuJGfXvqTQ0cNJD%2Bu27fiW5Pg3dQsvNNJlST%2FORwtwR7NBb3TJuHx1q%2BhudNnT6UIY1UDnYqCY0PL7mx1EhJeIjlRIzikOYPy3SioSVt3IqLNSgUzHSL0KIw2B%2BB3FlrqcPlxetsrQXWvTLUw9SIH7fL4zVvkc7ZKT746ZO5gwyfnc1bpxNuQpTP5HQHiat9%2B2%2B64G%2B5srmkcy4aA9GQKRtW4XJ8al7wzNsQlemsJ1ssxKNy3e4cncFXGcWw%3D%3D"},
    {
      id: 18,
      title: "Regression with an Insurance Dataset",
      series: "Playground Series - Season 4, Episode 12",
      type: "Playground",
      teams: 2390,
      timeRemaining: "4 months ago",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=l8ttw4Q%2BJkvMeqrYsvCZ8f96kLQ8TdR7CDSXYWDbQUiAEU8ZcNoeSKlVW%2BNQEWF%2FIC1d7JH%2BNxqCjP1KJ%2BPGjYnaMYzUAorBjdLu7iv%2BchTt0GADkloxq1VQzgmcGGXETaLOLkZIdt%2BFt%2FJDC6G0fvvWoG5Mu0R3FQBVBaq58cxt8ye0kvWcjg5jiwa6Di4moIg7NuNYEBCV2iGb%2BaQf2%2Fl5sClD4rf9FuLTWJvcoyhwrxs%2BgY2Sa6L3b%2FaYcg4zIWnjbl%2FjpCu235MLLsSJqKYQMVg1DV3rgJqKG1faU1%2Bfmy4YO3DcXzu0qkCEPJT7%2BT9LEN6oRiUSQX6mmtpgcg%3D%3D"},
    {
      id: 19,
      title: "Santa 2024 - The Perplexity Permutation Puzzle",
      series: "Code Competition",
      type: "Featured",
      teams: 1514,
      timeRemaining: "3 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=NdSeC4eT4eoR%2FXTt6FcIYQpct1muiPS1xnC6T5dt7p%2BHKEjZpveHStt1hfRSmPeki4WpGx13k4C%2B9dsNn0GoMJp7Z0pzk5vRKGhNYsdP82DdDHh%2Baiv5z%2BMG023Hh36GHE1macN4lN55VuMqWDCiYsQjw8THfbWiJZb179Y9yaYVjW%2FNE63hAkFTrxMW86Ka3Y8501SXIr%2F8aY%2F1wHbTaGrH04M8LOt8ykbxGIHZEQ1r8AFZ%2BaBwCkgCtwuxHWovb5rS7Q4%2Bm5xDF7xo%2FIMf7q5z1%2FAM435uIHJ77voCLsks8aCF2QsUYE92lNuD2Q0HOtUDDcSSQ3qCSVwS9cv9Ng%3D%3D"},
    {
      id: 20,
      title: "FIDE & Google Efficient Chess AI Challenge",
      series: "Simulation Competition",
      type: "Featured",
      teams: 1120,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=Pt%2BHe2A83ZFYwjQkQw5ESck17IZvR9IuIj1Oc1b3JtMSQwtsdAIQyP7%2FjHt7MB0Afha4gDgeg6idMhu%2FvP0feb8Y1Yf5CyWGV3Z90ykjpqkzZBwSTFj1WP%2F%2FW4cYqUQSP3IrLoGzMSyJBekoBgWp4JYlEbpP%2FyfK0CqBIyOzJDKv%2FZ4J1eDPzqiDeI%2Bfcfmm1yy00NWhE2N95%2BOMHkfmcf6Wdmz6JkPmwacStbdYUzA0pGPYUJ%2FFyyCfFX1zuJtcxwOvAVXnzCwcIf%2B5h5OTmX%2B26Ph9pqKULsW4zfVQNNZu9u3rI375lPt%2BuxCQaf47dWEcA%2F56m1oFtrcL1k%2BDbA%3D%3D"},
 
  ];

  // More options menu items
  const moreOptions = [
       { icon: <PlusCircle className="h-4 w-4 mr-2" />, label: "Add to collections" },
        { icon: <Bookmark className="h-4 w-4 mr-2" />, label: "Bookmark" },
  ];

  return (
    <div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>

        {/* Active Filters */}
        {filterActive && (
          <div className="mb-6 flex items-center gap-2">
            <div className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 shadow-sm border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700">
              <span className="font-medium">All competitions</span>
              <button
                onClick={() => setFilterActive(false)}
                className="p-1 rounded-full hover:bg-gray-300 transition"
                aria-label="Remove filter"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Results Section */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Results</h2>
          <div className="flex items-center gap-4">
            {/* Dropdown component */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-gray-700"
                onClick={handleToggleDropdown}
                aria-label="Sort options"
              >
                <span>{sortOption}</span>
                <ChevronDown className="h-4 w-4 text-gray-700" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
                  {sortOptions.map((option) => (
                    <div
                      key={option}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        option === sortOption ? 'bg-gray-200' : ''
                      }`}
                      onClick={() => handleSelectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
              aria-label="Toggle view mode"
            >
              {viewMode === 'list' ? (
                <Grid className="h-5 w-5 text-gray-700" />
              ) : (
                <LayoutGrid className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Competition Cards - List or Grid View */}
        {viewMode === 'list' ? (
          // List View
          <div className="space-y-4">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
                <div className="relative p-4 flex-shrink-0">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  {competition.score && (
                    <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
                      {competition.score}
                    </div>
                  )}
                </div>
                <div className="flex-grow p-4">
                  <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
                  {competition.series && (
                    <p className="text-sm text-gray-600">{competition.series}</p>
                  )}
                  {competition.description && (
                    <p className="text-sm text-gray-600">{competition.description}</p>
                  )}
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{competition.type}</span>
                    {competition.subtype && (
                      <>
                        <span className="mx-1">·</span>
                        <span>{competition.subtype}</span>
                      </>
                    )}
                    <span className="mx-1">·</span>
                    <span>{competition.teams} Teams</span>
                    <span className="mx-1">·</span>
                    <span>{competition.timeRemaining}</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-end justify-between">
                  <div className="relative">
                    <button
                      onClick={() => handleToggleMoreOptions(competition.id)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                      aria-label="More options"
                    >
                      <MoreHorizontal className="h-5 w-5 text-gray-500" />
                    </button>

                    {/* More options dropdown */}
                    {activeDropdown === competition.id && (
                      <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
                        {moreOptions.map((option, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {option.icon}
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-lg font-bold text-right">
                    {competition.prize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
                <div className="relative">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="bg-white rounded-full p-1">
                      <img src="/api/placeholder/24/24" alt="Logo" className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-bold text-gray-800">{competition.title}</h3>
                    <div className="relative">
                      <button
                        onClick={() => handleToggleMoreOptions(`grid-${competition.id}`)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                        aria-label="More options"
                      >
                        <MoreHorizontal className="h-5 w-5 text-gray-500" />
                      </button>

                      {/* More options dropdown */}
                      {activeDropdown === `grid-${competition.id}` && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
                          {moreOptions.map((option, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {option.icon}
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {competition.series && (
                    <p className="text-sm text-gray-600 mb-1">{competition.series}</p>
                  )}

                  <div className="text-sm text-gray-500 mb-2">
                    <p>{competition.type}</p>
                    <p>{competition.teams} Teams</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 p-4 flex justify-between items-center">
                  <div className="font-bold">
                    {competition.prize}
                  </div>
                  <div className="text-sm text-gray-500">
                    {competition.timeRemaining}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}