/**
 * @param {string[]} names
 * @param {null, 'max','min'} [type=null];
 * @param {number} defaultValue
 * @returns {*}
 */
function tsValue(names,type, defaultValue, readall) {  // type = null, max, min
	var value;
	names.forEach(function(name){
		var s = '';
		var v;
		if (type) s = '_'+type;
		if ($prop('GameRawData.'+name+s)) {
		  v = $prop('GameRawData.'+name+s);
		  if (readall) {
			  if ((value==null) || (v>value)) value =v
		  } else {
			  value =v;
			  return false;
		  }
		}
	})
	return value;
}

function Railworks()  {
	return {
		test: function() {
			return '1234'
		},
		loconame: function(){
			//todo
			return 'Navn på logomotives'
		},
		rpm: function() {
			let result = 0;
			if (true) return 0
		},
		amps: function(type) {
			const amps_names = ['Ammeter','Amperes','Amps'];
			return tsValue(amps_names,type,0);
		},
		trainBrakePsi: function(type) {
			const names = [
				'aTrainBrakeCylinderPressurePSI',
				'aTrainBrakeCylinderPressure',
				'TrainBrakeCylinderPressurePSI',
				'TrainBrakeCylinderPressure',
				'TrainBrakeCylinderPressure',
				'AirBrakePipePressureBAR',
				'CabTPNeedle'];
			return tsValue(names,type, 0);
		},
		airBrake: function(type) {
			const names = [
				"AirBrakePipePressurePSI"
			]
			return tsValue(names,type, 0);
		},
		trainBrake: function(type) {
			const names = [
				'TrainBrakeHandle',
				'M8Brake',
				'VirtualBrake',
				'VirtualTrainBrakeControl',
				'TrainBrakeControl',
				'CabBrakeControl',
				'VTrainBrakeControl',
				'TrainBrakeK1',
				'TrainBrakeK2',
				'vTrainBrakeControl',
				'lvrTrainbrake',
				'Zaviralnik'
			]
			return tsValue(names,type,0);
		},
		locoBrake: function(type) {
			const names = [
				'TrainBrakeHandle',
				'EngineBrakeControl',
			]
			return tsValue(names,type,0);
		},
		dynamicBrake: function(type) {
			const names = [
				'DynamicBrake'
			]
			return tsValue(names,type,0);
		},
		locoBrakePsi: function(type) {
			const names = [
				'MyLocoBrakeCylinderPressurePSI',
				'aLocoBrakeCylinderPressurePSI',
				'LocoBrakeCylinderPressurePSI',
				'LocoBrakeCylinderPressure'
			]
			return tsValue(names,type,0);
		},
		throttle: function(type) {
			const names = [
				"PakaVykonu1Serie",
				"PakaVykonu2Serie",
				"RegulatorLever",
				"VirtualThrottle",
				"CabThrottle",
				"VRegulator",
				"vRegulator",
				"lvrThrottle",
				"ThrottleAndBrake",
				"VlekaZav_K1",
				"VlekaZav_K2",
				"LCM",
				"VlekaK1",
				"VlekaK2",
				"Regulator"
			];
			var n = tsValue(names,type,0);
			if (isNaN(n)) n =0;
			return n;
		},
		speed: function(type, readall) {
			const names = [
				"SpeedometerMPH",
				"SpeedometerKPH",
				"MySpeedometerKPH",
				"MySpeedometerMPH",
				"DisplaySpeedometer",
				"DisplaySpeedometer",
				"MySpeedometer",
				"Speedo"
			]
			var n = tsValue(names,type,0, readall);
			if (isNaN(n)) n =0;
			return n;
		}
	}
}
var ts = new Railworks()