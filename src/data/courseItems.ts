export type CourseItemContent =
  | string
  | {
    heading?: string;
    paragraph?: string;
    points?: string[];
  };


export type CourseItem = {
  id: number;
  title: string;
  content: CourseItemContent[];
  iconName: string;
};

export type CourseData = {
  code: string;
  description: string[];
  duration: string;
  intake: string;
  fees: string;
  cricos: string;
  courseItems: CourseItem[];
};

export const courses: CourseData[] = [
  {
    code: "CHC33021",
    description: [
      "The Certificate III in Individual Support (CHC33021) equips learners with essential theoretical knowledge and practical skills to provide high-quality, person-centred care in aged care, disability, or community settings.",
      "Students will develop a solid foundation in promoting independence, dignity, and overall well-being while assisting with daily living activities such as personal hygiene, mobility support, nutrition, and emotional care.",
      "The course blends classroom-based learning, online modules, and hands-on work placements to ensure learners gain confidence and competence in real-world care environments.",
      "Graduates are prepared for a wide range of roles, including Personal Care Assistant, Aged Care Worker, Home Care Assistant, and Community Support Worker, with skills recognised nationally."
    ],
    duration: "Up to 1 year (competency-based, includes minimum 120 hours work placement)",
    intake: "Multiple start dates throughout the year",
    fees: "$1450",
    cricos: "Yes",
    courseItems: [
      {
        id: 1,
        title: "Course Overview",
        content: [
          {
            heading: "What You'll Learn",
            paragraph: "This program provides a strong foundation in individual support, emphasising person-centred approaches, communication skills, and practical care techniques.",
            points: [
              "Understanding the fundamentals of aged and disability care",
              "Supporting clients in daily living activities with dignity and respect",
              "Developing effective communication and interpersonal skills",
              "Implementing infection control and workplace safety measures",
              "Working collaboratively with healthcare professionals and family members"
            ]
          },
          {
            heading: "Delivery & Assessment",
            paragraph: "The course is delivered through a combination of online learning, blended options, and on-campus workshops to ensure practical application of skills.",
            points: [
              "Online theory modules with interactive content",
              "Hands-on workshops in simulated care environments",
              "Mandatory work placement with supervision and mentoring",
              "Competency-based assessments to demonstrate skill proficiency"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 2,
        title: "Entry Requirements & Prerequisites",
        content: [
          {
            heading: "Eligibility Criteria",
            points: [
              "Minimum 18 years of age at enrolment",
"Completion of Year 12 or equivalent qualification",
"Access to a computer with word processing, PDF reader, internet, and basic digital skills",
"Ability to read and comprehend course materials",
"Capacity to allocate sufficient weekly study hours",
"Access to suitable work placement attire: black pants, white polo shirt, and fully enclosed leather (or leather-like) shoes with non-slip soles",

            ]
          },
          {
            heading: "Prerequisites",
            paragraph: "There are no formal prerequisites for this course, making it accessible to new entrants looking to start a career in care services."
          }
        ],
        iconName: "AcademicCapIcon"
      },
      {
        id: 3,
        title: "Core and Elective Units",
        content: [
          {
            heading: "Unit Structure",
            points: [
              "Total Units: 15 (Core: 9, Elective: 6)",
              "Core units cover essential care skills, safety, and communication",
              "Elective units allow specialization in areas such as dementia care or palliative support",
              "Detailed unit information available at https://training.gov.au/training/details/CHC33021/qualdetails"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 4,
        title: "Fees & Intake",
        content: [
          {
            heading: "Fees & Start Dates",
            paragraph: "Below are the course fees and flexible intake options for CHC33021 Certificate III in Individual Support.",
            points: [
              "Course fee: $1450",
              "Flexible intake/start dates throughout the year",
              "Opportunities for payment plans and financial support where eligible"
            ]
          }
        ],
        iconName: "CurrencyDollarIcon"
      }
    ]
  },

  {
    code: "CHC43015",
    description: [
      "The Certificate IV in Ageing Support (CHC43015) prepares learners to deliver advanced care for older adults, emphasising individualized care planning, leadership, and coordination of services across residential, community, or home environments.",
      "Students will develop leadership and supervisory skills, enabling them to manage care teams, design care plans, and ensure compliance with legislative and quality standards.",
      "This qualification is ideal for those looking to progress their career from entry-level support roles to positions such as Care Supervisor, Team Leader, or Residential Care Officer."
    ],
    duration: "Up to 1 year (competency-based, includes minimum 120 hours work placement)",
    intake: "Multiple start dates throughout the year",
    fees: "$1550",
    cricos: "Yes",
    courseItems: [
      {
        id: 1,
        title: "Course Overview",
        content: [
          {
            heading: "Learning Outcomes",
            paragraph: "The program focuses on advanced person-centred care, leadership, and coordination of services for the aged population.",
            points: [
              "Developing individualised care plans",
              "Implementing leadership and supervisory techniques in care settings",
              "Understanding the legislative framework for aged care",
              "Enhancing communication and conflict resolution skills with clients and staff",
              "Applying quality and safety standards in residential and community care"
            ]
          },
          {
            heading: "Delivery Methods",
            paragraph: "Blended learning ensures a combination of theory and practice to reinforce skills.",
            points: [
              "Online modules for theoretical learning",
              "On-campus workshops for practical skill development",
              "Work placement with mentoring and assessment",
              "Competency-based evaluation to demonstrate proficiency"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 2,
        title: "Entry Requirements & Prerequisites",
        content: [
          {
            heading: "Eligibility",
            points: [
             "Minimum 18 years of age at enrolment",
"Completion of Year 12 or equivalent qualification",
"Access to a computer with word processing, PDF reader, internet, and basic digital skills",
"Ability to read and comprehend course materials",
"Capacity to allocate sufficient weekly study hours",
"Access to suitable work placement attire: black pants, white polo shirt, and fully enclosed leather (or leather-like) shoes with non-slip soles",

            ]
          },
          {
            heading: "Prerequisites",
            paragraph: "There are no formal prerequisites for this course, making it accessible to new entrants looking to start a career in care services."
          }
        ],
        iconName: "AcademicCapIcon"
      },
      {
        id: 3,
        title: "Core and Elective Units",
        content: [
          {
            heading: "Unit Details",
            points: [
              "Total Units: 18 (Core: 15, Elective: 3)",
              "Core units focus on leadership, complex care, and compliance",
              "Elective units allow specialization in dementia care, palliative care, or community coordination",
              "Full unit descriptions available at https://training.gov.au/training/details/CHC43015/qualdetails"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 4,
        title: "Fees & Intake",
        content: [
          {
            heading: "Fees & Start Dates",
            paragraph: "Below are the course fees and flexible intake options for CHC43015 Certificate IV in Ageing Support.",
            points: [
              "Course fee: $1550",
              "Flexible intake/start dates throughout the year",
              "Opportunities for scholarships, payment plans, or financial support"
            ]
          }
        ],
        iconName: "CurrencyDollarIcon"
      }
    ]
  },

  {
    code: "CHC43121",
    description: [
      "The Certificate IV in Disability Support (CHC43121) equips learners with advanced knowledge and practical skills to deliver person-centred disability support in a range of environments.",
      "Students will develop competencies in advanced support techniques, individualised care planning, legislative compliance, and effective communication with clients, families, and interdisciplinary teams.",
      "Graduates will be prepared for roles such as Disability Support Worker, Senior Support Worker, or Community Disability Officer, with skills recognised nationally."
    ],
    duration: "Up to 1 year (competency-based, includes minimum 120 hours work placement)",
    intake: "Multiple start dates throughout the year",
    fees: "$1550",
    cricos: "Yes",
    courseItems: [
      {
        id: 1,
        title: "Course Overview",
        content: [
          {
            heading: "Key Learning Areas",
            paragraph: "This course equips students with practical and theoretical skills to work effectively in the disability sector.",
            points: [
              "Advanced person-centred support techniques",
              "Developing individual care plans tailored to clients' needs",
              "Understanding legislative requirements and compliance",
              "Enhancing communication and collaboration with clients and families",
              "Applying safety and risk management strategies in diverse settings"
            ]
          },
          {
            heading: "Delivery and Assessment",
            paragraph: "Blended learning ensures students gain both theoretical knowledge and practical experience.",
            points: [
              "Online theory modules and assessments",
              "On-campus workshops for practical skills",
              "Supervised work placement in real-world settings",
              "Competency-based evaluations for each unit"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 2,
        title: "Entry Requirements & Prerequisites",
        content: [
          {
            heading: "Eligibility",
            points: [
              "Minimum 18 years of age",
              "Completion of CHC33021 Certificate III in Individual Support (Disability) or equivalent",
              "Basic computer literacy with internet access",
              "Ability to study 8-10 hours per week",
              "Appropriate work placement attire: black pants, white polo shirt, enclosed shoes"
            ]
          },
          {
            heading: "Prerequisites",
            paragraph: "As per the Training Package, learners must have completed one of the following qualifications to undertake CHC43121 Certificate IV in Disability Support: Completion of CHC33021 Certificate III in Individual Support (Disability), OR Completion of CHC33015 Certificate III in Individual Support (Disability), OR Completion of CHC30408 Certificate III in Disability PLUS the CHCSS00125 Entry to Certificate IV in Disability Support Skill Set."
          }
        ],
        iconName: "AcademicCapIcon"
      },
      {
        id: 3,
        title: "Core and Elective Units",
        content: [
          {
            heading: "Unit Details",
            points: [
              "Total Units: 10 (Core: 7, Elective: 3)",
              "Core units focus on advanced care skills, safety, and communication",
              "Elective units offer specialization in areas like behaviour support and community participation",
              "Detailed descriptions available at https://training.gov.au/training/details/CHC43121/qualdetails"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 4,
        title: "Fees & Intake",
        content: [
          {
            heading: "Fees & Start Dates",
            paragraph: "Below are the course fees and flexible intake options for CHC43121 Certificate IV in Disability Support.",
            points: [
              "Course fee: $1550",
              "Flexible intake/start dates throughout the year",
              "Payment plans or financial support options may be available"
            ]
          }
        ],
        iconName: "CurrencyDollarIcon"
      }
    ]
  },

  {
    code: "HLTAID009",
    description: [
      "HLTAID009 Provide Cardiopulmonary Resuscitation (CPR) equips learners with essential first aid skills required to respond to cardiac and respiratory emergencies effectively.",
      "The course emphasizes practical, hands-on training, ensuring learners can confidently perform CPR, use automated external defibrillators (AEDs), and provide emergency care until professional help arrives.",
      "This qualification is suitable for workplace, community, or personal preparedness, meeting national competency standards for CPR training.",
      "Learners will develop the ability to assess emergency situations, prioritize safety, and deliver timely, lifesaving interventions."
    ],
    duration: "1 day (approx. 6 hours, competency-based)",
    intake: "Multiple dates throughout the year",
    fees: "$75",
    cricos: "No",
    courseItems: [
      {
        id: 1,
        title: "Course Overview",
        content: [
          {
            heading: "Learning Outcomes",
            paragraph: "Upon completion, learners will be able to confidently perform CPR and respond effectively in emergency situations.",
            points: [
              "Identify and assess a casualty and the situation",
              "Perform CPR on adults, children, and infants according to current guidelines",
              "Use an AED correctly and safely",
              "Recognize life-threatening conditions and apply appropriate interventions",
              "Follow workplace health and safety requirements in emergency situations"
            ]
          },
          {
            heading: "Delivery & Assessment",
            paragraph: "This course combines online pre-learning modules with a practical, face-to-face assessment to ensure competency.",
            points: [
              "Online theory covering first aid principles",
              "Practical hands-on CPR and AED training",
              "Assessment through demonstration of skills and knowledge",
              "Certificate issued upon successful completion, nationally recognised"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 4,
        title: "Fees & Intake",
        content: [
          {
            heading: "Fees & Start Dates",
            paragraph: "Below are the course fees and flexible intake options for HLTAID009 Provide Cardiopulmonary Resuscitation.",
            points: [
              "Course fee: $75",
              "Flexible intake/start dates throughout the year",
              "Nationally recognised certificate issued upon successful completion"
            ]
          }
        ],
        iconName: "CurrencyDollarIcon"
      }
    ]
  },

  {
    code: "HLTAID011",
    description: [
      "HLTAID011 Provide First Aid is a comprehensive course that equips learners with the knowledge and practical skills to provide effective first aid in workplace, community, or home environments.",
      "The course covers a wide range of emergencies including cardiac arrest, choking, bleeding, fractures, and medical conditions such as asthma or anaphylaxis.",
      "Students will develop confidence in applying first aid principles, performing CPR, and using an AED, while adhering to national safety and competency standards.",
      "This course is essential for individuals seeking workplace compliance, volunteering in community programs, or gaining general emergency preparedness skills."
    ],
    duration: "2 days (competency-based, approx. 12 hours)",
    intake: "Multiple start dates throughout the year",
    fees: "$125",
    cricos: "No",
    courseItems: [
      {
        id: 1,
        title: "Course Overview",
        content: [
          {
            heading: "Learning Outcomes",
            paragraph: "Learners will acquire practical and theoretical knowledge to respond effectively in a variety of first aid situations.",
            points: [
              "Assess an emergency situation and prioritize actions",
              "Provide CPR for adults, children, and infants",
              "Manage bleeding, fractures, burns, and spinal injuries",
              "Respond to medical emergencies including asthma, diabetes, seizures, and anaphylaxis",
              "Use AED safely and effectively in emergency scenarios",
              "Follow workplace safety procedures and infection control measures"
            ]
          },
          {
            heading: "Delivery & Assessment",
            paragraph: "Blended learning approach with theory and hands-on practical assessment to ensure competency.",
            points: [
              "Online pre-learning modules for foundational theory",
              "Face-to-face practical skills workshops",
              "Competency-based assessment for each skill and scenario",
              "Nationally recognised certificate issued upon successful completion"
            ]
          }
        ],
        iconName: "BookOpenIcon"
      },
      {
        id: 4,
        title: "Fees & Intake",
        content: [
          {
            heading: "Fees & Start Dates",
            paragraph: "Below are the course fees and flexible intake options for HLTAID011 Provide First Aid.",
            points: [
              "Course fee: $125",
              "Flexible intake/start dates throughout the year",
              "Certificate issued is nationally recognised and suitable for workplace compliance"
            ]
          }
        ],
        iconName: "CurrencyDollarIcon"
      }
    ]
  },

  {
    "code": "CHC33021",
    "description": [
      "The Certificate III in Individual Support (Ageing) equips learners with the theoretical knowledge and practical capabilities required to deliver high-quality, person-centred care to older individuals across residential, community and home-based environments.",
      "Students develop strong foundations in supporting ageing clients with daily living activities such as mobility assistance, personal hygiene, communication, nutrition, emotional wellbeing and social engagement.",
      "The program integrates classroom learning, online modules, and hands-on work placement to ensure learners gain real-world experience and confidence in providing safe, respectful and dignified aged care.",
      "Graduates are prepared for roles such as Aged Care Worker, Personal Care Assistant, Home Support Worker, or Community Care Worker, with nationally recognised competencies valued across the aged-care sector."
    ],
    "duration": "Up to 1 year (competency-based, includes minimum 120 hours work placement)",
    "intake": "Multiple start dates throughout the year",
    "fees": "$1450",
    "cricos": "Yes",
    "courseItems": [
      {
        "id": 1,
        "title": "Course Overview",
        "content": [
          {
            "heading": "What You'll Learn",
            "paragraph": "This qualification focuses on person-centred aged care practices, communication frameworks, and practical support techniques to promote dignity, independence and wellbeing in older individuals.",
            "points": [
              "Understanding ageing-related care needs and safe support practices",
              "Assisting with daily living tasks in a respectful, empathetic manner",
              "Developing strong communication and interpersonal skills for aged care settings",
              "Implementing infection prevention, safety protocols and risk reduction",
              "Working collaboratively with families, carers and multidisciplinary healthcare teams"
            ]
          },
          {
            "heading": "Delivery & Assessment",
            "paragraph": "The course is delivered through a combination of online learning, on-campus sessions and structured workplace training to ensure practical skill development.",
            "points": [
              "Online theory modules with interactive resources",
              "On-campus workshops in simulated aged-care environments",
              "Mandatory supervised work placement in approved aged-care settings",
              "Competency-based assessments across theory and practical components"
            ]
          }
        ],
        "iconName": "BookOpenIcon"
      },
      {
        "id": 2,
        "title": "Entry Requirements & Prerequisites",
        "content": [
          {
            "heading": "Eligibility Criteria",
            "points": [
              "Minimum 18 years of age at enrolment",
"Completion of Year 12 or equivalent qualification",
"Access to a computer with word processing, PDF reader, internet, and basic digital skills",
"Ability to read and comprehend course materials",
"Capacity to allocate sufficient weekly study hours",
"Access to suitable work placement attire: black pants, white polo shirt, and fully enclosed leather (or leather-like) shoes with non-slip soles",

            ]
          },
          {
            "heading": "Prerequisites",
            "paragraph": "There are no formal prerequisites for this qualification, making it suitable for learners entering the aged-care workforce for the first time."
          }
        ],
        "iconName": "AcademicCapIcon"
      },
      {
        "id": 3,
        "title": "Core and Elective Units",
        "content": [
          {
            "heading": "Unit Structure",
            "points": [
              "Total Units: 15 (Core: 9, Elective: 6)",
              "Core units focus on essential aged-care practices, safety, and communication",
              "Elective units allow learners to specialise in areas such as dementia or palliative care",
            ]
          }
        ],
        "iconName": "BookOpenIcon"
      },
      {
        "id": 4,
        "title": "Fees & Intake",
        "content": [
          {
            "heading": "Fees & Start Dates",
            "paragraph": "Below are the course fees and intake options for the CHC33021 Certificate III in Individual Support (Ageing).",
            "points": [
              "Course fee: $1450",
              "Multiple flexible intake periods throughout the year",
              "Payment plan options available for eligible learners"
            ]
          }
        ],
        "iconName": "CurrencyDollarIcon"
      }
    ]
  }
  ,
  {
    "code": "CHC33021",
    "description": [
      "The Certificate III in Individual Support (Disability) provides learners with the essential knowledge and hands-on skills to support individuals living with disability in community, home and residential environments.",
      "Students gain practical expertise in promoting independence, facilitating daily living tasks, supporting personal development goals and applying person-directed practice aligned with disability rights and inclusion principles.",
      "Training is delivered through online modules, face-to-face workshops and structured work placements, ensuring learners become confident in providing safe, respectful and empowering disability support.",
      "Graduates can pursue roles such as Disability Support Worker, Home Care Assistant, NDIS Support Worker or Community Participation Assistant, with competencies recognised nationally across the disability sector."
    ],
    "duration": "Up to 1 year (competency-based, includes minimum 120 hours work placement)",
    "intake": "Multiple start dates throughout the year",
    "fees": "$1450",
    "cricos": "Yes",
    "courseItems": [
      {
        "id": 1,
        "title": "Course Overview",
        "content": [
          {
            "heading": "What You'll Learn",
            "paragraph": "This qualification focuses on disability support practices that enhance autonomy, wellbeing and participation, using strengths-based and person-directed approaches.",
            "points": [
              "Understanding disability support frameworks, rights and inclusion principles",
              "Assisting clients with daily activities while promoting independence",
              "Developing communication skills tailored to diverse abilities and needs",
              "Applying safe work practices, infection control and risk management",
              "Collaborating with carers, families and care teams to uphold individual goals"
            ]
          },
          {
            "heading": "Delivery & Assessment",
            "paragraph": "The course blends flexible online learning, practical workshops and supervised placement to build real-world capability.",
            "points": [
              "Interactive online theory modules",
              "Hands-on skills practice in simulated disability-support settings",
              "Mandatory supervised work placement with approved NDIS or community providers",
              "Competency-based assessments in both theory and practical components"
            ]
          }
        ],
        "iconName": "BookOpenIcon"
      },
      {
        "id": 2,
        "title": "Entry Requirements & Prerequisites",
        "content": [
          {
            "heading": "Eligibility Criteria",
            "points": [
              "Minimum 18 years old at the time of enrolment",
              "Completion of Year 12 or equivalent qualification",
              "Basic digital literacy with access to the internet",
              "Ability to commit to work placement hours and course workload",
              "Appropriate placement attire: black pants, white polo shirt, enclosed shoes"
            ]
          },
          {
            "heading": "Prerequisites",
            "paragraph": "This qualification has no formal prerequisites, allowing new entrants to begin a career in disability support without prior experience."
          }
        ],
        "iconName": "AcademicCapIcon"
      },
      {
        "id": 3,
        "title": "Core and Elective Units",
        "content": [
          {
            "heading": "Unit Structure",
            "points": [
              "Total Units: 15 (Core: 9, Elective: 6)",
              "Core units focus on disability support fundamentals, empowerment and safety",
              "Electives enable specialisation in areas such as community participation or behavioural support",
            ]
          }
        ],
        "iconName": "BookOpenIcon"
      },
      {
        "id": 4,
        "title": "Fees & Intake",
        "content": [
          {
            "heading": "Fees & Start Dates",
            "paragraph": "Below are the fees and enrolment options for the CHC33021 Certificate III in Individual Support (Disability).",
            "points": [
              "Course fee: $1450",
              "Flexible intake periods available across the year",
              "Payment plan options available for eligible applicants"
            ]
          }
        ],
        "iconName": "CurrencyDollarIcon"
      }
    ]
  }

];
