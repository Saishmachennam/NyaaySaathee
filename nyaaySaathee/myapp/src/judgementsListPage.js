
import { useState } from 'react';
import JudgementItem from './judgementItemPage';
import "./judgementListPage.css";

const judgementCaseDetails = [
  {
    judge: ["SANJIV KHANNA", "Sanjay Kumar"],
    case_number: "CRIMINAL APPEAL/161/2025",
    decision_date: "10-01-2025",
    disposal_nature: "Appeals(s) allowed",
    issue: "Will a husband, who secures a decree for restitution of conjugal home.",
    headnotes: "Code of Criminal Procedure, 1973 – s.125(4) – Disqualification under, when not attracted – Wife’s right to maintenance u/s.125, CrPC – Hindu Marriage Act, 1955 – s.9 – Decree for restitution of conjugal rights obtained.",
    decision: "The court ruled that securing a decree for restitution of conjugal rights does not automatically disqualify a wife from claiming maintenance under Section 125 CrPC."
  },
  {
    judge: ["PAMIDIGHANTAM SRI NARASIMHA", "Pankaj Mithal"],
    case_number: "CIVIL APPEAL/3705/2024",
    decision_date: "10-01-2025",
    disposal_nature: "Matter referred to larger bench",
    issue: "Whether an MSME cannot make a reference to the Facilitation Council for dispute resolution under Section 18 of the MSMED Act, 2006 if it is not registered under Section 8 of the Act before contract execution.",
    headnotes: "MSME seeks to refer the dispute regarding payment to the Facilitation Council for arbitration – The appellant opposes this prayer.",
    decision: "The court referred the matter to a larger bench for authoritative clarification on whether prior registration under Section 8 is mandatory for MSMEs seeking dispute resolution."
  },
  {
Judge: ["PAMIDIGHANTAM SRI NARASIMHA", "Manoj Misra,"],
    case_number: "CIVIL APPEAL/14328/2024",
    decision_date: "12-12-2024",
    disposal_nature: "Appeals(s) allowed",
    issue: "Right of a party to get the first appeal restored if compromise decree specifically does not give such liberty.",
    headnotes: "Code of Civil Procedure, 1908 – Ord.23 r.3 – Compromise of suit – Suit for declaration dismissed by trial court – First appeal filed – During pendency, compromise reached and High Court disposed the appeal.",
    decision: "The court ruled that the right to restore the first appeal depends on the terms of the compromise decree, which in this case did not explicitly prohibit restoration."
  },
  {
    judge: ["BHUSHAN RAMKRISHNA GAVAI", "K.V. Viswanathan", "Prashant Kumar Mishra"],
    case_number: "CIVIL APPEAL/8478/2014",
    decision_date: "05-11-2024",
    disposal_nature: "Dismissed",
    issue: "Whether the press release defined in Clause 1.1 of the RFP/PPA changed under the legal regime as of 01.10.2009.",
    headnotes: "Electricity Act, 2003 – s. 63 – Customs Act – s. 25 – Mega Power Policy.",
    decision: "The court ruled that the press release under Clause 1.1 of the RFP/PPA remained unchanged under the legal regime as of 01.10.2009."
  },
  {
    judge: ["D.Y. CHANDRACHUD", "HRISHIKESH ROY", "B.V. NAGARATHNA", "SUDHANSHU DHULIA", "J.B. PARDIWALA", "Manoj Misra", "Rajesh Bindal", "Satish Chandra Sharma", "Augustine George Masih"],
    case_number: "CIVIL APPEAL/1012/2002",
    decision_date: "05-11-2024",
    disposal_nature: "Reference answered",
    issue: "Whether Article 31C (as upheld in Kesavananda Bharati case) survives after Minerva Mills case.",
    headnotes: "Interpretation of Article 39(b) and its reconsideration as per Justice Krishna Iyer in Ranganatha Reddy case.",
    decision: "The court ruled that Article 31C, as interpreted in Kesavananda Bharati, must be read in light of Minerva Mills, ensuring constitutional balance between Directive Principles and Fundamental Rights."
  },
  {
    judge: ["BHUSHAN RAMKRISHNA GAVAI", "K.V. Viswanathan"],
    case_number: "CIVIL APPEAL/10999/2024",
    decision_date: "03-10-2024",
    disposal_nature: "Appeals(s) allowed",
    issue: "Whether differential treatment to a single entity is valid in law under the Khalsa University (Repeal) Act, 2017.",
    headnotes: "Whether the Act is liable to be struck down on the ground of manifest arbitrariness.",
    decision: "The court ruled that the differential treatment under the Khalsa University (Repeal) Act, 2017 was unconstitutional and violated the principle of equality under Article 14."
  },
  {
    judge: ["J.B. PARDIWALA", "Manoj Misra"],
    case_number: "CIVIL APPEAL/10662/2024",
    decision_date: "20-09-2024",
    disposal_nature: "Case Allowed",
    issue: "Whether the land and liabilities were transferred to the Appellant as per the Scheme.",
    headnotes: "Scope of Section 101 under Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013.",
    decision: "The court held that the land and liabilities were legally transferred to the appellant under the provisions of the Scheme."
  },
  {
    judge: ["HIMA KOHLI", "Ahsanuddin Amanullah"],
    case_number: "CIVIL APPEAL/9758/2024",
    decision_date: "22-08-2024",
    disposal_nature: "Case Allowed",
    issue: "Non-extension of contract for Assistant Project Coordinator under Sarv Shiksha Abhiyan.",
    headnotes: "Appellant’s contract was not renewed despite prior appointment.",
    decision: "The court ruled in favor of the appellant, directing the reinstatement or appropriate compensation for the contract non-renewal."
  },
  {
    judge: ["BHUSHAN RAMKRISHNA GAVAI", "K.V. Viswanathan", "Prashant Kumar Mishra"],
    case_number: "CRIMINAL APPEAL/3082/2024",
    decision_date: "20-08-2024",
    disposal_nature: "Appeals(s) allowed",
    issue: "Correctness of order dismissing the detenue’s writ petition for release.",
    headnotes: "Grounds of non-supply of documents leading to detention.",
    decision: "The court ruled that the detention was unlawful due to non-supply of crucial documents and ordered the detenue’s release."
  },
  {
    judge: ["J.K. MAHESHWARI", "Sanjay Karol"],
    case_number: "CIVIL APPEAL/4434/2014",
    decision_date: "01-08-2024",
    disposal_nature: "Appeals(s) allowed",
    issue: "Legal sustainability of appointments on compassionate ground.",
    headnotes: "Allegation that respondent-employees were appointed on forged documents.",
    decision: "The court ruled that the appointments based on forged documents were invalid, leading to their annulment."
  },
  {
    judge: ["ABHAY S. OKA", "Pankaj Mithal"],
    case_number: "CIVIL APPEAL/4565/2021",
    decision_date: "23-07-2024",
    disposal_nature: "Dismissed",
    issue: "Whether the payment of Rs.38.87 crores to the financial creditor under the resolution plan of the corporate guarantor will extinguish the liability of the principal borrower/corporate debtor.",
    headnotes: "The liability of the principal borrower/corporate debtor does not automatically extinguish upon payment under the corporate guarantor’s resolution plan."
  },
  {
    judge: ["Surya Kant", "K.V. Viswanathan"],
    case_number: "CIVIL APPEAL/3674/2023",
    decision_date: "10-07-2024",
    disposal_nature: "Disposed off",
    issue: "Should compensation be enhanced, and if so, to what?",
    headnotes: "The court determined that the enhanced compensation of INR 449 per sq. yd. was justified and maintained."
  },
  {
    judge: ["J.K. Maheshwari", "Sanjay Karol"],
    case_number: "SPECIAL LEAVE PETITION (CIVIL)/4049/2020",
    decision_date: "17-05-2024",
    disposal_nature: "IA disposed",
    issue: "The interlocutory applications have been filed seeking direction for...",
    headnotes: "The court directed the payment of 'monthly occupational charges' as per the prevalent market rate."
  },
  {
    judge: ["A. S. Bopanna", "C. T. Ravikumar"],
    case_number: "CIVIL APPEAL/270/2012",
    decision_date: "08-05-2024",
    disposal_nature: "Appeals(s) allowed",
    issue: "Whether the issuance of Acceptance-cum-First Premium Receipt gave rise to a presumption of...",
    headnotes: "The court ruled that the insurance policy was valid, and the claim was to be honored along with compensation."
  },
  {
    judge: ["Bhushan Ramkrishna Gavai", "Sandeep Mehta"],
    case_number: "CRIMINAL APPEAL/906/2023",
    decision_date: "08-05-2024",
    disposal_nature: "Dismissed",
    issue: "Conviction upheld even when prosecutrix and other witnesses turned hostile.",
    headnotes: "The court upheld the conviction despite the prosecutrix and other witnesses turning hostile."
  },
  {
    judge: ["A. S. Bopanna", "Sudhanshu Dhulia"],
    case_number: "CIVIL APPEAL/5569/2024",
    decision_date: "30-04-2024",
    disposal_nature: "Disposed off",
    issue: "Whether the High Court, while substituting Respondent No.6 as the appellant in the Second Appeal, has followed the correct procedure prescribed under Order XXII Rule 5 of the Code of Civil Procedure.",
    headnotes: "The substitution was held to be procedural and did not confer any additional rights beyond continuing the case."
  },
  {
    judge: ["Aniruddha Bose", "Augustine George Masih"],
    case_number: "CRIMINAL APPEAL/2319/2009",
    decision_date: "09-04-2024",
    disposal_nature: "Appeals(s) allowed",
    issue: "Secret information received by PW-2 (Intelligence Officer/Inspector) regarding 1.450 Kgs charas found in an auto-rickshaw.",
    headnotes: "The court allowed the appeal, ruling that the prosecution's case was established beyond reasonable doubt."
  },
  {
    judge: [
      "D.Y. Chandrachud",
      "A.S. Bopanna",
      "M.M. Sundresh",
      "Pamidighantam Sri Narasimha",
      "J.B. Pardiwala",
      "Sanjay Kumar",
      "Manoj Misra"
    ],
    case_number: "CRIMINAL APPEAL/451/2019",
    decision_date: "04-03-2024",
    disposal_nature: "Reference answered",
    issue: "Reconsideration of the correctness of the view of the majority judgment in PV Narasimha Rao’s case granting immunity from prosecution.",
    headnotes: "The court reaffirmed that parliamentary immunity does not extend to corruption-related offenses."
  },
  {
    judge: ["Vikram Nath", "Rajesh Bindal"],
    case_number: "CIVIL APPEAL/3659/2023",
    decision_date: "11-01-2024",
    disposal_nature: "Appeals(s) allowed",
    issue: "Mere notings and in-principle approvals, if confers a vested right in view of the change in policy decision and the amended 1981 Rules.",
    headnotes: "The court ruled that mere approvals do not grant vested rights if the policy has changed."
  },
  {
    judge: ["D.Y. Chandrachud", "J.B. Pardiwala", "Manoj Misra"],
    case_number: "CIVIL APPEAL/7700/2023",
    decision_date: "30-11-2023",
    disposal_nature: "Appeals(s) allowed",
    issue: "Whether the reappointment of respondent No. 4 as Vice-Chancellor of Kannur University was valid.",
    headnotes: "The reappointment was upheld as legally valid, following due procedure."
  },
];

const JudgementList = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredJudgements = judgementCaseDetails.filter((judgement) =>
        judgement.case_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        judgement.judge.some(j => j.toLowerCase().includes(searchQuery.toLowerCase())) ||
        judgement.disposal_nature.toLowerCase().includes(searchQuery.toLowerCase()) ||
        judgement.headnotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        judgement.decision.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="judgement-list-container">
          <center>
            <input
                type="text"
                placeholder="Search judgments..."
                className="search-bar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                
            />
            </center>
            <ul className="list-items">
            {filteredJudgements.map((each, index) => (
                <JudgementItem key={index} details={each} />
            ))}
            </ul>
        </div>
        
    );
};

export default JudgementList;
