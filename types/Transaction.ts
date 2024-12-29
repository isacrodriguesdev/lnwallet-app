
export interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: "income" | "outcome";
    createdAt: Date;
}