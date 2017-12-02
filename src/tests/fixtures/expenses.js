import moment from "moment";

const expenses = [
    {
        id: "1",
        description: "test1",
        note: "",
        amount: 3000,
        createdAt: moment(0).subtract(4, "days").valueOf()
    },
    {
        id: "2",
        description: "test2",
        note: "",
        amount: 2000,
        createdAt: moment(0)
    },
    {
        id: "3",
        description: "3",
        note: "",
        amount: 1000,
        createdAt: moment(0).add(4, "days").valueOf()
    }
];

export default expenses;
