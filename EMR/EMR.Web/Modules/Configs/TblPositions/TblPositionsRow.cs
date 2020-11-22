
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblPositions]")]
    [DisplayName("Positions"), InstanceName("Position")]
    [ReadPermission(PermissionKeys.TblPositions.View)]
    [ModifyPermission(PermissionKeys.TblPositions.Update)]
    [InsertPermission(PermissionKeys.TblPositions.Insert)]
    [DeletePermission(PermissionKeys.TblPositions.Delete)]
    public sealed class TblPositionsRow : Row, IIdRow, INameRow
    {

        [DisplayName("Position Id"), Column("posID"), Identity]
        public Int32? PosId
        {
            get { return Fields.PosId[this]; }
            set { Fields.PosId[this] = value; }
        }

        [DisplayName("Emp Id"), Column("empID"), Size(255), NotNull, QuickSearch]
        public String EmpId
        {
            get { return Fields.EmpId[this]; }
            set { Fields.EmpId[this] = value; }
        }

        [DisplayName("Dept Id"), Column("deptID"), NotNull]
        public Int32? DeptId
        {
            get { return Fields.DeptId[this]; }
            set { Fields.DeptId[this] = value; }
        }

        [DisplayName("Profession Id"), Column("proID"), NotNull]
        public Int32? ProId
        {
            get { return Fields.ProId[this]; }
            set { Fields.ProId[this] = value; }
        }

        [DisplayName("Pos Date")]
        public DateTime? PosDate
        {
            get { return Fields.PosDate[this]; }
            set { Fields.PosDate[this] = value; }
        }

        [DisplayName("Pos Date H"), Size(255)]
        public String PosDateH
        {
            get { return Fields.PosDateH[this]; }
            set { Fields.PosDateH[this] = value; }
        }

        [DisplayName("User Name"), Size(255)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Last Updated")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.PosId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmpId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblPositionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field PosId;

            public StringField EmpId;

            public Int32Field DeptId;

            public Int32Field ProId;

            public DateTimeField PosDate;

            public StringField PosDateH;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;


		}
    }
}
