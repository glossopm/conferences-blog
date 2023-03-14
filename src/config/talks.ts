export const talks: Talk[] = [
  {
    id: 1,
    name: 'A Framework for Managing Technical Debt',
    originAuthor: 'Alex Moldovan',
    summaryPath: '/talks/a-framework-for-managing-technical-debt-summary-of-alex-moldovan',
    conference: 'Tech Lead Conf 2023'
  },
  {
    id: 2,
    name: 'Effective Communication for Engineers',
    originAuthor: 'Naz Delam',
    summaryPath: '/talks/effective-communication-for-engineers-summary-of-naz-delams-talk',
    conference: 'Tech Lead Conf 2023'
  },
  {
    id: 3,
    name: 'How to Get a Mentor Without Telling Them (or Secretly Get a Mentee)',
    originAuthor: 'Erin Fox',
    summaryPath: '/talks/how-to-get-a-mentee-without-telling-them-summary-of-erin-fox',
    conference: 'Tech Lead Conf 2023'
  },
  {
    id: 4,
    name: 'Negotiate Like Your Life Depends on It',
    originAuthor: 'Shivangi Das',
    summaryPath: '/talks/negotiate-like-your-life-depends-on-it-summary-of-shivangi-das',
    conference: 'Tech Lead Conf 2023'
  },
  {
    id: 5,
    name: 'Process for the process-averse',
    originAuthor: 'Tara Z. Manicsic',
    summaryPath: '/talks/process-for-the-process-averse-summary-of-tara-manicsic',
    conference: 'Tech Lead Conf 2023'
  },
  {
    id: 6,
    name: 'The Game Theory of Software Decisions',
    originAuthor: 'Ziv Levy',
    summaryPath: '/talks/the-game-theory-of-software-decisions-summary-of-ziv-levys-talk',
    conference: 'Tech Lead Conf 2023'
  },
  {
    id: 7,
    name: 'The Rewrite Trap: Fight the Urge to Start from Scratch',
    originAuthor: 'Phillip Giese',
    summaryPath: '/talks/the-rewrite-trap-summary-of-phillip-giese',
    conference: 'Tech Lead Conf 2023'
  }
]

export interface Talk {
  id: number,
  name: string,
  summaryPath: string,
  originAuthor: string
  conference: string,
  talkUrl?: string
}