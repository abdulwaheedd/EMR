using Serenity.Data;

namespace Administration
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}