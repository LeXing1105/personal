const CV_DATA = {
  ui: {
    en: {
      hero: {
        kicker: "Curriculum Vitae",
      },
      nav: {
        title: "Sections",
      },
      actions: {
        exportPdf: "Export PDF",
        exporting: "PDF export dialog opened.",
      },
      footer: {
        updated: "Last content update: May 2026.",
        edit: "Maintain this site by editing cv-data.js for content and styles.css for visual design.",
      },
    },
    zh: {
      hero: {
        kicker: "个人简历",
      },
      nav: {
        title: "目录",
      },
      actions: {
        exportPdf: "导出 PDF",
        exporting: "PDF 导出窗口已打开。",
      },
      footer: {
        updated: "内容最后更新：2026年5月。",
        edit: "后续维护时，修改 cv-data.js 更新内容，修改 styles.css 调整视觉样式。",
      },
    },
  },

  profile: {
    name: {
      en: "Le Xing",
      zh: "邢乐",
    },
    headline: {
      en: "Research Scientist & Project Lead at BrainCo Inc. | Postdoctoral Researcher at Zhejiang University | PhD, University of Manchester",
      zh: "强脑科技科研专家与项目负责人 | 浙江大学博士后研究员 | 曼彻斯特大学博士",
    },
    summary: {
      en: "Research scientist working at the intersection of brain-computer interfaces, EEG monitoring, neuromodulation, wearable biosensing, and edge AI. Experienced in project leadership, translational product development, electrode development, signal processing, deep learning deployment, Android apps, and clinical-collaboration research.",
      zh: "研究方向聚焦脑机接口、脑电监测、神经调控、可穿戴生物传感与端侧人工智能。具备项目负责人经验，覆盖转化产品研发、电极研发、信号处理、深度学习部署、安卓应用开发与临床合作研究。",
    },
    contacts: [
      { label: "Email", type: "email", value: "le.xing@brainco.cn" },
      { label: "Gmail", type: "email", value: "xingle0007@gmail.com" },
      { label: "GitHub", href: "https://github.com/LeXing1105" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/le-xing-96b806172/" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=Pb4p9jgAAAAJ&hl=zh-EN" },
    ],
    facts: [
      {
        label: { en: "Current role", zh: "现任职位" },
        value: { en: "Research Scientist & Project Lead, BrainCo Inc.", zh: "强脑科技科研专家与项目负责人" },
      },
      {
        label: { en: "Postdoctoral affiliation", zh: "博士后单位" },
        value: { en: "Zhejiang University, State Key Laboratory of Brain-Machine Intelligence", zh: "浙江大学脑机智能全国重点实验室" },
      },
      {
        label: { en: "Research focus", zh: "研究方向" },
        value: { en: "BCI, EEG, neuromodulation, wearable biosensing, edge AI", zh: "脑机接口、脑电、神经调控、可穿戴生物传感、端侧AI" },
      },
      {
        label: { en: "Training", zh: "教育背景" },
        value: { en: "PhD, University of Manchester | MSc, University of Bristol", zh: "曼彻斯特大学博士 | 布里斯托大学硕士" },
      },
    ],
  },

  sections: [
    {
      id: "education",
      type: "timeline",
      title: { en: "Education", zh: "教育背景" },
      kicker: { en: "Academic training", zh: "学术训练" },
      items: [
        {
          period: { en: "2020/09 - 2024/06", zh: "2020/09 - 2024/06" },
          title: { en: "PhD in Electrical and Electronic Engineering", zh: "电子电气工程博士" },
          organization: { en: "University of Manchester, UK", zh: "英国曼彻斯特大学" },
          detail: { en: "Brain-Computer Interface, EEG, Neuromodulation, Signal Processing, Deep Learning", zh: "脑机接口、脑电、神经调控、信号处理、深度学习" },
        },
        {
          period: { en: "2018/09 - 2019/09", zh: "2018/09 - 2019/09" },
          title: { en: "MSc in Biomedical Engineering | Top 1 | Distinction", zh: "生物医学工程硕士 | 专业排名第一 | Distinction" },
          organization: { en: "University of Bristol, UK", zh: "英国布里斯托大学" },
          detail: { en: "Computational Neuroscience, Biomedical Imaging, Genomics, Biosensors", zh: "计算神经科学、医学影像、基因组学、生物传感器" },
        },
        {
          period: { en: "2014/08 - 2018/06", zh: "2014/08 - 2018/06" },
          title: { en: "Bachelor in Bioengineering | GPA: 3.5/4.0", zh: "生物工程学士 | GPA: 3.5/4.0" },
          organization: { en: "Southeast University, Nanjing, China | Project 985", zh: "东南大学，中国南京 | 985高校" },
          detail: { en: "Biochemistry, Immunobiology, Neurobiology, Microbiology, Genetic Engineering", zh: "生物化学、免疫生物学、神经生物学、微生物学、基因工程" },
        },
      ],
    },
    {
      id: "work",
      type: "timeline",
      title: { en: "Work Experience", zh: "工作经历" },
      kicker: { en: "Leadership and product research", zh: "项目领导与产品研发" },
      items: [
        {
          period: { en: "2024/06 - Now", zh: "2024/06 - 至今" },
          title: { en: "Research Scientist & Project Lead", zh: "科研专家与项目负责人" },
          organization: { en: "BrainCo Inc.", zh: "强脑科技 BrainCo Inc." },
          projects: [
            {
              title: { en: "BCIGo: Smart Brain-Computer Interface System", zh: "BCIGo：智能脑机接口系统" },
              bullets: [
                { en: "Defined product requirements and led the project.", zh: "定义产品需求并负责项目推进。" },
                { en: "Validated EEG electrodes and hardware.", zh: "开展脑电电极与硬件验证。" },
                { en: "Created EEG signal processing workflows.", zh: "构建脑电信号处理流程。" },
                { en: "Defined, implemented, led, and commercialized research-grade software.", zh: "定义、实现并推动科研级软件的商业化。" },
              ],
            },
            {
              title: { en: "Closed-loop EEG-tES integrated system for neuromodulation", zh: "闭环 EEG-tES 一体化神经调控系统" },
              context: {
                en: "Postdoctoral work at Zhejiang University, College of Computer Science, State Key Laboratory of Brain-Machine Intelligence, with Prof. Gang Pan.",
                zh: "浙江大学计算机科学与技术学院、脑机智能全国重点实验室博士后课题，合作导师潘纲教授。",
              },
              bullets: [
                { en: "Defined product requirements and led the project.", zh: "定义产品需求并负责项目推进。" },
                { en: "Validated EEG and transcranial electrical stimulation hardware.", zh: "开展脑电与经颅电刺激硬件验证。" },
                { en: "Studied tES artifact removal and closed-loop neuromodulation algorithms.", zh: "研究 tES 伪影去除与闭环神经调控算法。" },
                { en: "Led software definition, testing, and commercialization.", zh: "负责软件定义、测试与商业化推进。" },
              ],
            },
            {
              title: { en: "TriggerHub: External trigger synchronization system with EEG system", zh: "TriggerHub：脑电系统外部触发同步系统" },
              bullets: [
                { en: "Defined product requirements and led the project.", zh: "定义产品需求并负责项目推进。" },
                { en: "Implemented light, audio, button, and microphone trigger input/output.", zh: "实现光、声、按键与麦克风触发输入输出。" },
                { en: "Implemented trigger synchronization for MATLAB Psychtoolbox and Python PsychoPy.", zh: "实现 MATLAB Psychtoolbox 与 Python PsychoPy 的触发同步。" },
              ],
            },
            {
              title: { en: "Brain-Controlled Robot AI Platform", zh: "脑控机器人 AI 平台" },
              bullets: [
                { en: "Defined product requirements and led the project.", zh: "定义产品需求并负责项目推进。" },
                { en: "Developed Motor Imagery and SSVEP neural decoding algorithms for online classification.", zh: "开发运动想象与 SSVEP 在线分类神经解码算法。" },
                { en: "Led software development integrating BCI decoding, robot control, and embodied intelligence.", zh: "负责集成脑机解码、机器人控制与具身智能的软件研发。" },
                { en: "Supported commercialization.", zh: "推动商业化落地。" },
              ],
            },
            {
              title: { en: "Wearable Biosensing Earphone", zh: "可穿戴生物传感耳机" },
              bullets: [
                { en: "Developed robust algorithms for heart-rate estimation using ear PPG and motion estimation using ear IMU data during physical exercise.", zh: "基于耳部 PPG 与耳部 IMU 数据，开发运动状态下心率估计与运动估计算法。" },
              ],
            },
          ],
        },
        {
          period: { en: "2024/06 - Now", zh: "2024/06 - 至今" },
          title: { en: "Postdoctoral Researcher", zh: "博士后研究员" },
          organization: { en: "Zhejiang University, State Key Laboratory of Brain-Machine Intelligence", zh: "浙江大学脑机智能全国重点实验室" },
        },
        {
          period: { en: "2021/09 - 2022/12", zh: "2021/09 - 2022/12" },
          title: { en: "Research Assistant", zh: "研究助理" },
          organization: { en: "University of Manchester", zh: "英国曼彻斯特大学" },
          projects: [
            {
              title: { en: "Screen-printed graphene capacitive pressure sensor array for sitting posture recognition", zh: "丝网印刷石墨烯电容压力传感器阵列用于坐姿识别" },
              context: { en: "With Graphene Trace Inc., UK.", zh: "合作单位：英国初创企业 Graphene Trace Inc." },
              bullets: [
                { en: "Tested Arduino-based real-time pressure sensing and Python programs.", zh: "测试 Arduino 实时压力传感与 Python 程序。" },
                { en: "Preliminary testing helped the startup win second-round funding.", zh: "前期测试结果帮助该初创企业获得第二轮融资。" },
              ],
            },
            {
              title: { en: "3D-printed wearable EEG electrode array", zh: "3D 打印可穿戴脑电电极阵列" },
              context: { en: "With University of Toronto, Canada, Dr. Milad Lankarany.", zh: "合作单位：加拿大多伦多大学 Dr. Milad Lankarany。" },
              bullets: [
                { en: "Worked on 3D electrode modelling and manufacturing, electrode-amplifier compatibility, and EEG signal processing for potential Parkinson's brain monitoring.", zh: "开展电极 3D 建模与制造、不同电极和脑电放大器的兼容性研究，以及面向帕金森脑监测的脑电信号处理。" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "research",
      type: "timeline",
      title: { en: "Research Experience", zh: "研究经历" },
      kicker: { en: "Scientific projects", zh: "科研项目" },
      items: [
        {
          period: { en: "2020/09 - 2024/06", zh: "2020/09 - 2024/06" },
          title: {
            en: "PhD project: Technologies for next-generation portable brain monitoring",
            zh: "博士课题：下一代便携式大脑监测技术",
          },
          organization: { en: "University of Manchester | Henry Royce Institute", zh: "曼彻斯特大学 | 英国 Henry Royce Institute" },
          detail: { en: "Supervisor: Prof. Alex Casson (Alan Turing Fellow)", zh: "导师：Prof. Alex Casson（Alan Turing Fellow）" },
          bullets: [
            { en: "Developed novel 3D-printed electrodes for personalized and inclusive EEG monitoring.", zh: "研发面向个性化与包容性脑电监测的新型 3D 打印电极。" },
            { en: "Developed deep learning algorithms for EEG artifact removal on computers, smartphones, and microcontrollers using TensorFlow and TensorFlow Lite.", zh: "使用 TensorFlow 与 TensorFlow Lite 研发可部署于电脑、手机与微控制器的 EEG 伪影去除深度学习算法。" },
            { en: "Investigated Phase-Locked Loop algorithms for real-time EEG phase tracking.", zh: "研究用于实时脑电相位追踪的锁相环算法。" },
            { en: "Developed an Android smartphone app for visual and acoustic brain stimulation for chronic pain treatment in home settings.", zh: "开发用于家庭慢性疼痛干预的视觉与声觉脑刺激安卓应用。" },
          ],
        },
        {
          period: { en: "2022/12 - 2023/04", zh: "2022/12 - 2023/04" },
          title: { en: "Collaborative project: 3D-printed EEG electrodes and headsets", zh: "合作课题：3D 打印脑电电极与头戴设备" },
          organization: { en: "University of Oxford, UK", zh: "英国牛津大学" },
          detail: { en: "Collaborator: Prof. Timothy Denison", zh: "合作导师：Prof. Timothy Denison" },
          bullets: [
            { en: "Developed 3D-printed EEG electrodes for underprivileged people's brain healthcare.", zh: "研发用于欠发达地区脑健康检测的低成本 3D 打印脑电电极。" },
          ],
        },
        {
          period: { en: "2021/09 - 2023/12", zh: "2021/09 - 2023/12" },
          title: { en: "Collaborative project: Home-based brain entrainment technology for chronic pain intervention", zh: "合作课题：面向慢性疼痛干预的家庭式脑节律诱导技术" },
          organization: { en: "University of Manchester, University of Leeds, and UK National Health Services", zh: "曼彻斯特大学、利兹大学与英国国家医疗系统 NHS" },
          bullets: [
            { en: "Developed Android apps for open-loop audio and visual brain stimulation to help chronic pain patients manage symptoms at home.", zh: "开发用于开放式声觉与视觉脑刺激的安卓应用，帮助慢性疼痛患者在家管理症状。" },
            { en: "Programmed in Java and Android Studio based on clinical requirements.", zh: "基于临床需求使用 Java 与 Android Studio 编写应用。" },
            { en: "Completed more than 1000 hours of EEG signal processing and medical statistical analysis.", zh: "完成超过 1000 小时脑电信号处理与医学统计分析。" },
          ],
        },
        {
          period: { en: "2019/01 - 2019/09", zh: "2019/01 - 2019/09" },
          title: { en: "Master project: Differentiation of alive and dead bacteria using magnetic immunoassays", zh: "硕士课题：基于磁性免疫分析的活/死细菌鉴别" },
          organization: { en: "University of Bristol, Institute of Bio-Sensing Technology, UK", zh: "英国布里斯托大学生物传感技术研究院" },
          detail: { en: "Supervisors: Prof. Janice Kiely and Prof. Richard Luxton", zh: "导师：Prof. Janice Kiely 与 Prof. Richard Luxton" },
          bullets: [
            { en: "Developed a resonant coil magnetometer biosensor for detecting dead and alive E. coli, aiming to evaluate antibiotics and address antibiotic resistance.", zh: "开发谐振线圈磁力计生物传感器，用于检测与区分死/活大肠杆菌，服务于抗生素效力评价和耐药性问题研究。" },
            { en: "Worked on bacterial culturing, nanoparticle processing and characterization, and data analysis.", zh: "开展细菌培养、纳米颗粒制备与表征、数据分析。" },
          ],
        },
        {
          period: { en: "2015/09 - 2018/06", zh: "2015/09 - 2018/06" },
          title: { en: "Undergraduate research: Electrochemical and photoelectrochemical biosensors for cancer biomarkers", zh: "本科研究：用于肿瘤标志物检测的电化学与光电化学生物传感器" },
          organization: { en: "Southeast University Medical School, China", zh: "东南大学医学院" },
          detail: { en: "Supervisor: Prof. Yanfei Shen", zh: "导师：沈艳飞教授" },
          bullets: [
            { en: "Developed a fullerene C60-based biosensor for breast cancer biomarker detection.", zh: "研发基于富勒烯 C60 的乳腺癌标志物检测生物传感器。" },
            { en: "Developed MWCNT-based electrochemical biosensors for cancer biomarker detection using cyclic voltammetry.", zh: "基于多壁碳纳米管开发用于肿瘤标志物检测的电化学生物传感器，并使用循环伏安法检测。" },
            { en: "Characterized biosensors and nanomaterials using TEM and ultraviolet absorption spectra.", zh: "使用透射电子显微镜与紫外吸收光谱开展传感器与纳米材料表征。" },
          ],
        },
      ],
    },
    {
      id: "teaching",
      type: "timeline",
      title: { en: "Teaching Experience", zh: "教学经历" },
      kicker: { en: "Mentoring and instruction", zh: "指导与教学" },
      items: [
        {
          period: { en: "2026/01 - Now", zh: "2026/01 - 至今" },
          title: { en: "Industrial co-supervisor of PhD student", zh: "博士生企业联合导师" },
          organization: { en: "Zhejiang University", zh: "浙江大学" },
        },
        {
          period: { en: "2024/09 - 2024/11", zh: "2024/09 - 2024/11" },
          title: { en: "Part-time mentor for MSc student research project", zh: "硕士研究项目兼职导师" },
          organization: { en: "University of Oxford, Institute of Biomedical Engineering", zh: "牛津大学生物医学工程研究院" },
        },
        {
          period: { en: "2022/09 - 2024/04", zh: "2022/09 - 2024/04" },
          title: { en: "Teaching Assistant, Electrical and Electronic Engineering", zh: "电子电气工程学院助教" },
          organization: { en: "University of Manchester", zh: "曼彻斯特大学" },
          projects: [
            {
              title: { en: "Signals and Systems (Year 2)", zh: "信号与系统（二年级）" },
              bullets: [
                { en: "Taught MATLAB and SIMULINK programming for Fourier Transform, digital filters, and signal processing.", zh: "教授 MATLAB 与 SIMULINK 编程，包括傅里叶变换、数字滤波器与信号处理。" },
              ],
            },
            {
              title: { en: "Foundation Year Project", zh: "预科项目课程" },
              bullets: [
                { en: "Taught circuit building and use of electrical apparatus.", zh: "教授电路搭建与电学仪器使用。" },
                { en: "Taught MATLAB and SIMULINK for circuit simulation.", zh: "教授使用 MATLAB 与 SIMULINK 进行电路仿真。" },
              ],
            },
            {
              title: { en: "Non-linear and Adaptive Control System (Year 2)", zh: "非线性与自适应控制系统（二年级）" },
              bullets: [
                { en: "Supported coursework and exam marking, plus teaching support.", zh: "负责课程作业与考试批改，并提供教学支持。" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "publications",
      type: "publications",
      title: { en: "Publications", zh: "论文发表" },
      kicker: { en: "Selected papers", zh: "代表性论文" },
      years: [
        {
          year: "2026",
          items: [
            {
              en: "Xing, L., Liang, M., Jia, Y., Xie, G., Xu, L., Chen, X. A., ... & Han, B. (2026). Design and Validation of a Portable EEG-tES Platform Supporting High-Rate EEG Recording and Temporal Interference Stimulation. arXiv preprint arXiv:2608.06783.",
              zh: "Xing, L., Liang, M., Jia, Y., Xie, G., Xu, L., Chen, X. A., ... & Han, B. (2026). Design and Validation of a Portable EEG-tES Platform Supporting High-Rate EEG Recording and Temporal Interference Stimulation. arXiv preprint arXiv:2608.06783.",
            },
            {
              en: "Xing L, A D, Yao P, et al. tACSNet: A Novel Deep Convolutional Autoencoder for Transcranial Alternating Current Stimulation Artifact Removal from Concurrent EEG Signal. 2026.",
              zh: "Xing L, A D, Yao P, et al. tACSNet: A Novel Deep Convolutional Autoencoder for Transcranial Alternating Current Stimulation Artifact Removal from Concurrent EEG Signal. 2026.",
            },
          ],
        },
        {
          year: "2025",
          items: [
            {
              en: "Halpin, S. J., Xing, L. et al. Pre-sleep alpha brain entrainment by audio or visual stimulation for chronic widespread pain and sleep disturbance: A randomised crossover feasibility trial. The Journal of Pain, 31, 105393.",
              zh: "Halpin, S. J., Xing, L. et al. Pre-sleep alpha brain entrainment by audio or visual stimulation for chronic widespread pain and sleep disturbance: A randomised crossover feasibility trial. The Journal of Pain, 31, 105393.",
            },
            {
              en: "Saleh, M., Xing, L., & Casson, A. J. EEG artifact removal at the edge using AI hardware. IEEE Sensors Letters.",
              zh: "Saleh, M., Xing, L., & Casson, A. J. EEG artifact removal at the edge using AI hardware. IEEE Sensors Letters.",
            },
          ],
        },
        {
          year: "2024",
          items: [
            {
              en: "Xing, L., & Casson, A. Deep autoencoder for real-time single-channel EEG cleaning and its smartphone implementation using TensorFlow Lite with hardware/software acceleration. IEEE Transactions on Biomedical Engineering.",
              zh: "Xing, L., & Casson, A. Deep autoencoder for real-time single-channel EEG cleaning and its smartphone implementation using TensorFlow Lite with hardware/software acceleration. IEEE Transactions on Biomedical Engineering.",
            },
            {
              en: "Xing, L., & Casson, A. Motion robustness validation of a Phase-Locked Loop for real-time EEG phase tracking in portable Brain-Computer Interfaces. Journal of Neural Engineering, under review.",
              zh: "Xing, L., & Casson, A. Motion robustness validation of a Phase-Locked Loop for real-time EEG phase tracking in portable Brain-Computer Interfaces. Journal of Neural Engineering, under review.",
            },
            {
              en: "Casson, A. J., Xing, L. et al. Printable electrophysiology sensors. Paper: Roadmap on printable electronic materials for next-generation sensors. Nano Future.",
              zh: "Casson, A. J., Xing, L. et al. Printable electrophysiology sensors. Paper: Roadmap on printable electronic materials for next-generation sensors. Nano Future.",
            },
          ],
        },
        {
          year: "2023",
          items: [
            {
              en: "Xing, L., & Casson, A. J. 3D-printed, directly conductive and flexible electrodes for personalized electroencephalography. Sensors and Actuators A: Physical, 349, 114062.",
              zh: "Xing, L., & Casson, A. J. 3D-printed, directly conductive and flexible electrodes for personalized electroencephalography. Sensors and Actuators A: Physical, 349, 114062.",
            },
            {
              en: "Xing, L., Halpin, S., & Casson, A. A smartphone-based platform for portable, non-invasive, audio and visual neurostimulation with a non-rhythmic sham stimulation mode. IEEE Body Sensor Networks Conference.",
              zh: "Xing, L., Halpin, S., & Casson, A. A smartphone-based platform for portable, non-invasive, audio and visual neurostimulation with a non-rhythmic sham stimulation mode. IEEE Body Sensor Networks Conference.",
            },
            {
              en: "Li, M., & Xing L., A. J. Autoencoder Artefact Removal for Brain Signals and Impact on Classification Performance. Computing in Cardiology. IEEE.",
              zh: "Li, M., & Xing L., A. J. Autoencoder Artefact Removal for Brain Signals and Impact on Classification Performance. Computing in Cardiology. IEEE.",
            },
          ],
        },
        {
          year: "2022",
          items: [
            {
              en: "Xing, L., & Casson, A. J. Directly conductive, flexible, 3D printed, EEG electrodes. 2022 IEEE International Conference on Flexible and Printable Sensors and Systems (FLEPS).",
              zh: "Xing, L., & Casson, A. J. Directly conductive, flexible, 3D printed, EEG electrodes. 2022 IEEE International Conference on Flexible and Printable Sensors and Systems (FLEPS).",
            },
            {
              en: "Xing, L., Wang, Z., Alwattar, A., & Casson, A. Flexible sensors, circuits, and systems for bioelectronic interfacing. 2022 IEEE International Flexible Electronics Technology Conference (IFETC).",
              zh: "Xing, L., Wang, Z., Alwattar, A., & Casson, A. Flexible sensors, circuits, and systems for bioelectronic interfacing. 2022 IEEE International Flexible Electronics Technology Conference (IFETC).",
            },
          ],
        },
        {
          year: "2021",
          items: [
            {
              en: "Xing, L., Batchelor, J. C., & Casson, A. J. Opportunities and challenges for flexible and printable electrodes in electroencephalography. 2021 IEEE International Conference on Flexible and Printable Sensors and Systems (FLEPS).",
              zh: "Xing, L., Batchelor, J. C., & Casson, A. J. Opportunities and challenges for flexible and printable electrodes in electroencephalography. 2021 IEEE International Conference on Flexible and Printable Sensors and Systems (FLEPS).",
            },
          ],
        },
        {
          year: "2020",
          items: [
            {
              en: "Ganbat, K., Pan, D., Chen, K., Ning, Z., Xing, L., Zhang, Y., & Shen, Y. One-pot electrografting preparation of bifunctionalized carbon nanotubes for sensitive electrochemical immunosensing. Journal of Electroanalytical Chemistry, 860, 113906.",
              zh: "Ganbat, K., Pan, D., Chen, K., Ning, Z., Xing, L., Zhang, Y., & Shen, Y. One-pot electrografting preparation of bifunctionalized carbon nanotubes for sensitive electrochemical immunosensing. Journal of Electroanalytical Chemistry, 860, 113906.",
            },
          ],
        },
      ],
    },
    {
      id: "patents",
      type: "list",
      title: { en: "Patents", zh: "专利" },
      kicker: { en: "With Zhejiang Qiangnao Technology Co., Ltd.", zh: "与浙江强脑科技有限公司" },
      items: [
        { en: "A method, system, terminal, and storage medium for artifact removal of mixed signals. CN120859516A.", zh: "一种混合信号伪影去除方法、系统、终端和存储介质。CN120859516A。" },
        { en: "Cognitive intervention methods, devices, wearable devices and storage media. CN120094066A.", zh: "认知干预方法、装置、可穿戴设备及存储介质。CN120094066A。" },
        { en: "A step counting method, training method, and electronic device based on smart wearable devices. CN119951120B.", zh: "基于智能可穿戴设备的计步方法、训练方法及电子设备。CN119951120B。" },
        { en: "Pace measurement methods, devices, wearable devices, and storage media. CN120064699A.", zh: "配速测量方法、装置、可穿戴设备及存储介质。CN120064699A。" },
        { en: "EEG acquisition device and EEG system. CN119074016A.", zh: "脑电采集装置及脑电系统。CN119074016A。" },
      ],
    },
    {
      id: "funding",
      type: "timeline",
      title: { en: "Grants & Funding", zh: "科研项目与经费" },
      kicker: { en: "Funded research", zh: "资助项目" },
      items: [
        {
          period: { en: "2025", zh: "2025" },
          title: { en: "Zhejiang Province Jianbing Scheme, China", zh: "浙江省尖兵计划" },
          detail: { en: "Total amount: approximately 20M CNY", zh: "总经费：约 2000 万元人民币" },
          description: {
            en: "Research and development of an intelligent upper-limb prosthetic system based on multimodal neural information fusion sensing technology.",
            zh: "基于多模态神经信息融合感知技术的智能上肢假肢系统研发。",
          },
        },
      ],
    },
    {
      id: "awards",
      type: "list",
      title: { en: "Awards", zh: "获奖情况" },
      kicker: { en: "Recognition", zh: "荣誉奖励" },
      items: [
        { period: { en: "2025", zh: "2025" }, text: { en: "BrainCo Outstanding Contribution Award", zh: "强脑科技 Outstanding Contribution Award" } },
        { period: { en: "2024", zh: "2024" }, text: { en: "University of Manchester PGR Incentive Fund", zh: "曼彻斯特大学博士激励基金 PGR Incentive Fund" } },
        { period: { en: "2023", zh: "2023" }, text: { en: "Institution of Engineering and Technology Healthcare Technologies Awards - William James Award, UK", zh: "英国工程技术学会医疗健康技术奖 William James Award" } },
        { period: { en: "2023", zh: "2023" }, text: { en: "IEEE Body Sensor Networks Conference Student Travel Award, MIT Boston, USA", zh: "IEEE Body Sensor Networks 国际会议学生旅费奖，美国波士顿 MIT" } },
        { period: { en: "2019", zh: "2019" }, text: { en: "Departmental prize for excellent overall MSc performance, University of Bristol", zh: "布里斯托大学院系优秀硕士综合表现奖" } },
        { period: { en: "2018", zh: "2018" }, text: { en: "Southeast University Lanfeng Enterprise Scholarship", zh: "东南大学蓝枫企业奖学金" } },
        { period: { en: "2016", zh: "2016" }, text: { en: "Southeast University Outstanding Student and Presidential Scholarship", zh: "东南大学三好学生与校长奖学金" } },
        { period: { en: "2016", zh: "2016" }, text: { en: "Southeast University Outstanding Director of Student Union", zh: "东南大学优秀学生会干部" } },
      ],
    },
    {
      id: "activities",
      type: "list",
      title: { en: "Academic Activities", zh: "学术活动" },
      kicker: { en: "Talks, seminars, and conferences", zh: "报告、研讨会与会议" },
      items: [
        { period: { en: "2026", zh: "2026" }, text: { en: "Guest lecture at the Shenzhen Hetao Institute.", zh: "深圳河套研究院特邀讲座。" } },
        { period: { en: "2024", zh: "2024" }, text: { en: "Presentation at the HUBIN lab at University College London.", zh: "伦敦大学学院 HUBIN 实验室学术报告。" } },
        { period: { en: "2024", zh: "2024" }, text: { en: "Guest lecture to the anthropology class at the University of Manchester, UK.", zh: "英国曼彻斯特大学人类学课程特邀讲座。" } },
        { period: { en: "2024", zh: "2024" }, text: { en: "CloseNIT workshop and seminar at the University of Manchester, UK.", zh: "英国曼彻斯特大学 CloseNIT 研讨会与学术交流。" } },
        { period: { en: "2023", zh: "2023" }, text: { en: "Presentation at the IET Annual Healthcare Lecture, IET London, UK.", zh: "英国伦敦 IET 年度医疗健康大会报告。" } },
        { period: { en: "2023", zh: "2023" }, text: { en: "Poster presentation at IEEE BSN 2023 International Conference, MIT, Boston, USA.", zh: "IEEE BSN 2023 国际会议海报展示，美国波士顿 MIT。" } },
        { period: { en: "2023", zh: "2023" }, text: { en: "Attendance at the EPSRC-funded CloseNIT workshop at the University of Oxford, UK.", zh: "参加 EPSRC 资助的 CloseNIT 牛津大学研讨会。" } },
        { period: { en: "2022", zh: "2022" }, text: { en: "Poster presentation at IEEE FLEPS 2022 International Conference in Vienna, Austria.", zh: "IEEE FLEPS 2022 国际会议海报展示，奥地利维也纳。" } },
        { period: { en: "2022", zh: "2022" }, text: { en: "Poster presentation at Postgraduate Summer Showcase in Manchester, UK.", zh: "曼彻斯特大学研究生夏季展示活动海报展示。" } },
        { period: { en: "2022", zh: "2022" }, text: { en: "Poster presentation at Translational Research Manchester, UK.", zh: "英国曼彻斯特转化医学研究大会海报展示。" } },
        { period: { en: "2021", zh: "2021" }, text: { en: "Poster presentation at IEEE FLEPS 2021 International Conference in Manchester, UK.", zh: "IEEE FLEPS 2021 国际会议海报展示，英国曼彻斯特。" } },
      ],
    },
    {
      id: "professional",
      type: "list",
      title: { en: "Professional Certificates, Memberships & Service", zh: "专业资质、会员与学术服务" },
      kicker: { en: "Professional engagement", zh: "专业参与" },
      items: [
        { en: "Expert advisor of the Ministry of Science and Technology of China, 2025/12.", zh: "中国科学技术部专家顾问，2025/12。" },
        { en: "Certified expert of Shenzhen Development and Reform Commission for government project assessment.", zh: "深圳市发展和改革委员会政府项目评审认证专家。" },
        { en: "Registered member of international standard Brain-Computer Interfaces - ISO/IEC JTC 1/SC 43.", zh: "国际标准 Brain-Computer Interfaces - ISO/IEC JTC 1/SC 43 注册成员。" },
        { en: "Associate Fellowship of the Higher Education Academy (AFHEA), UK.", zh: "英国高等教育学会副研究员 AFHEA。" },
        { en: "Reviewer for PLOS ONE, Engineering Research Express, and Journal of Neural Engineering.", zh: "PLOS ONE、Engineering Research Express、Journal of Neural Engineering 审稿人。" },
        { en: "Institution of Engineering and Technology (IET) membership.", zh: "英国工程技术学会 IET 会员。" },
        { en: "IEEE membership.", zh: "IEEE 会员。" },
      ],
    },
    {
      id: "skills",
      type: "list",
      title: { en: "Relevant Research Skills", zh: "相关研究技能" },
      kicker: { en: "Technical strengths", zh: "技术能力" },
      items: [
        { en: "Academic writing, grant applications, project management, and project leadership.", zh: "学术写作、科研项目申请、项目管理与项目领导。" },
        { en: "3D modelling, scanning, and 3D printing for wearables and supporting structures.", zh: "面向可穿戴设备与支撑结构的 3D 建模、扫描与 3D 打印。" },
        { en: "Electrical characterization of novel sensors and electrodes for electrophysiology.", zh: "电生理新型传感器与电极的电学性能表征。" },
        { en: "On-human electrophysiological signal collection, including EEG, ECG, and PPG.", zh: "人体电生理信号采集，包括脑电、心电、PPG 等。" },
        { en: "Digital signal processing in MATLAB and Python, including filtering and time-frequency analysis.", zh: "MATLAB 与 Python 数字信号处理，包括数字滤波和时频域分析。" },
        { en: "Deep learning algorithm development and deployment on edge devices using TensorFlow and TensorFlow Lite.", zh: "使用 TensorFlow 与 TensorFlow Lite 开发深度学习算法并部署到端侧设备。" },
        { en: "Java and Android Studio programming for smartphone apps in brain stimulation and BCI contexts.", zh: "使用 Java 与 Android Studio 开发脑刺激和脑机接口相关手机应用。" },
        { en: "Basic cell and bacterial culturing, biosensor development, and biomolecule/microorganism detection.", zh: "基础细胞/细菌培养、生物传感器开发、生物大分子与微生物检测。" },
        { en: "Vibe-coding and AI prompt engineering.", zh: "Vibe-coding 与 AI 提示词工程。" },
      ],
    },
    {
      id: "references",
      type: "references",
      title: { en: "Referees", zh: "推荐人" },
      kicker: { en: "Available contacts", zh: "推荐人信息" },
      groups: [
        {
          organization: { en: "University of Manchester", zh: "曼彻斯特大学" },
          people: [
            {
              name: { en: "Prof. Alex Casson", zh: "Prof. Alex Casson" },
              role: { en: "PhD main supervisor", zh: "博士主导师" },
              email: "alex.casson@manchester.ac.uk",
              phone: "+44 (0)777 5018177",
            },
            {
              name: { en: "Prof. Anthony Jones", zh: "Prof. Anthony Jones" },
              role: { en: "Research collaborator", zh: "研究合作者" },
              email: "anthony.jones@manchester.ac.uk",
              phone: "+44 (0)161 2064266",
            },
            {
              name: { en: "Dr. Paul Wright", zh: "Dr. Paul Wright" },
              role: { en: "PhD co-supervisor", zh: "博士联合导师" },
              email: "P.Wright-2@manchester.ac.uk",
              phone: "+44 (0)161 5293178",
            },
          ],
        },
        {
          organization: { en: "BrainCo Inc.", zh: "强脑科技 BrainCo Inc." },
          people: [
            {
              name: { en: "Disi A", zh: "Disi A" },
              role: { en: "CTO of BrainCo Inc.; line manager", zh: "强脑科技 CTO；直属负责人" },
              email: "adis@brainco.cn",
            },
          ],
        },
        {
          organization: { en: "Zhejiang University", zh: "浙江大学" },
          people: [
            {
              name: { en: "Prof. Gang Pan", zh: "潘纲教授" },
              role: { en: "Postdoctoral supervisor", zh: "博士后合作导师" },
              email: "gpan@zju.edu.cn",
            },
          ],
        },
      ],
    },
    {
      id: "hobbies",
      type: "list",
      title: { en: "Hobbies", zh: "兴趣爱好" },
      kicker: { en: "Beyond work", zh: "工作之外" },
      items: [
        { en: "Chinese calligraphy, amateur drummer, tennis, and full marathon finisher (Manchester 2023).", zh: "中国书法、业余架子鼓、网球、全程马拉松完赛者（曼彻斯特 2023）。" },
      ],
    },
  ],
};
