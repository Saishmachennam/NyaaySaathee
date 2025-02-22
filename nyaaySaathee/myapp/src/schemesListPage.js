import {Component} from 'react'
import SchemesListItem from './schemesListItem'

const schemes1=[
    {
        name: "Free Legal Aid - NALSA",
        eligibility: "Women, children, SC/ST, economically weaker sections (income < ₹3 lakh)",
        benefits: "Free legal advice, lawyer assistance, and representation in courts.",
        apply: "https://nalsa.gov.in",
        id:1
      },
      {
        name: "Nyaya Bandhu - Pro Bono Legal Services",
        eligibility: "Citizens in need of free legal assistance.",
        benefits: "Connects applicants with pro bono lawyers for free legal help.",
        apply: "Through the Nyaya Bandhu mobile app",
        id:2
      },
      {
        name: "Tele-Law Scheme",
        eligibility: "Rural citizens, marginalized communities.",
        benefits: "Free video/audio legal consultation via Common Service Centers (CSCs).",
        apply: "https://tele-law.in/",
        id:3
      },
      {
        name: "One Stop Centre (OSC) Scheme",
        eligibility: "Women facing domestic violence, sexual harassment.",
        benefits: "Shelter, counseling, legal aid, and police assistance under one roof.",
        apply: "181 Women’s Helpline or nearest OSC",
        id:4
      },
      {
        name: "Victim Compensation Scheme",
        eligibility: "Victims of crimes like acid attacks, rape, human trafficking.",
        benefits: "Compensation between ₹3 lakh – ₹10 lakh depending on case severity.",
        apply: "State Legal Services Authority (SLSA)",
        id:5
      },
      {
        name: "SC/ST Prevention of Atrocities Act Scheme",
        eligibility: "SC/ST individuals facing caste-based violence.",
        benefits: "Compensation up to ₹8.25 lakh, free legal aid, and rehabilitation.",
        apply: "District Magistrate's Office",
        id:6
      },
      {
        name: "Mahila Samman Savings Certificate (MSSC)",
        eligibility: "Women aged 18+.",
        benefits: "Safe investment scheme with 7.5% interest to ensure financial security.",
        apply: "Post offices & banks",
        id:7
      },
      {
        name: "Nirbhaya Fund Scheme",
        eligibility: "Women and children affected by violence.",
        benefits: "Funding for safety initiatives, legal aid, and emergency response services.",
        apply: "Ministry of Women & Child Development",
        id:8
      },
      {
        name: "Child Protection Scheme (ICPS)",
        eligibility: "Orphaned, abandoned, and street children.",
        benefits: "Rehabilitation, legal guardianship, and education support.",
        apply: "Through State Child Protection Societies",
        id:9
      },
      {
        name: "Digital India Land Records Modernization Program (DILRMP)",
        eligibility: "Property owners.",
        benefits: "Digital land records, title verification, easy dispute resolution.",
        apply: "https://dilrmp.gov.in",
        id:10
      }
]

