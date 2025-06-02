// FaqAccordion.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'A consultoria é para qualquer nível de experiência?',
    answer:
      'Para desenvolvedores que já atuam na área no mínimo como desenvolvedor júnior e que já tenham experiência em desenvolvimento',
  },
  {
    question: 'As sessões são individuais ou em grupo?',
    answer:
      'Todo o processo da consultoria é 100% individual',
  },
  {
    question: 'As sessões ao vivo são em qual horário',
    answer:
      'Início da manhã ou inicio da noite, dependendo do dia da semana. Você escolhe o horário que melhor se encaixa na sua rotina.',
  },
  {
    question: 'As sessões são gravadas?',
    answer:
      'Sim, todas as sessões são gravadas e você terá acesso a elas para rever sempre que quiser.',
  },
  {
    question: 'E como recebo o plano de ação?',
    answer:
      'Você receberá o plano de ação via notion, onde poderá acompanhar o progresso e as tarefas a serem realizadas.',
  },
];

export default function FaqAccordion() {
  return (
    <Accordion type='single' collapsible className='w-full max-w-4xl mx-auto text-left'>
      {faqs.map(({ question, answer }, index) => (
        <AccordionItem value={`accordion-question-${index}`} key={index}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
