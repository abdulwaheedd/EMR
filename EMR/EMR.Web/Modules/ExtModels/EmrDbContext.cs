using System.Data.Entity;

namespace EMR.Modules.ExtModels
{
    public class EmrDbContext:DbContext
    {
        public EmrDbContext():base("name=default")
        {
            Database.SetInitializer<EmrDbContext>(null);
        }
        public virtual DbSet<HMIRMain> HMIRMain { get; set; }
        public virtual DbSet<ServiceFee> ServiceFees { get; set; }
        public virtual DbSet<Services> Services { get; set; }
        public virtual DbSet<vServiceFee> vServiceFee { get; set; }
        public virtual DbSet<TblPrintDetails> TblPrintDetails { get; set; }
        public virtual DbSet<rptMeddetails> RptMeddetails { get; set; }
        public virtual DbSet<rptVitalsigns> RptVitalsigns { get; set; }
        public virtual DbSet<rptPhysExams> RptPhysExams { get; set; }
        public virtual DbSet<rptHistory> RptHistories { get; set; }
        public virtual  DbSet<rptImagings> RptImagings { get; set; }
        public virtual DbSet<rptLabTests> RptLabTests { get; set; }
        public virtual DbSet<rptRecommendations> RptRecommendations { get; set; }
        public virtual DbSet<rptDiagnosis> RptDiagnoses { get; set; }

        public virtual DbSet<pvtNewInpatientCases> PvtNewInpatientCases { get; set; }
        public virtual DbSet<pvtIndoorPatients> PvtIndoorPatients { get; set; }

        public virtual DbSet<vmProvince> VmProvinces { get; set; }
        public virtual DbSet<vmFacilities> VmFacilities { get; set; }
        public virtual DbSet<vmYears> VmYears { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}