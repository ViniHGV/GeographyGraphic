import { IDataNav, IOptionsData } from "../types/types";

export const dataNav: IDataNav[] = [
  { name: "Publication", url: "" },
  { name: "Citation", url: "" },
  { name: "Download Data", url: "" },
];

export const ScenariosData: IOptionsData[] = [
  { value: "Baseline" },
  { value: "Intensive elec." },
  { value: "Limited elec." },
  { value: "Net zero" },
];

export const PolicyData: IOptionsData[] = [
  { value: "Default" },
  { value: "+LC" },
  { value: "100% RE+LC" },
  { value: "100% RE" },
];

export const StateData: IOptionsData[] = [
  { value: "AC" },
  { value: "AM" },
  { value: "AP" },
  { value: "BA" },
  { value: "MG" },
  { value: "MT" },
  { value: "PA" },
  { value: "RJ" },
  { value: "RO" },
  { value: "RR" },
  { value: "SP" },
  { value: "ES" },
  { value: "GO" },
  { value: "SC" },
  { value: "CE" },
  { value: "MA" },
  { value: "PR" },
  { value: "RS" },
  { value: "PB" },
  { value: "PE" },
  { value: "PI" },
  { value: "RN" },
  { value: "TO" },
  { value: "AL" },
  { value: "MS" },
  { value: "SE" },
];

export const TechsOptions: IOptionsData[] = [
  { value: "CCGT" },
  { value: "Hydrogen" },
  { value: "Nuclear" },
  { value: "Onshore wind" },
  { value: "PV-existing" },
  { value: "Reservoir" },
  { value: "Run-of-river" },
  { value: "Utility-scale PV" },
];

export const YearData: IOptionsData[] = [{ value: "2019" }];

