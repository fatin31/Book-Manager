import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
            "id": 1,
            "question": "Why should I use Book4CSE?",
            "answer": "Book4CSE stands out for its extensive collection of high-quality computer science and engineering books, offering a user-friendly platform, competitive pricing, and a commitment to customer satisfaction. Trust us for a seamless learning experience with exclusive content and reliable service"
        },
        {
            "id": 2,
            "question": "Can I access my Book4CSE on mobile?",
            "answer": "Yes, Book4CSE is accessible on mobile devices, providing you the flexibility to explore and purchase computer science and engineering books anytime, anywhere."
        },
        {
            "id": 3,
            "question": "Do you offer refunds?",
            "answer": "Refund policies may vary. Please refer to Book4CSE's terms and conditions or contact customer support for specific details on refund options."
        },
        {
            "id": 4,
            "question": "Do you support Internation payments?",
            "answer": "Yes, Book4CSE supports international payments for a seamless shopping experience"
        }
    ];

    return (
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                {faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    )
}
