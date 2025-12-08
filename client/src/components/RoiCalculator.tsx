import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, PiggyBank, Clock } from "lucide-react";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState([5]);
  const [hoursPerDay, setHoursPerDay] = useState([4]);
  const [hourlyRate, setHourlyRate] = useState([35]);
  
  const [savings, setSavings] = useState({
    monthly: 0,
    yearly: 0,
    hoursPerMonth: 0,
  });
  
  useEffect(() => {
    const automationRate = 0.7;
    const workingDays = 22;
    
    const totalHoursPerMonth = teamSize[0] * hoursPerDay[0] * workingDays;
    const automatedHours = totalHoursPerMonth * automationRate;
    const monthlySavings = automatedHours * hourlyRate[0];
    const yearlySavings = monthlySavings * 12;
    
    setSavings({
      monthly: Math.round(monthlySavings),
      yearly: Math.round(yearlySavings),
      hoursPerMonth: Math.round(automatedHours),
    });
  }, [teamSize, hoursPerDay, hourlyRate]);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Berechne deine Ersparnis
          </h2>
          <p className="text-lg text-muted-foreground">
            Entdecke, wie viel du mit KI-Automatisierung sparen kannst.
          </p>
        </div>
        
        <Card className="border-2 border-secondary/20">
          <CardHeader className="border-b border-border">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-secondary" />
              ROI-Rechner
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Teamgröße (Support-Mitarbeiter)</label>
                    <span className="text-sm font-semibold bg-muted px-2 py-1 rounded" data-testid="text-team-size">
                      {teamSize[0]} Mitarbeiter
                    </span>
                  </div>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    min={1}
                    max={50}
                    step={1}
                    className="cursor-pointer"
                    data-testid="slider-team-size"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Support-Stunden pro Tag</label>
                    <span className="text-sm font-semibold bg-muted px-2 py-1 rounded" data-testid="text-hours">
                      {hoursPerDay[0]} Stunden
                    </span>
                  </div>
                  <Slider
                    value={hoursPerDay}
                    onValueChange={setHoursPerDay}
                    min={1}
                    max={8}
                    step={1}
                    className="cursor-pointer"
                    data-testid="slider-hours"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Stundensatz (brutto)</label>
                    <span className="text-sm font-semibold bg-muted px-2 py-1 rounded" data-testid="text-rate">
                      {hourlyRate[0]} €/h
                    </span>
                  </div>
                  <Slider
                    value={hourlyRate}
                    onValueChange={setHourlyRate}
                    min={15}
                    max={100}
                    step={5}
                    className="cursor-pointer"
                    data-testid="slider-rate"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Jährliche Ersparnis</p>
                  <p className="text-4xl lg:text-5xl font-bold text-secondary" data-testid="text-yearly-savings">
                    {formatCurrency(savings.yearly)}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-card-border rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <PiggyBank className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-2xl font-bold" data-testid="text-monthly-savings">
                      {formatCurrency(savings.monthly)}
                    </p>
                    <p className="text-xs text-muted-foreground">pro Monat</p>
                  </div>
                  
                  <div className="bg-card border border-card-border rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold" data-testid="text-hours-saved">
                      {savings.hoursPerMonth}h
                    </p>
                    <p className="text-xs text-muted-foreground">Stunden gespart/Monat</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Basierend auf 70% Automatisierungsrate und 22 Arbeitstagen/Monat
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gap-2" data-testid="button-custom-analysis">
                <TrendingUp className="w-4 h-4" />
                Individuelle Analyse anfordern
              </Button>
              <Button variant="outline" data-testid="button-demo-roi">
                Kostenlose Demo starten
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
