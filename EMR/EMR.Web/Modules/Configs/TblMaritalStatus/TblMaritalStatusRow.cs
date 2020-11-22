
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblMaritalStatus]")]
    [DisplayName("Marital status"), InstanceName("Status")]
    [ReadPermission(PermissionKeys.TblMaritalStatus.View)]
    [ModifyPermission(PermissionKeys.TblMaritalStatus.Update)]
    [InsertPermission(PermissionKeys.TblMaritalStatus.Insert)]
    [DeletePermission(PermissionKeys.TblMaritalStatus.Delete)]
    [LookupScript("Configs.TblMaritalStatus")]
    public sealed class TblMaritalStatusRow : Row, IIdRow, INameRow
    {

        [DisplayName("Mari Id"), Identity]
        public Int32? MariId
        {
            get { return Fields.MariId[this]; }
            set { Fields.MariId[this] = value; }
        }

        [DisplayName("Status Dari"), Size(50), QuickSearch]
        public String PatMaritalStatusDari
        {
            get { return Fields.PatMaritalStatusDari[this]; }
            set { Fields.PatMaritalStatusDari[this] = value; }
        }

        [DisplayName("Status Eng"), Size(50), NotNull]
        public String PatMaritalStatusEng
        {
            get { return Fields.PatMaritalStatusEng[this]; }
            set { Fields.PatMaritalStatusEng[this] = value; }
        }
        
        [DisplayName("Marital status"), Expression("t0.[PatMaritalStatusEng]+' - '+t0.[PatMaritalStatusDari]")]
        public String MaritalStatus
        {
            get { return Fields.MaritalStatus[this]; }
            set { Fields.MaritalStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MariId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MaritalStatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblMaritalStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field MariId;

            public StringField PatMaritalStatusDari;

            public StringField PatMaritalStatusEng;
            public StringField MaritalStatus;

		}
    }
}
