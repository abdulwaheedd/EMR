
namespace EMR.LabTest.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("LabTest"), TableName("[dbo].[LabPatients]")]
    [DisplayName("Lab Patients"), InstanceName("Lab Patients")]
    [ReadPermission(PermissionKeys.LabPatients.View)]
    [ModifyPermission(PermissionKeys.LabPatients.Update)]
    [InsertPermission(PermissionKeys.LabPatients.Insert)]
    [DeletePermission(PermissionKeys.LabPatients.Delete)]
    public sealed class LabPatientsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Mrid"), Column("MRID"), Identity]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"), Column("MRN"), Size(100), NotNull, QuickSearch]
        public String Mrn
        {
            get { return Fields.Mrn[this]; }
            set { Fields.Mrn[this] = value; }
        }

        [DisplayName("First Name"), Size(50), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(50)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Father Name"), Size(50)]
        public String FatherName
        {
            get { return Fields.FatherName[this]; }
            set { Fields.FatherName[this] = value; }
        }

        [DisplayName("Gender"), NotNull, Column("GenderId"), ForeignKey("[dbo].[TblGender]", "GenderId"), LeftJoin("jGender")]
        public Int32? GenderId
        {
            get { return Fields.GenderId[this]; }
            set { Fields.GenderId[this] = value; }
        }

        [DisplayName("Date Of Birth")]
        public DateTime? DateOfBirth
        {
            get { return Fields.DateOfBirth[this]; }
            set { Fields.DateOfBirth[this] = value; }
        }

        [DisplayName("Age In Year")]
        public Int32? AgeInYear
        {
            get { return Fields.AgeInYear[this]; }
            set { Fields.AgeInYear[this] = value; }
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
        [DisplayName("Ethnicity"), NotNull, Column("EthnicityId"), ForeignKey("[dbo].[LkpEthnicity]", "EthnicityId"), LeftJoin("jEthnicity")]
        public Int32? EthnicityId
        {
            get { return Fields.EthnicityId[this]; }
            set { Fields.EthnicityId[this] = value; }
        }


        [DisplayName("Ethnicity"), Expression("jEthnicity.[EthnicityName]"), QuickSearch]
        public String EthnicityName
        {
            get { return Fields.EthnicityName[this]; }
            set { Fields.EthnicityName[this] = value; }
        }

        [DisplayName("Gender"), Expression("jGender.[GenderEng]"), QuickSearch]
        public String GenderName
        {
            get { return Fields.GenderName[this]; }
            set { Fields.GenderName[this] = value; }
        }

        [DisplayName("Send To")]
        public Int32? RefertoDoctor
        {
            get { return Fields.RefertoDoctor[this]; }
            set { Fields.RefertoDoctor[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Mrid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Mrn; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LabPatientsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Mrid;
            public StringField Mrn;
            public StringField FirstName;
            public StringField LastName;
            public StringField FatherName;
            public Int32Field GenderId;
            public DateTimeField DateOfBirth;
            public Int32Field AgeInYear;
            public Int32Field UserId;
            public DateTimeField Updated;
            public Int32Field EthnicityId;
            public Int32Field RefertoDoctor;

            public StringField EthnicityName;
            public StringField GenderName;
        }
    }
}
