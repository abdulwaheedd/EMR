
namespace EMR.Register.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Register"), TableName("[dbo].[PatAttendants]")]
    [DisplayName("Attendants"), InstanceName("Attendant")]
    [ReadPermission(PermissionKeys.PatAttendants.View)]
    [ModifyPermission(PermissionKeys.PatAttendants.Update)]
    [InsertPermission(PermissionKeys.PatAttendants.Insert)]
    [DeletePermission(PermissionKeys.PatAttendants.Delete)]
    public sealed class PatAttendantsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? AttendantId
        {
            get { return Fields.AttendantId[this]; }
            set { Fields.AttendantId[this] = value; }
        }

        [DisplayName("Visit Id"), NotNull]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Attendant Name"),NotNull, Size(100), QuickSearch]
        public String AttendantName
        {
            get { return Fields.AttendantName[this]; }
            set { Fields.AttendantName[this] = value; }
        }

        [DisplayName("Father Name"), Size(100)]
        public String FatherName
        {
            get { return Fields.FatherName[this]; }
            set { Fields.FatherName[this] = value; }
        }

        [DisplayName("Gender"),NotNull, Column("GenderId"), ForeignKey("[dbo].[TblGender]", "GenderId"), LeftJoin("jGender")]
        public Int32? GenderId
        {
            get { return Fields.GenderId[this]; }
            set { Fields.GenderId[this] = value; }
        }

        [DisplayName("Phone"),NotNull, Size(255)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Attendant Relation"),NotNull, Column("RelationType"), ForeignKey("[dbo].[TblRelation]", "RelationId"), LeftJoin("jRelation")]
        public Int32? RelationType
        {
            get { return Fields.RelationType[this]; }
            set { Fields.RelationType[this] = value; }
        }

        [DisplayName("Address"), Size(255)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Updated")]
        public DateTime? Updated
        {
            get { return Fields.Updated[this]; }
            set { Fields.Updated[this] = value; }
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Gender"),Expression("jGender.[GenderEng]")]
        public String GenderName
        {
            get { return Fields.GenderName[this]; }
            set { Fields.GenderName[this] = value; }
        }
        
        [DisplayName("Attendant Relation"),Expression("jRelation.[RelationNameEng]")]
        public String RelationName
        {
            get { return Fields.RelationName[this]; }
            set { Fields.RelationName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AttendantId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AttendantName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatAttendantsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field AttendantId;
            public Int64Field VisitId;
            public StringField AttendantName;
            public StringField FatherName;
            public Int32Field GenderId;
            public StringField Phone;
            public Int32Field RelationType;
            public StringField Address;
            public DateTimeField Updated;
            public Int32Field UserId;

            public StringField GenderName;
            public StringField RelationName;
        }
    }
}
