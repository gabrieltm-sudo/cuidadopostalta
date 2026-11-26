import { BedDouble, Bandage, Stethoscope, Droplet, Activity, Wind, Cable, Syringe, HeartPulse } from 'lucide-react'

export const topicGroups = [
  { title: 'Cuidados após a alta', topics: [
    {to:'/lesao-pressao', icon: BedDouble, title:'Lesão por Pressão', description:'Prevenção e identificação de lesões na pele.'},
    {to:'/feridaOperatoria', icon: Bandage, title:'Ferida Operatória', description:'Cuidados com o local da cirurgia.'},
    {to:'/sondas', icon: Stethoscope, title:'Sondas', description:'Orientações sobre o uso e os cuidados com sondas.'},
    {to:'/drenos', icon: Droplet, title:'Drenos', description:'Cuidados com o reservatório e o curativo.'},
    {to:'/estomias', icon: Activity, title:'Estomias', description:'Cuidados com estomias e bolsas coletoras.'},
    {to:'/traqueostomia', icon: Wind, title:'Traqueostomia', description:'Orientações para o cuidado diário.'},
    {to:'/cateter', icon: Cable, title:'Cateter Venoso Central', description:'Cuidados com o cateter no dia a dia.'},
  ]},
  { title: 'Condições crônicas e cuidados contínuos', topics: [
    {to:'/diabetes', icon: Syringe, title:'Diabetes Mellitus', description:'Cuidados diários e uso de insulina.'},
    {to:'/hipertensao', icon: HeartPulse, title:'Hipertensão Arterial', description:'Acompanhamento e controle da pressão arterial.'},
  ]},
]
