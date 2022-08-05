def TabanthaHit():
    global FairyCount
    if pins.digital_read_pin(DigitalPin.P4) == 1:
        pins.digital_write_pin(DigitalPin.P4, 0)
        if not (HitTabanthaFairy) and Points >= FairyCost:
            FairyCount += 1
def RudaniaHit():
    global FirsthitRudania, Points, FirstAll, HitRudania, HitMedoh, HitNaboris, HitRuta
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        pins.digital_write_pin(DigitalPin.P2, 0)
        if not (FirstAll):
            if FirsthitRudania == False:
                FirsthitRudania = True
                if FirsthitMedoh and (FirsthitNaboris and FirsthitRuta):
                    Points += 5000 * Multiplier
                    FirstAll = True
                else:
                    Points += 1000 * Multiplier
        elif HitRudania == False:
            HitRudania = True
            if HitMedoh and (HitNaboris and HitRuta):
                Points += 2500 * Multiplier
                HitMedoh = False
                HitNaboris = False
                HitRudania = False
                HitRuta = False
            else:
                Points += 500 * Multiplier
def AkkalaHitL():
    global end, Points, AkkalaMultiplier
    if Points >= 2000:
        if pins.digital_read_pin(DigitalPin.P8) == 1:
            pins.digital_write_pin(DigitalPin.P8, 0)
            end = control.millis() + 10000
            Points += -2000
            basic.pause(200)
    if control.millis() <= end:
        AkkalaMultiplier = 2
    else:
        AkkalaMultiplier = 1
def AkkalaHitF():
    global FairyCount, Points
    if pins.digital_read_pin(DigitalPin.P6) == 1:
        pins.digital_write_pin(DigitalPin.P6, 0)
        if not (HitAkkalaFairy) and Points >= FairyCost:
            FairyCount += 1
            Points += -1 * FairyCost
        basic.pause(200)
def HitMasterSword():
    global SwordCastleMultiplier, Points, SwordHitCount
    if SwordHitCount < 4:
        if pins.digital_read_pin(DigitalPin.P10) == 1:
            pins.digital_write_pin(DigitalPin.P10, 0)
            SwordCastleMultiplier = 2
            Points += (SwordHitCount * 300 + 900) * Multiplier
            SwordHitCount += 1
            basic.pause(200)
    pins.digital_write_pin(DigitalPin.P10, 0)
def MedohHit():
    global FirsthitMedoh, Points, FirstAll, HitMedoh, HitNaboris, HitRudania, HitRuta
    if pins.digital_read_pin(DigitalPin.P11) == 1:
        pins.digital_write_pin(DigitalPin.P11, 0)
        if not (FirstAll):
            if FirsthitMedoh == False:
                FirsthitMedoh = True
                if FirsthitRudania and (FirsthitNaboris and FirsthitRuta):
                    Points += 5000 * Multiplier
                    FirstAll = True
                else:
                    Points += 1000 * Multiplier
        elif HitMedoh == False:
            HitMedoh = True
            if HitRudania and (HitNaboris and HitRuta):
                Points += 2500 * Multiplier
                HitMedoh = False
                HitNaboris = False
                HitRudania = False
                HitRuta = False
            else:
                Points += 500 * Multiplier
def GerudoHit():
    global FairyCount
    if pins.digital_read_pin(DigitalPin.P5) == 1:
        pins.digital_write_pin(DigitalPin.P5, 0)
        if not (HitGerudoFairy) and Points >= FairyCost:
            FairyCount += 1
def NaborisHit():
    global FirsthitNaboris, Points, FirstAll, HitNaboris, HitMedoh, HitRudania, HitRuta
    if pins.digital_read_pin(DigitalPin.P1) == 1:
        pins.digital_write_pin(DigitalPin.P1, 0)
        if not (FirstAll):
            if FirsthitNaboris == False:
                FirsthitNaboris = True
                if FirsthitRudania and (FirsthitMedoh and FirsthitRuta):
                    Points += 5000 * Multiplier
                    FirstAll = True
                else:
                    Points += 1000 * Multiplier
        elif HitNaboris == False:
            HitNaboris = True
            if HitRudania and (HitMedoh and HitRuta):
                Points += 2500 * Multiplier
                HitMedoh = False
                HitNaboris = False
                HitRudania = False
                HitRuta = False
            else:
                Points += 500 * Multiplier