// export const DataBase =[
// {technologie: "CCGT",	net:Baseline	Default	AC	2019	0.350446886281133},
// {technologie: "CCGT",	net:Baseline	Default	AM	2019	295.408.651.604.124},
// {technologie: "CCGT",	net:Baseline	Default	AP	2019	0.502586785938443},
// {technologie: "CCGT",	net:Baseline	Default	BA	2019	0.664234811200586},
// {technologie: "CCGT",	net:Baseline	Default	MG	2019	342.640.792.021.475},
// {technologie: "CCGT",	net:Baseline	Default	MT	2019	0.183742511866143},
// {technologie: "CCGT",	net:Baseline	Default	PA	2019	0.821226298569815},
// {technologie: "CCGT",	net:Baseline	Default	RJ	2019	78.622.837.118.912},
// {technologie: "CCGT",	net:Baseline	Default	RO	2019	0.834446663325135},
// {technologie: "CCGT",	net:Baseline	Default	RR	2019	0.334671768010197},
// {technologie: "CCGT",	net:Baseline	Default	SP	2019	109.212.271.522.609},
// {technologie: "CCGT",	net:Intensive elec.	+LC	AC	2019	0.667139328173542},
// {technologie: "CCGT",	net:Intensive elec.	+LC	AM	2019	561.134.019.806.954},
// {technologie: "CCGT",	net:Intensive elec.	+LC	AP	2019	0.955422717646816},
// {technologie: "CCGT",	net:Intensive elec.	+LC	BA	2019	209.241.691.833.333},
// {technologie: "CCGT",	net:Intensive elec.	+LC	ES	2019	341.046.977.830.491},
// {technologie: "CCGT",	net:Intensive elec.	+LC	GO	2019	36.719.388.113.837},
// {technologie: "CCGT",	net:Intensive elec.	+LC	MG	2019	135.535.219.968.091},
// {technologie: "CCGT",	net:Intensive elec.	+LC	MT	2019	0.604655022029523},
// {technologie: "CCGT",	net:Intensive elec.	+LC	PA	2019	114.810.860.111.823},
// {technologie: "CCGT",	net:Intensive elec.	+LC	RJ	2019	184.091.015.317.711},
// {technologie: "CCGT",	net:Intensive elec.	+LC	RO	2019	147.441.759.840.562},
// {technologie: "CCGT",	net:Intensive elec.	+LC	RR	2019	0.637489536010198},
// {technologie: "CCGT",	net:Intensive elec.	+LC	SC	2019	426.525.322.643.757},
// {technologie: "CCGT",	net:Intensive elec.	+LC	SP	2019	393.496.669.555.529},
// {technologie: "CCGT",	net:Intensive elec.	Default	AC	2019	0.667139328173542},
// {technologie: "CCGT",	net:Intensive elec.	Default	AM	2019	561.092.529.467.932},
// {technologie: "CCGT",	net:Intensive elec.	Default	AP	2019	0.95583762103703},
// {technologie: "CCGT",	net:Intensive elec.	Default	BA	2019	209.241.691.833.333},
// {technologie: "CCGT",	net:Intensive elec.	Default	ES	2019	414.711.778.130.656},
// {technologie: "CCGT",	net:Intensive elec.	Default	GO	2019	3.837.486.292.077},
// {technologie: "CCGT",	net:Intensive elec.	Default	MG	2019	129.541.012.344.493},
// {technologie: "CCGT",	net:Intensive elec.	Default	MT	2019	0.593576619480824},
// {technologie: "CCGT",	net:Intensive elec.	Default	PA	2019	114.810.860.111.823},
// {technologie: "CCGT",	net:Intensive elec.	Default	RJ	2019	185.528.863.670.871},
// {technologie: "CCGT",	net:Intensive elec.	Default	RO	2019	144.487.254.091.005},
// {technologie: "CCGT",	net:Intensive elec.	Default	RR	2019	0.637489536010198},
// {technologie: "CCGT",	net:Intensive elec.	Default	SC	2019	445.402.081.357.009},
// {technologie: "CCGT",	net:Intensive elec.	Default	SP	2019	388.826.444.197.811},
// {technologie: "CCGT",	net:Limited elec.	+LC	AC	2019	0.578024825914467},
// {technologie: "CCGT",	net:Limited elec.	+LC	AM	2019	486.871.370.215.099},
// {technologie: "CCGT",	net:Limited elec.	+LC	AP	2019	0.829104676570364},
// {technologie: "CCGT",	net:Limited elec.	+LC	BA	2019	181.557.360.633.333},
// {technologie: "CCGT",	net:Limited elec.	+LC	ES	2019	209.365.241.611.481},
// {technologie: "CCGT",	net:Limited elec.	+LC	GO	2019	0.491316989036619},
// {technologie: "CCGT",	net:Limited elec.	+LC	MG	2019	920.369.503.506.209},
// {technologie: "CCGT",	net:Limited elec.	+LC	MT	2019	0.230199196104216},
// {technologie: "CCGT",	net:Limited elec.	+LC	PA	2019	996.228.663.793.907},
// {technologie: "CCGT",	net:Limited elec.	+LC	RJ	2019	157.972.223.818.744},
// {technologie: "CCGT",	net:Limited elec.	+LC	RO	2019	111.995.513.701.049},
// {technologie: "CCGT",	net:Limited elec.	+LC	RR	2019	0.552883663576864},
// {technologie: "CCGT",	net:Limited elec.	+LC	SC	2019	385.929.033.945.794},
// {technologie: "CCGT",	net:Limited elec.	+LC	SP	2019	310.656.295.312.306},
// {technologie: "CCGT",	net:Limited elec.	Default	AC	2019	0.578024825914467},
// {technologie: "CCGT",	net:Limited elec.	Default	AM	2019	486.871.370.215.099},
// {technologie: "CCGT",	net:Limited elec.	Default	AP	2019	0.829104676570364},
// {technologie: "CCGT",	net:Limited elec.	Default	BA	2019	181.557.360.633.333},
// {technologie: "CCGT",	net:Limited elec.	Default	ES	2019	209.365.241.611.486},
// {technologie: "CCGT",	net:Limited elec.	Default	GO	2019	0.491316989036648},
// {technologie: "CCGT",	net:Limited elec.	Default	MG	2019	920.369.503.506.211},
// {technologie: "CCGT",	net:Limited elec.	Default	MT	2019	0.230199196104223},
// {technologie: "CCGT",	net:Limited elec.	Default	PA	2019	996.228.663.793.907},
// {technologie: "CCGT",	net:Limited elec.	Default	RJ	2019	157.972.223.818.744},
// {technologie: "CCGT",	net:Limited elec.	Default	RO	2019	111.995.513.701.048},
// {technologie: "CCGT",	net:Limited elec.	Default	RR	2019	0.552883663576864},
// {technologie: "CCGT",	net:Limited elec.	Default	SC	2019	385.929.033.945.788},
// {technologie: "CCGT",	net:Limited elec.	Default	SP	2019	310.656.295.312.307},
// {technologie: "CCGT",	net:Net zero	Default	AC	2019	0.930457214554829},
// {technologie: "CCGT",	net:Net zero	Default	AM	2019	776.965.210.859.894},
// {technologie: "CCGT",	net:Net zero	Default	AP	2019	132.390.406.181.575},
// {technologie: "CCGT",	net:Net zero	Default	BA	2019	289.744.621.966.667},
// {technologie: "CCGT",	net:Net zero	Default	CE	2019	116.580.468.156.726},
// {technologie: "CCGT",	net:Net zero	Default	ES	2019	693.199.341.177.638},
// {technologie: "CCGT",	net:Net zero	Default	GO	2019	651.672.589.828.347},
// {technologie: "CCGT",	net:Net zero	Default	MA	2019	219.974.749.051.195},
// {technologie: "CCGT",	net:Net zero	Default	MG	2019	204.680.344.721.171},
// {technologie: "CCGT",	net:Net zero	Default	MT	2019	172.344.186.048.736},
// {technologie: "CCGT",	net:Net zero	Default	PA	2019	160.846.728.725.303},
// {technologie: "CCGT",	net:Net zero	Default	PR	2019	527.072.732.202.175},
// {technologie: "CCGT",	net:Net zero	Default	RJ	2019	265.608.331.330.943},
// {technologie: "CCGT",	net:Net zero	Default	RO	2019	233.026.856.905.982},
// {technologie: "CCGT",	net:Net zero	Default	RR	2019	0.883513923943531},
// {technologie: "CCGT",	net:Net zero	Default	RS	2019	0.280060532654221},
// {technologie: "CCGT",	net:Net zero	Default	SC	2019	574.343.878.870.964},
// {technologie: "CCGT",	net:Net zero	Default	SP	2019	668.405.056.296.683},
// Hydrogen	Baseline	100% RE+LC	AC	2019	0.340396572233333
// Hydrogen	Baseline	100% RE+LC	AM	2019	277.829.755.763.959
// Hydrogen	Baseline	100% RE+LC	AP	2019	0.472695194566667
// Hydrogen	Baseline	100% RE+LC	BA	2019	245.259.098.853.505
// Hydrogen	Baseline	100% RE+LC	CE	2019	1.070.625
// Hydrogen	Baseline	100% RE+LC	GO	2019	0.009125
// Hydrogen	Baseline	100% RE+LC	MG	2019	590.434.116.261.174
// Hydrogen	Baseline	100% RE+LC	MT	2019	0.110907699857836
// Hydrogen	Baseline	100% RE+LC	PA	2019	0.797845756266667
// Hydrogen	Baseline	100% RE+LC	PB	2019	0.420400000000373
// Hydrogen	Baseline	100% RE+LC	PE	2019	0.512299999999814
// Hydrogen	Baseline	100% RE+LC	PI	2019	160.613.400.000.054
// Hydrogen	Baseline	100% RE+LC	RJ	2019	682.436.783.391.642
// Hydrogen	Baseline	100% RE+LC	RN	2019	0.167519299999811
// Hydrogen	Baseline	100% RE+LC	RO	2019	0.513585189386221
// Hydrogen	Baseline	100% RE+LC	RR	2019	0.324099249939031
// Hydrogen	Baseline	100% RE+LC	RS	2019	0.00238818000070751
// Hydrogen	Baseline	100% RE+LC	SC	2019	193.974.544.547.708
// Hydrogen	Baseline	100% RE+LC	SP	2019	933.563.830.360.689
// Hydrogen	Baseline	100% RE+LC	TO	2019	0.005
// Hydrogen	Baseline	Default	BA	2019	153.598.267.999.967
// Hydrogen	Baseline	Default	CE	2019	1.070.625
// Hydrogen	Baseline	Default	GO	2019	0.009125
// Hydrogen	Baseline	Default	MG	2019	159.804.340.000.008
// Hydrogen	Baseline	Default	MT	2019	0.000899999998509884
// Hydrogen	Baseline	Default	PB	2019	0.420400000000373
// Hydrogen	Baseline	Default	PE	2019	0.512299999999814
// Hydrogen	Baseline	Default	PI	2019	160.613.400.000.054
// Hydrogen	Baseline	Default	RN	2019	0.167519299999811
// Hydrogen	Baseline	Default	RS	2019	0.00238818000070751
// Hydrogen	Baseline	Default	SC	2019	0.00693383000022732
// Hydrogen	Baseline	Default	SP	2019	0.755852000000887
// Hydrogen	Baseline	Default	TO	2019	0.005
// Hydrogen	Intensive elec.	+LC	BA	2019	153.598.267.999.967
// Hydrogen	Intensive elec.	+LC	CE	2019	1.070.625
// Hydrogen	Intensive elec.	+LC	GO	2019	0.009125
// Hydrogen	Intensive elec.	+LC	MG	2019	289.307.233.352.238
// Hydrogen	Intensive elec.	+LC	MT	2019	0.067970490557474
// Hydrogen	Intensive elec.	+LC	PB	2019	0.420400000000373
// Hydrogen	Intensive elec.	+LC	PE	2019	0.512299999999814
// Hydrogen	Intensive elec.	+LC	PI	2019	160.613.400.000.054
// Hydrogen	Intensive elec.	+LC	RN	2019	0.167519299999811
// Hydrogen	Intensive elec.	+LC	RO	2019	0.198696185833337
// Hydrogen	Intensive elec.	+LC	RS	2019	0.00238818000070751
// Hydrogen	Intensive elec.	+LC	SC	2019	0.00693383000022732
// Hydrogen	Intensive elec.	+LC	SP	2019	110.980.661.511.915
// Hydrogen	Intensive elec.	+LC	TO	2019	0.005
// Hydrogen	Intensive elec.	Default	BA	2019	153.598.267.999.967
// Hydrogen	Intensive elec.	Default	CE	2019	1.070.625
// Hydrogen	Intensive elec.	Default	GO	2019	0.009125
// Hydrogen	Intensive elec.	Default	MG	2019	28.613.527.988.182
// Hydrogen	Intensive elec.	Default	MT	2019	0.0721254081006043
// Hydrogen	Intensive elec.	Default	PB	2019	0.420400000000373
// Hydrogen	Intensive elec.	Default	PE	2019	0.512299999999814
// Hydrogen	Intensive elec.	Default	PI	2019	160.613.400.000.054
// Hydrogen	Intensive elec.	Default	RN	2019	0.167519299999811
// Hydrogen	Intensive elec.	Default	RO	2019	0.235529122282133
// Hydrogen	Intensive elec.	Default	RS	2019	0.00238818000070751
// Hydrogen	Intensive elec.	Default	SC	2019	0.00693383000022732
// Hydrogen	Intensive elec.	Default	SP	2019	112.794.594.037.381
// Hydrogen	Intensive elec.	Default	TO	2019	0.005
// Hydrogen	Limited elec.	+LC	BA	2019	153.598.267.999.967
// Hydrogen	Limited elec.	+LC	CE	2019	1.070.625
// Hydrogen	Limited elec.	+LC	GO	2019	0.009125
// Hydrogen	Limited elec.	+LC	MG	2019	272.070.668.141.396
// Hydrogen	Limited elec.	+LC	MT	2019	0.0807984506484706
// Hydrogen	Limited elec.	+LC	PB	2019	0.420400000000373
// Hydrogen	Limited elec.	+LC	PE	2019	0.512299999999814
// Hydrogen	Limited elec.	+LC	PI	2019	160.613.400.000.054
// Hydrogen	Limited elec.	+LC	RN	2019	0.167519299999811
// Hydrogen	Limited elec.	+LC	RO	2019	0.302000875939754
// Hydrogen	Limited elec.	+LC	RS	2019	0.00238818000070751
// Hydrogen	Limited elec.	+LC	SC	2019	0.00693383000022732
// Hydrogen	Limited elec.	+LC	SP	2019	935.721.454.735.537
// Hydrogen	Limited elec.	+LC	TO	2019	0.005
// Hydrogen	Limited elec.	100% RE	AC	2019	0.570821402631333
// Hydrogen	Limited elec.	100% RE	AL	2019	107.576.750.912.377
// Hydrogen	Limited elec.	100% RE	BA	2019	369.492.216.481.999
// Hydrogen	Limited elec.	100% RE	CE	2019	22.173.804.043.607
// Hydrogen	Limited elec.	100% RE	ES	2019	557.972.751.733.333
// Hydrogen	Limited elec.	100% RE	GO	2019	0.009125
// Hydrogen	Limited elec.	100% RE	MG	2019	120.219.132.129.267
// Hydrogen	Limited elec.	100% RE	MT	2019	0.306328525765177
// Hydrogen	Limited elec.	100% RE	PA	2019	307.086.155.932.946
// Hydrogen	Limited elec.	100% RE	PB	2019	0.420400000000373
// Hydrogen	Limited elec.	100% RE	PE	2019	0.512299999999814
// Hydrogen	Limited elec.	100% RE	PI	2019	160.613.400.000.054
// Hydrogen	Limited elec.	100% RE	RJ	2019	157.972.223.818.744
// Hydrogen	Limited elec.	100% RE	RN	2019	0.167519299999811
// Hydrogen	Limited elec.	100% RE	RO	2019	137.940.364.669.288
// Hydrogen	Limited elec.	100% RE	RS	2019	0.00238818000070751
// Hydrogen	Limited elec.	100% RE	SC	2019	302.566.224.042.498
// Hydrogen	Limited elec.	100% RE	SP	2019	347.775.679.135.571
// Hydrogen	Limited elec.	100% RE	TO	2019	0.005
// Hydrogen	Limited elec.	Default	BA	2019	153.598.267.999.967
// Hydrogen	Limited elec.	Default	CE	2019	1.070.625
// Hydrogen	Limited elec.	Default	GO	2019	0.009125
// Hydrogen	Limited elec.	Default	MG	2019	272.070.668.141.397
// Hydrogen	Limited elec.	Default	MT	2019	0.0807984506484646
// Hydrogen	Limited elec.	Default	PB	2019	0.420400000000373
// Hydrogen	Limited elec.	Default	PE	2019	0.512299999999814
// Hydrogen	Limited elec.	Default	PI	2019	160.613.400.000.054
// Hydrogen	Limited elec.	Default	RN	2019	0.167519299999811
// Hydrogen	Limited elec.	Default	RO	2019	0.30200087593977
// Hydrogen	Limited elec.	Default	RS	2019	0.00238818000070751
// Hydrogen	Limited elec.	Default	SC	2019	0.00693383000022732
// Hydrogen	Limited elec.	Default	SP	2019	935.721.454.735.532
// Hydrogen	Limited elec.	Default	TO	2019	0.005
// Hydrogen	Net zero	100% RE	AC	2019	0.8901611395515
// Hydrogen	Net zero	100% RE	AL	2019	121.595.130.632.574
// Hydrogen	Net zero	100% RE	BA	2019	104.109.751.684.331
// Hydrogen	Net zero	100% RE	CE	2019	699.326.178.929.338
// Hydrogen	Net zero	100% RE	ES	2019	890.460.202
// Hydrogen	Net zero	100% RE	GO	2019	584.564.567.172.637
// Hydrogen	Net zero	100% RE	MG	2019	249.734.350.924.517
// Hydrogen	Net zero	100% RE	MT	2019	0.488328724631843
// Hydrogen	Net zero	100% RE	PA	2019	903.047.500.334.276
// Hydrogen	Net zero	100% RE	PB	2019	0.420400000000373
// Hydrogen	Net zero	100% RE	PE	2019	475.195.888.947.845
// Hydrogen	Net zero	100% RE	PI	2019	221.011.288.276.594
// Hydrogen	Net zero	100% RE	RJ	2019	57.403.839.085.948
// Hydrogen	Net zero	100% RE	RN	2019	0.167519299999811
// Hydrogen	Net zero	100% RE	RO	2019	222.093.144.560.024
// Hydrogen	Net zero	100% RE	RS	2019	0.00238818000070751
// Hydrogen	Net zero	100% RE	SC	2019	598.594.969.717.887
// Hydrogen	Net zero	100% RE	SP	2019	666.703.414.316.821
// Hydrogen	Net zero	100% RE	TO	2019	0.005
// Hydrogen	Net zero	100% RE+LC	AC	2019	0.888250357575333
// Hydrogen	Net zero	100% RE+LC	AL	2019	121.208.233.707.637
// Hydrogen	Net zero	100% RE+LC	BA	2019	828.055.777.572.414
// Hydrogen	Net zero	100% RE+LC	CE	2019	698.147.088.420.145
// Hydrogen	Net zero	100% RE+LC	ES	2019	890.460.202
// Hydrogen	Net zero	100% RE+LC	GO	2019	462.929.210.217.314
// Hydrogen	Net zero	100% RE+LC	MG	2019	278.952.817.369.781
// Hydrogen	Net zero	100% RE+LC	MT	2019	0.488328724631843
// Hydrogen	Net zero	100% RE+LC	PA	2019	897.430.253.378.948
// Hydrogen	Net zero	100% RE+LC	PB	2019	0.420400000000373
// Hydrogen	Net zero	100% RE+LC	PE	2019	464.521.471.147.797
// Hydrogen	Net zero	100% RE+LC	PI	2019	244.804.440.065.126
// Hydrogen	Net zero	100% RE+LC	RJ	2019	47.845.029.188.603
// Hydrogen	Net zero	100% RE+LC	RN	2019	0.167519299999811
// Hydrogen	Net zero	100% RE+LC	RO	2019	22.227.466.884.776
// Hydrogen	Net zero	100% RE+LC	RS	2019	0.00238818000070751
// Hydrogen	Net zero	100% RE+LC	SC	2019	585.843.354.480.084
// Hydrogen	Net zero	100% RE+LC	SP	2019	671.810.380.701.617
// Hydrogen	Net zero	100% RE+LC	TO	2019	0.005
// Hydrogen	Net zero	Default	BA	2019	153.598.267.999.967
// Hydrogen	Net zero	Default	CE	2019	1.070.625
// Hydrogen	Net zero	Default	GO	2019	100.516.468.166.893
// Hydrogen	Net zero	Default	MG	2019	36.347.343.731.071
// Hydrogen	Net zero	Default	MT	2019	0.000899999998509884
// Hydrogen	Net zero	Default	PB	2019	0.420400000000373
// Hydrogen	Net zero	Default	PE	2019	0.512299999999814
// Hydrogen	Net zero	Default	PI	2019	160.613.400.000.054
// Hydrogen	Net zero	Default	RN	2019	0.167519299999811
// Hydrogen	Net zero	Default	RS	2019	0.00238818000070751
// Hydrogen	Net zero	Default	SC	2019	0.00693383000022732
// Hydrogen	Net zero	Default	SP	2019	151.577.658.926.775
// Hydrogen	Net zero	Default	TO	2019	0.005
// Nuclear	Baseline	100% RE+LC	RJ	2019	3.34
// Nuclear	Baseline	Default	RJ	2019	3.34
// Nuclear	Intensive elec.	+LC	RJ	2019	3.34
// Nuclear	Intensive elec.	Default	RJ	2019	3.34
// Nuclear	Limited elec.	+LC	RJ	2019	3.34
// Nuclear	Limited elec.	100% RE	RJ	2019	3.34
// Nuclear	Limited elec.	Default	RJ	2019	3.34
// Nuclear	Net zero	100% RE	RJ	2019	248.038.711.266.129
// Nuclear	Net zero	100% RE+LC	RJ	2019	257.597.521.163.474
// Nuclear	Net zero	Default	RJ	2019	3.34
// Onshore wind	Baseline	100% RE+LC	BA	2019	196.511.841.931.313
// Onshore wind	Baseline	100% RE+LC	CE	2019	253.362
// Onshore wind	Baseline	100% RE+LC	MA	2019	0.426
// Onshore wind	Baseline	100% RE+LC	MG	2019	211.598.045.745.184
// Onshore wind	Baseline	100% RE+LC	MS	2019	16.949.854.143.298
// Onshore wind	Baseline	100% RE+LC	PB	2019	0.91809
// Onshore wind	Baseline	100% RE+LC	PE	2019	1.049.785
// Onshore wind	Baseline	100% RE+LC	PI	2019	322.765
// Onshore wind	Baseline	100% RE+LC	PR	2019	558.614.017.701.495
// Onshore wind	Baseline	100% RE+LC	RJ	2019	0.02805
// Onshore wind	Baseline	100% RE+LC	RN	2019	368.191.821.321.389
// Onshore wind	Baseline	100% RE+LC	RS	2019	515.316.102.250.369
// Onshore wind	Baseline	100% RE+LC	SC	2019	0.4768035
// Onshore wind	Baseline	100% RE+LC	SE	2019	720.372.221.107.345
// Onshore wind	Baseline	100% RE+LC	SP	2019	0.1905422
// Onshore wind	Baseline	Default	BA	2019	247.304.647.192.267
// Onshore wind	Baseline	Default	CE	2019	253.362
// Onshore wind	Baseline	Default	MA	2019	0.426
// Onshore wind	Baseline	Default	MG	2019	235.034.671.464.495
// Onshore wind	Baseline	Default	MS	2019	738.850.898.675.377
// Onshore wind	Baseline	Default	PB	2019	0.91809
// Onshore wind	Baseline	Default	PE	2019	1.049.785
// Onshore wind	Baseline	Default	PI	2019	322.765
// Onshore wind	Baseline	Default	PR	2019	659.617.453.334.327
// Onshore wind	Baseline	Default	RJ	2019	0.02805
// Onshore wind	Baseline	Default	RN	2019	336.115.892.547.753
// Onshore wind	Baseline	Default	RS	2019	594.364.334.327.692
// Onshore wind	Baseline	Default	SC	2019	0.4768035
// Onshore wind	Baseline	Default	SE	2019	431.385.477.894.056
// Onshore wind	Baseline	Default	SP	2019	0.1905422
// Onshore wind	Intensive elec.	+LC	BA	2019	604.011.761.865.957
// Onshore wind	Intensive elec.	+LC	CE	2019	253.362
// Onshore wind	Intensive elec.	+LC	MA	2019	0.426
// Onshore wind	Intensive elec.	+LC	MG	2019	43.055.744
// Onshore wind	Intensive elec.	+LC	MS	2019	265.449.768.573.605
// Onshore wind	Intensive elec.	+LC	PB	2019	0.91809
// Onshore wind	Intensive elec.	+LC	PE	2019	1.049.785
// Onshore wind	Intensive elec.	+LC	PI	2019	322.765
// Onshore wind	Intensive elec.	+LC	PR	2019	109.342.406.729.146
// Onshore wind	Intensive elec.	+LC	RJ	2019	0.02805
// Onshore wind	Intensive elec.	+LC	RN	2019	755.262.275.561.789
// Onshore wind	Intensive elec.	+LC	RS	2019	148.392.230.370.846
// Onshore wind	Intensive elec.	+LC	SC	2019	0.4768035
// Onshore wind	Intensive elec.	+LC	SE	2019	194.779.922.760.134
// Onshore wind	Intensive elec.	+LC	SP	2019	0.1905422
// Onshore wind	Intensive elec.	Default	BA	2019	568.847.034.960.557
// Onshore wind	Intensive elec.	Default	CE	2019	253.362
// Onshore wind	Intensive elec.	Default	MA	2019	0.426
// Onshore wind	Intensive elec.	Default	MG	2019	477.131.363.200.822
// Onshore wind	Intensive elec.	Default	MS	2019	267.709.305.024.548
// Onshore wind	Intensive elec.	Default	PB	2019	0.91809
// Onshore wind	Intensive elec.	Default	PE	2019	1.049.785
// Onshore wind	Intensive elec.	Default	PI	2019	322.765
// Onshore wind	Intensive elec.	Default	PR	2019	101.926.532.307.863
// Onshore wind	Intensive elec.	Default	RJ	2019	0.02805
// Onshore wind	Intensive elec.	Default	RN	2019	75.292.094.194.474
// Onshore wind	Intensive elec.	Default	RS	2019	147.091.505.188.276
// Onshore wind	Intensive elec.	Default	SC	2019	0.4768035
// Onshore wind	Intensive elec.	Default	SE	2019	19.434.383.701.131
// Onshore wind	Intensive elec.	Default	SP	2019	0.1905422
// Onshore wind	Limited elec.	+LC	BA	2019	478.453.853.311.094
// Onshore wind	Limited elec.	+LC	CE	2019	253.362
// Onshore wind	Limited elec.	+LC	MA	2019	0.426
// Onshore wind	Limited elec.	+LC	MG	2019	426.748.346.743.938
// Onshore wind	Limited elec.	+LC	MS	2019	214.508.350.712.306
// Onshore wind	Limited elec.	+LC	PB	2019	0.91809
// Onshore wind	Limited elec.	+LC	PE	2019	1.049.785
// Onshore wind	Limited elec.	+LC	PI	2019	322.765
// Onshore wind	Limited elec.	+LC	PR	2019	746.634.059.508.919
// Onshore wind	Limited elec.	+LC	RJ	2019	0.02805
// Onshore wind	Limited elec.	+LC	RN	2019	647.992.333.037.439
// Onshore wind	Limited elec.	+LC	RS	2019	125.771.104.934.134
// Onshore wind	Limited elec.	+LC	SC	2019	0.4768035
// Onshore wind	Limited elec.	+LC	SE	2019	151.114.607.683.762
// Onshore wind	Limited elec.	+LC	SP	2019	0.1905422
// Onshore wind	Limited elec.	100% RE	BA	2019	280.244.507.056.303
// Onshore wind	Limited elec.	100% RE	CE	2019	253.362
// Onshore wind	Limited elec.	100% RE	MA	2019	0.426
// Onshore wind	Limited elec.	100% RE	MG	2019	316.024.035.015.998
// Onshore wind	Limited elec.	100% RE	MS	2019	522.173.251.195.418
// Onshore wind	Limited elec.	100% RE	PB	2019	0.91809
// Onshore wind	Limited elec.	100% RE	PE	2019	1.049.785
// Onshore wind	Limited elec.	100% RE	PI	2019	322.765
// Onshore wind	Limited elec.	100% RE	RJ	2019	0.02805
// Onshore wind	Limited elec.	100% RE	RN	2019	475.149.725.464.373
// Onshore wind	Limited elec.	100% RE	RR	2019	52.546.048.943.928
// Onshore wind	Limited elec.	100% RE	RS	2019	132.225.369.542.864
// Onshore wind	Limited elec.	100% RE	SC	2019	0.4768035
// Onshore wind	Limited elec.	100% RE	SE	2019	231.954.160.315.791
// Onshore wind	Limited elec.	100% RE	SP	2019	0.1905422
// Onshore wind	Limited elec.	Default	BA	2019	478.453.853.311.093
// Onshore wind	Limited elec.	Default	CE	2019	253.362
// Onshore wind	Limited elec.	Default	MA	2019	0.426
// Onshore wind	Limited elec.	Default	MG	2019	426.748.346.743.939
// Onshore wind	Limited elec.	Default	MS	2019	214.508.350.712.307
// Onshore wind	Limited elec.	Default	PB	2019	0.91809
// Onshore wind	Limited elec.	Default	PE	2019	1.049.785
// Onshore wind	Limited elec.	Default	PI	2019	322.765
// Onshore wind	Limited elec.	Default	PR	2019	74.663.405.950.891
// Onshore wind	Limited elec.	Default	RJ	2019	0.02805
// Onshore wind	Limited elec.	Default	RN	2019	647.992.333.037.438
// Onshore wind	Limited elec.	Default	RS	2019	125.771.104.934.134
// Onshore wind	Limited elec.	Default	SC	2019	0.4768035
// Onshore wind	Limited elec.	Default	SE	2019	151.114.607.683.759
// Onshore wind	Limited elec.	Default	SP	2019	0.1905422
// Onshore wind	Net zero	100% RE	BA	2019	347.756.771.689.064
// Onshore wind	Net zero	100% RE	CE	2019	253.362
// Onshore wind	Net zero	100% RE	MA	2019	0.426
// Onshore wind	Net zero	100% RE	MG	2019	59.927.932.867.377
// Onshore wind	Net zero	100% RE	MS	2019	11.395.186.655.342
// Onshore wind	Net zero	100% RE	PB	2019	0.91809
// Onshore wind	Net zero	100% RE	PE	2019	1.049.785
// Onshore wind	Net zero	100% RE	PI	2019	322.765
// Onshore wind	Net zero	100% RE	RJ	2019	0.02805
// Onshore wind	Net zero	100% RE	RN	2019	465.364.820.186.099
// Onshore wind	Net zero	100% RE	RR	2019	865.992.735.916.384
// Onshore wind	Net zero	100% RE	RS	2019	241.415.024.384.069
// Onshore wind	Net zero	100% RE	SC	2019	0.4768035
// Onshore wind	Net zero	100% RE	SE	2019	432.122.476.602.887
// Onshore wind	Net zero	100% RE	SP	2019	0.1905422
// Onshore wind	Net zero	100% RE+LC	BA	2019	439.350.297.907.041
// Onshore wind	Net zero	100% RE+LC	CE	2019	253.362
// Onshore wind	Net zero	100% RE+LC	MA	2019	0.426
// Onshore wind	Net zero	100% RE+LC	MG	2019	43.055.744
// Onshore wind	Net zero	100% RE+LC	MS	2019	113.284.971.678.713
// Onshore wind	Net zero	100% RE+LC	PB	2019	0.91809
// Onshore wind	Net zero	100% RE+LC	PE	2019	1.049.785
// Onshore wind	Net zero	100% RE+LC	PI	2019	322.765
// Onshore wind	Net zero	100% RE+LC	RJ	2019	0.02805
// Onshore wind	Net zero	100% RE+LC	RN	2019	465.942.259.859.132
// Onshore wind	Net zero	100% RE+LC	RR	2019	869.326.785.914.302
// Onshore wind	Net zero	100% RE+LC	RS	2019	247.207.169.767.173
// Onshore wind	Net zero	100% RE+LC	SC	2019	0.4768035
// Onshore wind	Net zero	100% RE+LC	SE	2019	43.247.712
// Onshore wind	Net zero	100% RE+LC	SP	2019	0.1905422
// Onshore wind	Net zero	Default	BA	2019	953.038.565.615.923
// Onshore wind	Net zero	Default	CE	2019	894.211.630.264.877
// Onshore wind	Net zero	Default	MA	2019	0.426
// Onshore wind	Net zero	Default	MG	2019	650.866.183.408.128
// Onshore wind	Net zero	Default	MS	2019	441.316.410.309.357
// Onshore wind	Net zero	Default	PB	2019	0.91809
// Onshore wind	Net zero	Default	PE	2019	1.049.785
// Onshore wind	Net zero	Default	PI	2019	322.765
// Onshore wind	Net zero	Default	PR	2019	145.090.304.115.042
// Onshore wind	Net zero	Default	RJ	2019	0.02805
// Onshore wind	Net zero	Default	RN	2019	8.898.228.769
// Onshore wind	Net zero	Default	RS	2019	215.859.074.399.789
// Onshore wind	Net zero	Default	SC	2019	0.4768035
// Onshore wind	Net zero	Default	SE	2019	291.608.824.963.148
// Onshore wind	Net zero	Default	SP	2019	0.1905422
// PV-existing	Baseline	100% RE+LC	AC	2019	0.03997
// PV-existing	Baseline	100% RE+LC	AL	2019	0.09122726
// PV-existing	Baseline	100% RE+LC	AM	2019	0.07522965
// PV-existing	Baseline	100% RE+LC	AP	2019	0.01845963
// PV-existing	Baseline	100% RE+LC	BA	2019	142.180.153
// PV-existing	Baseline	100% RE+LC	CE	2019	15.509.436
// PV-existing	Baseline	100% RE+LC	ES	2019	0.31768544
// PV-existing	Baseline	100% RE+LC	GO	2019	0.60196824
// PV-existing	Baseline	100% RE+LC	MA	2019	0.28815421
// PV-existing	Baseline	100% RE+LC	MG	2019	362.406.892
// PV-existing	Baseline	100% RE+LC	MS	2019	0.34411733
// PV-existing	Baseline	100% RE+LC	MT	2019	0.92017855
// PV-existing	Baseline	100% RE+LC	PA	2019	0.3687481
// PV-existing	Baseline	100% RE+LC	PB	2019	0.554699
// PV-existing	Baseline	100% RE+LC	PE	2019	0.9301371
// PV-existing	Baseline	100% RE+LC	PI	2019	25.907.057
// PV-existing	Baseline	100% RE+LC	PR	2019	143.258.468
// PV-existing	Baseline	100% RE+LC	RJ	2019	0.56021904
// PV-existing	Baseline	100% RE+LC	RN	2019	0.5292012
// PV-existing	Baseline	100% RE+LC	RO	2019	0.16413816
// PV-existing	Baseline	100% RE+LC	RR	2019	0.01268231
// PV-existing	Baseline	100% RE+LC	RS	2019	141.541.251
// PV-existing	Baseline	100% RE+LC	SC	2019	0.777094
// PV-existing	Baseline	100% RE+LC	SE	2019	0.07411207
// PV-existing	Baseline	100% RE+LC	SP	2019	274.589.681
// PV-existing	Baseline	100% RE+LC	TO	2019	0.22559705
// PV-existing	Baseline	Default	AC	2019	0.03997
// PV-existing	Baseline	Default	AL	2019	0.09122726
// PV-existing	Baseline	Default	AM	2019	0.07522965
// PV-existing	Baseline	Default	AP	2019	0.01845963
// PV-existing	Baseline	Default	BA	2019	142.180.153
// PV-existing	Baseline	Default	CE	2019	15.509.436
// PV-existing	Baseline	Default	ES	2019	0.31768544
// PV-existing	Baseline	Default	GO	2019	0.60196824
// PV-existing	Baseline	Default	MA	2019	0.28815421
// PV-existing	Baseline	Default	MG	2019	362.406.892
// PV-existing	Baseline	Default	MS	2019	0.34411733
// PV-existing	Baseline	Default	MT	2019	0.92017855
// PV-existing	Baseline	Default	PA	2019	0.3687481
// PV-existing	Baseline	Default	PB	2019	0.554699
// PV-existing	Baseline	Default	PE	2019	0.9301371
// PV-existing	Baseline	Default	PI	2019	25.907.057
// PV-existing	Baseline	Default	PR	2019	143.258.468
// PV-existing	Baseline	Default	RJ	2019	0.56021904
// PV-existing	Baseline	Default	RN	2019	0.5292012
// PV-existing	Baseline	Default	RO	2019	0.16413816
// PV-existing	Baseline	Default	RR	2019	0.01268231
// PV-existing	Baseline	Default	RS	2019	141.541.251
// PV-existing	Baseline	Default	SC	2019	0.777094
// PV-existing	Baseline	Default	SE	2019	0.07411207
// PV-existing	Baseline	Default	SP	2019	274.589.681
// PV-existing	Baseline	Default	TO	2019	0.22559705
// PV-existing	Intensive elec.	+LC	AC	2019	0.03997
// PV-existing	Intensive elec.	+LC	AL	2019	0.09122726
// PV-existing	Intensive elec.	+LC	AM	2019	0.07522965
// PV-existing	Intensive elec.	+LC	AP	2019	0.01845963
// PV-existing	Intensive elec.	+LC	BA	2019	142.180.153
// PV-existing	Intensive elec.	+LC	CE	2019	15.509.436
// PV-existing	Intensive elec.	+LC	ES	2019	0.31768544
// PV-existing	Intensive elec.	+LC	GO	2019	0.60196824
// PV-existing	Intensive elec.	+LC	MA	2019	0.28815421
// PV-existing	Intensive elec.	+LC	MG	2019	362.406.892
// PV-existing	Intensive elec.	+LC	MS	2019	0.34411733
// PV-existing	Intensive elec.	+LC	MT	2019	0.92017855
// PV-existing	Intensive elec.	+LC	PA	2019	0.3687481
// PV-existing	Intensive elec.	+LC	PB	2019	0.554699
// PV-existing	Intensive elec.	+LC	PE	2019	0.9301371
// PV-existing	Intensive elec.	+LC	PI	2019	25.907.057
// PV-existing	Intensive elec.	+LC	PR	2019	143.258.468
// PV-existing	Intensive elec.	+LC	RJ	2019	0.56021904
// PV-existing	Intensive elec.	+LC	RN	2019	0.5292012
// PV-existing	Intensive elec.	+LC	RO	2019	0.16413816
// PV-existing	Intensive elec.	+LC	RR	2019	0.01268231
// PV-existing	Intensive elec.	+LC	RS	2019	141.541.251
// PV-existing	Intensive elec.	+LC	SC	2019	0.777094
// PV-existing	Intensive elec.	+LC	SE	2019	0.07411207
// PV-existing	Intensive elec.	+LC	SP	2019	274.589.681
// PV-existing	Intensive elec.	+LC	TO	2019	0.22559705
// PV-existing	Intensive elec.	Default	AC	2019	0.03997
// PV-existing	Intensive elec.	Default	AL	2019	0.09122726
// PV-existing	Intensive elec.	Default	AM	2019	0.07522965
// PV-existing	Intensive elec.	Default	AP	2019	0.01845963
// PV-existing	Intensive elec.	Default	BA	2019	142.180.153
// PV-existing	Intensive elec.	Default	CE	2019	15.509.436
// PV-existing	Intensive elec.	Default	ES	2019	0.31768544
// PV-existing	Intensive elec.	Default	GO	2019	0.60196824
// PV-existing	Intensive elec.	Default	MA	2019	0.28815421
// PV-existing	Intensive elec.	Default	MG	2019	362.406.892
// PV-existing	Intensive elec.	Default	MS	2019	0.34411733
// PV-existing	Intensive elec.	Default	MT	2019	0.92017855
// PV-existing	Intensive elec.	Default	PA	2019	0.3687481
// PV-existing	Intensive elec.	Default	PB	2019	0.554699
// PV-existing	Intensive elec.	Default	PE	2019	0.9301371
// PV-existing	Intensive elec.	Default	PI	2019	25.907.057
// PV-existing	Intensive elec.	Default	PR	2019	143.258.468
// PV-existing	Intensive elec.	Default	RJ	2019	0.56021904
// PV-existing	Intensive elec.	Default	RN	2019	0.5292012
// PV-existing	Intensive elec.	Default	RO	2019	0.16413816
// PV-existing	Intensive elec.	Default	RR	2019	0.01268231
// PV-existing	Intensive elec.	Default	RS	2019	141.541.251
// PV-existing	Intensive elec.	Default	SC	2019	0.777094
// PV-existing	Intensive elec.	Default	SE	2019	0.07411207
// PV-existing	Intensive elec.	Default	SP	2019	274.589.681
// PV-existing	Intensive elec.	Default	TO	2019	0.22559705
// PV-existing	Limited elec.	+LC	AC	2019	0.03997
// PV-existing	Limited elec.	+LC	AL	2019	0.09122726
// PV-existing	Limited elec.	+LC	AM	2019	0.07522965
// PV-existing	Limited elec.	+LC	AP	2019	0.01845963
// PV-existing	Limited elec.	+LC	BA	2019	142.180.153
// PV-existing	Limited elec.	+LC	CE	2019	15.509.436
// PV-existing	Limited elec.	+LC	ES	2019	0.31768544
// PV-existing	Limited elec.	+LC	GO	2019	0.60196824
// PV-existing	Limited elec.	+LC	MA	2019	0.28815421
// PV-existing	Limited elec.	+LC	MG	2019	362.406.892
// PV-existing	Limited elec.	+LC	MS	2019	0.34411733
// PV-existing	Limited elec.	+LC	MT	2019	0.92017855
// PV-existing	Limited elec.	+LC	PA	2019	0.3687481
// PV-existing	Limited elec.	+LC	PB	2019	0.554699
// PV-existing	Limited elec.	+LC	PE	2019	0.9301371
// PV-existing	Limited elec.	+LC	PI	2019	25.907.057
// PV-existing	Limited elec.	+LC	PR	2019	143.258.468
// PV-existing	Limited elec.	+LC	RJ	2019	0.56021904
// PV-existing	Limited elec.	+LC	RN	2019	0.5292012
// PV-existing	Limited elec.	+LC	RO	2019	0.16413816
// PV-existing	Limited elec.	+LC	RR	2019	0.01268231
// PV-existing	Limited elec.	+LC	RS	2019	141.541.251
// PV-existing	Limited elec.	+LC	SC	2019	0.777094
// PV-existing	Limited elec.	+LC	SE	2019	0.07411207
// PV-existing	Limited elec.	+LC	SP	2019	274.589.681
// PV-existing	Limited elec.	+LC	TO	2019	0.22559705
// PV-existing	Limited elec.	100% RE	AC	2019	0.03997
// PV-existing	Limited elec.	100% RE	AL	2019	0.09122726
// PV-existing	Limited elec.	100% RE	AM	2019	0.07522965
// PV-existing	Limited elec.	100% RE	AP	2019	0.01845963
// PV-existing	Limited elec.	100% RE	BA	2019	142.180.153
// PV-existing	Limited elec.	100% RE	CE	2019	15.509.436
// PV-existing	Limited elec.	100% RE	ES	2019	0.31768544
// PV-existing	Limited elec.	100% RE	GO	2019	0.60196824
// PV-existing	Limited elec.	100% RE	MA	2019	0.28815421
// PV-existing	Limited elec.	100% RE	MG	2019	362.406.892
// PV-existing	Limited elec.	100% RE	MS	2019	0.34411733
// PV-existing	Limited elec.	100% RE	MT	2019	0.92017855
// PV-existing	Limited elec.	100% RE	PA	2019	0.3687481
// PV-existing	Limited elec.	100% RE	PB	2019	0.554699
// PV-existing	Limited elec.	100% RE	PE	2019	0.9301371
// PV-existing	Limited elec.	100% RE	PI	2019	25.907.057
// PV-existing	Limited elec.	100% RE	PR	2019	143.258.468
// PV-existing	Limited elec.	100% RE	RJ	2019	0.56021904
// PV-existing	Limited elec.	100% RE	RN	2019	0.5292012
// PV-existing	Limited elec.	100% RE	RO	2019	0.16413816
// PV-existing	Limited elec.	100% RE	RR	2019	0.01268231
// PV-existing	Limited elec.	100% RE	RS	2019	141.541.251
// PV-existing	Limited elec.	100% RE	SC	2019	0.777094
// PV-existing	Limited elec.	100% RE	SE	2019	0.07411207
// PV-existing	Limited elec.	100% RE	SP	2019	274.589.681
// PV-existing	Limited elec.	100% RE	TO	2019	0.22559705
// PV-existing	Limited elec.	Default	AC	2019	0.03997
// PV-existing	Limited elec.	Default	AL	2019	0.09122726
// PV-existing	Limited elec.	Default	AM	2019	0.07522965
// PV-existing	Limited elec.	Default	AP	2019	0.01845963
// PV-existing	Limited elec.	Default	BA	2019	142.180.153
// PV-existing	Limited elec.	Default	CE	2019	15.509.436
// PV-existing	Limited elec.	Default	ES	2019	0.31768544
// PV-existing	Limited elec.	Default	GO	2019	0.60196824
// PV-existing	Limited elec.	Default	MA	2019	0.28815421
// PV-existing	Limited elec.	Default	MG	2019	362.406.892
// PV-existing	Limited elec.	Default	MS	2019	0.34411733
// PV-existing	Limited elec.	Default	MT	2019	0.92017855
// PV-existing	Limited elec.	Default	PA	2019	0.3687481
// PV-existing	Limited elec.	Default	PB	2019	0.554699
// PV-existing	Limited elec.	Default	PE	2019	0.9301371
// PV-existing	Limited elec.	Default	PI	2019	25.907.057
// PV-existing	Limited elec.	Default	PR	2019	143.258.468
// PV-existing	Limited elec.	Default	RJ	2019	0.56021904
// PV-existing	Limited elec.	Default	RN	2019	0.5292012
// PV-existing	Limited elec.	Default	RO	2019	0.16413816
// PV-existing	Limited elec.	Default	RR	2019	0.01268231
// PV-existing	Limited elec.	Default	RS	2019	141.541.251
// PV-existing	Limited elec.	Default	SC	2019	0.777094
// PV-existing	Limited elec.	Default	SE	2019	0.07411207
// PV-existing	Limited elec.	Default	SP	2019	274.589.681
// PV-existing	Limited elec.	Default	TO	2019	0.22559705
// PV-existing	Net zero	100% RE	AC	2019	0.03997
// PV-existing	Net zero	100% RE	AL	2019	0.09122726
// PV-existing	Net zero	100% RE	AM	2019	0.07522965
// PV-existing	Net zero	100% RE	AP	2019	0.01845963
// PV-existing	Net zero	100% RE	BA	2019	142.180.153
// PV-existing	Net zero	100% RE	CE	2019	15.509.436
// PV-existing	Net zero	100% RE	ES	2019	0.31768544
// PV-existing	Net zero	100% RE	GO	2019	0.60196824
// PV-existing	Net zero	100% RE	MA	2019	0.28815421
// PV-existing	Net zero	100% RE	MG	2019	362.406.892
// PV-existing	Net zero	100% RE	MS	2019	0.34411733
// PV-existing	Net zero	100% RE	MT	2019	0.92017855
// PV-existing	Net zero	100% RE	PA	2019	0.3687481
// PV-existing	Net zero	100% RE	PB	2019	0.554699
// PV-existing	Net zero	100% RE	PE	2019	0.9301371
// PV-existing	Net zero	100% RE	PI	2019	25.907.057
// PV-existing	Net zero	100% RE	PR	2019	143.258.468
// PV-existing	Net zero	100% RE	RJ	2019	0.56021904
// PV-existing	Net zero	100% RE	RN	2019	0.5292012
// PV-existing	Net zero	100% RE	RO	2019	0.16413816
// PV-existing	Net zero	100% RE	RR	2019	0.01268231
// PV-existing	Net zero	100% RE	RS	2019	141.541.251
// PV-existing	Net zero	100% RE	SC	2019	0.777094
// PV-existing	Net zero	100% RE	SE	2019	0.07411207
// PV-existing	Net zero	100% RE	SP	2019	274.589.681
// PV-existing	Net zero	100% RE	TO	2019	0.22559705
// PV-existing	Net zero	100% RE+LC	AC	2019	0.03997
// PV-existing	Net zero	100% RE+LC	AL	2019	0.09122726
// PV-existing	Net zero	100% RE+LC	AM	2019	0.07522965
// PV-existing	Net zero	100% RE+LC	AP	2019	0.01845963
// PV-existing	Net zero	100% RE+LC	BA	2019	142.180.153
// PV-existing	Net zero	100% RE+LC	CE	2019	15.509.436
// PV-existing	Net zero	100% RE+LC	ES	2019	0.31768544
// PV-existing	Net zero	100% RE+LC	GO	2019	0.60196824
// PV-existing	Net zero	100% RE+LC	MA	2019	0.28815421
// PV-existing	Net zero	100% RE+LC	MG	2019	362.406.892
// PV-existing	Net zero	100% RE+LC	MS	2019	0.34411733
// PV-existing	Net zero	100% RE+LC	MT	2019	0.92017855
// PV-existing	Net zero	100% RE+LC	PA	2019	0.3687481
// PV-existing	Net zero	100% RE+LC	PB	2019	0.554699
// PV-existing	Net zero	100% RE+LC	PE	2019	0.9301371
// PV-existing	Net zero	100% RE+LC	PI	2019	25.907.057
// PV-existing	Net zero	100% RE+LC	PR	2019	143.258.468
// PV-existing	Net zero	100% RE+LC	RJ	2019	0.56021904
// PV-existing	Net zero	100% RE+LC	RN	2019	0.5292012
// PV-existing	Net zero	100% RE+LC	RO	2019	0.16413816
// PV-existing	Net zero	100% RE+LC	RR	2019	0.01268231
// PV-existing	Net zero	100% RE+LC	RS	2019	141.541.251
// PV-existing	Net zero	100% RE+LC	SC	2019	0.777094
// PV-existing	Net zero	100% RE+LC	SE	2019	0.07411207
// PV-existing	Net zero	100% RE+LC	SP	2019	274.589.681
// PV-existing	Net zero	100% RE+LC	TO	2019	0.22559705
// PV-existing	Net zero	Default	AC	2019	0.03997
// PV-existing	Net zero	Default	AL	2019	0.09122726
// PV-existing	Net zero	Default	AM	2019	0.07522965
// PV-existing	Net zero	Default	AP	2019	0.01845963
// PV-existing	Net zero	Default	BA	2019	142.180.153
// PV-existing	Net zero	Default	CE	2019	15.509.436
// PV-existing	Net zero	Default	ES	2019	0.31768544
// PV-existing	Net zero	Default	GO	2019	0.60196824
// PV-existing	Net zero	Default	MA	2019	0.28815421
// PV-existing	Net zero	Default	MG	2019	362.406.892
// PV-existing	Net zero	Default	MS	2019	0.34411733
// PV-existing	Net zero	Default	MT	2019	0.92017855
// PV-existing	Net zero	Default	PA	2019	0.3687481
// PV-existing	Net zero	Default	PB	2019	0.554699
// PV-existing	Net zero	Default	PE	2019	0.9301371
// PV-existing	Net zero	Default	PI	2019	25.907.057
// PV-existing	Net zero	Default	PR	2019	143.258.468
// PV-existing	Net zero	Default	RJ	2019	0.56021904
// PV-existing	Net zero	Default	RN	2019	0.5292012
// PV-existing	Net zero	Default	RO	2019	0.16413816
// PV-existing	Net zero	Default	RR	2019	0.01268231
// PV-existing	Net zero	Default	RS	2019	141.541.251
// PV-existing	Net zero	Default	SC	2019	0.777094
// PV-existing	Net zero	Default	SE	2019	0.07411207
// PV-existing	Net zero	Default	SP	2019	274.589.681
// PV-existing	Net zero	Default	TO	2019	0.22559705
// Reservoir	Baseline	100% RE+LC	BA	2019	3.114.557
// Reservoir	Baseline	100% RE+LC	GO	2019	695.253.506.034.367
// Reservoir	Baseline	100% RE+LC	MG	2019	525.626.989.415.565
// Reservoir	Baseline	100% RE+LC	MT	2019	0.98468
// Reservoir	Baseline	100% RE+LC	PI	2019	0.2373
// Reservoir	Baseline	100% RE+LC	PR	2019	7.920.168
// Reservoir	Baseline	100% RE+LC	RS	2019	36.659
// Reservoir	Baseline	100% RE+LC	SP	2019	2.731.216
// Reservoir	Baseline	100% RE+LC	TO	2019	1.030.875
// Reservoir	Baseline	Default	BA	2019	3.114.557
// Reservoir	Baseline	Default	GO	2019	695.253.506.034.367
// Reservoir	Baseline	Default	MG	2019	525.626.989.415.565
// Reservoir	Baseline	Default	MT	2019	0.98468
// Reservoir	Baseline	Default	PI	2019	0.2373
// Reservoir	Baseline	Default	PR	2019	7.920.168
// Reservoir	Baseline	Default	RS	2019	36.659
// Reservoir	Baseline	Default	SP	2019	2.731.216
// Reservoir	Baseline	Default	TO	2019	1.030.875
// Reservoir	Intensive elec.	+LC	BA	2019	3.114.557
// Reservoir	Intensive elec.	+LC	GO	2019	695.253.506.034.367
// Reservoir	Intensive elec.	+LC	MG	2019	525.626.989.415.565
// Reservoir	Intensive elec.	+LC	MT	2019	0.98468
// Reservoir	Intensive elec.	+LC	PI	2019	0.2373
// Reservoir	Intensive elec.	+LC	PR	2019	7.920.168
// Reservoir	Intensive elec.	+LC	RS	2019	36.659
// Reservoir	Intensive elec.	+LC	SP	2019	2.731.216
// Reservoir	Intensive elec.	+LC	TO	2019	1.030.875
// Reservoir	Intensive elec.	Default	BA	2019	3.114.557
// Reservoir	Intensive elec.	Default	GO	2019	695.253.506.034.367
// Reservoir	Intensive elec.	Default	MG	2019	525.626.989.415.565
// Reservoir	Intensive elec.	Default	MT	2019	0.98468
// Reservoir	Intensive elec.	Default	PI	2019	0.2373
// Reservoir	Intensive elec.	Default	PR	2019	7.920.168
// Reservoir	Intensive elec.	Default	RS	2019	36.659
// Reservoir	Intensive elec.	Default	SP	2019	2.731.216
// Reservoir	Intensive elec.	Default	TO	2019	1.030.875
// Reservoir	Limited elec.	+LC	BA	2019	3.114.557
// Reservoir	Limited elec.	+LC	GO	2019	695.253.506.034.367
// Reservoir	Limited elec.	+LC	MG	2019	525.626.989.415.565
// Reservoir	Limited elec.	+LC	MT	2019	0.98468
// Reservoir	Limited elec.	+LC	PI	2019	0.2373
// Reservoir	Limited elec.	+LC	PR	2019	7.920.168
// Reservoir	Limited elec.	+LC	RS	2019	36.659
// Reservoir	Limited elec.	+LC	SP	2019	2.731.216
// Reservoir	Limited elec.	+LC	TO	2019	1.030.875
// Reservoir	Limited elec.	100% RE	BA	2019	3.114.557
// Reservoir	Limited elec.	100% RE	GO	2019	695.253.506.034.367
// Reservoir	Limited elec.	100% RE	MG	2019	525.626.989.415.565
// Reservoir	Limited elec.	100% RE	MT	2019	0.98468
// Reservoir	Limited elec.	100% RE	PI	2019	0.2373
// Reservoir	Limited elec.	100% RE	PR	2019	7.920.168
// Reservoir	Limited elec.	100% RE	RS	2019	36.659
// Reservoir	Limited elec.	100% RE	SP	2019	2.731.216
// Reservoir	Limited elec.	100% RE	TO	2019	1.030.875
// Reservoir	Limited elec.	Default	BA	2019	3.114.557
// Reservoir	Limited elec.	Default	GO	2019	695.253.506.034.367
// Reservoir	Limited elec.	Default	MG	2019	525.626.989.415.565
// Reservoir	Limited elec.	Default	MT	2019	0.98468
// Reservoir	Limited elec.	Default	PI	2019	0.2373
// Reservoir	Limited elec.	Default	PR	2019	7.920.168
// Reservoir	Limited elec.	Default	RS	2019	36.659
// Reservoir	Limited elec.	Default	SP	2019	2.731.216
// Reservoir	Limited elec.	Default	TO	2019	1.030.875
// Reservoir	Net zero	100% RE	BA	2019	3.114.557
// Reservoir	Net zero	100% RE	GO	2019	695.253.506.034.367
// Reservoir	Net zero	100% RE	MG	2019	525.626.989.415.565
// Reservoir	Net zero	100% RE	MT	2019	0.98468
// Reservoir	Net zero	100% RE	PI	2019	0.2373
// Reservoir	Net zero	100% RE	PR	2019	7.920.168
// Reservoir	Net zero	100% RE	RS	2019	36.659
// Reservoir	Net zero	100% RE	SP	2019	2.731.216
// Reservoir	Net zero	100% RE	TO	2019	1.030.875
// Reservoir	Net zero	100% RE+LC	BA	2019	3.114.557
// Reservoir	Net zero	100% RE+LC	GO	2019	695.253.506.034.367
// Reservoir	Net zero	100% RE+LC	MG	2019	525.626.989.415.565
// Reservoir	Net zero	100% RE+LC	MT	2019	0.98468
// Reservoir	Net zero	100% RE+LC	PI	2019	0.2373
// Reservoir	Net zero	100% RE+LC	PR	2019	7.920.168
// Reservoir	Net zero	100% RE+LC	RS	2019	36.659
// Reservoir	Net zero	100% RE+LC	SP	2019	2.731.216
// Reservoir	Net zero	100% RE+LC	TO	2019	1.030.875
// Reservoir	Net zero	Default	BA	2019	3.114.557
// Reservoir	Net zero	Default	GO	2019	695.253.506.034.367
// Reservoir	Net zero	Default	MG	2019	525.626.989.415.565
// Reservoir	Net zero	Default	MT	2019	0.98468
// Reservoir	Net zero	Default	PI	2019	0.2373
// Reservoir	Net zero	Default	PR	2019	7.920.168
// Reservoir	Net zero	Default	RS	2019	36.659
// Reservoir	Net zero	Default	SP	2019	2.731.216
// Reservoir	Net zero	Default	TO	2019	1.030.875
// Run-of-river	Baseline	100% RE+LC	BA	2019	5.204.458
// Run-of-river	Baseline	100% RE+LC	GO	2019	1.059.562
// Run-of-river	Baseline	100% RE+LC	MG	2019	47.386.012
// Run-of-river	Baseline	100% RE+LC	MT	2019	2.041.134
// Run-of-river	Baseline	100% RE+LC	PR	2019	12.288.138
// Run-of-river	Baseline	100% RE+LC	RS	2019	3.673
// Run-of-river	Baseline	100% RE+LC	SP	2019	24.723.245
// Run-of-river	Baseline	100% RE+LC	TO	2019	2.213.436
// Run-of-river	Baseline	Default	BA	2019	5.285.164
// Run-of-river	Baseline	Default	GO	2019	1.067.173
// Run-of-river	Baseline	Default	MG	2019	4.819.856
// Run-of-river	Baseline	Default	MT	2019	207.183
// Run-of-river	Baseline	Default	PR	2019	12.461.004
// Run-of-river	Baseline	Default	RS	2019	3.673
// Run-of-river	Baseline	Default	SP	2019	2.521.194
// Run-of-river	Baseline	Default	TO	2019	2.289.011
// Run-of-river	Intensive elec.	+LC	BA	2019	5.347.275
// Run-of-river	Intensive elec.	+LC	GO	2019	1.115.256
// Run-of-river	Intensive elec.	+LC	MG	2019	48.796.624
// Run-of-river	Intensive elec.	+LC	MT	2019	2.090.555
// Run-of-river	Intensive elec.	+LC	PR	2019	12.637.524
// Run-of-river	Intensive elec.	+LC	RS	2019	3.673
// Run-of-river	Intensive elec.	+LC	SP	2019	2.572.707
// Run-of-river	Intensive elec.	+LC	TO	2019	2.453.529
// Run-of-river	Intensive elec.	Default	BA	2019	5.347.275
// Run-of-river	Intensive elec.	Default	GO	2019	1.115.256
// Run-of-river	Intensive elec.	Default	MG	2019	48.578.998
// Run-of-river	Intensive elec.	Default	MT	2019	2.090.555
// Run-of-river	Intensive elec.	Default	PR	2019	12.637.524
// Run-of-river	Intensive elec.	Default	RS	2019	3.673
// Run-of-river	Intensive elec.	Default	SP	2019	2.572.707
// Run-of-river	Intensive elec.	Default	TO	2019	2.453.529
// Run-of-river	Limited elec.	+LC	BA	2019	5.347.275
// Run-of-river	Limited elec.	+LC	GO	2019	1.115.256
// Run-of-river	Limited elec.	+LC	MG	2019	48.578.998
// Run-of-river	Limited elec.	+LC	MT	2019	2.090.555
// Run-of-river	Limited elec.	+LC	PR	2019	12.637.524
// Run-of-river	Limited elec.	+LC	RS	2019	3.673
// Run-of-river	Limited elec.	+LC	SP	2019	2.571.715
// Run-of-river	Limited elec.	+LC	TO	2019	2.453.529
// Run-of-river	Limited elec.	100% RE	BA	2019	4.437.477
// Run-of-river	Limited elec.	100% RE	GO	2019	1.021.083
// Run-of-river	Limited elec.	100% RE	MG	2019	47.910.332
// Run-of-river	Limited elec.	100% RE	MT	2019	2.090.555
// Run-of-river	Limited elec.	100% RE	PR	2019	12.376.218
// Run-of-river	Limited elec.	100% RE	RS	2019	3.525.805
// Run-of-river	Limited elec.	100% RE	SP	2019	2.529.972
// Run-of-river	Limited elec.	100% RE	TO	2019	2.289.011
// Run-of-river	Limited elec.	Default	BA	2019	5.347.275
// Run-of-river	Limited elec.	Default	GO	2019	1.115.256
// Run-of-river	Limited elec.	Default	MG	2019	48.578.998
// Run-of-river	Limited elec.	Default	MT	2019	2.090.555
// Run-of-river	Limited elec.	Default	PR	2019	12.637.524
// Run-of-river	Limited elec.	Default	RS	2019	3.673
// Run-of-river	Limited elec.	Default	SP	2019	2.571.715
// Run-of-river	Limited elec.	Default	TO	2019	2.453.529
// Run-of-river	Net zero	100% RE	BA	2019	5.579.514
// Run-of-river	Net zero	100% RE	GO	2019	115.785
// Run-of-river	Net zero	100% RE	MG	2019	47.328.543
// Run-of-river	Net zero	100% RE	MT	2019	2.090.555
// Run-of-river	Net zero	100% RE	PR	2019	12.376.218
// Run-of-river	Net zero	100% RE	RS	2019	32.367.834
// Run-of-river	Net zero	100% RE	SP	2019	2.521.194
// Run-of-river	Net zero	100% RE	TO	2019	2.289.011
// Run-of-river	Net zero	100% RE+LC	BA	2019	5.579.514
// Run-of-river	Net zero	100% RE+LC	GO	2019	115.785
// Run-of-river	Net zero	100% RE+LC	MG	2019	47.328.543
// Run-of-river	Net zero	100% RE+LC	MT	2019	2.090.555
// Run-of-river	Net zero	100% RE+LC	PR	2019	12.376.218
// Run-of-river	Net zero	100% RE+LC	RS	2019	32.367.834
// Run-of-river	Net zero	100% RE+LC	SP	2019	24.959.268
// Run-of-river	Net zero	100% RE+LC	TO	2019	2.289.011
// Run-of-river	Net zero	Default	BA	2019	5.347.275
// Run-of-river	Net zero	Default	GO	2019	1.134.247
// Run-of-river	Net zero	Default	MG	2019	48.796.624
// Run-of-river	Net zero	Default	MT	2019	2.090.555
// Run-of-river	Net zero	Default	PR	2019	12.747.169
// Run-of-river	Net zero	Default	RS	2019	3.673
// Run-of-river	Net zero	Default	SP	2019	2.572.707
// Run-of-river	Net zero	Default	TO	2019	2.508.899
// Utility-scale PV	Baseline	100% RE+LC	AL	2019	170.903.316.924.266
// Utility-scale PV	Baseline	100% RE+LC	BA	2019	225.232.022.264.838
// Utility-scale PV	Baseline	100% RE+LC	MG	2019	893.899.903.837.867
// Utility-scale PV	Baseline	100% RE+LC	MS	2019	14.705.612.421.742
// Utility-scale PV	Baseline	100% RE+LC	PE	2019	104.526.046.526.025
// Utility-scale PV	Baseline	100% RE+LC	PI	2019	58.311.956.633.459
// Utility-scale PV	Baseline	100% RE+LC	RJ	2019	136.936.692.591.195
// Utility-scale PV	Baseline	100% RE+LC	RS	2019	175.860.869.111.035
// Utility-scale PV	Baseline	100% RE+LC	SP	2019	0.246849868008061
// Utility-scale PV	Baseline	Default	AL	2019	210.869.704.922.893
// Utility-scale PV	Baseline	Default	BA	2019	263.781.596.627.316
// Utility-scale PV	Baseline	Default	GO	2019	537.753.412.314.313
// Utility-scale PV	Baseline	Default	MG	2019	115.376.729.998.126
// Utility-scale PV	Baseline	Default	MS	2019	161.122.602.018.567
// Utility-scale PV	Baseline	Default	PI	2019	100.689.546.219.191
// Utility-scale PV	Baseline	Default	RJ	2019	423.105.414.939.179
// Utility-scale PV	Baseline	Default	RS	2019	134.931.792.828.573
// Utility-scale PV	Intensive elec.	+LC	AL	2019	397.879.473.134.802
// Utility-scale PV	Intensive elec.	+LC	BA	2019	562.482.654.512.147
// Utility-scale PV	Intensive elec.	+LC	GO	2019	127.129.206.904.315
// Utility-scale PV	Intensive elec.	+LC	MG	2019	279.730.495.566.531
// Utility-scale PV	Intensive elec.	+LC	MS	2019	182.102.803.977.323
// Utility-scale PV	Intensive elec.	+LC	PE	2019	142.653.541.743.174
// Utility-scale PV	Intensive elec.	+LC	PI	2019	185.568.794.407.594
// Utility-scale PV	Intensive elec.	+LC	RJ	2019	152.434.458.251.848
// Utility-scale PV	Intensive elec.	+LC	RS	2019	274.307.039.069.957
// Utility-scale PV	Intensive elec.	+LC	SP	2019	23.825.905.205.922
// Utility-scale PV	Intensive elec.	Default	AL	2019	393.661.778.111.846
// Utility-scale PV	Intensive elec.	Default	BA	2019	605.653.687.385.317
// Utility-scale PV	Intensive elec.	Default	GO	2019	136.282.716.040.377
// Utility-scale PV	Intensive elec.	Default	MG	2019	265.723.309.762.793
// Utility-scale PV	Intensive elec.	Default	MS	2019	183.457.326.245.577
// Utility-scale PV	Intensive elec.	Default	PE	2019	0.73557001466136
// Utility-scale PV	Intensive elec.	Default	PI	2019	185.568.794.407.594
// Utility-scale PV	Intensive elec.	Default	RJ	2019	121.411.153.712.409
// Utility-scale PV	Intensive elec.	Default	RS	2019	265.513.404.092.781
// Utility-scale PV	Intensive elec.	Default	SP	2019	253.424.531.163.335
// Utility-scale PV	Limited elec.	+LC	AL	2019	418.420.136.060.732
// Utility-scale PV	Limited elec.	+LC	BA	2019	422.200.065.383.243
// Utility-scale PV	Limited elec.	+LC	GO	2019	12.509.634.520.284
// Utility-scale PV	Limited elec.	+LC	MG	2019	235.194.647.579.709
// Utility-scale PV	Limited elec.	+LC	MS	2019	162.510.458.808.598
// Utility-scale PV	Limited elec.	+LC	PI	2019	15.712.111.151.586
// Utility-scale PV	Limited elec.	+LC	RJ	2019	163.107.462.714.862
// Utility-scale PV	Limited elec.	+LC	RS	2019	252.264.247.435.585
// Utility-scale PV	Limited elec.	+LC	SP	2019	161.055.911.758.871
// Utility-scale PV	Limited elec.	100% RE	BA	2019	800.305.477.838.693
// Utility-scale PV	Limited elec.	100% RE	GO	2019	706.614.870.743.649
// Utility-scale PV	Limited elec.	100% RE	MG	2019	272.343.295.699.124
// Utility-scale PV	Limited elec.	100% RE	RS	2019	387.809.513.090.637
// Utility-scale PV	Limited elec.	Default	AL	2019	418.420.136.060.749
// Utility-scale PV	Limited elec.	Default	BA	2019	422.200.065.383.243
// Utility-scale PV	Limited elec.	Default	GO	2019	125.096.345.202.837
// Utility-scale PV	Limited elec.	Default	MG	2019	235.194.647.579.711
// Utility-scale PV	Limited elec.	Default	MS	2019	162.510.458.808.597
// Utility-scale PV	Limited elec.	Default	PI	2019	157.121.111.515.862
// Utility-scale PV	Limited elec.	Default	RJ	2019	16.310.746.271.486
// Utility-scale PV	Limited elec.	Default	RS	2019	252.264.247.435.585
// Utility-scale PV	Limited elec.	Default	SP	2019	161.055.911.758.871
// Utility-scale PV	Net zero	100% RE	BA	2019	12.709.081.430.944
// Utility-scale PV	Net zero	100% RE	GO	2019	175.465.303.924.172
// Utility-scale PV	Net zero	100% RE	MG	2019	356.837.698.183.456
// Utility-scale PV	Net zero	100% RE	MS	2019	283.415.282.243.398
// Utility-scale PV	Net zero	100% RE	PB	2019	717.936.447.039.505
// Utility-scale PV	Net zero	100% RE	PE	2019	203.201.077.496.056
// Utility-scale PV	Net zero	100% RE	PI	2019	634.230.119.432.548
// Utility-scale PV	Net zero	100% RE	RS	2019	59.371.055.172.348
// Utility-scale PV	Net zero	100% RE	SP	2019	292.625.870.973.613
// Utility-scale PV	Net zero	100% RE+LC	BA	2019	12.089.788.447.268
// Utility-scale PV	Net zero	100% RE+LC	GO	2019	153.895.642.848.213
// Utility-scale PV	Net zero	100% RE+LC	MG	2019	507.833.081.346.819
// Utility-scale PV	Net zero	100% RE+LC	MS	2019	284.385.448.613.614
// Utility-scale PV	Net zero	100% RE+LC	PB	2019	677.930.457.026.609
// Utility-scale PV	Net zero	100% RE+LC	PE	2019	18.241.455.637.877
// Utility-scale PV	Net zero	100% RE+LC	PI	2019	584.858.818.277.524
// Utility-scale PV	Net zero	100% RE+LC	RS	2019	514.309.411.959.037
// Utility-scale PV	Net zero	100% RE+LC	SP	2019	341.035.050.239.744
// Utility-scale PV	Net zero	Default	AL	2019	432.773.330.723.411
// Utility-scale PV	Net zero	Default	BA	2019	898.055.835.804.209
// Utility-scale PV	Net zero	Default	GO	2019	229.341.665.122.926
// Utility-scale PV	Net zero	Default	MG	2019	37.912.212.825.218
// Utility-scale PV	Net zero	Default	MS	2019	203.637.503.865.186
// Utility-scale PV	Net zero	Default	PE	2019	100.540.608.106.764
// Utility-scale PV	Net zero	Default	PI	2019	239.261.390.059.655
// Utility-scale PV	Net zero	Default	RJ	2019	101.224.147.836.307
// Utility-scale PV	Net zero	Default	RS	2019	388.104.251.495.727
// Utility-scale PV	Net zero	Default	SP	2019	409.210.662.091.421

// ]
