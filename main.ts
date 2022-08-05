function TabanthaHit() {
    
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        pins.digitalWritePin(DigitalPin.P4, 0)
        if (!HitTabanthaFairy && Points >= FairyCost) {
            FairyCount += 1
        }
        
    }
    
}

function RudaniaHit() {
    
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        if (!FirstAll) {
            if (FirsthitRudania == false) {
                FirsthitRudania = true
                if (FirsthitMedoh && (FirsthitNaboris && FirsthitRuta)) {
                    Points += 5000 * Multiplier
                    FirstAll = true
                } else {
                    Points += 1000 * Multiplier
                }
                
            }
            
        } else if (HitRudania == false) {
            HitRudania = true
            if (HitMedoh && (HitNaboris && HitRuta)) {
                Points += 2500 * Multiplier
                HitMedoh = false
                HitNaboris = false
                HitRudania = false
                HitRuta = false
            } else {
                Points += 500 * Multiplier
            }
            
        }
        
    }
    
}

function AkkalaHitL() {
    
    if (Points >= 2000) {
        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            end = control.millis() + 10000
            Points += -2000
            basic.pause(200)
        }
        
    }
    
    if (control.millis() <= end) {
        AkkalaMultiplier = 2
    } else {
        AkkalaMultiplier = 1
    }
    
}

function AkkalaHitF() {
    
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        pins.digitalWritePin(DigitalPin.P6, 0)
        if (!HitAkkalaFairy && Points >= FairyCost) {
            FairyCount += 1
            Points += -1 * FairyCost
        }
        
        basic.pause(200)
    }
    
}

function HitMasterSword() {
    
    if (SwordHitCount < 4) {
        if (pins.digitalReadPin(DigitalPin.P10) == 1) {
            pins.digitalWritePin(DigitalPin.P10, 0)
            SwordCastleMultiplier = 2
            Points += (SwordHitCount * 300 + 900) * Multiplier
            SwordHitCount += 1
            basic.pause(200)
        }
        
    }
    
    pins.digitalWritePin(DigitalPin.P10, 0)
}

function MedohHit() {
    
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        if (!FirstAll) {
            if (FirsthitMedoh == false) {
                FirsthitMedoh = true
                if (FirsthitRudania && (FirsthitNaboris && FirsthitRuta)) {
                    Points += 5000 * Multiplier
                    FirstAll = true
                } else {
                    Points += 1000 * Multiplier
                }
                
            }
            
        } else if (HitMedoh == false) {
            HitMedoh = true
            if (HitRudania && (HitNaboris && HitRuta)) {
                Points += 2500 * Multiplier
                HitMedoh = false
                HitNaboris = false
                HitRudania = false
                HitRuta = false
            } else {
                Points += 500 * Multiplier
            }
            
        }
        
    }
    
}

function GerudoHit() {
    
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        pins.digitalWritePin(DigitalPin.P5, 0)
        if (!HitGerudoFairy && Points >= FairyCost) {
            FairyCount += 1
        }
        
    }
    
}

function NaborisHit() {
    
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        if (!FirstAll) {
            if (FirsthitNaboris == false) {
                FirsthitNaboris = true
                if (FirsthitRudania && (FirsthitMedoh && FirsthitRuta)) {
                    Points += 5000 * Multiplier
                    FirstAll = true
                } else {
                    Points += 1000 * Multiplier
                }
                
            }
            
        } else if (HitNaboris == false) {
            HitNaboris = true
            if (HitRudania && (HitMedoh && HitRuta)) {
                Points += 2500 * Multiplier
                HitMedoh = false
                HitNaboris = false
                HitRudania = false
                HitRuta = false
            } else {
                Points += 500 * Multiplier
            }
            
        }
        
    }
    
}

function Calculate_Multiplier() {
    
    FairyMultiplier = FairyCount / 4 + 1
    Multiplier = FairyMultiplier * (Hateno_Multiplier * AkkalaMultiplier)
}

function KakarikoHit() {
    
    if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        pins.digitalWritePin(DigitalPin.P7, 0)
        if (!HitKakarikoFairy && Points >= FairyCost) {
            FairyCount += 1
            Points += -1 * FairyCost
        }
        
    }
    
}