def Calculate_Multiplier():
    global FairyMultiplier, Multiplier
    FairyMultiplier = FairyCount / 4 + 1
    Multiplier = FairyMultiplier * (Hateno_Multiplier * AkkalaMultiplier)
def KakarikoHit():
    global FairyCount, Points
    if pins.digital_read_pin(DigitalPin.P7) == 1:
        pins.digital_write_pin(DigitalPin.P7, 0)
        if not (HitKakarikoFairy) and Points >= FairyCost:
            FairyCount += 1
            Points += -1 * FairyCost
def HitCastle():
    global CastleHitStrength, Points, CastleTimer
    if pins.analog_read_pin(AnalogPin.P0) >= 30 and CastleTimer <= control.millis():
        CastleHitStrength = pins.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 100, 1000)
        Points += CastleHitStrength * (Multiplier + SwordCastleMultiplier)
        pins.analog_write_pin(AnalogPin.P0, 0)
        CastleTimer = control.millis() + 3000
def RutaHit():
    global FirsthitRuta, Points, FirstAll, HitRuta, HitMedoh, HitNaboris, HitRudania
    if pins.digital_read_pin(DigitalPin.P3) == 1:
        pins.digital_write_pin(DigitalPin.P3, 0)
        if not (FirstAll):
            if FirsthitRuta == False:
                FirsthitRuta = True
                if FirsthitRudania and (FirsthitNaboris and FirsthitMedoh):
                    Points += 5000 * Multiplier
                    FirstAll = True
                else:
                    Points += 1000 * Multiplier
        elif HitRuta == False:
            HitRuta = True
            if HitRudania and (HitNaboris and HitMedoh):
                Points += 2500 * Multiplier
                HitMedoh = False
                HitNaboris = False
                HitRudania = False
                HitRuta = False
            else:
                Points += 500 * Multiplier
def HatenoHit():
    global Points, HatenoHitCount, Hateno_Multiplier
    if pins.digital_read_pin(DigitalPin.P9) == 1:
        pins.digital_write_pin(DigitalPin.P9, 0)
        if HatenoHitCount == 0:
            Points += 500 * Multiplier
            HatenoHitCount += 1
        elif HatenoHitCount == 1 and Points >= 360:
            Points += -360
            HatenoHitCount += 1
            Hateno_Multiplier = 1.1
        elif HatenoHitCount == 2 and Points >= 900:
            Points += -900
            HatenoHitCount += 1
            Hateno_Multiplier = 1.2
        elif HatenoHitCount == 3 and Points >= 2400:
            Points += -2400
            HatenoHitCount += 1
            Hateno_Multiplier = 1.3
def FindFairyCost():
    global FairyCost
    if FairyCount == 1:
        FairyCost = 500
    elif FairyCount == 2:
        FairyCost = 1000
    elif FairyCount == 3 or FairyCount == 4:
        FairyCost = 10000
    else:
        FairyCost = 100
CastleTimer = 0
AkkalaMultiplier = 0
SwordCastleMultiplier = 0
SwordHitCount = 0
HatenoHitCount = 0
Hateno_Multiplier = 0
CastleHitStrength = 0
FairyCost = 0
FairyMultiplier = 0
FairyCount = 0
FirstAll = False
HitTabanthaFairy = False
HitKakarikoFairy = False
HitGerudoFairy = False
HitAkkalaFairy = False
FirsthitRuta = False
HitRuta = False
FirsthitRudania = False
HitRudania = False
FirsthitNaboris = False
HitNaboris = False
FirsthitMedoh = False
HitMedoh = False
end = 0
Multiplier = 0
Points = 0
NewPoints2 = 0
y2 = 0
x2 = 0
end = 0
HitMedoh = False
FirsthitMedoh = False
HitNaboris = False
FirsthitNaboris = False
HitRudania = False
FirsthitRudania = False
HitRuta = False
FirsthitRuta = False
HitAkkalaFairy = False
HitGerudoFairy = False
AkkalaTimer = 100
HitKakarikoFairy = False
HitTabanthaFairy = False
FirstAll = False
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

def on_forever():
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
    print(Points)
    print("x" + str(Multiplier))
basic.forever(on_forever)
