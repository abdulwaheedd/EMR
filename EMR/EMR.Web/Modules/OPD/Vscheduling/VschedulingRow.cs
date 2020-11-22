
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("OPD"), TableName("[dbo].[Vscheduling]")]
    [DisplayName("Cycle Plans"), InstanceName("Plan")]
    [ReadPermission(PermissionKeys.Vscheduling.View)]
    [ModifyPermission(PermissionKeys.Vscheduling.Update)]
    [InsertPermission(PermissionKeys.Vscheduling.Insert)]
    [DeletePermission(PermissionKeys.Vscheduling.Delete)]
    public sealed class VschedulingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Schedule Id"), Identity]
        public Int64? ScheduleId
        {
            get { return Fields.ScheduleId[this]; }
            set { Fields.ScheduleId[this] = value; }
        }

        [DisplayName("Visit Id"), NotNull]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Cycle"), NotNull, ForeignKey("[dbo].[lkpCycles]", "CycleId"), LeftJoin("jCycle"), TextualField("CycleCyclename")]
        public Int32? CycleId
        {
            get { return Fields.CycleId[this]; }
            set { Fields.CycleId[this] = value; }
        }

        [DisplayName("Plan Date(Miladi)"), NotNull]
        public DateTime? PlanDate
        {
            get { return Fields.PlanDate[this]; }
            set { Fields.PlanDate[this] = value; }
        }

        [DisplayName("Plan Date(Shamsi)"), Size(50), NotNull, QuickSearch]
        public String SPlanDate
        {
            get { return Fields.SPlanDate[this]; }
            set { Fields.SPlanDate[this] = value; }
        }
        [DisplayName("Cycle"), Expression("jCycle.[Cyclename]")]
        public String CycleCyclename
        {
            get { return Fields.CycleCyclename[this]; }
            set { Fields.CycleCyclename[this] = value; }
        }

        [DisplayName("Comment"), Size(200)]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
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
            get { return Fields.ScheduleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SPlanDate; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VschedulingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ScheduleId;
            public Int64Field VisitId;
            public Int32Field CycleId;
            public DateTimeField PlanDate;
            public StringField SPlanDate;
            public StringField Comment;
            public Int32Field UserId;
            public DateTimeField Updated;

            public StringField CycleCyclename;
        }
    }
}
