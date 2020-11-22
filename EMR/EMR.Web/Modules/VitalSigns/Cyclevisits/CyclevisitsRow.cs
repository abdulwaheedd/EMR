
namespace EMR.VitalSigns.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("VitalSigns"), TableName("[dbo].[Cyclevisits]")]
    [DisplayName("Cyclevisits"), InstanceName("Cyclevisits")]
    [ReadPermission(PermissionKeys.Cyclevisits.View)]
    [ModifyPermission(PermissionKeys.Cyclevisits.Update)]
    [InsertPermission(PermissionKeys.Cyclevisits.Insert)]
    [DeletePermission(PermissionKeys.Cyclevisits.Delete)]
    public sealed class CyclevisitsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Session Id"), Identity]
        public Int64? SessionId
        {
            get { return Fields.SessionId[this]; }
            set { Fields.SessionId[this] = value; }
        }

        [DisplayName("Schedule"), ForeignKey("[dbo].[Scheduling]", "ScheduleId"), LeftJoin("jSchedule"), TextualField("ScheduleSPlanDate")]
        public Int64? ScheduleId
        {
            get { return Fields.ScheduleId[this]; }
            set { Fields.ScheduleId[this] = value; }
        }

        [DisplayName("Actual Date(Miladi)")]
        public DateTime? ActualDate
        {
            get { return Fields.ActualDate[this]; }
            set { Fields.ActualDate[this] = value; }
        }

        [DisplayName("Actual Date(Shamsi)"), Size(50), QuickSearch]
        public String SActualDate
        {
            get { return Fields.SActualDate[this]; }
            set { Fields.SActualDate[this] = value; }
        }

        //[DisplayName("Visit time")]
        //public DateTime? Visittime
        //{
        //    get { return Fields.Visittime[this]; }
        //    set { Fields.Visittime[this] = value; }
        //}

        [DisplayName("Care Type"), ForeignKey("[dbo].[lkpCaretypes]", "Id"), LeftJoin("jCareType"), TextualField("Caretype")]
        public Int32? CareTypeId
        {
            get { return Fields.CareTypeId[this]; }
            set { Fields.CareTypeId[this] = value; }
        }

        [DisplayName("Schedule Visit Id"), Expression("jSchedule.[VisitId]")]
        public Int64? ScheduleVisitId
        {
            get { return Fields.ScheduleVisitId[this]; }
            set { Fields.ScheduleVisitId[this] = value; }
        }

        [DisplayName("Schedule Cycle Id"), Expression("jSchedule.[CycleId]")]
        public Int32? ScheduleCycleId
        {
            get { return Fields.ScheduleCycleId[this]; }
            set { Fields.ScheduleCycleId[this] = value; }
        }

        [DisplayName("Plan Date(m)"), Expression("jSchedule.[PlanDate]")]
        public DateTime? SchedulePlanDate
        {
            get { return Fields.SchedulePlanDate[this]; }
            set { Fields.SchedulePlanDate[this] = value; }
        }

        [DisplayName("Plan Date(s)"), Expression("jSchedule.[SPlanDate]")]
        public String ScheduleSPlanDate
        {
            get { return Fields.ScheduleSPlanDate[this]; }
            set { Fields.ScheduleSPlanDate[this] = value; }
        }

        [DisplayName("Schedule Comment"), Expression("jSchedule.[Comment]")]
        public String ScheduleComment
        {
            get { return Fields.ScheduleComment[this]; }
            set { Fields.ScheduleComment[this] = value; }
        }

        [DisplayName("Caretype"), Expression("jCareType.[Caretype]")]
        public String Caretype
        {
            get { return Fields.Caretype[this]; }
            set { Fields.Caretype[this] = value; }
        }
        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Updated")]
        public DateTime? Updated
        {
            get { return Fields.Updated[this]; }
            set { Fields.Updated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SessionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SActualDate; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CyclevisitsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field SessionId;
            public Int64Field ScheduleId;
            public DateTimeField ActualDate;
            public StringField SActualDate;
            //public DateTimeField Visittime;
            public Int32Field CareTypeId;
            public Int32Field UserId;
            public DateTimeField Updated;

            public Int64Field ScheduleVisitId;
            public Int32Field ScheduleCycleId;
            public DateTimeField SchedulePlanDate;
            public StringField ScheduleSPlanDate;
            public StringField ScheduleComment;

            public StringField Caretype;
        }
    }
}