function HitCastle() {
    
    if (pins.analogReadPin(AnalogPin.P0) >= 30 && CastleTimer <= control.millis()) {
        CastleHitStrength = pins.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 100, 1000)
        Points += CastleHitStrength * (Multiplier + SwordCastleMultiplier)
        pins.analogWritePin(AnalogPin.P0, 0)
        CastleTimer = control.millis() + 3000
    }
    
}

function RutaHit() {
    
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        pins.digitalWritePin(DigitalPin.P3, 0)
        if (!FirstAll) {
            if (FirsthitRuta == false) {
                FirsthitRuta = true
                if (FirsthitRudania && (FirsthitNaboris && FirsthitMedoh)) {
                    Points += 5000 * Multiplier
                    FirstAll = true
                } else {
                    Points += 1000 * Multiplier
                }
                
            }
            
        } else if (HitRuta == false) {
            HitRuta = true
            if (HitRudania && (HitNaboris && HitMedoh)) {
                Points += 2500 * Multiplier
                HitMedoh = false
                HitNaboris = false
                HitRudania = false
                HitRuta = false
            } else {
                Points += 500 * Multiplier
            }
            
        }
        
    }
    
}

function HatenoHit() {
    
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        pins.digitalWritePin(DigitalPin.P9, 0)
        if (HatenoHitCount == 0) {
            Points += 500 * Multiplier
            HatenoHitCount += 1
        } else if (HatenoHitCount == 1 && Points >= 360) {
            Points += -360
            HatenoHitCount += 1
            Hateno_Multiplier = 1.1
        } else if (HatenoHitCount == 2 && Points >= 900) {
            Points += -900
            HatenoHitCount += 1
            Hateno_Multiplier = 1.2
        } else if (HatenoHitCount == 3 && Points >= 2400) {
            Points += -2400
            HatenoHitCount += 1
            Hateno_Multiplier = 1.3
        }
        
    }
    
}

function FindFairyCost() {
    
    if (FairyCount == 1) {
        FairyCost = 500
    } else if (FairyCount == 2) {
        FairyCost = 1000
    } else if (FairyCount == 3 || FairyCount == 4) {
        FairyCost = 10000
    } else {
        FairyCost = 100
    }
    
}

let CastleTimer = 0
let AkkalaMultiplier = 0
let SwordCastleMultiplier = 0
let SwordHitCount = 0
let HatenoHitCount = 0
let Hateno_Multiplier = 0
let CastleHitStrength = 0
let FairyCost = 0
let FairyMultiplier = 0
let FairyCount = 0
let FirstAll = false
let HitTabanthaFairy = false
let HitKakarikoFairy = false
let HitGerudoFairy = false
let HitAkkalaFairy = false
let FirsthitRuta = false
let HitRuta = false
let FirsthitRudania = false
let HitRudania = false
let FirsthitNaboris = false
let HitNaboris = false
let FirsthitMedoh = false
let HitMedoh = false
let end = 0
let Multiplier = 0
let Points = 0
let NewPoints2 = 0
let y2 = 0
let x2 = 0
end = 0
HitMedoh = false
FirsthitMedoh = false
HitNaboris = false
FirsthitNaboris = false
HitRudania = false
FirsthitRudania = false
HitRuta = false
FirsthitRuta = false
HitAkkalaFairy = false
HitGerudoFairy = false
let AkkalaTimer = 100
HitKakarikoFairy = false
HitTabanthaFairy = false
FirstAll = false
FairyCount = 0
FairyMultiplier = 1
FairyCost = 100
CastleHitStrength = 0
Hateno_Multiplier = 1
HatenoHitCount = 0
SwordHitCount = 0
SwordCastleMultiplier = 0
AkkalaMultiplier = 1
Points = 0
Multiplier = 0
CastleTimer = 0
basic.forever(function on_forever() {
    Calculate_Multiplier()
    HatenoHit()
    FindFairyCost()
    KakarikoHit()
    FindFairyCost()
    AkkalaHitF()
    FindFairyCost()
    GerudoHit()
    FindFairyCost()
    TabanthaHit()
    AkkalaHitL()
    Calculate_Multiplier()
    NaborisHit()
    RudaniaHit()
    MedohHit()
    RutaHit()
    HitMasterSword()
    HitCastle()
    console.log(Points)
    console.log("x" + ("" + Multiplier))
})