const schemes= [
      {
        name: "Free Legal Aid - NALSA",
        eligibility: "Women, children, SC/ST, economically weaker sections (income < ₹3 lakh)",
        benefits: "Free legal advice, lawyer assistance, and representation in courts.",
        apply: "https://nalsa.gov.in",
        id:1
      },
      {
        name: "Nyaya Bandhu - Pro Bono Legal Services",
        eligibility: "Citizens in need of free legal assistance.",
        benefits: "Connects applicants with pro bono lawyers for free legal help.",
        apply: "Through the Nyaya Bandhu mobile app",
        id:2
      },
      {
        name: "Tele-Law Scheme",
        eligibility: "Rural citizens, marginalized communities.",
        benefits: "Free video/audio legal consultation via Common Service Centers (CSCs).",
        apply: "https://tele-law.in/",
        id:3
      },
      {
        name: "One Stop Centre (OSC) Scheme",
        eligibility: "Women facing domestic violence, sexual harassment.",
        benefits: "Shelter, counseling, legal aid, and police assistance under one roof.",
        apply: "181 Women’s Helpline or nearest OSC",
        id:4
      },
      {
        name: "Victim Compensation Scheme",
        eligibility: "Victims of crimes like acid attacks, rape, human trafficking.",
        benefits: "Compensation between ₹3 lakh – ₹10 lakh depending on case severity.",
        apply: "State Legal Services Authority (SLSA)",
        id:5
      },
      {
        name: "SC/ST Prevention of Atrocities Act Scheme",
        eligibility: "SC/ST individuals facing caste-based violence.",
        benefits: "Compensation up to ₹8.25 lakh, free legal aid, and rehabilitation.",
        apply: "District Magistrate's Office",
        id:6
      },
      {
        name: "Mahila Samman Savings Certificate (MSSC)",
        eligibility: "Women aged 18+.",
        benefits: "Safe investment scheme with 7.5% interest to ensure financial security.",
        apply: "Post offices & banks",
        id:7
      },
      {
        name: "Nirbhaya Fund Scheme",
        eligibility: "Women and children affected by violence.",
        benefits: "Funding for safety initiatives, legal aid, and emergency response services.",
        apply: "Ministry of Women & Child Development",
        id:8
      },
      {
        name: "Child Protection Scheme (ICPS)",
        eligibility: "Orphaned, abandoned, and street children.",
        benefits: "Rehabilitation, legal guardianship, and education support.",
        apply: "Through State Child Protection Societies",
        id:9
      },
      {
        name: "Digital India Land Records Modernization Program (DILRMP)",
        eligibility: "Property owners.",
        benefits: "Digital land records, title verification, easy dispute resolution.",
        apply: "https://dilrmp.gov.in",
        id:10
      },
      {
        name: "PM SVAMITVA Yojana",
        eligibility: "Rural landowners.",
        benefits: "Digital property cards for rural lands to prevent illegal claims.",
        apply: "Through Gram Panchayats",
        id:11
      },
      {
        name: "MSME Facilitation Council - Dispute Resolution",
        eligibility: "Small businesses with payment disputes.",
        benefits: "Quick arbitration and settlement without lengthy court cases.",
        apply: "https://samadhaan.msme.gov.in/",
        id:12
      },
      {
        name: "Start-up India Legal Support Scheme",
        eligibility: "Start-ups registered under DPIIT.",
        benefits: "Free legal consultation for contracts, IP rights, and business disputes.",
        apply: "https://www.startupindia.gov.in",
        id:13
      },
      {
        name: "Right to Education (RTE) Act",
        eligibility: "Children aged 6-14 from disadvantaged backgrounds.",
        benefits: "Free and compulsory education in government and private schools.",
        apply: "Local school admissions under RTE",
        id:14
      },
      {
        name: "Pradhan Mantri Matru Vandana Yojana",
        eligibility: "Pregnant and lactating mothers from economically weaker sections.",
        benefits: "Cash incentive of ₹5,000 for maternal and child health support.",
        apply: "https://pmmvy.nic.in/",
        id:15
      },
      {
        name: "Rashtriya Mahila Kosh (RMK)",
        eligibility: "Women entrepreneurs from economically weaker sections.",
        benefits: "Micro-financing for self-employment and small businesses.",
        apply: "https://rmk.nic.in/",
        id:20
      },
      {
        name: "Legal Aid for Prisoners",
        eligibility: "Undertrial prisoners and economically weaker prisoners.",
        benefits: "Free legal aid and lawyer representation.",
        apply: "Through prison legal aid cells",
        id:30
      },
      {
        name: "Inter-Caste Marriage Scheme",
        eligibility: "Couples entering inter-caste marriages.",
        benefits: "Financial incentive up to ₹2.5 lakh for promoting social harmony.",
        apply: "Through District Social Welfare Office",
        id:31
      },
      {
        name: "Lok Adalat - Alternative Dispute Resolution",
        eligibility: "Citizens with pending legal disputes.",
        benefits: "Faster and cost-effective legal settlements without court fees.",
        apply: "Through State or National Legal Services Authorities",
        id:32
      },
      {
        name: "Consumer Protection Act - Legal Help",
        eligibility: "Consumers facing fraud or service deficiency.",
        benefits: "Legal recourse, compensation, and faster resolution.",
        apply: "Through Consumer Courts",
        id:33
      },
      {
        name: "Senior Citizen Legal Aid Scheme",
        eligibility: "Senior citizens facing financial or legal troubles.",
        benefits: "Free legal advice, property rights protection, and pension support.",
        apply: "Through Legal Aid Centers",
        id:34
      },
      {
        name: "Cyber Crime Victim Assistance Scheme",
        eligibility: "Victims of cyber fraud, cyberbullying, or hacking.",
        benefits: "Legal and financial assistance for cybercrime victims.",
        apply: "https://cybercrime.gov.in",
        id:35
      },
      {
        name: "Janani Suraksha Yojana (JSY)",
        eligibility: "Pregnant women from low-income families.",
        benefits: "Cash incentive for institutional deliveries.",
        apply: "Through government hospitals and ASHA workers",
        id:36
      },
      {
        name: "National Pension Scheme for Traders and Self-Employed",
        eligibility: "Small traders and shopkeepers.",
        benefits: "Pension benefits after 60 years of age.",
        apply: "https://maandhan.in/",
        id:37
      },
      {
        name: "Fast Track Court Scheme",
        eligibility: "Women and child abuse cases, sexual assault cases.",
        benefits: "Faster legal proceedings and judgments.",
        apply: "Through designated Fast Track Courts",
        id:38
      },
      {
        name: "Deendayal Disabled Rehabilitation Scheme (DDRS)",
        eligibility: "Persons with disabilities.",
        benefits: "Legal aid, financial assistance, and rehabilitation programs.",
        apply: "Through National Institutes for Disability Welfare",
        id:39
      },
      {
        name: "RERA - Real Estate Regulatory Authority",
        eligibility: "Homebuyers and real estate consumers.",
        benefits: "Protection against fraud by builders and developers.",
        apply: "https://rera.gov.in",
        id:40
      },
      {
        name: "Public Interest Litigation (PIL) Scheme",
        eligibility: "Any citizen for public welfare matters.",
        benefits: "Allows citizens to file PILs in courts for social justice issues.",
        apply: "High Courts and Supreme Court",
        id:41
      },
      {
        name: "Atal Pension Yojana (APY)",
        eligibility: "Unorganized sector workers.",
        benefits: "Pension benefits for retirement security.",
        apply: "Through banks and post offices",
        id:42
      },
      {
        name: "Indira Gandhi National Widow Pension Scheme",
        eligibility: "Widows aged 40-59 from Below Poverty Line (BPL) families.",
        benefits: "₹300 per month pension support.",
        apply: "Through State Social Welfare Departments",
        id:43
      }
    ]  

class SchemesList extends Component{
    state={viewMoreClicked:false}
    viewMoreButtonClicked=()=>{
        this.setState({viewMoreClicked:true}) 
    }
    render(){
        const {viewMoreClicked}=this.state 
        if(viewMoreClicked){
            return(
                <ul className="all-schemes-container">
                    {schemes.map(each=>(<SchemesListItem details={each}/>))}
                </ul>
            )
        }
        return(
            <>
                <ul className="all-schemes-container">
                {schemes1.map(each=>(<SchemesListItem details={each} />))}
                </ul>
                <button type="button" onClick={this.viewMoreButtonClicked}>View More</button>
            </>
        )
    }
}

export default SchemesList