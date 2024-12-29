import { Transaction } from "@/types/Transaction";

export const _transactions: Transaction[] = [
    {
        id: "1",
        title: "Salário",
        amount: 530498,
        type: "income",
        createdAt: new Date(),
    },
    {
        id: "2",
        title: "Conta de luz",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "3",
        title: "Conta de água",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "4",
        title: "Conta de internet",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "5",
        title: "Conta de telefone",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "6",
        title: "Conta de celular",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "7",
        title: "Conta de cartão",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "8",
        title: "Conta de mercado",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "9",
        title: "Conta de farmácia",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    },
    {
        id: "10",
        title: "Conta de gás",
        amount: Math.floor(Math.random() * 1000000),
        type: "outcome",
        createdAt: new Date(),
    }
];