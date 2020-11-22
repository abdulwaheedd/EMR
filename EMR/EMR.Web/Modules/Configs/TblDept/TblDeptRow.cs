
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblDept]")]
    [DisplayName("Departments"), InstanceName("Departmentt")]
    [ReadPermission(PermissionKeys.TblDept.View)]
    [ModifyPermission(PermissionKeys.TblDept.Update)]
    [InsertPermission(PermissionKeys.TblDept.Insert)]
    [DeletePermission(PermissionKeys.TblDept.Delete)]
    [LookupScript("Configs.TblDept")]
    public sealed class TblDeptRow : Row, IIdRow, INameRow
    {

        [DisplayName("Dp Id"), Column("dpID"), Identity]
        public Int32? DpId
        {
            get { return Fields.DpId[this]; }
            set { Fields.DpId[this] = value; }
        }

        [DisplayName("Department (English)"), Size(255), NotNull, QuickSearch]
        public String DeptName
        {
            get { return Fields.DeptName[this]; }
            set { Fields.DeptName[this] = value; }
        }

        [DisplayName("Department (Dari)"), Size(255), NotNull]
        public String DeptNameD
        {
            get { return Fields.DeptNameD[this]; }
            set { Fields.DeptNameD[this] = value; }
        }

        [DisplayName("Department (Pashto)"), Size(255)]
        public String DeptNameP
        {
            get { return Fields.DeptNameP[this]; }
            set { Fields.DeptNameP[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.DpId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DeptName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblDeptRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field DpId;

            public StringField DeptName;

            public StringField DeptNameD;

            public StringField DeptNameP;


		}
    }
}
